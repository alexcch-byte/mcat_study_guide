"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DEMO_USER_ID = 1;

interface Concept {
  id: number;
  name: string;
  section: string;
}

interface PlanBlock {
  id: number;
  day: string;
  order: number;
  kind: string;
  minutes: number;
  status: string;
  rationaleText: string | null;
  targetConcepts: Concept[];
}

const KIND_LABELS: Record<string, string> = {
  review: "Review",
  content: "Learn",
  practice: "Practice",
  cars: "CARS",
  full_length: "Full-length",
  teaching: "Teach",
};

export default function TodayPage() {
  const [blocks, setBlocks] = useState<PlanBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [weekBlockCount, setWeekBlockCount] = useState(0);

  async function load() {
    setLoading(true);
    const res = await fetch(`/api/plans/today?userId=${DEMO_USER_ID}`);
    const data = await res.json();
    setBlocks(data.blocks);
    setWeekBlockCount(data.allWeekBlockCount);
    setLoading(false);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch-on-mount
    load();
  }, []);

  async function regenerate() {
    setLoading(true);
    await fetch("/api/plans/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: DEMO_USER_ID }),
    });
    await load();
  }

  const totalMinutes = blocks.reduce((s, b) => s + b.minutes, 0);
  const doneMinutes = blocks.filter((b) => b.status === "done").reduce((s, b) => s + b.minutes, 0);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold">Today</h1>
          <div className="flex gap-4 text-sm text-neutral-400">
            <Link href="/diagnostics" className="hover:text-white underline">
              Diagnostics
            </Link>
            <Link href="/score" className="hover:text-white underline">
              Score
            </Link>
            <Link href="/session" className="hover:text-white underline">
              Free practice
            </Link>
          </div>
        </div>
        <p className="text-sm text-neutral-500 mb-8">
          {doneMinutes} / {totalMinutes} min done today
          {weekBlockCount === 0 && !loading && " — no plan yet this week"}
        </p>

        {loading ? (
          <p className="text-neutral-500">Loading…</p>
        ) : blocks.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-neutral-400 mb-4">Nothing scheduled for today.</p>
            <button
              onClick={regenerate}
              className="px-5 py-2 rounded-lg bg-neutral-100 text-neutral-950 font-medium"
            >
              Generate this week&apos;s plan
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`p-4 rounded-lg border ${
                  block.status === "done"
                    ? "border-neutral-900 bg-neutral-900/40 opacity-60"
                    : "border-neutral-800 bg-neutral-900"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs uppercase tracking-wide text-neutral-500">
                        {KIND_LABELS[block.kind] ?? block.kind}
                      </span>
                      <span className="text-xs text-neutral-600">{block.minutes} min</span>
                      {block.status === "done" && (
                        <span className="text-xs text-emerald-500">done</span>
                      )}
                    </div>
                    {block.rationaleText && (
                      <p className="text-sm text-neutral-300">{block.rationaleText}</p>
                    )}
                  </div>
                  {block.status !== "done" && (
                    <Link
                      href={`/session?block=${block.id}`}
                      className="shrink-0 px-4 py-2 rounded-lg bg-neutral-100 text-neutral-950 text-sm font-medium hover:bg-white"
                    >
                      Start
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <button onClick={regenerate} className="text-xs text-neutral-600 hover:text-neutral-400 underline">
            Regenerate this week&apos;s plan
          </button>
        </div>
      </div>
    </div>
  );
}
