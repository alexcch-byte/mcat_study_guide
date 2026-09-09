"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  CONFIDENCE_LABELS,
  ERROR_TAG_LABELS,
  type CheckResponse,
  type ErrorTag,
  type SessionItem,
} from "@/lib/types";

const DEMO_USER_ID = 1;

type Phase = "loading" | "answering" | "confidence" | "review" | "done" | "empty";

export default function SessionPage() {
  const [items, setItems] = useState<SessionItem[]>([]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");
  const [sessionId, setSessionId] = useState<number | null>(null);

  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [eliminatedIds, setEliminatedIds] = useState<number[]>([]);
  const [flagged, setFlagged] = useState(false);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [reveal, setReveal] = useState<CheckResponse | null>(null);
  const [errorTag, setErrorTag] = useState<ErrorTag | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    async function init() {
      const [sessionRes, itemsRes] = await Promise.all([
        fetch("/api/sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: DEMO_USER_ID, kind: "practice" }),
        }),
        fetch("/api/items"),
      ]);
      const session = await sessionRes.json();
      const loadedItems: SessionItem[] = await itemsRes.json();
      setSessionId(session.id);
      setItems(loadedItems);
      startedAtRef.current = performance.now();
      setPhase(loadedItems.length > 0 ? "answering" : "empty");
    }
    init();
  }, []);

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
    setSubmitting(false);

    if (index + 1 >= items.length) {
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
    resetForNextItem,
  ]);

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
  if (phase === "done") {
    return (
      <CenteredMessage>
        <p className="text-xl mb-4">Session complete — {items.length} items.</p>
        <Link href="/diagnostics" className="underline text-neutral-300 hover:text-white">
          View diagnostics →
        </Link>
      </CenteredMessage>
    );
  }
  if (!currentItem) return null;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 text-sm text-neutral-500 border-b border-neutral-900">
        <span>
          Item {index + 1} of {items.length}
        </span>
        {flagged && <span className="text-amber-400">flagged</span>}
      </div>

      <div className="flex-1 flex justify-center px-6 py-10">
        <div className="w-full max-w-2xl">
          {currentItem.passage && (
            <div className="mb-6 p-4 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm leading-relaxed max-h-72 overflow-y-auto">
              {currentItem.passage.title && (
                <div className="font-semibold text-neutral-200 mb-2">
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
                if (revealedOpt?.isCorrect) cls += " border-emerald-600 bg-emerald-950/40";
                else if (isSelected) cls += " border-red-600 bg-red-950/40";
                else cls += " border-neutral-800";
              } else {
                cls += isSelected
                  ? " border-neutral-100 bg-neutral-900"
                  : " border-neutral-800 hover:border-neutral-600";
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
                    <span className="text-neutral-500 w-5 shrink-0">{i + 1}.</span>
                    <span className="flex-1">{opt.text}</span>
                  </button>
                  {phase === "answering" && (
                    <button
                      type="button"
                      title="Strike out"
                      onClick={() => toggleEliminated(opt.id)}
                      className="text-neutral-600 hover:text-neutral-300 text-xs px-2"
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

          {phase === "review" && reveal && (
            <div className="mt-8 space-y-4">
              <p className={reveal.correct ? "text-emerald-400" : "text-red-400"}>
                {reveal.correct ? "Correct" : "Incorrect"}
              </p>
              {reveal.correctReasoning && (
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {reveal.correctReasoning}
                </p>
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
                          errorTag === tag
                            ? "border-neutral-100 bg-neutral-800"
                            : "border-neutral-800 hover:border-neutral-500"
                        }`}
                      >
                        {ERROR_TAG_LABELS[tag]}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={handleNext}
                disabled={(!reveal.correct && !errorTag) || submitting}
                className="mt-2 px-5 py-2 rounded-lg bg-neutral-100 text-neutral-950 disabled:opacity-30 disabled:cursor-not-allowed"
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center text-center px-6">
      <div>{children}</div>
    </div>
  );
}
