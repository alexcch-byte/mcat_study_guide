import {
  pgTable,
  pgEnum,
  serial,
  bigserial,
  integer,
  smallint,
  real,
  text,
  boolean,
  timestamp,
  jsonb,
  date,
  check,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

// AAMC sections. CARS has no content model (see design doc §1.4).
export const sectionEnum = pgEnum("section", ["cp", "bb", "ps", "cars"]);

export const itemTypeEnum = pgEnum("item_type", ["discrete", "passage"]);

// Bank lifecycle per §10.5: items enter uncalibrated, get promoted after
// ~30 exposures, and can be auto-suspended if they misbehave statistically.
export const itemStatusEnum = pgEnum("item_status", [
  "draft",
  "uncalibrated",
  "active",
  "suspended",
]);

// Fixed error-tag taxonomy from §3 ("Error tagging") — deliberately not free text.
export const errorTagEnum = pgEnum("error_tag", [
  "no_content_knowledge",
  "misread_question",
  "missed_passage_detail",
  "arithmetic_or_unit_error",
  "eliminated_correct_answer",
  "ran_out_of_time",
]);

export const planBlockKindEnum = pgEnum("plan_block_kind", [
  "review",
  "content",
  "practice",
  "cars",
  "full_length",
  "teaching",
]);

export const planBlockStatusEnum = pgEnum("plan_block_status", [
  "pending",
  "done",
  "skipped",
  "rescheduled",
]);

export const sessionKindEnum = pgEnum("session_kind", [
  "practice",
  "review",
  "teaching",
  "full_length",
]);

// ---------------------------------------------------------------------------
// Users (minimal — auth is out of scope for steps 1-3; single seeded dev user)
// ---------------------------------------------------------------------------

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  displayName: text("display_name"),
  hoursPerDay: real("hours_per_day").notNull().default(2),
  examDate: date("exam_date"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Concept graph (§2 "Domain model")
// ---------------------------------------------------------------------------

export const concepts = pgTable("concepts", {
  id: serial("id").primaryKey(),
  parentId: integer("parent_id"),
  section: sectionEnum("section").notNull(),
  aamcCategory: text("aamc_category").notNull(), // e.g. "1A", "5B"
  name: text("name").notNull(),
  estLearnMinutes: integer("est_learn_minutes").notNull().default(10),
});

// prerequisite DAG edges: prereqId must be mastered before dependentId (§2, §4)
export const conceptEdges = pgTable(
  "concept_edges",
  {
    id: serial("id").primaryKey(),
    prereqId: integer("prereq_id")
      .notNull()
      .references(() => concepts.id, { onDelete: "cascade" }),
    dependentId: integer("dependent_id")
      .notNull()
      .references(() => concepts.id, { onDelete: "cascade" }),
    strength: real("strength").notNull().default(1), // 0..1, propagation weight
  },
  (t) => [
    uniqueIndex("concept_edges_pair_idx").on(t.prereqId, t.dependentId),
    check("concept_edges_strength_range", sql`${t.strength} between 0 and 1`),
    check("concept_edges_no_self_loop", sql`${t.prereqId} <> ${t.dependentId}`),
  ],
);

// ---------------------------------------------------------------------------
// Item bank (§2, §10)
// ---------------------------------------------------------------------------

export const passages = pgTable("passages", {
  id: serial("id").primaryKey(),
  section: sectionEnum("section").notNull(),
  title: text("title"),
  body: text("body").notNull(),
  wordCount: integer("word_count").notNull(),
  topic: text("topic"),
  difficulty: real("difficulty"), // seeded estimate; Elo b refines per-item, not per-passage
  // Provenance per §10.0 — real record, not a free-text note.
  source: jsonb("source").notNull(),
});

export const items = pgTable(
  "items",
  {
    id: serial("id").primaryKey(),
    passageId: integer("passage_id").references(() => passages.id, {
      onDelete: "cascade",
    }),
    type: itemTypeEnum("type").notNull(),
    stem: text("stem").notNull(),
    correctReasoning: text("correct_reasoning"),
    status: itemStatusEnum("status").notNull().default("uncalibrated"),
    // Elo-style parameters (§3 "Ability estimation")
    difficultyB: real("difficulty_b").notNull().default(0),
    discriminationA: real("discrimination_a").notNull().default(1),
    guessC: real("guess_c").notNull().default(0.25),
    exposureCount: integer("exposure_count").notNull().default(0),
    avgTimeSeconds: real("avg_time_seconds"),
    // Provenance per §10.0 — { corpus, license, excerpt_id?, url?, authored_by? }
    source: jsonb("source").notNull(),
    selfFlag: text("self_flag"), // model's own concern from §10.2 output, if LLM-generated
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [check("items_guess_c_range", sql`${t.guessC} between 0 and 1`)],
);

export const itemOptions = pgTable(
  "item_options",
  {
    id: serial("id").primaryKey(),
    itemId: integer("item_id")
      .notNull()
      .references(() => items.id, { onDelete: "cascade" }),
    position: smallint("position").notNull(), // 0-3, randomized post-generation per §10.2
    text: text("text").notNull(),
    isCorrect: boolean("is_correct").notNull().default(false),
    errorType: text("error_type"), // distractor reasoning-error tag, §10.2
    whyAStudentPicksThis: text("why_a_student_picks_this"),
  },
  (t) => [
    uniqueIndex("item_options_item_position_idx").on(t.itemId, t.position),
    check("item_options_position_range", sql`${t.position} between 0 and 5`),
  ],
);

export const itemConcepts = pgTable(
  "item_concepts",
  {
    id: serial("id").primaryKey(),
    itemId: integer("item_id")
      .notNull()
      .references(() => items.id, { onDelete: "cascade" }),
    conceptId: integer("concept_id")
      .notNull()
      .references(() => concepts.id, { onDelete: "cascade" }),
    weight: real("weight").notNull().default(1), // relative importance for this item
  },
  (t) => [uniqueIndex("item_concepts_pair_idx").on(t.itemId, t.conceptId)],
);

export const itemSkills = pgTable(
  "item_skills",
  {
    id: serial("id").primaryKey(),
    itemId: integer("item_id")
      .notNull()
      .references(() => items.id, { onDelete: "cascade" }),
    sirsSkill: smallint("sirs_skill").notNull(), // 1..4
  },
  (t) => [
    uniqueIndex("item_skills_item_skill_idx").on(t.itemId, t.sirsSkill),
    check("item_skills_range", sql`${t.sirsSkill} between 1 and 4`),
  ],
);

// ---------------------------------------------------------------------------
// Sessions & attempts — attempts is the append-only fact table (§8). Never
// mutate rows here; all mastery/pacing/skill state is derived from it.
// ---------------------------------------------------------------------------

export const sessions = pgTable("sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  planBlockId: integer("plan_block_id"), // FK added after plan_blocks is defined below
  kind: sessionKindEnum("kind").notNull(),
  startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
  endedAt: timestamp("ended_at", { withTimezone: true }),
});

export const attempts = pgTable(
  "attempts",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    itemId: integer("item_id")
      .notNull()
      .references(() => items.id, { onDelete: "restrict" }),
    sessionId: integer("session_id").references(() => sessions.id, {
      onDelete: "set null",
    }),
    chosenOptionId: integer("chosen_option_id").references(() => itemOptions.id, {
      onDelete: "set null",
    }),
    correct: boolean("correct").notNull(),
    confidence: smallint("confidence").notNull(), // 1=Guessed .. 4=Certain, §3
    seconds: real("seconds").notNull(),
    flagged: boolean("flagged").notNull().default(false),
    eliminatedOptionIds: integer("eliminated_option_ids").array().notNull().default([]),
    errorTag: errorTagEnum("error_tag"), // set on review, nullable until then
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [check("attempts_confidence_range", sql`${t.confidence} between 1 and 4`)],
);

// ---------------------------------------------------------------------------
// Mastery, skill, and pacing state — all derivable by replaying `attempts`.
// ---------------------------------------------------------------------------

export const mastery = pgTable(
  "mastery",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    conceptId: integer("concept_id")
      .notNull()
      .references(() => concepts.id, { onDelete: "cascade" }),
    theta: real("theta").notNull().default(0), // Elo-style ability estimate
    sigma: real("sigma").notNull().default(1), // uncertainty
    attemptCount: integer("attempt_count").notNull().default(0), // drives K_user decay, §3
    lastSeen: timestamp("last_seen", { withTimezone: true }),
    nextDue: timestamp("next_due", { withTimezone: true }),
    // FSRS fields (§3 "Retention")
    stability: real("stability").notNull().default(1),
    difficulty: real("difficulty").notNull().default(5),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("mastery_user_concept_idx").on(t.userId, t.conceptId)],
);

export const skillState = pgTable(
  "skill_state",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    sirsSkill: smallint("sirs_skill").notNull(), // 1..4
    theta: real("theta").notNull().default(0),
    sigma: real("sigma").notNull().default(1),
  },
  (t) => [
    uniqueIndex("skill_state_user_skill_idx").on(t.userId, t.sirsSkill),
    check("skill_state_range", sql`${t.sirsSkill} between 1 and 4`),
  ],
);

