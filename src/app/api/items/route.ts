import { NextResponse } from "next/server";
import { db } from "@/db";
import { items, itemOptions, itemConcepts, passages } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";

/**
 * Returns the active item bank for a session, in original order.
 * `isCorrect` is deliberately omitted — the client learns the key only
 * after submitting an attempt, from POST /api/attempts.
 *
 * Optional `conceptIds=1,2,3` scopes to items tagged to one of those
 * concepts — used to run a session for a single plan block.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const conceptIdsParam = searchParams.get("conceptIds");

  let itemIdFilter: Set<number> | null = null;
  if (conceptIdsParam) {
    const conceptIds = conceptIdsParam
      .split(",")
      .map((s) => Number(s.trim()))
      .filter((n) => !Number.isNaN(n));
    const rows = await db
      .select({ itemId: itemConcepts.itemId })
      .from(itemConcepts)
      .where(inArray(itemConcepts.conceptId, conceptIds));
    itemIdFilter = new Set(rows.map((r) => r.itemId));
  }

  const rows = await db
    .select({
      id: items.id,
      type: items.type,
      stem: items.stem,
      passageId: items.passageId,
    })
    .from(items)
    .where(eq(items.status, "active"));

  const filtered = itemIdFilter ? rows.filter((item) => itemIdFilter.has(item.id)) : rows;

  const allOptions = await db
    .select({
      id: itemOptions.id,
      itemId: itemOptions.itemId,
      position: itemOptions.position,
      text: itemOptions.text,
    })
    .from(itemOptions);

  const allPassages = await db.select().from(passages);
  const passageById = new Map(allPassages.map((p) => [p.id, p]));

  const result = filtered
    .map((item) => ({
      ...item,
      passage: item.passageId ? passageById.get(item.passageId) ?? null : null,
      options: allOptions
        .filter((o) => o.itemId === item.id)
        .sort((a, b) => a.position - b.position),
    }))
    .sort((a, b) => a.id - b.id);

  return NextResponse.json(result);
}
