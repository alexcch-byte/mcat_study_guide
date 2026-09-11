"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { CONFIDENCE_LABELS } from "@/lib/types";
import { ThemeToggle } from "@/components/ThemeToggle";

const DEMO_USER_ID = 1;

interface ConceptHeat {
  id: number;
  name: string;
  section: string;
  aamcCategory: string;
  theta: number;
  sigma: number;
  attemptCount: number;
}

interface QuadrantPoint {
  confidence: number;
  correct: boolean;
  seconds: number;
  createdAt: string;
}

interface PacingRow {
  section: string;
  medianSec: number | null;
  p90Sec: number | null;
  rushedRate: number | null;
  overdwellRate: number | null;
}

interface StaminaPoint {
  position: number;
  accuracy: number;
  n: number;
}

const SECTION_LABELS: Record<string, string> = {
  cp: "Chem/Phys",
  bb: "Bio/Biochem",
  ps: "Psych/Soc",
  cars: "CARS",
};

function thetaColor(theta: number): string {
  // theta roughly ranges -100..+100 for a fresh demo bank; clamp and map to a red->green scale
  const clamped = Math.max(-150, Math.min(150, theta));
  const t = (clamped + 150) / 300; // 0..1
  const hue = t * 120; // 0 = red, 120 = green
  return `hsl(${hue}, 70%, 40%)`;
}