export const pacing = pgTable(
  "pacing",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    section: sectionEnum("section").notNull(),
    medianSec: real("median_sec"),
    p90Sec: real("p90_sec"),
    rushedRate: real("rushed_rate"), // §3 "Pacing model"
    overdwellRate: real("overdwell_rate"),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("pacing_user_section_idx").on(t.userId, t.section)],
);

// ---------------------------------------------------------------------------
// Plans (§4 "The planning engine") — nightly macro-loop output
// ---------------------------------------------------------------------------

export const plans = pgTable("plans", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  weekOf: date("week_of").notNull(),
  generatedAt: timestamp("generated_at", { withTimezone: true }).notNull().defaultNow(),
  rationale: jsonb("rationale"), // per-block "why" explanations, §4 "Explainability"
});

export const planBlocks = pgTable("plan_blocks", {
  id: serial("id").primaryKey(),
  planId: integer("plan_id")
    .notNull()
    .references(() => plans.id, { onDelete: "cascade" }),
  day: date("day").notNull(),
  order: smallint("order").notNull(),
  kind: planBlockKindEnum("kind").notNull(),
  targetConceptIds: integer("target_concept_ids").array().notNull().default([]),
  minutes: integer("minutes").notNull(),
  status: planBlockStatusEnum("status").notNull().default("pending"),
  rationaleText: text("rationale_text"), // one-line "why" shown on Today screen
});
