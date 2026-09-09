import { NextResponse } from "next/server";
import { runTutorTurn } from "@/lib/tutor";
import { z } from "zod";

const bodySchema = z.object({
  itemId: z.number().int(),
  messages: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string() })).default([]),
});

export async function POST(request: Request) {
  const body = bodySchema.parse(await request.json());

  try {
    const reply = await runTutorTurn(body.itemId, body.messages);
    return NextResponse.json({ reply });
  } catch (err) {
    const message = err instanceof Error ? err.message : "tutor request failed";
    return NextResponse.json({ error: message }, { status: 503 });
  }
}
