/**
 * Score projection (§7). Maps section-level ability to the 118-132 scaled
 * score range via a calibration curve, reported as a range with two
 * guardrails: don't project before ~200 logged items in a section, and
 * weight full-length performance far above practice (untimed accuracy
 * systematically overestimates).
 */
import { db } from "@/db";
import { attempts, concepts, itemConcepts, mastery, sessions, skillState, type Section } from "@/db/schema";
import { and, eq, inArray } from "drizzle-orm";

const CALIBRATION_MIN_ITEMS = 200;
const SCALE_MIN = 118;
const SCALE_MAX = 132;
const SCALE_MID = (SCALE_MIN + SCALE_MAX) / 2;
const SCALE_SPREAD = 60; // theta units mapped across roughly the full scale width

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

function accuracyToTheta(accuracy: number): number {
  const p = Math.min(0.98, Math.max(0.02, accuracy));
  return -SCALE_SPREAD * Math.log(1 / p - 1);
}

function thetaToScaledScore(theta: number): number {
  const t = SCALE_MIN + (SCALE_MAX - SCALE_MIN) * sigmoid(theta / SCALE_SPREAD);
  return Math.round(Math.min(SCALE_MAX, Math.max(SCALE_MIN, t)));
}

export interface SectionProjection {
  section: Section;
  calibrating: boolean;
  itemsLogged: number;
  score?: number;
  low?: number;
  high?: number;
}

async function sectionThetaFromConcepts(userId: number, section: Section) {
  const sectionConcepts = await db.select().from(concepts).where(eq(concepts.section, section));
  const conceptIds = sectionConcepts.map((c) => c.id);
  if (conceptIds.length === 0) return { theta: 0, sigma: 1, attemptCount: 0 };

  const rows = await db
    .select()
    .from(mastery)
    .where(and(eq(mastery.userId, userId), inArray(mastery.conceptId, conceptIds)));

  const attempted = rows.filter((r) => r.attemptCount > 0);
  if (attempted.length === 0) return { theta: 0, sigma: 1, attemptCount: 0 };

  const totalAttempts = attempted.reduce((s, r) => s + r.attemptCount, 0);
  const theta = attempted.reduce((s, r) => s + r.theta * r.attemptCount, 0) / totalAttempts;
  const sigma = attempted.reduce((s, r) => s + r.sigma, 0) / attempted.length;
  return { theta, sigma, attemptCount: totalAttempts };
}

async function sectionThetaFromCars(userId: number) {
  const rows = await db.select().from(skillState).where(eq(skillState.userId, userId));
  const attempted = rows.filter((r) => r.attemptCount > 0);
  if (attempted.length === 0) return { theta: 0, sigma: 1, attemptCount: 0 };

  const totalAttempts = attempted.reduce((s, r) => s + r.attemptCount, 0);
  const theta = attempted.reduce((s, r) => s + r.theta * r.attemptCount, 0) / totalAttempts;
  const sigma = attempted.reduce((s, r) => s + r.sigma, 0) / attempted.length;
  return { theta, sigma, attemptCount: totalAttempts };
}

async function fullLengthAccuracy(userId: number, section: Section): Promise<{ accuracy: number; n: number } | null> {
  const fullLengthSessions = await db
    .select()
    .from(sessions)
    .where(and(eq(sessions.userId, userId), eq(sessions.kind, "full_length")));
  const sessionIds = fullLengthSessions.map((s) => s.id);
  if (sessionIds.length === 0) return null;

  const sectionConcepts = await db.select({ id: concepts.id }).from(concepts).where(eq(concepts.section, section));
  const conceptIds = new Set(sectionConcepts.map((c) => c.id));

  const sectionItemIds = new Set(
    (await db.select().from(itemConcepts).where(inArray(itemConcepts.conceptId, [...conceptIds]))).map(
      (r) => r.itemId,
    ),
  );

  const rows = await db
    .select()
    .from(attempts)
    .where(and(eq(attempts.userId, userId), inArray(attempts.sessionId, sessionIds)));
  const relevant = rows.filter((a) => sectionItemIds.has(a.itemId));
  if (relevant.length === 0) return null;

  return { accuracy: relevant.filter((a) => a.correct).length / relevant.length, n: relevant.length };
}

export async function getScoreProjection(userId: number): Promise<SectionProjection[]> {
  const sections: Section[] = ["cp", "cars", "bb", "ps"];
  const result: SectionProjection[] = [];

  for (const section of sections) {
    const base = section === "cars" ? await sectionThetaFromCars(userId) : await sectionThetaFromConcepts(userId, section);
    const fl = await fullLengthAccuracy(userId, section);

    let theta = base.theta;
    if (fl) {
      // full-length performance is weighted far above practice-block performance
      theta = 0.3 * base.theta + 0.7 * accuracyToTheta(fl.accuracy);
    }

    const itemsLogged = base.attemptCount + (fl?.n ?? 0);
    if (itemsLogged < CALIBRATION_MIN_ITEMS) {
      result.push({ section, calibrating: true, itemsLogged });
      continue;
    }

    const score = thetaToScaledScore(theta);
    const width = Math.round(Math.min(4, Math.max(1, 1 + base.sigma * 3)));
    result.push({
      section,
      calibrating: false,
      itemsLogged,
      score,
      low: Math.max(SCALE_MIN, score - width),
      high: Math.min(SCALE_MAX, score + width),
    });
  }

  return result;
}

export { CALIBRATION_MIN_ITEMS, SCALE_MID };
