import { NextResponse } from "next/server";
import { db } from "@/db";
import { attempts, itemConcepts, itemOptions, items } from "@/db/schema";
import { eq } from "drizzle-orm";
import { recordEloUpdate } from "@/lib/mastery";
import { z } from "zod";

// Fixed error-tag taxonomy, §3 "Error tagging" — never free text.
const errorTagSchema = z.enum([
  "no_content_knowledge",
  "misread_question",
  "missed_passage_detail",
  "arithmetic_or_unit_error",
  "eliminated_correct_answer",
  "ran_out_of_time",
]);

const bodySchema = z.object({
  userId: z.number().int(),
  itemId: z.number().int(),
  sessionId: z.number().int().nullable().optional(),
  chosenOptionId: z.number().int().nullable(),
  confidence: z.number().int().min(1).max(4), // 1=Guessed .. 4=Certain
  seconds: z.number().positive(),
  flagged: z.boolean().default(false),
  eliminatedOptionIds: z.array(z.number().int()).default([]),
  errorTag: errorTagSchema.nullable().optional(),
});

export async function POST(request: Request) {
  const body = bodySchema.parse(await request.json());

  const itemOptionRows = await db
    .select()
    .from(itemOptions)
    .where(eq(itemOptions.itemId, body.itemId));

  const correctOption = itemOptionRows.find((o) => o.isCorrect);
  const correct = body.chosenOptionId != null && body.chosenOptionId === correctOption?.id;

  const [item] = await db.select().from(items).where(eq(items.id, body.itemId));
  if (!item) {
    return NextResponse.json({ error: "item not found" }, { status: 404 });
  }

  // attempts is the append-only fact table (§8) — insert once, never mutate.
  const [attempt] = await db
    .insert(attempts)
    .values({
      userId: body.userId,
      itemId: body.itemId,
      sessionId: body.sessionId ?? null,
      chosenOptionId: body.chosenOptionId,
      correct,
      confidence: body.confidence,
      seconds: body.seconds,
      flagged: body.flagged,
      eliminatedOptionIds: body.eliminatedOptionIds,
      errorTag: body.errorTag ?? null,
    })
    .returning();

  const conceptWeights = await db
    .select({ conceptId: itemConcepts.conceptId, weight: itemConcepts.weight })
    .from(itemConcepts)
    .where(eq(itemConcepts.itemId, body.itemId));

  if (conceptWeights.length > 0) {
    await recordEloUpdate({
      userId: body.userId,
      itemId: body.itemId,
      correct,
      conceptWeights,
    });
  }

  return NextResponse.json({
    attempt,
    correct,
    correctOptionId: correctOption?.id ?? null,
    correctReasoning: item.correctReasoning,
    options: itemOptionRows
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