export default function DiagnosticsPage() {
  const [concepts, setConcepts] = useState<ConceptHeat[]>([]);
  const [points, setPoints] = useState<QuadrantPoint[]>([]);
  const [pacingRows, setPacingRows] = useState<PacingRow[]>([]);
  const [stamina, setStamina] = useState<Record<string, StaminaPoint[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`/api/diagnostics?userId=${DEMO_USER_ID}`).then((r) => r.json()),
      fetch(`/api/pacing?userId=${DEMO_USER_ID}`).then((r) => r.json()),
    ]).then(([diag, pacingData]) => {
      setConcepts(diag.conceptHeatmap);
      setPoints(diag.quadrantPoints);
      setPacingRows(pacingData.pacing);
      setStamina(pacingData.stamina);
      setLoading(false);
    });
  }, []);

  const bySection = concepts.reduce<Record<string, ConceptHeat[]>>((acc, c) => {
    (acc[c.section] ??= []).push(c);
    return acc;
  }, {});

  // quadrant counts: rows = correct/incorrect, cols = confidence 1-4
  const quadrant: number[][] = [
    [0, 0, 0, 0], // incorrect
    [0, 0, 0, 0], // correct
  ];
  for (const p of points) {
    quadrant[p.correct ? 1 : 0][p.confidence - 1]++;
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Diagnostics</h1>
          <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <Link href="/score" className="hover:text-neutral-900 dark:hover:text-white underline">
              Score projection
            </Link>
            <Link href="/today" className="hover:text-neutral-900 dark:hover:text-white underline">
              ← Today
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {loading ? (
          <p className="text-neutral-500 dark:text-neutral-500">Loading…</p>
        ) : (
          <>
            <section className="mb-12">
              <h2 className="text-lg font-medium mb-4">Concept mastery</h2>
              {Object.keys(bySection).length === 0 && (
                <p className="text-neutral-500 dark:text-neutral-500 text-sm">No mastery data yet — complete a session first.</p>
              )}
              <div className="space-y-6">
                {Object.entries(bySection).map(([section, list]) => (
                  <div key={section}>
                    <h3 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-500 mb-2">
                      {SECTION_LABELS[section] ?? section}
                    </h3>
                    <div className="space-y-2">
                      {list.map((c) => (
                        <div key={c.id} className="flex items-center gap-3">
                          <span className="w-56 text-sm text-neutral-600 dark:text-neutral-300 truncate">{c.name}</span>
                          <div className="flex-1 h-3 rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                            <div
                              className="h-full"
                              style={{
                                width: `${Math.max(4, Math.min(100, ((c.theta + 150) / 300) * 100))}%`,
                                backgroundColor: thetaColor(c.theta),
                              }}
                            />
                          </div>
                          <span className="w-20 text-xs text-neutral-500 dark:text-neutral-500 text-right">
                            θ {c.theta.toFixed(0)}
                          </span>
                          <span className="w-16 text-xs text-neutral-400 dark:text-neutral-600 text-right">
                            n={c.attemptCount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-2">Confidence × accuracy</h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-4">
                Wrong + Certain is the highest-priority cell — it signals a misconception, not a
                content gap (§3).
              </p>
              <div className="grid grid-cols-5 gap-1 text-center text-sm max-w-xl">
                <div />
                {CONFIDENCE_LABELS.map((label) => (
                  <div key={label} className="text-xs text-neutral-500 dark:text-neutral-500 pb-1">
                    {label}
                  </div>
                ))}
                {(["Incorrect", "Correct"] as const).map((rowLabel, r) => (
                  <Fragment key={rowLabel}>
                    <div className="text-xs text-neutral-500 dark:text-neutral-500 self-center text-right pr-2">
                      {rowLabel}
                    </div>
                    {quadrant[r].map((count, c) => {
                      const isMisconceptionCell = r === 0 && c === 3;
                      return (
                        <div
                          key={`${rowLabel}-${c}`}
                          className={`py-4 rounded-lg border ${
                            isMisconceptionCell && count > 0
                              ? "border-red-400 bg-red-50 dark:border-red-600 dark:bg-red-950/50"
                              : "border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
                          }`}
                        >
                          {count}
                        </div>
                      );
                    })}
                  </Fragment>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-lg font-medium mb-2">Pacing</h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-4">
                Rushed = wrong on the fastest 10% of answers. Overdwell = time spent beyond the
                slowest 10% — usually an unclear stem, not a hard concept (§3).
              </p>
              {pacingRows.length === 0 ? (
                <p className="text-neutral-500 dark:text-neutral-500 text-sm">Not enough attempts yet.</p>
              ) : (
                <div className="grid grid-cols-2 gap-3 max-w-xl">
                  {pacingRows.map((p) => (
                    <div key={p.section} className="p-3 rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
                      <p className="text-sm font-medium mb-1">{SECTION_LABELS[p.section] ?? p.section}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500">
                        median {p.medianSec?.toFixed(0) ?? "–"}s · p90 {p.p90Sec?.toFixed(0) ?? "–"}s
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500">
                        rushed {((p.rushedRate ?? 0) * 100).toFixed(0)}% · overdwell{" "}
                        {((p.overdwellRate ?? 0) * 100).toFixed(0)}%
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="mt-12">
              <h2 className="text-lg font-medium mb-2">Stamina</h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-4">
                Accuracy by question position within full-length sections — the signal that drives
                full-length scheduling (§3).
              </p>
              {Object.values(stamina).every((s) => s.length === 0) ? (
                <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                  No full-length sessions yet — take one at{" "}
                  <Link href="/full-length" className="underline hover:text-neutral-900 dark:hover:text-white">
                    /full-length
                  </Link>
                  .
                </p>
              ) : (
                <div className="space-y-4 max-w-xl">
                  {Object.entries(stamina)
                    .filter(([, curve]) => curve.length > 0)
                    .map(([section, curve]) => (
                      <div key={section}>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{SECTION_LABELS[section] ?? section}</p>
                        <div className="flex items-end gap-0.5 h-16">
                          {curve.map((pt) => (
                            <div
                              key={pt.position}
                              title={`position ${pt.position}: ${(pt.accuracy * 100).toFixed(0)}% (n=${pt.n})`}
                              className="flex-1 bg-neutral-300 dark:bg-neutral-700"
                              style={{ height: `${Math.max(4, pt.accuracy * 100)}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
