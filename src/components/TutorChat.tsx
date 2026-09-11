"use client";

import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

/** "Teach me this" — the Socratic tutor from the Review screen (§5, §6). */
export function TutorChat({ itemId }: { itemId: number }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendTurn(nextMessages: Message[]) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId, messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "The tutor is unavailable right now.");
        return;
      }
      setMessages([...nextMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setError("The tutor is unavailable right now.");
    } finally {
      setLoading(false);
    }
  }

  function handleOpen() {
    setOpen(true);
    if (messages.length === 0) sendTurn([]);
  }

  function handleSend() {
    if (!input.trim() || loading) return;
    const next: Message[] = [...messages, { role: "user", content: input.trim() }];
    setMessages(next);
    setInput("");
    sendTurn(next);
  }

  if (!open) {
    return (
      <button onClick={handleOpen} className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white underline">
        Teach me this
      </button>
    );
  }

  return (
    <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/60">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">Tutor</p>
        <button onClick={() => setOpen(false)} className="text-xs text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 dark:hover:text-neutral-300">
          close
        </button>
      </div>

      <div className="space-y-3 mb-3 max-h-64 overflow-y-auto">
        {messages.map((m, i) => (
          <p
            key={i}
            className={`text-sm leading-relaxed ${
              m.role === "assistant"
                ? "text-neutral-700 dark:text-neutral-200"
                : "text-neutral-500 text-right dark:text-neutral-400"
            }`}
          >
            {m.content}
          </p>
        ))}
        {loading && <p className="text-sm text-neutral-400 dark:text-neutral-600">…</p>}
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Your answer…"
          disabled={loading}
          className="flex-1 bg-white border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:border-neutral-500 dark:bg-neutral-950 dark:border-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-600"
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="px-3 py-2 rounded-lg bg-neutral-900 text-white text-sm disabled:opacity-30 dark:bg-neutral-100 dark:text-neutral-950"
        >
          Send
        </button>
      </div>
    </div>
  );
}
