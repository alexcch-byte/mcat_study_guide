/**
 * FSRS (v4) spaced-repetition scheduler, applied over concepts rather than
 * cards per design doc §3 "Retention". Formulas per the FSRS algorithm spec
 * (open-spaced-repetition/awesome-fsrs wiki, "The Algorithm"), using the
 * published default parameter weights.
 */

// w0..w16
const W = [
  0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61,
];

export const DESIRED_RETENTION = 0.9;

/** 1=Again 2=Hard 3=Good 4=Easy */
export type FsrsRating = 1 | 2 | 3 | 4;

export interface FsrsState {
  stability: number;
  difficulty: number;
  lastSeen: Date | null;
}

export interface FsrsResult {
  stability: number;
  difficulty: number;
  nextDue: Date;
}

function clamp(x: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, x));
}

function initStability(rating: FsrsRating): number {
  return W[rating - 1];
}

function initDifficulty(rating: FsrsRating): number {
  return clamp(W[4] - (rating - 3) * W[5], 1, 10);
}

function updateDifficulty(oldDifficulty: number, rating: FsrsRating): number {
  const d0Good = clamp(W[4], 1, 10); // D0(3) — neutral difficulty for mean reversion
  const raw = oldDifficulty - W[6] * (rating - 3);
  return clamp(W[7] * d0Good + (1 - W[7]) * raw, 1, 10);
}

/** Power forgetting curve: R(t,S) = (1 + t/9S)^-1, so R = desired retention when t = interval. */
export function retrievability(elapsedDays: number, stability: number): number {
  return Math.pow(1 + elapsedDays / (9 * stability), -1);
}

function stabilityAfterSuccess(
  oldDifficulty: number,
  oldStability: number,
  r: number,
  rating: FsrsRating,
): number {
  const hardPenalty = rating === 2 ? W[15] : 1;
  const easyBonus = rating === 4 ? W[16] : 1;
  const factor =
    Math.exp(W[8]) *
    (11 - oldDifficulty) *
    Math.pow(oldStability, -W[9]) *
    (Math.exp(W[10] * (1 - r)) - 1) *
    hardPenalty *
    easyBonus;
  return oldStability * (factor + 1);
}

function stabilityAfterLapse(oldDifficulty: number, oldStability: number, r: number): number {
  return (
    W[11] * Math.pow(oldDifficulty, -W[12]) * (Math.pow(oldStability + 1, W[13]) - 1) * Math.exp(W[14] * (1 - r))
  );
}

/** Days until retrievability decays to `desiredRetention`. */
export function nextIntervalDays(stability: number, desiredRetention = DESIRED_RETENTION): number {
  return 9 * stability * (1 / desiredRetention - 1);
}

/**
 * §3 confidence-quadrant → FSRS rating mapping: any miss is Again regardless
 * of confidence (retrieval failed); a correct-but-guessed answer is Hard
 * ("fragile... do not mark mastered, requeue at short interval"); a
 * correct-and-certain answer is Easy ("advance interval aggressively").
 */
export function ratingFromAttempt(correct: boolean, confidence: number): FsrsRating {
  if (!correct) return 1;
  if (confidence <= 1) return 2;
  if (confidence >= 4) return 4;
  return 3;
}

export function review(prev: FsrsState | null, rating: FsrsRating, now: Date): FsrsResult {
  let stability: number;
  let difficulty: number;

  if (!prev || !prev.lastSeen || prev.stability <= 0) {
    stability = initStability(rating);
    difficulty = initDifficulty(rating);
  } else {
    const elapsedDays = Math.max(0, (now.getTime() - prev.lastSeen.getTime()) / 86_400_000);
    const r = retrievability(elapsedDays, prev.stability);
    difficulty = updateDifficulty(prev.difficulty, rating);
    stability =
      rating === 1
        ? stabilityAfterLapse(prev.difficulty, prev.stability, r)
        : stabilityAfterSuccess(prev.difficulty, prev.stability, r, rating);
  }

  stability = Math.max(0.1, stability);
  const nextDue = new Date(now.getTime() + nextIntervalDays(stability) * 86_400_000);

  return { stability, difficulty, nextDue };
}
