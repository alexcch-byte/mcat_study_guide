"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

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

const KIND_STYLES: Record<
  string,
  { label: string; text: string; chip: string; bar: string; dot: string }
> = {
  review: {
    label: "Review",
    text: "text-sky-700 dark:text-sky-300",
    chip: "bg-sky-100 ring-1 ring-inset ring-sky-300 dark:bg-sky-500/10 dark:ring-sky-500/25",
    bar: "from-sky-400 to-sky-500",
    dot: "bg-sky-500 dark:bg-sky-400",
  },
  content: {
    label: "Learn",
    text: "text-violet-700 dark:text-violet-300",
    chip: "bg-violet-100 ring-1 ring-inset ring-violet-300 dark:bg-violet-500/10 dark:ring-violet-500/25",
    bar: "from-violet-400 to-violet-500",
    dot: "bg-violet-500 dark:bg-violet-400",
  },
  practice: {
    label: "Practice",
    text: "text-emerald-700 dark:text-emerald-300",
    chip: "bg-emerald-100 ring-1 ring-inset ring-emerald-300 dark:bg-emerald-500/10 dark:ring-emerald-500/25",
    bar: "from-emerald-400 to-emerald-500",
    dot: "bg-emerald-500 dark:bg-emerald-400",
  },
  cars: {
    label: "CARS",
    text: "text-amber-700 dark:text-amber-300",
    chip: "bg-amber-100 ring-1 ring-inset ring-amber-300 dark:bg-amber-500/10 dark:ring-amber-500/25",
    bar: "from-amber-400 to-amber-500",
    dot: "bg-amber-500 dark:bg-amber-400",
  },
  full_length: {
    label: "Full-length",
    text: "text-rose-700 dark:text-rose-300",
    chip: "bg-rose-100 ring-1 ring-inset ring-rose-300 dark:bg-rose-500/10 dark:ring-rose-500/25",
    bar: "from-rose-400 to-rose-500",
    dot: "bg-rose-500 dark:bg-rose-400",
  },
  teaching: {
    label: "Teach",
    text: "text-fuchsia-700 dark:text-fuchsia-300",
    chip: "bg-fuchsia-100 ring-1 ring-inset ring-fuchsia-300 dark:bg-fuchsia-500/10 dark:ring-fuchsia-500/25",
    bar: "from-fuchsia-400 to-fuchsia-500",
    dot: "bg-fuchsia-500 dark:bg-fuchsia-400",
  },
};

const FALLBACK_KIND = {
  label: "Study",
  text: "text-neutral-700 dark:text-neutral-300",
  chip: "bg-neutral-100 ring-1 ring-inset ring-neutral-300 dark:bg-neutral-500/10 dark:ring-neutral-500/25",
  bar: "from-neutral-400 to-neutral-500",
  dot: "bg-neutral-500 dark:bg-neutral-400",
};

function kindStyle(kind: string) {
  return KIND_STYLES[kind] ?? { ...FALLBACK_KIND, label: kind };
}

