"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();
function notify() {
  listeners.forEach((l) => l());
}
function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}
function getIsDark() {
  return document.documentElement.classList.contains("dark");
}
function getIsDarkServer() {
  return false;
}
function getTrue() {
  return true;
}
function getFalseServer() {
  return false;
}

/**
 * Day/night toggle. The actual theme is applied synchronously before paint
 * by the inline script in layout.tsx (to avoid a flash of the wrong theme);
 * this component just reflects and updates that same `dark` class + the
 * `theme` localStorage key it reads. Uses useSyncExternalStore (rather than
 * an effect that calls setState) to pick up the client-only `dark` class
 * without a hydration mismatch.
 */
export function ThemeToggle() {
  const mounted = useSyncExternalStore(subscribe, getTrue, getFalseServer);
  const isDark = useSyncExternalStore(subscribe, getIsDark, getIsDarkServer);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private browsing, etc.) — theme just won't persist
    }
    notify();
  }

  // Render a stable, neutral placeholder until mounted so server/client markup matches.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? (isDark ? "Switch to day mode" : "Switch to night mode") : "Toggle color scheme"}
      title={mounted ? (isDark ? "Switch to day mode" : "Switch to night mode") : "Toggle color scheme"}
      className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 text-neutral-600 hover:text-neutral-900 dark:bg-neutral-900 dark:ring-neutral-800 dark:text-neutral-300 dark:hover:text-white transition-colors"
    >
      {mounted && isDark ? (
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-6a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm12.657 6.657a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM8.464 7.464a1 1 0 0 1-1.414 0l-.707-.707A1 1 0 0 1 7.757 5.343l.707.707a1 1 0 0 1 0 1.414Zm10.193-2.121a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM7.757 18.657a1 1 0 0 1-1.414 0 1 1 0 0 1 0-1.414l.707-.707A1 1 0 1 1 8.464 17.95l-.707.707ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M20.354 15.354A9 9 0 0 1 8.646 3.646a9.003 9.003 0 1 0 11.708 11.708Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}
