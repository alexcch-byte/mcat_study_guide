import { NextResponse } from "next/server";
import { getScoreProjection } from "@/lib/scoring";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = Number(searchParams.get("userId") ?? 1);
  const projections = await getScoreProjection(userId);
  return NextResponse.json({ projections });
}
