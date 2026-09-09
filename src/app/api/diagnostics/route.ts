import { NextResponse } from "next/server";
import { db } from "@/db";
import { attempts, concepts, mastery } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = Number(searchParams.get("userId") ?? 1);

  const allConcepts = await db.select().from(concepts);
  const masteryRows = await db.select().from(mastery).where(eq(mastery.userId, userId));
  const masteryByConceptId = new Map(masteryRows.map((m) => [m.conceptId, m]));

  const conceptHeatmap = allConcepts.map((c) => {
    const m = masteryByConceptId.get(c.id);
    return {
      id: c.id,
      name: c.name,
      section: c.section,
      aamcCategory: c.aamcCategory,
      theta: m?.theta ?? 0,
      sigma: m?.sigma ?? 1,
      attemptCount: m?.attemptCount ?? 0,
    };
  });

  const userAttempts = await db.select().from(attempts).where(eq(attempts.userId, userId));
  const quadrantPoints = userAttempts.map((a) => ({
    confidence: a.confidence,
    correct: a.correct,
    seconds: a.seconds,
    createdAt: a.createdAt,
  }));

  return NextResponse.json({ conceptHeatmap, quadrantPoints });
}
