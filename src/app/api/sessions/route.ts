import { NextResponse } from "next/server";
import { db } from "@/db";
import { sessions } from "@/db/schema";
import { z } from "zod";

const bodySchema = z.object({
  userId: z.number().int(),
  kind: z.enum(["practice", "review", "teaching", "full_length"]).default("practice"),
  planBlockId: z.number().int().nullable().optional(),
});

export async function POST(request: Request) {
  const body = bodySchema.parse(await request.json());

  const [session] = await db
    .insert(sessions)
    .values({ userId: body.userId, kind: body.kind, planBlockId: body.planBlockId ?? null })
    .returning();

  return NextResponse.json(session);
}
