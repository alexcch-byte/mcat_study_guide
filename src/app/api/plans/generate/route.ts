import { NextResponse } from "next/server";
import { generateWeeklyPlan, getPlanBlocks } from "@/lib/planner";
import { z } from "zod";

const bodySchema = z.object({ userId: z.number().int() });

export async function POST(request: Request) {
  const body = bodySchema.parse(await request.json());
  const plan = await generateWeeklyPlan(body.userId, new Date(), { forceRegenerate: true });
  const blocks = await getPlanBlocks(plan.id);
  return NextResponse.json({ plan, blocks });
}
