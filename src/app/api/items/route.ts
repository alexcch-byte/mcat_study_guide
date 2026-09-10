import { NextResponse } from "next/server";
import { db } from "@/db";
import { items, itemOptions, itemConcepts, concepts, passages } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";
import { composeSessionItems, DEFAULT_SESSION_SIZE } from "@/lib/sessionComposer";

/**
 * Returns a session's item set. `isCorrect` is deliberately omitted — the
 * client learns the key only after submitting an attempt, from POST
 * /api/attempts.
 *
 * With `userId`, items are picked by the micro-loop composer (§4 "Session
 * composition"): ~70% near P(correct)≈0.75 for the target concepts, 20% due
 * for FSRS review, 10% maintenance from already-strong concepts. Without a
 * `userId` (or an empty bank), falls back to the plain concept-filtered
 * listing in id order.
 *
 * `conceptIds=1,2,3` scopes the primary 70% to items tagged to one of those
 * concepts — used to run a session for a single plan block, or a small
 * teaching-check session for a single concept. `count` sets the session
 * size (default 10).
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const conceptIdsParam = searchParams.get("conceptIds");
  const userIdParam = searchParams.get("userId");
  const countParam = searchParams.get("count");

  const targetConceptIds = conceptIdsParam
    ? conceptIdsParam
        .split(",")
        .map((s) => Number(s.trim()))
        .filter((n) => !Number.isNaN(n))
    : undefined;
  const userId = userIdParam != null ? Number(userIdParam) : null;
  const count = countParam ? Math.max(1, Number(countParam)) : DEFAULT_SESSION_SIZE;

  const orderedItemIds =
    userId != null && !Number.isNaN(userId)
      ? await composeSessionItems({ userId, targetConceptIds, size: count })
      : null;

  const rows = await db
    .select({ id: items.id, type: items.type, stem: items.stem, passageId: items.passageId })
    .from(items)
    .where(eq(items.status, "active"));
  const rowById = new Map(rows.map((r) => [r.id, r]));

  let filtered: typeof rows;
  if (orderedItemIds) {
    filtered = orderedItemIds.map((id) => rowById.get(id)).filter((r): r is (typeof rows)[number] => !!r);
  } else if (targetConceptIds) {
    const itemIdRows = await db
      .select({ itemId: itemConcepts.itemId })
      .from(itemConcepts)
      .where(inArray(itemConcepts.conceptId, targetConceptIds));
    const idSet = new Set(itemIdRows.map((r) => r.itemId));
    filtered = rows.filter((item) => idSet.has(item.id)).sort((a, b) => a.id - b.id);
  } else {
    filtered = [...rows].sort((a, b) => a.id - b.id);
  }

  const allOptions = await db
    .select({ id: itemOptions.id, itemId: itemOptions.itemId, position: itemOptions.position, text: itemOptions.text })
    .from(itemOptions);

  const allPassages = await db.select().from(passages);
  const passageById = new Map(allPassages.map((p) => [p.id, p]));

  const conceptRows = await db
    .select({ itemId: itemConcepts.itemId, id: concepts.id, name: concepts.name })
    .from(itemConcepts)
    .innerJoin(concepts, eq(concepts.id, itemConcepts.conceptId));
  const conceptsByItem = new Map<number, { id: number; name: string }[]>();
  for (const r of conceptRows) {
    const list = conceptsByItem.get(r.itemId) ?? [];
    list.push({ id: r.id, name: r.name });
    conceptsByItem.set(r.itemId, list);
  }

  const result = filtered.map((item) => ({
    ...item,
    passage: item.passageId ? passageById.get(item.passageId) ?? null : null,
    options: allOptions.filter((o) => o.itemId === item.id).sort((a, b) => a.position - b.position),
    concepts: conceptsByItem.get(item.id) ?? [],
  }));

  return NextResponse.json(result);
}
