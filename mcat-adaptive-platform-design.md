# Adaptive MCAT Training Platform — Design Spec

Draft v0.1 — architecture and product design for a web app that teaches MCAT content and continuously reshapes the lesson plan around demonstrated weakness.

---

## 1. Design premises

1. **The plan is an output, not an input.** The student never picks what to study. The system produces "today's session" and defends that choice with visible reasoning.
2. **Weakness is multi-dimensional.** A missed question is not automatically a content gap. The engine must separate four failure modes, because they have different remedies:

| Failure mode | Signal | Remedy |
|---|---|---|
| Content gap | Wrong + low confidence + slow | Teach concept, then spaced review |
| Misconception | Wrong + **high** confidence | Targeted refutation lesson (highest priority) |
| Reasoning/skill gap | Content-correct on discretes, wrong in passage context | SIRS drills, passage-mapping practice |
| Process/pacing | Correct when untimed, wrong when timed; time-per-item outliers | Timing drills, triage training |

3. **Two adaptation loops, different clock speeds.**
   - *Micro loop* (within session): next-item selection, targets ~70–80% accuracy for productive difficulty.
   - *Macro loop* (nightly): regenerate the weekly plan from the mastery state.
4. **Section asymmetry.** C/P, B/B, P/S are content-plus-reasoning. CARS is pure reasoning — no content model applies, so it needs a parallel skill model and daily, non-negotiable exposure.
5. **Content ownership.** The item bank must be original or licensed. AAMC material is copyrighted and cannot be ingested. Plan for authored items tagged to the public AAMC content outline (Foundational Concepts 1–10, content categories 1A–10A, SIRS 1–4), which is fine to use as a taxonomy.

---

## 2. Domain model

### Concept graph
Not a flat list — a DAG. Nodes are fine-grained (e.g. `amino_acid_pKa_reasoning`), grouped upward into content categories, then foundational concepts, then sections.

```
Section → Foundational Concept → Content Category → Concept → Sub-skill
                                                       ↑
                                              prerequisite edges
```

Prerequisite edges matter: failing `acid_base_titration` may actually be a failure of `log_math_estimation`. The remediation walker should traverse *upstream* before drilling the surface concept.

### Core tables

```sql
concepts(id, parent_id, section, aamc_category, name, est_learn_minutes)
concept_edges(prereq_id, dependent_id, strength)

items(id, stem, type[passage|discrete], difficulty_b, discrimination_a,
      guess_c, source, avg_time_seconds)
item_concepts(item_id, concept_id, weight)
item_skills(item_id, sirs_skill)          -- 1..4

passages(id, section, word_count, topic, difficulty)

attempts(id, user_id, item_id, session_id, chosen, correct,
         confidence[1..4], seconds, flagged, eliminated_options[],
         error_tag, created_at)

mastery(user_id, concept_id, theta, sigma, last_seen, next_due,
        stability, difficulty)            -- FSRS fields

skill_state(user_id, sirs_skill, theta, sigma)
pacing(user_id, section, median_sec, p90_sec, rushed_rate, overdwell_rate)

plans(id, user_id, week_of, generated_at, rationale_json)
plan_blocks(plan_id, day, order, kind, target_ids[], minutes, status)
```

---

## 3. The measurement engine

### Ability estimation
Use **Elo-style online updates per concept** rather than full IRT or deep knowledge tracing. Rationale: works from the first session, no training corpus needed, item difficulties self-calibrate as the bank gets used, and it's ~30 lines of code.

```
expected = 1 / (1 + 10^((b_item - θ_concept)/400))
θ_concept += K_user * (correct - expected) * w_item_concept
b_item    -= K_item * (correct - expected)
```

- `K_user` decays with attempt count (fast early convergence, stable later).
- `sigma` (uncertainty) tracked separately; drives how aggressively the planner trusts a low score.
- Propagate a fraction (~0.3) of each update to parent concepts and to prerequisites — sparse data is the main constraint, and the DAG is how you borrow strength.

