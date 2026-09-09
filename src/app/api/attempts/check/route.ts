import { NextResponse } from "next/server";
import { db } from "@/db";
import { itemOptions, items } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const bodySchema = z.object({
  itemId: z.number().int(),
  chosenOptionId: z.number().int().nullable(),
});

/**
 * Read-only answer check — reveals correctness for the Review moment
 * without writing anything. The actual attempt is persisted separately by
 * POST /api/attempts once the student has also tapped confidence and (if
 * wrong) picked an error tag, since `attempts` is append-only (§8) and each
 * question attempt should be exactly one row.
 */
export async function POST(request: Request) {
  const body = bodySchema.parse(await request.json());

  const [item] = await db.select().from(items).where(eq(items.id, body.itemId));
  if (!item) {
    return NextResponse.json({ error: "item not found" }, { status: 404 });
  }

  const options = await db
    .select()
    .from(itemOptions)
    .where(eq(itemOptions.itemId, body.itemId));

  const correctOption = options.find((o) => o.isCorrect);
  const correct = body.chosenOptionId != null && body.chosenOptionId === correctOption?.id;

  return NextResponse.json({
    correct,
    correctOptionId: correctOption?.id ?? null,
    correctReasoning: item.correctReasoning,
    options: options
      .sort((a, b) => a.position - b.position)
      .map((o) => ({
        id: o.id,
        text: o.text,
        isCorrect: o.isCorrect,
        errorType: o.errorType,
        whyAStudentPicksThis: o.whyAStudentPicksThis,
      })),
  });
}
