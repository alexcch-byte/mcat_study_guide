/**
 * The planning engine (§4). Nightly/on-demand macro loop: turns mastery +
 * FSRS due-ness + the concept DAG into a week of plan_blocks.
 */
import { db } from "@/db";
import {
  attempts,
  concepts,
  conceptEdges,
  itemConcepts,
  mastery,
  plans,
  planBlocks,
  sessions,
  users,
  type PlanBlockKind,
} from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";

export type Phase = "build" | "apply" | "simulate";

const PHASE_MIX: Record<Phase, { content: number; practice: number; fullLengthEveryDays: number | null }> = {
  build: { content: 0.6, practice: 0.4, fullLengthEveryDays: null }, // one diagnostic, handled separately
  apply: { content: 0.25, practice: 0.65, fullLengthEveryDays: 14 },
  simulate: { content: 0.1, practice: 0.55, fullLengthEveryDays: 7 },
};

const CARS_MINUTES_PER_DAY = 40;
const MAX_CATEGORY_SHARE = 0.4; // no content category may exceed 40% of the week
const MIN_BLOCK_MINUTES = 15;
const DAYS = 7;

function clamp(x: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, x));
}

function startOfWeek(date: Date): Date {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay(); // 0=Sun..6=Sat
  const diffToMonday = day === 0 ? -6 : 1 - day;
  d.setUTCDate(d.getUTCDate() + diffToMonday);
  return d;
}

function addDays(date: Date, n: number): Date {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + n);
  return d;
}