### Confidence quadrants
Every answer requires a confidence tap (Guessed / Unsure / Fairly sure / Certain). This is the single highest-value input for cheap. It yields:

- **Wrong + Certain** → misconception. Weight 2.5× in the priority score.
- **Right + Guessed** → fragile. Do *not* mark mastered; requeue at short interval.
- **Right + Certain** → advance interval aggressively.
- **Wrong + Guessed** → clean content gap, standard remediation.

### Error tagging
After review, the student tags *why* they missed it, from a fixed taxonomy (not free text): didn't know the content / misread the question / missed it in the passage / arithmetic or unit error / eliminated the right answer / ran out of time. Aggregated, this is what distinguishes a P/S content problem from a P/S reading-speed problem.

Optional: an LLM pass over the student's written explanation ("why did you pick B?") to auto-suggest the tag. Keep the human tap as ground truth.

### Pacing model
Per section, track time-per-item as a distribution conditioned on item difficulty. Flag:
- `rushed_rate` — items answered under p10 time that were wrong.
- `overdwell_rate` — items over p90 time regardless of outcome.
- Accuracy decay across position 1→59 within a section = **stamina** signal, which drives full-length scheduling rather than content work.

### Retention
FSRS (or SM-2 as a simpler fallback) over concepts, not cards. Each concept carries stability/difficulty; review due dates are hard constraints in the planner — the plan is built *around* due reviews, not the reverse.

---

## 4. The planning engine

### Priority score
Nightly, for each concept, compute expected score gain per minute:

```
priority = (mastery_deficit
            × exam_frequency_weight      -- how often this appears on the real test
            × misconception_multiplier   -- from confidence quadrants
            × prereq_unlock_bonus        -- how many downstream concepts it gates
            × decay_urgency)             -- FSRS due-ness
           / est_learn_minutes
```

`prereq_unlock_bonus` is what makes this feel intelligent — it will send a student back to logarithms or dimensional analysis instead of drilling twelve titration questions.

### Phase gating
Weeks-to-exam sets the mix. This is the coarse control; the priority score is the fine control.

| Phase | Weeks out | Content | Practice | Full-lengths |
|---|---|---|---|---|
| Build | >10 | 60% | 40% | 1 diagnostic |
| Apply | 5–10 | 25% | 65% | every 2 weeks |
| Simulate | <5 | 10% | 55% | weekly + review-heavy |

CARS: 6–8 passages daily in every phase. It moves slowest and only responds to volume.

### Weekly plan generation
Input: available hours per day (student sets it once), due reviews, priority ranking, phase mix.
Algorithm: greedy fill under constraints —
1. Place due FSRS reviews first (non-negotiable).
2. Place CARS block daily.
3. Place full-length if the phase calendar says so; the following day is review-only (full-length review is worth more than the test).
4. Fill remaining minutes by descending priority, capping any one content category at ~40% of the week to avoid tunneling.
5. Interleave: never two blocks from the same content category back to back. Interleaving beats blocking for transfer, and the MCAT tests transfer.

### Session composition (micro loop)
Within a practice block, select items targeting P(correct) ≈ 0.75 for the target concept, mixing in 20% items from concepts due for review and 10% from already-strong areas (maintenance + morale).

Stop rules: block ends at time budget, or early if 5 consecutive misses in one concept — that triggers an immediate switch to a teaching module rather than grinding.

### Explainability
Every plan block shows a one-line "why": *"Amino acid pKa — you were confident and wrong on 4 of 6 last Tuesday, and it gates 7 downstream biochem concepts."* This is what makes students trust the system enough to stop overriding it.

---

## 5. Teaching layer

