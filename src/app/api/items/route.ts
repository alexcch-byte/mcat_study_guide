import { NextResponse } from "next/server";
import { db } from "@/db";
import { items, itemOptions, passages } from "@/db/schema";
import { eq } from "drizzle-orm";

/**
 * Returns the active item bank for a session, in original order.
 * `isCorrect` is deliberately omitted — the client learns the key only
 * after submitting an attempt, from POST /api/attempts.
 */
export async function GET() {
  const rows = await db
    .select({
      id: items.id,
      type: items.type,
      stem: items.stem,
      passageId: items.passageId,
    })
    .from(items)
    .where(eq(items.status, "active"));

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

  const result = rows
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
