import { NextResponse } from "next/server";
import { db } from "@/db";
import { planBlocks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [block] = await db.select().from(planBlocks).where(eq(planBlocks.id, Number(id)));
  if (!block) {
    return NextResponse.json({ error: "block not found" }, { status: 404 });
  }
  return NextResponse.json(block);
}

const bodySchema = z.object({
  status: z.enum(["pending", "done", "skipped", "rescheduled"]).optional(),
  day: z.string().optional(), // YYYY-MM-DD — student drag-to-reschedule (§6 "Plan" screen)
});

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = bodySchema.parse(await request.json());

  const [updated] = await db
    .update(planBlocks)
    .set(body)
    .where(eq(planBlocks.id, Number(id)))
    .returning();

  if (!updated) {
    return NextResponse.json({ error: "block not found" }, { status: 404 });
  }
  return NextResponse.json(updated);
}