- **Concept modules**: short (6–10 min) — core explanation, one worked example, one common trap, then immediate 3-item check.
- **Misconception refutations**: explicitly state the wrong model, show where it breaks, replace it. Refutation-style text outperforms plain re-explanation for high-confidence errors.
- **Worked-example fading**: first item fully worked, second partially, third solo.
- **Socratic tutor** (LLM): on a missed item, doesn't give the answer — asks what the student thought the question was testing, what each distractor was designed to catch. Constrain it hard with the item's concept tags and a rubric; free-roaming tutors hallucinate MCAT content.
- **Passage-mapping drill** for CARS/science passages: student highlights and labels structure before answering; scored against a reference map.

---

## 6. Screens

| Screen | Purpose | Key elements |
|---|---|---|
| **Today** (home) | The default landing. One decision: start. | Today's blocks, minutes, streak, "why this" expander |
| **Session player** | Practice. Full-screen, no chrome. | Timer, highlight/strikeout tools, confidence tap, flag |
| **Review** | Where learning actually happens. | Item, your reasoning, error tag, related concept, "teach me this" |
| **Diagnostics** | Weakness map. | Concept heatmap over the AAMC tree, quadrant scatter (confidence × accuracy), pacing histogram, stamina curve |
| **Score projection** | Motivation + calibration. | Estimated scaled score per section with an interval; explicitly labelled as an estimate |
| **Full-length** | Timed simulation. | Real section timing, breaks enforced, no pause |
| **Plan** | Week view, editable. | Drag to reschedule; overrides logged and fed back as a constraint |
| **Library** | Free browsing. | Concept tree, search — deliberately secondary to Today |

Design notes: single-column, keyboard-first in the session player (1–4 for answers, spacebar to flag), dark mode, and a hard rule that the session player shows no analytics — score anxiety mid-block hurts performance.

---

## 7. Score projection

Map section-level θ to a 118–132 scale via a calibration curve fit to full-length results. Report as a range, not a point. Two guardrails:

- Don't project before ~200 logged items in a section; show "still calibrating."
- Weight full-length performance far above practice-block performance. Untimed accuracy systematically overestimates.

---

## 8. Suggested stack

- **Frontend**: Next.js (App Router) + TypeScript + Tailwind. Session player as a tightly controlled client component with local-first answer buffering so a dropped connection never loses a block.
- **Backend**: Next API routes or a small FastAPI service if the scoring engine grows.
- **DB**: Postgres. `attempts` is the fact table — append-only, never mutate. All mastery state is derivable from it, which means you can re-run the whole engine with a better algorithm later without data loss. This is the most important architectural decision in the doc.
- **Jobs**: nightly plan generation + FSRS recomputation (pg_cron or a small worker).
- **LLM**: Anthropic API for the Socratic tutor, error-tag suggestion, and item drafting-with-human-review. Never for live scoring.
- **Analytics**: event stream to the same Postgres; you'll want per-item stats to prune bad items (low discrimination, ambiguous distractors).

---

## 9. Build order

1. Item bank + concept taxonomy + basic session player. No adaptation.
2. Attempts logging with confidence tap and error tags.
3. Elo mastery + diagnostics heatmap.
4. FSRS review scheduling.
5. Plan generator + Today screen.
6. Full-lengths, pacing/stamina models, score projection.
7. LLM tutor.

Steps 1–3 are the whole product's foundation; the adaptive layer is worthless without a well-tagged bank, and item tagging quality will be the actual bottleneck, not the algorithms.

---

## 10. LLM-assisted item generation

### 10.0 Source material — licensing rules

Hard constraints, non-negotiable:

- **Never** paste AAMC, UWorld, Kaplan, Blueprint, or any commercial vendor's items into a generation prompt, as few-shot examples or as "style references." That produces derivative work and it is traceable.
- **Do** use the AAMC content outline as a taxonomy. Category names and skill descriptors are fact-like scaffolding, not protected item content.
- **Permitted source corpora**: OpenStax (CC BY 4.0), LibreTexts (mixed CC), public-domain and CC scientific figures, primary literature you have rights to, and your own SME-authored notes.
- **CARS passages**: Project Gutenberg, Wikisource, arXiv humanities/philosophy preprints with permissive licenses, and open-access journals. The passage is free; you author the questions. This is the cheapest section to build at volume.
- Log source + license for every item in the `items` table. `items.source` should be a real provenance record, not a free-text note.

