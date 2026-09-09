import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold mb-2">Adaptive MCAT Trainer</h1>
        <p className="text-neutral-400 mb-10 text-sm">
          Foundation build — item bank, session player, attempts logging, and Elo mastery.
          The adaptive planner (Today screen) comes in a later step.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/session"
            className="px-5 py-3 rounded-lg bg-neutral-100 text-neutral-950 font-medium hover:bg-white"
          >
            Start a session
          </Link>
          <Link
            href="/diagnostics"
            className="px-5 py-3 rounded-lg border border-neutral-800 hover:border-neutral-500"
          >
            View diagnostics
          </Link>
        </div>
      </div>
    </div>
  );
}