export default function TodayPage() {
  const [blocks, setBlocks] = useState<PlanBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [weekBlockCount, setWeekBlockCount] = useState(0);
  const [greeting, setGreeting] = useState("Welcome back");

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
    const hour = new Date().getHours();
    setGreeting(hour < 5 ? "Still up?" : hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening");
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
  const remaining = blocks.filter((b) => b.status !== "done");
  const pct = totalMinutes > 0 ? Math.round((doneMinutes / totalMinutes) * 100) : 0;
  const allDone = totalMinutes > 0 && doneMinutes >= totalMinutes;

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* decorative background glow — purely visual, doesn't affect the session player */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-300/30 dark:bg-violet-600/20 blur-[100px]" />
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-sky-300/25 dark:bg-sky-500/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-300/20 dark:bg-emerald-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-1">
            <div>
              <p className="text-sm font-medium text-violet-600 dark:text-violet-300">{greeting}</p>
              <h1 className="text-3xl font-bold tracking-tight bg-linear-to-r from-neutral-900 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent">
                Today&apos;s plan
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Link
                href="/diagnostics"
                className="px-3 py-1.5 rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 text-neutral-600 hover:text-neutral-900 hover:ring-neutral-300 dark:bg-neutral-900 dark:ring-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:hover:ring-neutral-700 transition-colors"
              >
                Diagnostics
              </Link>
              <Link
                href="/score"
                className="px-3 py-1.5 rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 text-neutral-600 hover:text-neutral-900 hover:ring-neutral-300 dark:bg-neutral-900 dark:ring-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:hover:ring-neutral-700 transition-colors"
              >
                Score
              </Link>
              <Link
                href="/session"
                className="px-3 py-1.5 rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 text-neutral-600 hover:text-neutral-900 hover:ring-neutral-300 dark:bg-neutral-900 dark:ring-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:hover:ring-neutral-700 transition-colors"
              >
                Free practice
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {totalMinutes > 0 && (
            <div className="mt-6 mb-8 p-4 rounded-2xl bg-neutral-50 ring-1 ring-inset ring-neutral-200 dark:bg-neutral-900/60 dark:ring-neutral-800">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {allDone ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">All done for today 🎉</span>
                  ) : (
                    <>
                      <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{doneMinutes}</span> /{" "}
                      {totalMinutes} min done
                    </>
                  )}
                </span>
                <span className="text-xs font-medium text-neutral-500">{pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-linear-to-r from-violet-500 via-sky-400 to-emerald-400 transition-[width] duration-500 ease-out"
                  style={{ width: `${Math.min(100, pct)}%` }}
                />
              </div>
            </div>
          )}

          {loading ? (
            <div className="space-y-3 animate-pulse">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-20 rounded-2xl bg-neutral-100 ring-1 ring-inset ring-neutral-200 dark:bg-neutral-900/60 dark:ring-neutral-800"
                />
              ))}
            </div>
          ) : blocks.length === 0 ? (
            <div className="text-center py-20 px-6 rounded-2xl bg-neutral-50 ring-1 ring-inset ring-neutral-200 dark:bg-neutral-900/40 dark:ring-neutral-800">
              <div className="text-4xl mb-4">{weekBlockCount === 0 ? "✨" : "🌤️"}</div>
              <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                {weekBlockCount === 0 ? "Nothing scheduled yet" : "Nothing due today"}
              </p>
              <p className="text-sm text-neutral-500 mb-6">
                {weekBlockCount === 0
                  ? "Generate a plan and I'll line up exactly what to study today."
                  : "This week's plan is already set — you're caught up for today."}
              </p>
              {weekBlockCount === 0 && (
                <button
                  onClick={regenerate}
                  className="px-6 py-2.5 rounded-full bg-linear-to-r from-violet-500 to-sky-500 text-white font-medium shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Generate this week&apos;s plan
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {allDone && (
                <div className="p-4 rounded-2xl bg-emerald-50 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-500/10 dark:ring-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-sm font-medium text-center">
                  Nice work — every block for today is complete. 🎉
                </div>
              )}
              {(allDone ? blocks : remaining).map((block) => {
                const style = kindStyle(block.kind);
                const isDone = block.status === "done";
                return (
                  <div
                    key={block.id}
                    className={`group relative overflow-hidden rounded-2xl ring-1 ring-inset transition-all ${
                      isDone
                        ? "bg-neutral-100/60 ring-neutral-200 opacity-60 dark:bg-neutral-900/30 dark:ring-neutral-900"
                        : "bg-white ring-neutral-200 hover:ring-neutral-300 hover:shadow-md dark:bg-neutral-900/70 dark:ring-neutral-800 dark:hover:ring-neutral-700 dark:hover:bg-neutral-900 hover:-translate-y-0.5 dark:hover:shadow-lg dark:hover:shadow-black/20"
                    }`}
                  >
                    <div className={`absolute left-0 top-0 h-full w-1 bg-linear-to-b ${style.bar}`} />
                    <div className="flex items-start justify-between gap-4 p-4 pl-5">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${style.chip} ${style.text}`}
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                            {style.label}
                          </span>
                          <span className="text-xs text-neutral-500 dark:text-neutral-600">{block.minutes} min</span>
                          {isDone && (
                            <span className="text-xs text-emerald-600 dark:text-emerald-500 font-medium">✓ done</span>
                          )}
                        </div>
                        {block.rationaleText && (
                          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                            {block.rationaleText}
                          </p>
                        )}
                      </div>
                      {!isDone && (
                        <Link
                          href={`/session?block=${block.id}`}
                          className="shrink-0 px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-black dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white text-sm font-semibold hover:scale-105 active:scale-95 transition-all"
                        >
                          Start
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-10 text-center">
            <button
              onClick={regenerate}
              className="text-xs text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 dark:hover:text-neutral-300 underline underline-offset-4 transition-colors"
            >
              Regenerate this week&apos;s plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
