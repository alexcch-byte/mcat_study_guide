# Adaptive MCAT Trainer

Implements all 7 steps of `mcat-adaptive-platform-design.md`'s build order:

1. Item bank + concept taxonomy + session player.
2. Attempts logging with confidence taps and error tags.
3. Elo-style mastery updates (with prerequisite-graph propagation) + a diagnostics heatmap.
4. FSRS review scheduling over concepts.
5. Priority-scored plan generator + the Today screen.
6. Full-length simulations with real section timing/breaks, pacing/stamina models, and score
   projection.
7. A Socratic LLM tutor constrained to each item's own rubric.

## Stack

Next.js (App Router) + TypeScript + Tailwind, Postgres via Drizzle ORM. `attempts` is an
append-only fact table — nothing here ever mutates a row; all mastery/FSRS/pacing state is
derived from it.

## Local setup

Requires Node.js and a local Postgres instance. `.env.local` already points at a local dev
database (`mcat_trainer`) created during setup — see `DATABASE_URL` there.

```bash
npm install
npm run db:push    # create/sync tables from src/db/schema.ts
npm run db:seed     # load the sample concept taxonomy + original items
npm run dev
```

Then open http://localhost:3000 — it redirects to `/today`, the default landing per §6.

To enable the Socratic tutor ("Teach me this" on a missed item), add your own key to
`.env.local`:

```
ANTHROPIC_API_KEY=sk-ant-...
```

Without a key, the tutor button still works but shows a clear "tutor unavailable" message
instead of crashing.

## Screens

| Route | Purpose |
|---|---|
| `/today` | Default landing — today's plan blocks with a one-line "why" each |
| `/session?block=<id>` | Session player, optionally scoped to a plan block's concepts |
| `/full-length` | Timed full-length simulation (real section pacing, breaks, no per-item reveal), followed by a confidence+error-tag review pass |
| `/diagnostics` | Concept mastery heatmap, confidence×accuracy quadrant, pacing, stamina curve |
| `/score` | Estimated scaled score per section, gated behind a 200-item-per-section calibration guardrail |

## Content

All seeded items and passages in `src/db/seed.ts` are originally authored for this project — no
AAMC/UWorld/Kaplan/Blueprint material, per the design doc's §10.0 licensing rules. AAMC
content-category codes (e.g. `5A`, `1A`) are used only as taxonomy labels, which the doc
explicitly permits.

## Other scripts

```bash
npm run db:generate  # generate a SQL migration from schema changes
npm run db:studio    # Drizzle Studio (browse/edit the DB)
npm run build
npm run lint
```