function toDateStr(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function getPhase(weeksToExam: number | null): Phase {
  if (weeksToExam == null) return "build";
  if (weeksToExam > 10) return "build";
  if (weeksToExam >= 5) return "apply";
  return "simulate";
}

interface ConceptPriority {
  concept: typeof concepts.$inferSelect;
  priority: number;
  masteryDeficit: number;
  misconceptionFlag: boolean;
}

async function computePriorities(userId: number, now: Date): Promise<ConceptPriority[]> {
  const allConcepts = await db.select().from(concepts);
  const masteryRows = await db.select().from(mastery).where(eq(mastery.userId, userId));
  const masteryByConcept = new Map(masteryRows.map((m) => [m.conceptId, m]));
  const edges = await db.select().from(conceptEdges);
  const unlockCountByPrereq = new Map<number, number>();
  for (const e of edges) {
    unlockCountByPrereq.set(e.prereqId, (unlockCountByPrereq.get(e.prereqId) ?? 0) + e.strength);
  }

  // recent attempts per concept, for the misconception multiplier
  const recentAttempts = await db
    .select({
      conceptId: itemConcepts.conceptId,
      correct: attempts.correct,
      confidence: attempts.confidence,
      createdAt: attempts.createdAt,
    })
    .from(attempts)
    .innerJoin(itemConcepts, eq(itemConcepts.itemId, attempts.itemId))
    .where(eq(attempts.userId, userId))
    .orderBy(desc(attempts.createdAt))
    .limit(500);

  const recentByConcept = new Map<number, typeof recentAttempts>();
  for (const a of recentAttempts) {
    const list = recentByConcept.get(a.conceptId) ?? [];
    if (list.length < 5) list.push(a);
    recentByConcept.set(a.conceptId, list);
  }

  return allConcepts
    .filter((c) => c.section !== "cars") // CARS is handled as a fixed daily block, not priority-ranked
    .map((c) => {
      const m = masteryByConcept.get(c.id);
      const theta = m?.theta ?? 0;
      const masteryDeficit = 1 - 1 / (1 + Math.exp(-theta / 50));
      const misconceptionFlag = (recentByConcept.get(c.id) ?? []).some(
        (a) => !a.correct && a.confidence >= 4,
      );
      const misconceptionMultiplier = misconceptionFlag ? 2.5 : 1;
      const prereqUnlockBonus = 1 + (unlockCountByPrereq.get(c.id) ?? 0);

      let decayUrgency: number;
      if (!m?.nextDue) {
        decayUrgency = 1.3; // never reviewed — treat as moderately urgent, new content
      } else {
        const daysOverdue = (now.getTime() - m.nextDue.getTime()) / 86_400_000;
        decayUrgency = daysOverdue >= 0 ? clamp(1 + daysOverdue / 7, 1, 3) : 0.3;
      }

      const priority =
        (masteryDeficit * c.examWeight * misconceptionMultiplier * prereqUnlockBonus * decayUrgency) /
        Math.max(1, c.estLearnMinutes);

      return { concept: c, priority, masteryDeficit, misconceptionFlag };
    })
    .sort((a, b) => b.priority - a.priority);
}

interface DueReview {
  conceptId: number;
  conceptName: string;
  estMinutes: number;
  nextDue: Date;
}

async function getDueReviews(userId: number, weekEnd: Date): Promise<DueReview[]> {
  const rows = await db
    .select({
      conceptId: mastery.conceptId,
      conceptName: concepts.name,
      estMinutes: concepts.estLearnMinutes,
      nextDue: mastery.nextDue,
    })
    .from(mastery)
    .innerJoin(concepts, eq(concepts.id, mastery.conceptId))
    .where(eq(mastery.userId, userId));

  return rows
    .filter((r) => r.nextDue && r.nextDue <= weekEnd)
    .map((r) => ({ conceptId: r.conceptId, conceptName: r.conceptName, estMinutes: r.estMinutes, nextDue: r.nextDue! }))
    .sort((a, b) => a.nextDue.getTime() - b.nextDue.getTime());
}

async function lastFullLengthDate(userId: number): Promise<Date | null> {
  const [row] = await db
    .select({ startedAt: sessions.startedAt })
    .from(sessions)
    .where(and(eq(sessions.userId, userId), eq(sessions.kind, "full_length")))
    .orderBy(desc(sessions.startedAt))
    .limit(1);
  return row?.startedAt ?? null;
}

interface DraftBlock {
  day: string;
  order: number;
  kind: PlanBlockKind;
  targetConceptIds: number[];
  minutes: number;
  rationaleText: string;
}

export async function generateWeeklyPlan(
  userId: number,
  referenceDate: Date = new Date(),
  options: { forceRegenerate?: boolean } = {},
) {
  const { forceRegenerate = false } = options;
  const [user] = await db.select().from(users).where(eq(users.id, userId));
  if (!user) throw new Error(`user ${userId} not found`);

  const weekStart = startOfWeek(referenceDate);
  const weekEnd = addDays(weekStart, DAYS - 1);
  const weekOfStr = toDateStr(weekStart);

  if (!forceRegenerate) {
    const [existing] = await db
      .select()
      .from(plans)
      .where(and(eq(plans.userId, userId), eq(plans.weekOf, weekOfStr)));
    if (existing) return existing; // this week already has a plan — skip regeneration entirely
  }

  const weeksToExam = user.examDate
    ? (new Date(user.examDate).getTime() - referenceDate.getTime()) / (7 * 86_400_000)
    : null;
  const phase = getPhase(weeksToExam);
  const mix = PHASE_MIX[phase];

  const dailyBudget = user.hoursPerDay * 60;
  const days = Array.from({ length: DAYS }, (_, i) => toDateStr(addDays(weekStart, i)));
  const minutesUsedByDay = new Map<string, number>(days.map((d) => [d, 0]));
  const lastCategoryByDay = new Map<string, string | null>(days.map((d) => [d, null]));
  const draftBlocks: DraftBlock[] = [];
  const orderByDay = new Map<string, number>(days.map((d) => [d, 0]));

  function place(day: string, block: Omit<DraftBlock, "day" | "order">) {
    const order = orderByDay.get(day) ?? 0;
    orderByDay.set(day, order + 1);
    minutesUsedByDay.set(day, (minutesUsedByDay.get(day) ?? 0) + block.minutes);
    draftBlocks.push({ day, order, ...block });
  }

  // 1. Due FSRS reviews first — non-negotiable
  const dueReviews = await getDueReviews(userId, weekEnd);
  for (const review of dueReviews) {
    const day = review.nextDue < weekStart ? days[0] : toDateStr(review.nextDue);
    const targetDay = days.includes(day) ? day : days[0];
    if ((minutesUsedByDay.get(targetDay) ?? 0) >= dailyBudget) continue; // day is full; drops to next week's plan
    place(targetDay, {
      kind: "review",
      targetConceptIds: [review.conceptId],
      minutes: Math.min(10, review.estMinutes),
      rationaleText: `${review.conceptName} — due for spaced review.`,
    });
  }

  // 2. CARS block daily — targets the CARS skill "concepts" (labels only; no content model applies)
  const carsConceptIds = (await db.select().from(concepts).where(eq(concepts.section, "cars"))).map(
    (c) => c.id,
  );
  for (const day of days) {
    if ((minutesUsedByDay.get(day) ?? 0) + CARS_MINUTES_PER_DAY > dailyBudget) continue;
    place(day, {
      kind: "cars",
      targetConceptIds: carsConceptIds,
      minutes: CARS_MINUTES_PER_DAY,
      rationaleText: "Daily CARS — it moves slowest and only responds to volume.",
    });
  }

  // 3. Full-length placement, with the following day reserved for review
  const lastFullLength = await lastFullLengthDate(userId);
  const daysSinceLastFullLength = lastFullLength
    ? (referenceDate.getTime() - lastFullLength.getTime()) / 86_400_000
    : Infinity;

  let shouldScheduleFullLength = false;
  if (phase === "build") {
    shouldScheduleFullLength = lastFullLength === null; // one diagnostic, ever
  } else {
    shouldScheduleFullLength = daysSinceLastFullLength >= (mix.fullLengthEveryDays ?? Infinity);
  }

  if (shouldScheduleFullLength) {
    const flDay = days[5]; // Saturday
    const reviewDay = days[6]; // Sunday, review-only
    place(flDay, {
      kind: "full_length",
      targetConceptIds: [],
      minutes: 6 * 60, // ~ a full test day
      rationaleText: `Full-length simulation — ${phase} phase checkpoint.`,
    });
    minutesUsedByDay.set(flDay, dailyBudget); // day is spoken for
    place(reviewDay, {
      kind: "review",
      targetConceptIds: [],
      minutes: Math.min(dailyBudget, 90),
      rationaleText: "Full-length review — reviewing the test is worth more than taking it.",
    });
  }

  // 4-5. Fill remaining minutes by descending priority, capped per category, interleaved
  const priorities = await computePriorities(userId, referenceDate);
  const totalWeeklyMinutes = dailyBudget * DAYS;
  const categoryFrac = mix.content + mix.practice || 1;
  const contentShare = mix.content / categoryFrac;
  const categoryMinutesUsed = new Map<string, number>();
  let cursor = 0; // round-robins through the priority list so top concepts get spread across the week

  for (const day of days) {
    if (shouldScheduleFullLength && (day === days[5] || day === days[6])) continue;
    let guard = 0;
    while ((minutesUsedByDay.get(day) ?? 0) < dailyBudget && guard < priorities.length * 2) {
      guard++;
      const candidate = priorities[cursor % priorities.length];
      cursor++;
      if (!candidate) break;

      const category = candidate.concept.aamcCategory;
      const categoryCap = totalWeeklyMinutes * MAX_CATEGORY_SHARE;
      if ((categoryMinutesUsed.get(category) ?? 0) >= categoryCap) continue;
      if (lastCategoryByDay.get(day) === category) continue; // interleave: no back-to-back same category

      const remaining = dailyBudget - (minutesUsedByDay.get(day) ?? 0);
      const minutes = Math.min(remaining, Math.max(MIN_BLOCK_MINUTES, candidate.concept.estLearnMinutes));
      if (minutes < MIN_BLOCK_MINUTES) break;

      const isContent = candidate.masteryDeficit > (1 - contentShare);
      const rationale = candidate.misconceptionFlag
        ? `${candidate.concept.name} — you were confident and wrong on this recently. That's a misconception, not a content gap, so it jumps the queue.`
        : `${candidate.concept.name} — highest expected score gain per minute right now.`;

      place(day, {
        kind: isContent ? "content" : "practice",
        targetConceptIds: [candidate.concept.id],
        minutes,
        rationaleText: rationale,
      });
      categoryMinutesUsed.set(category, (categoryMinutesUsed.get(category) ?? 0) + minutes);
      lastCategoryByDay.set(day, category);
    }
  }

  // persist. forceRegenerate explicitly replaces this week's plan; otherwise
  // race safely against a concurrent generator via the unique (user, week)
  // index — if another call already claimed this week, defer to it instead
  // of creating a second plan.
  if (forceRegenerate) {
    const existing = await db
      .select()
      .from(plans)
      .where(and(eq(plans.userId, userId), eq(plans.weekOf, weekOfStr)));
    for (const p of existing) {
      await db.delete(planBlocks).where(eq(planBlocks.planId, p.id));
      await db.delete(plans).where(eq(plans.id, p.id));
    }
  }

  const [inserted] = await db
    .insert(plans)
    .values({ userId, weekOf: weekOfStr, rationale: { phase, weeksToExam } })
    .onConflictDoNothing({ target: [plans.userId, plans.weekOf] })
    .returning();

  if (!inserted) {
    // lost the race to a concurrent generator — its plan stands, ours is discarded
    const [winner] = await db
      .select()
      .from(plans)
      .where(and(eq(plans.userId, userId), eq(plans.weekOf, weekOfStr)));
    return winner;
  }

  if (draftBlocks.length > 0) {
    await db.insert(planBlocks).values(
      draftBlocks.map((b) => ({
        planId: inserted.id,
        day: b.day,
        order: b.order,
        kind: b.kind,
        targetConceptIds: b.targetConceptIds,
        minutes: Math.round(b.minutes),
        rationaleText: b.rationaleText,
      })),
    );
  }

  return inserted;
}

export async function getOrGenerateWeekPlan(userId: number, referenceDate: Date = new Date()) {
  // generateWeeklyPlan already no-ops (and races safely) when this week's
  // plan exists, so this is just a readable alias for that default behavior.
  return generateWeeklyPlan(userId, referenceDate);
}

export async function getPlanBlocks(planId: number) {
  return db.select().from(planBlocks).where(eq(planBlocks.planId, planId)).orderBy(planBlocks.day, planBlocks.order);
}
