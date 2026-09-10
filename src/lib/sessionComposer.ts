/**
 * Micro-loop session composition (§4 "Session composition (micro loop)").
 * Selects a session's item set: ~70% items targeting P(correct) ≈ 0.75 for
 * the concepts in play (productive difficulty), 20% from concepts due for
 * FSRS review, and 10% from already-strong concepts (maintenance + morale).
 * The three groups are combined and shuffled rather than blocked, since a
 * session should feel mixed, not sorted by purpose.
 */
import { db } from "@/db";
import { items, itemConcepts, mastery } from "@/db/schema";
import { and, eq, inArray } from "drizzle-orm";
import { expectedScore } from "@/lib/mastery";

const TARGET_P_CORRECT = 0.75;
const DUE_REVIEW_FRACTION = 0.2;
const STRONG_FRACTION = 0.1;
const STRONG_MIN_ATTEMPTS = 5;
const STRONG_THETA_FLOOR = 60; // comfortably above the baseline theta=0 on the Elo scale from mastery.ts

export const DEFAULT_SESSION_SIZE = 10;

type ItemRow = typeof items.$inferSelect;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Composes an ordered (shuffled) list of active item ids for a practice session. */
export async function composeSessionItems(params: {
  userId: number;
  targetConceptIds?: number[];
  size?: number;
}): Promise<number[]> {
  const { userId, targetConceptIds, size = DEFAULT_SESSION_SIZE } = params;

  const activeItems = await db.select().from(items).where(eq(items.status, "active"));
  if (activeItems.length === 0) return [];

  const itemConceptRows = await db
    .select()
    .from(itemConcepts)
    .where(
      inArray(
        itemConcepts.itemId,
        activeItems.map((i) => i.id),
      ),
    );
  const conceptWeightsByItem = new Map<number, { conceptId: number; weight: number }[]>();
  for (const r of itemConceptRows) {
    const list = conceptWeightsByItem.get(r.itemId) ?? [];
    list.push({ conceptId: r.conceptId, weight: r.weight });
    conceptWeightsByItem.set(r.itemId, list);
  }

  const involvedConceptIds = [...new Set(itemConceptRows.map((r) => r.conceptId))];
  const masteryRows =
    involvedConceptIds.length > 0
      ? await db
          .select()
          .from(mastery)
          .where(and(eq(mastery.userId, userId), inArray(mastery.conceptId, involvedConceptIds)))
      : [];
  const masteryByConcept = new Map(masteryRows.map((m) => [m.conceptId, m]));

  const now = new Date();
  const dueConceptIds = new Set(
    masteryRows.filter((m) => m.nextDue && m.nextDue <= now).map((m) => m.conceptId),
  );
  const strongConceptIds = new Set(
    masteryRows
      .filter((m) => m.attemptCount >= STRONG_MIN_ATTEMPTS && m.theta >= STRONG_THETA_FLOOR)
      .map((m) => m.conceptId),
  );

  function itemConceptIds(itemId: number): number[] {
    return (conceptWeightsByItem.get(itemId) ?? []).map((w) => w.conceptId);
  }

  /** Weighted-average theta across an item's tagged concepts (weight = item_concepts.weight). */
  function weightedTheta(itemId: number): number {
    const weights = conceptWeightsByItem.get(itemId) ?? [];
    if (weights.length === 0) return 0;
    const totalWeight = weights.reduce((s, w) => s + w.weight, 0) || 1;
    const sum = weights.reduce(
      (s, w) => s + (masteryByConcept.get(w.conceptId)?.theta ?? 0) * w.weight,
      0,
    );
    return sum / totalWeight;
  }

  const targetSet = targetConceptIds && targetConceptIds.length > 0 ? new Set(targetConceptIds) : null;

  function poolFor(conceptSet: Set<number> | null): ItemRow[] {
    if (!conceptSet) return activeItems;
    return activeItems.filter((it) => itemConceptIds(it.id).some((c) => conceptSet.has(c)));
  }

  const chosenIds = new Set<number>();
  const chosen: ItemRow[] = [];

  function takeClosestToTarget(pool: ItemRow[], count: number) {
    if (count <= 0) return;
    const scored = pool
      .filter((it) => !chosenIds.has(it.id))
      .map((it) => ({
        item: it,
        diff: Math.abs(expectedScore(it.difficultyB, weightedTheta(it.id)) - TARGET_P_CORRECT),
      }))
      .sort((a, b) => a.diff - b.diff);
    for (const s of scored.slice(0, count)) {
      chosen.push(s.item);
      chosenIds.add(s.item.id);
    }
  }

  const dueCount = Math.round(size * DUE_REVIEW_FRACTION);
  const strongCount = Math.round(size * STRONG_FRACTION);
  const primaryCount = Math.max(0, size - dueCount - strongCount);

  takeClosestToTarget(poolFor(targetSet), primaryCount);
  if (dueConceptIds.size > 0) takeClosestToTarget(poolFor(dueConceptIds), dueCount);
  if (strongConceptIds.size > 0) takeClosestToTarget(poolFor(strongConceptIds), strongCount);

  // Backfill: early on (no due reviews or strong concepts yet), those pools
  // are empty — pull the shortfall from the target/primary pool first, then
  // from the whole active bank, so a session is never short on that account.
  if (chosen.length < size) takeClosestToTarget(poolFor(targetSet), size - chosen.length);
  if (chosen.length < size) takeClosestToTarget(activeItems, size - chosen.length);

  return shuffle(chosen).map((it) => it.id);
}