### 10.1 Pipeline

```
Source excerpt  →  Blueprint  →  Draft  →  Automated gates  →  SME review  →  Bank (uncalibrated)  →  Live calibration
```

Never generate free-form ("write me an MCAT question about enzymes"). Always generate **against a blueprint row** so coverage is deliberate and the concept tag is known before the item exists.

**Blueprint row** = `{concept_id, sirs_skill, item_type, target_difficulty, required_reasoning_step, source_excerpt_id}`

The planner reveals bank gaps — concepts where a student needs items and few exist. Blueprint rows should be generated from that deficit, not from a wish list.

### 10.2 Generation prompt template

```
ROLE
You are writing an original MCAT-style multiple-choice item for a
licensed practice platform. You have never seen and must not imitate
any specific published item.

SOURCE MATERIAL (the only factual basis permitted)
<<<{source_excerpt}>>>

BLUEPRINT
- Content category: {aamc_category} — {concept_name}
- Scientific Inquiry & Reasoning Skill: {sirs_skill_number} — {sirs_description}
- Item type: {passage_based | discrete}
- Target difficulty: {easy | moderate | hard}
- Required reasoning step: {e.g. "student must combine a pKa value from
  the passage with the Henderson-Hasselbalch relationship and estimate,
  not calculate, the ratio"}

CONSTRAINTS
1. Content scope: use only concepts inside the AAMC outline. If solving
   requires a fact outside the outline and outside the passage, the item
   is invalid — say so instead of writing it.
2. No calculator. Any numeric answer must be reachable by estimation,
   with answer options separated by at least a factor that survives
   rounding.
3. Exactly one defensible answer. Not "best" by degree — the other three
   must be defensibly wrong.
4. Four options. Parallel grammatical form, within 25% of each other in
   length, matched specificity. No "all/none of the above", no negation
   in the stem unless negation is the skill being tested.
5. Passage-based items must be UNANSWERABLE from memory alone. The stem
   must require at least one piece of information that exists only in
   the passage.
6. Stem is a question or a complete-the-sentence, not a riddle. No
   double-barrelled asks.
7. Reading level and register: dense academic prose, not textbook prose.

DISTRACTOR DESIGN — the most important requirement
Each of the three distractors must be tagged with the specific reasoning
error that produces it. Acceptable error types:
  - prerequisite misconception (name it)
  - sign / direction reversal
  - reciprocal or inverted relationship
  - unit or order-of-magnitude error
  - correct concept, wrong step in the sequence
  - passage detail misread or over-extrapolated
  - true statement that does not answer the question asked
A distractor that is merely "a wrong number" or "an unrelated term" is a
failure. Rewrite it.

OUTPUT
Strict JSON, no prose, no markdown fences:
{
  "stem": "",
  "options": [{"text": "", "correct": bool, "error_type": "", "why_a_student_picks_this": ""}],
  "correct_reasoning": "",
  "concept_ids": [],
  "sirs_skill": 0,
  "estimated_difficulty": "",
  "passage_dependent": bool,
  "outside_knowledge_required": [],
  "self_flag": ""   // any concern you have about this item
}
```

Option order is randomised **after** generation, in code. Models put the
correct answer in position B/C at well above chance.

### 10.3 Automated gates (run before any human sees the item)

Cheap, and they reject most of the bad output:

