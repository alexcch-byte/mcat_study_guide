"use client";

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CONFIDENCE_LABELS,
  ERROR_TAG_LABELS,
  type CheckResponse,
  type ErrorTag,
  type SessionItem,
} from "@/lib/types";
import { TutorChat } from "@/components/TutorChat";

const DEMO_USER_ID = 1;

interface FullLengthSection {
  section: string;
  label: string;
  items: SessionItem[];
  budgetSeconds: number;
  breakAfterMinutes: number;
}

type Phase = "loading" | "empty" | "intro" | "section" | "break" | "reviewing" | "complete";

interface Answer {
  optionId: number | null;
  flagged: boolean;
  seconds: number;
}

function formatClock(totalSeconds: number): string {
  const m = Math.floor(Math.max(0, totalSeconds) / 60);
  const s = Math.max(0, totalSeconds) % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function FullLengthPage() {
  return (
    <Suspense fallback={<Centered>Loading full-length…</Centered>}>
      <FullLengthPlayer />
    </Suspense>
  );
}

function FullLengthPlayer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planBlockId = searchParams.get("block") ? Number(searchParams.get("block")) : null;

  const [phase, setPhase] = useState<Phase>("loading");
  const [sections, setSections] = useState<FullLengthSection[]>([]);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, Answer>>(new Map());
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [breakSecondsLeft, setBreakSecondsLeft] = useState(0);
  const [sessionId, setSessionId] = useState<number | null>(null);

  const itemEnteredAtRef = useRef<number>(0);

  useEffect(() => {
    async function init() {
      const [sessionRes, dataRes] = await Promise.all([
        fetch("/api/sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: DEMO_USER_ID, kind: "full_length", planBlockId }),
        }),
        fetch("/api/full-length"),
      ]);
      const session = await sessionRes.json();
      const data = await dataRes.json();
      setSessionId(session.id);
      setSections(data.sections);
      setPhase(data.sections.length > 0 ? "intro" : "empty");
    }
    init();
  }, [planBlockId]);

  const currentSection = sections[sectionIndex];
  const currentItem = currentSection?.items[itemIndex];

  const recordTimeOnCurrentItem = useCallback(() => {
    if (!currentItem) return;
    const elapsed = (performance.now() - itemEnteredAtRef.current) / 1000;
    setAnswers((prev) => {
      const next = new Map(prev);
      const existing = next.get(currentItem.id) ?? { optionId: null, flagged: false, seconds: 0 };
      next.set(currentItem.id, { ...existing, seconds: existing.seconds + elapsed });
      return next;
    });
  }, [currentItem]);

  const beginSection = useCallback((index: number) => {
    setSectionIndex(index);
    setItemIndex(0);
    setSecondsLeft(sections[index]?.budgetSeconds ?? 0);
    itemEnteredAtRef.current = performance.now();
    setPhase("section");
  }, [sections]);

  // countdown timer for the active section
  useEffect(() => {
    if (phase !== "section") return;
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  const advanceAfterSection = useCallback(() => {
    recordTimeOnCurrentItem();
    const isLast = sectionIndex + 1 >= sections.length;
    if (isLast) {
      setPhase("reviewing");
      return;
    }
    const breakMinutes = currentSection?.breakAfterMinutes ?? 0;
    if (breakMinutes > 0) {
      setBreakSecondsLeft(breakMinutes * 60);
      setPhase("break");
    } else {
      beginSection(sectionIndex + 1);
    }
  }, [sectionIndex, sections.length, currentSection, recordTimeOnCurrentItem, beginSection]);

  // section time-out auto-advances
  useEffect(() => {
    if (phase === "section" && secondsLeft === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- timer-driven phase transition
      advanceAfterSection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, secondsLeft]);

  // break countdown
  useEffect(() => {
    if (phase !== "break") return;
    const id = setInterval(() => {
      setBreakSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          beginSection(sectionIndex + 1);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  function selectOption(optionId: number) {
    if (!currentItem) return;
    setAnswers((prev) => {
      const next = new Map(prev);
      const existing = next.get(currentItem.id) ?? { optionId: null, flagged: false, seconds: 0 };
      next.set(currentItem.id, { ...existing, optionId });
      return next;
    });
  }

  function toggleFlag() {
    if (!currentItem) return;
    setAnswers((prev) => {
      const next = new Map(prev);
      const existing = next.get(currentItem.id) ?? { optionId: null, flagged: false, seconds: 0 };
      next.set(currentItem.id, { ...existing, flagged: !existing.flagged });
      return next;
    });
  }

  function goTo(nextIndex: number) {
    if (!currentSection) return;
    recordTimeOnCurrentItem();
    setItemIndex(Math.min(currentSection.items.length - 1, Math.max(0, nextIndex)));
    itemEnteredAtRef.current = performance.now();
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (phase !== "section") return;
      if (e.code === "Space") {
        e.preventDefault();
        toggleFlag();
        return;
      }
      const num = Number(e.key);
      if (!Number.isNaN(num) && num >= 1 && num <= 4 && currentItem?.options[num - 1]) {
        selectOption(currentItem.options[num - 1].id);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, currentItem]);

  // flat review queue built once we enter "reviewing"
  const reviewQueue = useMemo(() => {
    if (phase !== "reviewing" && phase !== "complete") return [];
    const flat: SessionItem[] = [];
    for (const s of sections) flat.push(...s.items);
    return flat;
  }, [phase, sections]);

  if (phase === "loading") return <Centered>Loading full-length…</Centered>;
  if (phase === "empty") return <Centered>No items available for a full-length yet.</Centered>;

  if (phase === "intro") {
    return (
      <Centered>
        <div className="max-w-md text-left">
          <h1 className="text-2xl font-semibold mb-4 text-center">Full-length simulation</h1>
          <p className="text-sm text-neutral-400 mb-6 text-center">
            Real section timing, no pause, no per-item feedback. You&apos;ll review everything
            afterward — reviewing the test is worth more than taking it.
          </p>
          <div className="space-y-2 mb-8">
            {sections.map((s) => (
              <div key={s.section} className="flex justify-between text-sm border-b border-neutral-900 py-2">
                <span className="text-neutral-300">{s.label}</span>
                <span className="text-neutral-500">
                  {s.items.length} items · {formatClock(s.budgetSeconds)}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => beginSection(0)}
            className="w-full px-5 py-3 rounded-lg bg-neutral-100 text-neutral-950 font-medium"
          >
            Begin
          </button>
        </div>
      </Centered>
    );
  }

  if (phase === "break") {
    const isLastBreak = sectionIndex + 1 >= sections.length;
    return (
      <Centered>
        <p className="text-xl mb-2">Break</p>
        <p className="text-4xl font-mono mb-6">{formatClock(breakSecondsLeft)}</p>
        {!isLastBreak && (
          <button
            onClick={() => beginSection(sectionIndex + 1)}
            className="px-5 py-2 rounded-lg border border-neutral-800 hover:border-neutral-500"
          >
            Continue now
          </button>
        )}
      </Centered>
    );
  }

  if (phase === "section" && currentSection && currentItem) {
    const answer = answers.get(currentItem.id);
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
        <div className="flex items-center justify-between px-6 py-3 text-sm border-b border-neutral-900">
          <span className="text-neutral-500">{currentSection.label}</span>
          <span className="font-mono">{formatClock(secondsLeft)}</span>
          <span className="text-neutral-500">
            {itemIndex + 1} / {currentSection.items.length}
            {answer?.flagged && <span className="text-amber-400 ml-2">flagged</span>}
          </span>
        </div>

        <div className="flex-1 flex justify-center px-6 py-10">
          <div className="w-full max-w-2xl">
            {currentItem.passage && (
              <div className="mb-6 p-4 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm leading-relaxed max-h-72 overflow-y-auto">
                {currentItem.passage.title && (
                  <div className="font-semibold text-neutral-200 mb-2">{currentItem.passage.title}</div>
                )}
                {currentItem.passage.body}
              </div>
            )}
            <p className="text-lg mb-6 leading-relaxed">{currentItem.stem}</p>
            <div className="space-y-2">
              {currentItem.options.map((opt, i) => (
                <button
                  key={opt.id}
                  onClick={() => selectOption(opt.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                    answer?.optionId === opt.id
                      ? "border-neutral-100 bg-neutral-900"
                      : "border-neutral-800 hover:border-neutral-600"
                  }`}
                >
                  <span className="text-neutral-500 w-5 inline-block">{i + 1}.</span> {opt.text}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <div className="flex gap-2">
                <button
                  onClick={() => goTo(itemIndex - 1)}
                  disabled={itemIndex === 0}
                  className="px-4 py-2 rounded-lg border border-neutral-800 disabled:opacity-30"
                >
                  Back
                </button>
                <button onClick={toggleFlag} className="px-4 py-2 rounded-lg border border-neutral-800">
                  Flag
                </button>
              </div>
              {itemIndex + 1 < currentSection.items.length ? (
                <button
                  onClick={() => goTo(itemIndex + 1)}
                  className="px-5 py-2 rounded-lg bg-neutral-100 text-neutral-950 font-medium"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={advanceAfterSection}
                  className="px-5 py-2 rounded-lg bg-neutral-100 text-neutral-950 font-medium"
                >
                  End section
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "reviewing" || phase === "complete") {
    return (
      <ReviewPass
        items={reviewQueue}
        answers={answers}
        sessionId={sessionId}
        planBlockId={planBlockId}
        onDone={() => {
          setPhase("complete");
          router.prefetch("/score");
        }}
      />
    );
  }

  return null;
}

function ReviewPass({
  items,
  answers,
  sessionId,
  planBlockId,
  onDone,
}: {
  items: SessionItem[];
  answers: Map<number, Answer>;
  sessionId: number | null;
  planBlockId: number | null;
  onDone: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [reveal, setReveal] = useState<CheckResponse | null>(null);
  const [errorTag, setErrorTag] = useState<ErrorTag | null>(null);
  const [finished, setFinished] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const item = items[index];
  const answer = item ? answers.get(item.id) : undefined;

  async function handleConfidence(level: number) {
    if (!item) return;
    setConfidence(level);
    const res = await fetch("/api/attempts/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId: item.id, chosenOptionId: answer?.optionId ?? null }),
    });
    setReveal(await res.json());
  }

  async function handleNext() {
    if (!item || confidence == null || submitting) return;
    if (!reveal?.correct && !errorTag) return;
    setSubmitting(true);
    await fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: DEMO_USER_ID,
        itemId: item.id,
        sessionId,
        chosenOptionId: answer?.optionId ?? null,
        confidence,
        seconds: Math.max(1, Math.round(answer?.seconds ?? 1)),
        flagged: answer?.flagged ?? false,
        eliminatedOptionIds: [],
        errorTag: reveal?.correct ? null : errorTag,
      }),
    });
    setSubmitting(false);

    if (index + 1 >= items.length) {
      if (planBlockId) {
        await fetch(`/api/plan-blocks/${planBlockId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "done" }),
        });
      }
      setFinished(true);
      onDone();
    } else {
      setIndex((i) => i + 1);
      setConfidence(null);
      setReveal(null);
      setErrorTag(null);
    }
  }

  if (finished) {
    return (
      <Centered>
        <p className="text-xl mb-4">Full-length reviewed — {items.length} items.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/score" className="underline text-neutral-300 hover:text-white">
            Score projection →
          </Link>
          <Link href="/diagnostics" className="underline text-neutral-300 hover:text-white">
            Diagnostics
          </Link>
        </div>
      </Centered>
    );
  }

  if (!item) return null;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <div className="px-6 py-3 text-sm text-neutral-500 border-b border-neutral-900">
        Review {index + 1} of {items.length}
      </div>
      <div className="flex-1 flex justify-center px-6 py-10">
        <div className="w-full max-w-2xl">
          {item.passage && (
            <div className="mb-6 p-4 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm leading-relaxed max-h-72 overflow-y-auto">
              {item.passage.title && <div className="font-semibold text-neutral-200 mb-2">{item.passage.title}</div>}
              {item.passage.body}
            </div>
          )}
          <p className="text-lg mb-6 leading-relaxed">{item.stem}</p>
          <div className="space-y-2">
            {item.options.map((opt, i) => {
              const revealedOpt = reveal?.options.find((o) => o.id === opt.id);
              let cls = "w-full text-left px-4 py-3 rounded-lg border";
              if (reveal) {
                if (revealedOpt?.isCorrect) cls += " border-emerald-600 bg-emerald-950/40";
                else if (answer?.optionId === opt.id) cls += " border-red-600 bg-red-950/40";
                else cls += " border-neutral-800";
              } else {
                cls += answer?.optionId === opt.id ? " border-neutral-100 bg-neutral-900" : " border-neutral-800";
              }
              return (
                <div key={opt.id} className={cls}>
                  <span className="text-neutral-500 w-5 inline-block">{i + 1}.</span> {opt.text}
                </div>
              );
            })}
          </div>

          {!reveal && (
            <div className="mt-8">
              <p className="text-sm text-neutral-400 mb-3">How confident were you?</p>
              <div className="grid grid-cols-4 gap-2">
                {CONFIDENCE_LABELS.map((label, i) => (
                  <button
                    key={label}
                    onClick={() => handleConfidence(i + 1)}
                    className="px-3 py-2 rounded-lg border border-neutral-800 hover:border-neutral-500 text-sm"
                  >
                    {i + 1}. {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {reveal && (
            <div className="mt-8 space-y-4">
              <p className={reveal.correct ? "text-emerald-400" : "text-red-400"}>
                {reveal.correct ? "Correct" : "Incorrect"}
              </p>
              {reveal.correctReasoning && (
                <p className="text-sm text-neutral-400 leading-relaxed">{reveal.correctReasoning}</p>
              )}
              {!reveal.correct && (
                <div>
                  <p className="text-sm text-neutral-400 mb-2">Why did you miss it?</p>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(ERROR_TAG_LABELS) as ErrorTag[]).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setErrorTag(tag)}
                        className={`px-3 py-1.5 rounded-full border text-xs ${
                          errorTag === tag ? "border-neutral-100 bg-neutral-800" : "border-neutral-800 hover:border-neutral-500"
                        }`}
                      >
                        {ERROR_TAG_LABELS[tag]}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {!reveal.correct && <TutorChat itemId={item.id} />}
              <button
                onClick={handleNext}
                disabled={(!reveal.correct && !errorTag) || submitting}
                className="mt-2 px-5 py-2 rounded-lg bg-neutral-100 text-neutral-950 disabled:opacity-30"
              >
                {index + 1 >= items.length ? "Finish" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center text-center px-6">
      <div>{children}</div>
    </div>
  );
}
