/**
 * Elo-style online mastery updates, per design doc §3 "Ability estimation".
 *
 *   expected = 1 / (1 + 10^((b_item - theta_concept)/400))
 *   theta_concept += K_user * (correct - expected) * w_item_concept
 *   b_item        -= K_item * (correct - expected)
 *
 * K_user decays with attempt count (fast early convergence, stable later).
 * A fraction of each update propagates to parent concepts and prerequisites
 * (weighted by edge strength) so the DAG lets sparse data borrow strength.
 */
import { db } from "@/db";
import { concepts, conceptEdges, items, itemSkills, mastery, skillState } from "@/db/schema";
import { and, eq, or } from "drizzle-orm";
import { review, ratingFromAttempt } from "@/lib/fsrs";

const PREREQ_PROPAGATION_FRACTION = 0.3;
const K_ITEM_BASE = 16;
const CALIBRATION_EXPOSURE_THRESHOLD = 30;

function expectedScore(bItem: number, thetaConcept: number): number {
  return 1 / (1 + Math.pow(10, (bItem - thetaConcept) / 400));
}

/** K_user decays from 40 (cold start) toward a floor of 8 as attempts accumulate. */
function kUser(attemptCount: number): number {
  return 8 + 32 / (1 + attemptCount / 10);
}

export async function getOrCreateMastery(userId: number, conceptId: number) {
  const [existing] = await db
    .select()
    .from(mastery)
    .where(and(eq(mastery.userId, userId), eq(mastery.conceptId, conceptId)));
  if (existing) return existing;

  const [created] = await db
    .insert(mastery)
    .values({ userId, conceptId })
    .onConflictDoNothing()
    .returning();
  if (created) return created;

  // lost the insert race — read what the other writer created
  const [row] = await db
    .select()
    .from(mastery)
    .where(and(eq(mastery.userId, userId), eq(mastery.conceptId, conceptId)));
  return row;
}

async function applyThetaUpdate(
  userId: number,
  conceptId: number,
  bItem: number,
  correct: boolean,
  weight: number,
) {
  const m = await getOrCreateMastery(userId, conceptId);
  const expected = expectedScore(bItem, m.theta);
  const delta = kUser(m.attemptCount) * ((correct ? 1 : 0) - expected) * weight;

  await db
    .update(mastery)
    .set({
      theta: m.theta + delta,
      sigma: Math.max(0.3, m.sigma - 0.04),
      attemptCount: m.attemptCount + 1,
      lastSeen: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(mastery.id, m.id));

  return expected;
}

/** Propagate a fraction of the theta delta to parent + prerequisite concepts. */
async function propagate(userId: number, conceptId: number, bItem: number, correct: boolean, weight: number) {
  const [concept] = await db.select().from(concepts).where(eq(concepts.id, conceptId));
  if (!concept) return;

  const upstream: { id: number; strength: number }[] = [];

  if (concept.parentId) {
    upstream.push({ id: concept.parentId, strength: 1 });
  }

  const edges = await db
    .select()
    .from(conceptEdges)
    .where(or(eq(conceptEdges.dependentId, conceptId)));
  for (const edge of edges) {
    upstream.push({ id: edge.prereqId, strength: edge.strength });
  }

  for (const u of upstream) {
    await applyThetaUpdate(userId, u.id, bItem, correct, weight * PREREQ_PROPAGATION_FRACTION * u.strength);
  }
}

export async function recordEloUpdate(params: {
  userId: number;
  itemId: number;
  correct: boolean;
  conceptWeights: { conceptId: number; weight: number }[];
}) {
  const { userId, itemId, correct, conceptWeights } = params;
  const [item] = await db.select().from(items).where(eq(items.id, itemId));
  if (!item) throw new Error(`item ${itemId} not found`);

  let expectedSum = 0;
  for (const { conceptId, weight } of conceptWeights) {
    const expected = await applyThetaUpdate(userId, conceptId, item.difficultyB, correct, weight);
    await propagate(userId, conceptId, item.difficultyB, correct, weight);
    expectedSum += expected * weight;
  }

  const totalWeight = conceptWeights.reduce((s, c) => s + c.weight, 0) || 1;
  const avgExpected = expectedSum / totalWeight;

  const exposureCount = item.exposureCount + 1;
  const kItem = K_ITEM_BASE / (1 + exposureCount / CALIBRATION_EXPOSURE_THRESHOLD);
  const newDifficulty = item.difficultyB - kItem * ((correct ? 1 : 0) - avgExpected);

  await db
    .update(items)
    .set({
      difficultyB: newDifficulty,
      exposureCount,
      status:
        item.status === "uncalibrated" && exposureCount >= CALIBRATION_EXPOSURE_THRESHOLD
          ? "active"
          : item.status,
    })
    .where(eq(items.id, itemId));
}

async function getOrCreateSkillState(userId: number, sirsSkill: number) {
  const [existing] = await db
    .select()
    .from(skillState)
    .where(and(eq(skillState.userId, userId), eq(skillState.sirsSkill, sirsSkill)));
  if (existing) return existing;

  const [created] = await db
    .insert(skillState)
    .values({ userId, sirsSkill })
    .onConflictDoNothing()
    .returning();
  if (created) return created;

  const [row] = await db
    .select()
    .from(skillState)
    .where(and(eq(skillState.userId, userId), eq(skillState.sirsSkill, sirsSkill)));
  return row;
}

/**
 * CARS has no content model (§1.4), so its "mastery" is tracked as a
 * parallel SIRS skill model instead of concept theta. Same Elo mechanics,
 * no propagation, no item-difficulty feedback (that's Elo's job above).
 */
export async function recordSkillStateUpdate(params: { userId: number; itemId: number; correct: boolean }) {
  const { userId, itemId, correct } = params;
  const skillRows = await db.select().from(itemSkills).where(eq(itemSkills.itemId, itemId));
  if (skillRows.length === 0) return;

  const [item] = await db.select().from(items).where(eq(items.id, itemId));
  if (!item) return;

  for (const { sirsSkill } of skillRows) {
    const s = await getOrCreateSkillState(userId, sirsSkill);
    const expected = expectedScore(item.difficultyB, s.theta);
    const delta = kUser(s.attemptCount) * ((correct ? 1 : 0) - expected);
    await db
      .update(skillState)
      .set({
        theta: s.theta + delta,
        sigma: Math.max(0.3, s.sigma - 0.04),
        attemptCount: s.attemptCount + 1,
      })
      .where(eq(skillState.id, s.id));
  }
}

/**
 * FSRS review scheduling (§3 "Retention"), applied only to the concepts an
 * item directly targets — unlike Elo, review due-ness doesn't propagate up
 * the prerequisite DAG (recalling item X says nothing about when Y is due).
 */
export async function recordFsrsUpdate(params: {
  userId: number;
  correct: boolean;
  confidence: number;
  conceptIds: number[];
  now?: Date;
}) {
  const { userId, correct, confidence, conceptIds, now = new Date() } = params;
  const rating = ratingFromAttempt(correct, confidence);

  for (const conceptId of conceptIds) {
    const m = await getOrCreateMastery(userId, conceptId);
    const result = review(
      { stability: m.stability, difficulty: m.difficulty, lastSeen: m.lastSeen },
      rating,
      now,
    );
    await db
      .update(mastery)
      .set({
        stability: result.stability,
        difficulty: result.difficulty,
        nextDue: result.nextDue,
        lastSeen: now,
        updatedAt: now,
      })
      .where(eq(mastery.id, m.id));
  }
}