| Gate | Test | Reject if |
|---|---|---|
| **Passage-dependence** | Re-ask a model the stem + options with the passage **removed** | Answers correctly at high confidence → it's a discrete masquerading as a passage item |
| **Option-only leakage** | Ask a model to pick the answer from options alone, no stem | Correct above ~40% → length/specificity tell |
| **Key consensus** | Independently ask 3 models (or 3 seeds) to solve it | Any disagreement on the key → route to SME, do not auto-pass |
| **Ambiguity probe** | Ask a model to argue for the *best distractor* | Produces a genuinely defensible case → two-answer problem |
| **Scope** | `outside_knowledge_required` non-empty, or concept not in outline | Reject |
| **Format** | Option length variance, parallelism, negation, "above" options | Reject and regenerate |
| **Arithmetic** | Recompute any numeric answer symbolically (sympy) | Mismatch → reject |
| **Near-duplicate** | Embed the stem, cosine similarity vs bank | >0.9 to an existing item → reject |

Expect roughly 40–60% of drafts to die here. That's the gate working.

### 10.4 SME review

Automated gates catch mechanical failure; they do not catch *plausibility*. Human review is the majority of the cost and cannot be skipped.

Reviewer scores each item 1–5 on: content accuracy, distractor quality, MCAT-likeness, and clarity. Anything under 4 on distractor quality goes back. Reviewer must be able to state, for each distractor, the student it catches — if they can't, the distractor is decoration.

Reviewer actions are `accept | edit | reject`, and all three are logged with the original draft. That log is your evaluation set: after ~500 reviewed items you can measure which prompt variants and which source types produce the highest accept rate, and tune the generator against real data instead of vibes.

Budget: 15–25 minutes of expert time per validated passage set (passage + 4–6 questions), 4–8 minutes per discrete.

### 10.5 Live calibration and pruning

Items enter the bank with `difficulty_b` set from the model's estimate, marked `uncalibrated`. Then:

- After ~30 exposures, replace the estimate with the Elo-derived difficulty.
- **Discrimination check**: if high-θ students miss it as often as low-θ students, the item is broken — flag, don't quietly keep it.
- **Dead distractor**: any option chosen by <5% of students is doing no work. Queue for rewrite.
- **Over-attractive distractor**: an option chosen more often than the key by high-θ students means the key is probably wrong or the item is ambiguous. Auto-suspend and route to SME immediately.
- **Time outlier**: median time far above the section norm usually signals an unclear stem, not a hard concept.

Suspension should be automatic and immediate — an ambiguous item actively teaches the wrong thing, and it also corrupts the mastery model that drives the lesson plan.

### 10.6 What LLMs are reliably bad at here

Know these going in:

- **Distractor plausibility.** Default output gives obviously-wrong options. The entire difficulty of the real exam lives in distractors. Constraining each distractor to a named reasoning error is the single highest-leverage part of the prompt.
- **Calibrating difficulty.** Self-reported difficulty is close to noise. Ignore it beyond seeding.
- **Passage construction.** Model-written science passages are too tidy — they state the finding instead of making you extract it. Prefer excerpting real open-access papers and writing questions against them.
- **CARS.** Do not let a model write CARS passages. Use real dense human prose; models produce prose that is too structurally clean to test the skill.
- **Staying in scope.** Models drift into upper-division content. The scope gate catches it; expect to use it a lot.

---

## 11. Open questions

- Item bank source — LLM-assisted authoring per §10, or the bring-your-own-content model (student supplies AAMC/UWorld access, your platform provides only the adaptive engine and logs attempts)? The latter is a fraction of the content lift and the adaptive layer is the actual product. This gates the timeline more than anything else.
- SME reviewer capacity. §10.4 is the real cost centre; without a committed reviewer the bank won't reach usable size.
- Single-student tool or multi-tenant? Elo item calibration is much better with many users; with one user, item difficulties must be hand-assigned initially.
- How much override latitude to give the student? Too little and they disengage; too much and it stops being adaptive. Suggest: they can reschedule blocks but not delete them.
