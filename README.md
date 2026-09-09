# Adaptive MCAT Trainer

Foundation build, per `mcat-adaptive-platform-design.md` build order steps 1–3:

1. Item bank + concept taxonomy + basic session player (no adaptation yet).
2. Attempts logging with confidence tap and error tags.
3. Elo-style mastery updates (with prerequisite-graph propagation) + a diagnostics heatmap.

Steps 4–7 (FSRS review scheduling, the plan generator/Today screen, full-lengths and score
projection, the LLM tutor) are not built yet.

## Stack

Next.js (App Router) + TypeScript + Tailwind, Postgres via Drizzle ORM. `attempts` is an
append-only fact table — nothing here ever mutates a row; mastery state is derived from it.

## Local setup

Requires Node.js and a local Postgres instance. `.env.local` already points at a local dev
database (`mcat_trainer`) created during setup — see `DATABASE_URL` there.

```bash
npm install
npm run db:push    # create/sync tables from src/db/schema.ts
npm run db:seed     # load the sample concept taxonomy + original items
npm run dev
```

Then open http://localhost:3000. Start a session at `/session`, view mastery/quadrant data at
`/diagnostics`.

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
