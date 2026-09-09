/**
 * Pacing and stamina model (§3 "Pacing model"). Flags rushed and overdwell
 * behavior per section, and (for full-length sessions only, where item
 * order within a continuous section sitting is meaningful) tracks accuracy
 * decay across position — the stamina signal that drives full-length
 * scheduling.
 */
import { db } from "@/db";
import { attempts, concepts, itemConcepts, items, pacing, passages, sessions, type Section } from "@/db/schema";
import { and, eq, inArray } from "drizzle-orm";

export async function getItemSectionMap(): Promise<Map<number, Section>> {
  const allItems = await db.select({ id: items.id, passageId: items.passageId }).from(items);
  const allPassages = await db.select().from(passages);
  const passageById = new Map(allPassages.map((p) => [p.id, p]));

  const map = new Map<number, Section>();
  const needConceptLookup: number[] = [];
  for (const it of allItems) {
    const passage = it.passageId ? passageById.get(it.passageId) : null;
    if (passage) {
      map.set(it.id, passage.section);
    } else {
      needConceptLookup.push(it.id);
    }
  }

  if (needConceptLookup.length > 0) {
    const rows = await db
      .select({ itemId: itemConcepts.itemId, section: concepts.section })
      .from(itemConcepts)
      .innerJoin(concepts, eq(concepts.id, itemConcepts.conceptId))
      .where(inArray(itemConcepts.itemId, needConceptLookup));
    for (const r of rows) if (!map.has(r.itemId)) map.set(r.itemId, r.section);
  }

  return map;
}

function percentile(sorted: number[], p: number): number {
  if (sorted.length === 0) return 0;
  const idx = Math.min(sorted.length - 1, Math.max(0, Math.floor(p * (sorted.length - 1))));
  return sorted[idx];
}

export async function recomputePacing(userId: number) {
  const sectionMap = await getItemSectionMap();
  const userAttempts = await db.select().from(attempts).where(eq(attempts.userId, userId));

  const bySection = new Map<Section, typeof userAttempts>();
  for (const a of userAttempts) {
    const section = sectionMap.get(a.itemId);
    if (!section) continue;
    const list = bySection.get(section) ?? [];
    list.push(a);
    bySection.set(section, list);
  }

  for (const [section, list] of bySection) {
    const secondsSorted = list.map((a) => a.seconds).sort((a, b) => a - b);
    const p10 = percentile(secondsSorted, 0.1);
    const p90 = percentile(secondsSorted, 0.9);
    const median = percentile(secondsSorted, 0.5);

    const underP10 = list.filter((a) => a.seconds < p10);
    const rushedRate = underP10.length > 0 ? underP10.filter((a) => !a.correct).length / underP10.length : 0;
    const overP90Count = list.filter((a) => a.seconds > p90).length;
    const overdwellRate = list.length > 0 ? overP90Count / list.length : 0;

    const [existing] = await db
      .select()
      .from(pacing)
      .where(and(eq(pacing.userId, userId), eq(pacing.section, section)));

    if (existing) {
      await db
        .update(pacing)
        .set({ medianSec: median, p90Sec: p90, rushedRate, overdwellRate, updatedAt: new Date() })
        .where(eq(pacing.id, existing.id));
    } else {
      await db.insert(pacing).values({ userId, section, medianSec: median, p90Sec: p90, rushedRate, overdwellRate });
    }
  }
}

export interface StaminaPoint {
  position: number;
  accuracy: number;
  n: number;
}

/** Accuracy by position-within-section, aggregated across the user's full-length sessions. */
export async function getStaminaCurve(userId: number, section: Section): Promise<StaminaPoint[]> {
  const sectionMap = await getItemSectionMap();

  const fullLengthSessions = await db
    .select()
    .from(sessions)
    .where(and(eq(sessions.userId, userId), eq(sessions.kind, "full_length")));
  const sessionIds = fullLengthSessions.map((s) => s.id);
  if (sessionIds.length === 0) return [];

  const rows = await db
    .select()
    .from(attempts)
    .where(inArray(attempts.sessionId, sessionIds))
    .orderBy(attempts.sessionId, attempts.createdAt);

  const bySession = new Map<number, typeof rows>();
  for (const a of rows) {
    if (sectionMap.get(a.itemId) !== section || a.sessionId == null) continue;
    const list = bySession.get(a.sessionId) ?? [];
    list.push(a);
    bySession.set(a.sessionId, list);
  }

  const totals = new Map<number, { correct: number; total: number }>();
  for (const list of bySession.values()) {
    list.forEach((a, i) => {
      const position = i + 1;
      const t = totals.get(position) ?? { correct: 0, total: 0 };
      t.total++;
      if (a.correct) t.correct++;
      totals.set(position, t);
    });
  }

  return [...totals.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([position, t]) => ({ position, accuracy: t.correct / t.total, n: t.total }));
}

export async function getPacing(userId: number) {
  return db.select().from(pacing).where(eq(pacing.userId, userId));
}
