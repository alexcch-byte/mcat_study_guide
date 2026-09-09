import { NextResponse } from "next/server";
import { getPacing, getStaminaCurve, recomputePacing } from "@/lib/pacing";
import type { Section } from "@/db/schema";

const SECTIONS: Section[] = ["cp", "cars", "bb", "ps"];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = Number(searchParams.get("userId") ?? 1);

  await recomputePacing(userId);
  const pacingRows = await getPacing(userId);

  const stamina: Record<string, Awaited<ReturnType<typeof getStaminaCurve>>> = {};
  for (const section of SECTIONS) {
    stamina[section] = await getStaminaCurve(userId, section);
  }

  return NextResponse.json({ pacing: pacingRows, stamina });
}
