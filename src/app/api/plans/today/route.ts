import { NextResponse } from "next/server";
import { getOrGenerateWeekPlan, getPlanBlocks } from "@/lib/planner";
import { db } from "@/db";
import { concepts } from "@/db/schema";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = Number(searchParams.get("userId") ?? 1);

  const plan = await getOrGenerateWeekPlan(userId);
  const blocks = await getPlanBlocks(plan.id);

  const today = new Date().toISOString().slice(0, 10);
  const todaysBlocks = blocks.filter((b) => b.day === today);

  const allConcepts = await db.select().from(concepts);
  const conceptById = new Map(allConcepts.map((c) => [c.id, c]));

  const enriched = todaysBlocks.map((b) => ({
    ...b,
    targetConcepts: b.targetConceptIds.map((id) => conceptById.get(id)).filter(Boolean),
  }));

  return NextResponse.json({ plan, blocks: enriched, allWeekBlockCount: blocks.length });
}
