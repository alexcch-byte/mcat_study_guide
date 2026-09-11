"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
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
import { ThemeToggle } from "@/components/ThemeToggle";

const DEMO_USER_ID = 1;

// §4 "Session composition (micro loop)" stop rule: 5 consecutive misses in
// one concept switches to a teaching module instead of grinding further.
const CONSECUTIVE_MISS_THRESHOLD = 5;
const TEACHING_CHECK_SIZE = 3;

type Phase = "loading" | "answering" | "confidence" | "review" | "done" | "empty" | "teaching";

export default function SessionPage() {
  return (
    <Suspense fallback={<CenteredMessage>Loading session…</CenteredMessage>}>
      <SessionPlayer />
    </Suspense>
  );
}

function SessionPlayer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planBlockId = searchParams.get("block") ? Number(searchParams.get("block")) : null;

  const [items, setItems] = useState<SessionItem[]>([]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");
  const [sessionId, setSessionId] = useState<number | null>(null);
  const [blockRationale, setBlockRationale] = useState<string | null>(null);

  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [eliminatedIds, setEliminatedIds] = useState<number[]>([]);
  const [flagged, setFlagged] = useState(false);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [reveal, setReveal] = useState<CheckResponse | null>(null);
  const [errorTag, setErrorTag] = useState<ErrorTag | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [teachingConcept, setTeachingConcept] = useState<{ id: number; name: string } | null>(null);
  // Rolling log of recent misses (stem + reasoning), recapped on the
  // teaching screen — it's rendered, so it's state rather than a ref.
  const [recentMisses, setRecentMisses] = useState<{ stem: string; correctReasoning: string | null }[]>([]);

  const startedAtRef = useRef<number>(0);
  // Per-concept consecutive-miss streaks for the stop rule — never rendered,
  // just read inside the submit handler, so a ref is fine here.
  const missStreakByConceptRef = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    async function init() {
      let sessionKind = "practice";
      const itemsParams = new URLSearchParams({ userId: String(DEMO_USER_ID) });

      if (planBlockId) {
        const blockRes = await fetch(`/api/plan-blocks/${planBlockId}`);
        if (blockRes.ok) {
          const block = await blockRes.json();
          if (block.kind === "full_length") {
            router.replace(`/full-length?block=${planBlockId}`);
            return;
          }
          setBlockRationale(block.rationaleText ?? null);
          sessionKind = block.kind === "review" ? "review" : "practice";
          if (block.targetConceptIds?.length > 0) {
            itemsParams.set("conceptIds", block.targetConceptIds.join(","));
          }
        }
      }

      const [sessionRes, itemsRes] = await Promise.all([
        fetch("/api/sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: DEMO_USER_ID, kind: sessionKind, planBlockId }),
        }),
        fetch(`/api/items?${itemsParams.toString()}`),
      ]);
      const session = await sessionRes.json();
      const loadedItems: SessionItem[] = await itemsRes.json();
      setSessionId(session.id);
      setItems(loadedItems);
      missStreakByConceptRef.current = new Map();
      setRecentMisses([]);
      startedAtRef.current = performance.now();
      setPhase(loadedItems.length > 0 ? "answering" : "empty");
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planBlockId]);

  const resetForNextItem = useCallback(() => {
    setSelectedOptionId(null);
    setEliminatedIds([]);
    setFlagged(false);
    setConfidence(null);
    setReveal(null);
    setErrorTag(null);
    startedAtRef.current = performance.now();
  }, []);

  const currentItem = items[index];

  const handleSelectOption = useCallback(
    (optionId: number) => {
      if (phase !== "answering") return;
      setSelectedOptionId(optionId);
      setPhase("confidence");
    },
    [phase],
  );

  const handleConfidence = useCallback(
    async (level: number) => {
      if (phase !== "confidence" || !currentItem) return;
      setConfidence(level);
      const res = await fetch("/api/attempts/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId: currentItem.id, chosenOptionId: selectedOptionId }),
      });
      const data: CheckResponse = await res.json();
      setReveal(data);
      setPhase("review");
    },
    [phase, currentItem, selectedOptionId],
  );

  const toggleEliminated = useCallback((optionId: number) => {
    setEliminatedIds((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId],
    );
  }, []);

  const handleNext = useCallback(async () => {
    if (phase !== "review" || !currentItem || confidence == null || submitting) return;
    if (!reveal?.correct && !errorTag) return; // require a tag on misses

    setSubmitting(true);
    const seconds = (performance.now() - startedAtRef.current) / 1000;
    await fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: DEMO_USER_ID,
        itemId: currentItem.id,
        sessionId,
        chosenOptionId: selectedOptionId,
        confidence,
        seconds,
        flagged,
        eliminatedOptionIds: eliminatedIds,
        errorTag: reveal?.correct ? null : errorTag,
      }),
    });

    // Stop rule (§4): 5 consecutive misses in one concept ends the grind and
    // switches to a teaching module for that concept instead.
    const streaks = missStreakByConceptRef.current;
    let triggeredConceptId: number | null = null;
    for (const c of currentItem.concepts) {
      if (reveal?.correct) {
        streaks.set(c.id, 0);
      } else {
        const next = (streaks.get(c.id) ?? 0) + 1;
        streaks.set(c.id, next);
        if (next >= CONSECUTIVE_MISS_THRESHOLD && triggeredConceptId == null) triggeredConceptId = c.id;
      }
    }
    if (!reveal?.correct) {
      setRecentMisses((prev) =>
        [...prev, { stem: currentItem.stem, correctReasoning: reveal?.correctReasoning ?? null }].slice(
          -CONSECUTIVE_MISS_THRESHOLD,
        ),
      );
    }

    setSubmitting(false);

    if (triggeredConceptId != null) {
      const conceptName =
        currentItem.concepts.find((c) => c.id === triggeredConceptId)?.name ?? "this concept";
      streaks.set(triggeredConceptId, 0); // reset so resuming practice later doesn't immediately retrigger
      setTeachingConcept({ id: triggeredConceptId, name: conceptName });
      setPhase("teaching");
      return;
    }

    if (index + 1 >= items.length) {
      if (planBlockId) {
        await fetch(`/api/plan-blocks/${planBlockId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "done" }),
        });
      }
      setPhase("done");
    } else {
      setIndex((i) => i + 1);
      resetForNextItem();
      setPhase("answering");
    }
  }, [
    phase,
    currentItem,
    confidence,
    submitting,
    reveal,
    errorTag,
    sessionId,
    selectedOptionId,
    flagged,
    eliminatedIds,
    index,
    items.length,
    planBlockId,
    resetForNextItem,
  ]);

  // After the concept module (recapped from recent misses), a short 3-item
  // check on just that concept — then the block ends rather than resuming
  // the original grind (§4: "an immediate switch ... rather than grinding").
  const startTeachingCheck = useCallback(async () => {
    if (!teachingConcept) return;
    setPhase("loading");
    const [sessionRes, itemsRes] = await Promise.all([
      fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: DEMO_USER_ID, kind: "teaching", planBlockId }),
      }),
      fetch(
        `/api/items?${new URLSearchParams({
          userId: String(DEMO_USER_ID),
          conceptIds: String(teachingConcept.id),
          count: String(TEACHING_CHECK_SIZE),
        }).toString()}`,
      ),
    ]);
    const session = await sessionRes.json();
    const loadedItems: SessionItem[] = await itemsRes.json();
    setSessionId(session.id);
    setItems(loadedItems);
    setIndex(0);
    setBlockRationale(`Teaching check — ${teachingConcept.name}`);
    setTeachingConcept(null);
    setRecentMisses([]);
    resetForNextItem();
    setPhase(loadedItems.length > 0 ? "answering" : "done");
  }, [teachingConcept, planBlockId, resetForNextItem]);

  // Keyboard-first controls (§6 design notes): 1-4 for answers/confidence, spacebar to flag.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.code === "Space") {
        e.preventDefault();
        if (phase === "answering" || phase === "confidence") setFlagged((f) => !f);
        return;
      }
      const num = Number(e.key);
      if (Number.isNaN(num) || num < 1 || num > 4) return;

      if (phase === "answering" && currentItem?.options[num - 1]) {
        handleSelectOption(currentItem.options[num - 1].id);
      } else if (phase === "confidence") {
        handleConfidence(num);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, currentItem, handleSelectOption, handleConfidence]);

  if (phase === "loading") {
    return <CenteredMessage>Loading session…</CenteredMessage>;
  }
  if (phase === "empty") {
    return <CenteredMessage>No active items in the bank yet.</CenteredMessage>;
  }
  if (phase === "teaching" && teachingConcept) {
    return (
      <CenteredMessage>
        <div className="max-w-xl text-left">
          <p className="text-lg mb-2">
            Let&apos;s stop and teach <span className="font-semibold">{teachingConcept.name}</span> properly.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            Five misses in a row here means more of the same items won&apos;t help. Here&apos;s what tripped you up
            each time:
          </p>
          <ul className="space-y-3 mb-6 text-sm text-neutral-700 dark:text-neutral-300">
            {recentMisses.map((m, i) => (
              <li key={i} className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-3">
                <p className="text-neutral-500 dark:text-neutral-500 mb-1">{m.stem}</p>
                {m.correctReasoning && <p>{m.correctReasoning}</p>}
              </li>
            ))}
          </ul>
          <button
            onClick={startTeachingCheck}
            className="px-5 py-2 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950"
          >
            Start 3-item check
          </button>
        </div>
      </CenteredMessage>
    );
  }
  if (phase === "done") {
    return (
      <CenteredMessage>
        <p className="text-xl mb-4">Session complete — {items.length} items.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/today" className="underline text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
            Back to Today
          </Link>
          <Link
            href="/diagnostics"
            className="underline text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            View diagnostics →
          </Link>
        </div>
      </CenteredMessage>
    );
  }
  if (!currentItem) return null;

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 text-sm text-neutral-500 border-b border-neutral-200 dark:border-neutral-900">
        <span>
          Item {index + 1} of {items.length}
          {blockRationale && <span className="text-neutral-400 dark:text-neutral-600"> — {blockRationale}</span>}
        </span>
        <div className="flex items-center gap-3">
          {flagged && <span className="text-amber-600 dark:text-amber-400">flagged</span>}
          <ThemeToggle />
        </div>
      </div>

      <div className="flex-1 flex justify-center px-6 py-10">
        <div className="w-full max-w-2xl">
          {currentItem.passage && (
            <div className="mb-6 p-4 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 text-sm leading-relaxed max-h-72 overflow-y-auto">
              {currentItem.passage.title && (
                <div className="font-semibold text-neutral-900 dark:text-neutral-200 mb-2">
                  {currentItem.passage.title}
                </div>
              )}
              {currentItem.passage.body}
            </div>
          )}

          <p className="text-lg mb-6 leading-relaxed">{currentItem.stem}</p>

          <div className="space-y-2">
            {currentItem.options.map((opt, i) => {
              const isSelected = selectedOptionId === opt.id;
              const isEliminated = eliminatedIds.includes(opt.id);
              const revealedOpt = reveal?.options.find((o) => o.id === opt.id);
              const showReveal = phase === "review";

              let cls =
                "w-full text-left px-4 py-3 rounded-lg border transition-colors flex gap-3 items-start";
              if (showReveal) {
                if (revealedOpt?.isCorrect) cls += " border-emerald-500 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/40";
                else if (isSelected) cls += " border-red-500 bg-red-50 dark:border-red-600 dark:bg-red-950/40";
                else cls += " border-neutral-200 dark:border-neutral-800";
              } else {
                cls += isSelected
                  ? " border-neutral-900 bg-neutral-100 dark:border-neutral-100 dark:bg-neutral-900"
                  : " border-neutral-200 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600";
              }
              if (isEliminated && !showReveal) cls += " opacity-40 line-through";

              return (
                <div key={opt.id} className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={phase !== "answering"}
                    onClick={() => handleSelectOption(opt.id)}
                    className={cls}
                  >
                    <span className="text-neutral-400 dark:text-neutral-500 w-5 shrink-0">{i + 1}.</span>
                    <span className="flex-1">{opt.text}</span>
                  </button>
                  {phase === "answering" && (
                    <button
                      type="button"
                      title="Strike out"
                      onClick={() => toggleEliminated(opt.id)}
                      className="text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 dark:hover:text-neutral-300 text-xs px-2"
                    >
                      ✕
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {phase === "confidence" && (
            <div className="mt-8">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">How confident were you?</p>
              <div className="grid grid-cols-4 gap-2">
                {CONFIDENCE_LABELS.map((label, i) => (
                  <button
                    key={label}
                    onClick={() => handleConfidence(i + 1)}
                    className="px-3 py-2 rounded-lg border border-neutral-200 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-500 text-sm"
                  >
                    {i + 1}. {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {phase === "review" && reveal && (
            <div className="mt-8 space-y-4">
              <p className={reveal.correct ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}>
                {reveal.correct ? "Correct" : "Incorrect"}
              </p>
              {reveal.correctReasoning && (
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {reveal.correctReasoning}
                </p>
              )}

              {!reveal.correct && (
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Why did you miss it?</p>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(ERROR_TAG_LABELS) as ErrorTag[]).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setErrorTag(tag)}
                        className={`px-3 py-1.5 rounded-full border text-xs ${
                          errorTag === tag
                            ? "border-neutral-900 bg-neutral-100 dark:border-neutral-100 dark:bg-neutral-800"
                            : "border-neutral-200 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-500"
                        }`}
                      >
                        {ERROR_TAG_LABELS[tag]}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!reveal.correct && <TutorChat itemId={currentItem.id} />}

              <button
                onClick={handleNext}
                disabled={(!reveal.correct && !errorTag) || submitting}
                className="mt-2 px-5 py-2 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 disabled:opacity-30 disabled:cursor-not-allowed"
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

function CenteredMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex items-center justify-center text-center px-6">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div>{children}</div>
    </div>
  );
}
