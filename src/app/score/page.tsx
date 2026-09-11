"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const DEMO_USER_ID = 1;

interface Projection {
  section: string;
  calibrating: boolean;
  itemsLogged: number;
  score?: number;
  low?: number;
  high?: number;
}

const SECTION_LABELS: Record<string, string> = {
  cp: "Chem/Phys",
  cars: "CARS",
  bb: "Bio/Biochem",
  ps: "Psych/Soc",
};

const CALIBRATION_TARGET = 200;

export default function ScorePage() {
  const [projections, setProjections] = useState<Projection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/score-projection?userId=${DEMO_USER_ID}`)
      .then((r) => r.json())
      .then((d) => {
        setProjections(d.projections);
        setLoading(false);
      });
  }, []);

  const total = projections.reduce((s, p) => s + (p.score ?? 0), 0);
  const allCalibrated = projections.length > 0 && projections.every((p) => !p.calibrating);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold">Score projection</h1>
          <div className="flex items-center gap-4">
            <Link href="/today" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white underline">
              ← Today
            </Link>
            <ThemeToggle />
          </div>
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-8">
          Estimated only — a range, not a point. Full-length performance is weighted far above
          practice-block performance (§7).
        </p>

        {loading ? (
          <p className="text-neutral-500 dark:text-neutral-500">Loading…</p>
        ) : (
          <>
            <div className="space-y-3 mb-8">
              {projections.map((p) => (
                <div key={p.section} className="p-4 rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{SECTION_LABELS[p.section] ?? p.section}</span>
                    {p.calibrating ? (
                      <span className="text-sm text-neutral-500 dark:text-neutral-500">
                        still calibrating ({p.itemsLogged}/{CALIBRATION_TARGET})
                      </span>
                    ) : (
                      <span className="text-lg font-mono">
                        {p.low}–{p.high}
                      </span>
                    )}
                  </div>
                  {p.calibrating && (
                    <div className="mt-2 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full bg-neutral-400 dark:bg-neutral-500"
                        style={{ width: `${Math.min(100, (p.itemsLogged / CALIBRATION_TARGET) * 100)}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-1">Estimated total</p>
              {allCalibrated ? (
                <p className="text-3xl font-mono">{total}</p>
              ) : (
                <p className="text-sm text-neutral-500 dark:text-neutral-500">Not all sections have calibrated yet.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
