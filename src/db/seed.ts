/**
 * Seed data for local dev. All item/passage content is original, authored
 * for this project — no AAMC/UWorld/Kaplan/Blueprint material is used, per
 * §10.0 of the design doc. AAMC content-category codes are used only as
 * taxonomy labels, which the doc explicitly permits.
 *
 * Content lives in src/db/seedData/ (concepts, passages, and one item file
 * per section) rather than inline here, since the bank has grown to 200
 * items — this file just resolves those definitions (by concept name /
 * passage key) into real ids and inserts everything.
 */
import { sql } from "drizzle-orm";
import { db } from "./index";
import {
  users,
  concepts,
  conceptEdges,
  passages,
  items,
  itemOptions,
  itemConcepts,
  itemSkills,
} from "./schema";
import { concepts as conceptDefs, conceptEdges as conceptEdgeDefs } from "./seedData/concepts";
import { passages as passageDefs } from "./seedData/passages";
import { itemsCp } from "./seedData/items_cp";
import { itemsBb } from "./seedData/items_bb";
import { itemsPs } from "./seedData/items_ps";
import { itemsCars } from "./seedData/items_cars";
import type { ItemDef } from "./seedData/types";

const allItemDefs: ItemDef[] = [...itemsCp, ...itemsBb, ...itemsPs, ...itemsCars];

async function main() {
  console.log("Seeding...");

  // Full reset — this is dev seed data, meant to be rerunnable from scratch.
  // CASCADE takes care of every dependent table (attempts, mastery, plans, …)
  // regardless of listed order.
  await db.execute(
    sql`TRUNCATE TABLE ${users}, ${concepts}, ${passages}, ${items} RESTART IDENTITY CASCADE`,
  );

  // --- demo user -------------------------------------------------------------
  const [user] = await db
    .insert(users)
    .values({ email: "demo@example.com", displayName: "Demo Student", hoursPerDay: 2 })
    .returning();

  // --- concepts ----------------------------------------------------------------
  const insertedConcepts = await db.insert(concepts).values(conceptDefs).returning();
  const conceptIdByName = new Map(insertedConcepts.map((c) => [c.name, c.id]));

  function conceptId(name: string): number {
    const id = conceptIdByName.get(name);
    if (!id) throw new Error(`unknown concept in seed data: ${name}`);
    return id;
  }

  // --- concept edges -------------------------------------------------------------
  await db.insert(conceptEdges).values(
    conceptEdgeDefs.map((e) => ({
      prereqId: conceptId(e.prereq),
      dependentId: conceptId(e.dependent),
      strength: e.strength ?? 1,
    })),
  );

  // --- passages ------------------------------------------------------------------
  const insertedPassages = await db.insert(passages).values(
    passageDefs.map((p) => ({
      section: p.section,
      title: p.title,
      body: p.body,
      wordCount: p.body.trim().split(/\s+/).length,
      topic: p.topic,
      difficulty: 0,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })),
  ).returning();
  const passageIdByKey = new Map(passageDefs.map((p, i) => [p.key, insertedPassages[i].id]));

  function passageId(key: string): number {
    const id = passageIdByKey.get(key);
    if (!id) throw new Error(`unknown passage key in seed data: ${key}`);
    return id;
  }

  // --- items -----------------------------------------------------------------------
  const insertedItems = await db.insert(items).values(
    allItemDefs.map((def) => {
      const correct = def.options.find((o) => o.correct);
      if (!correct) throw new Error(`item has no correct option: ${def.stem}`);
      return {
        passageId: def.passage ? passageId(def.passage) : null,
        type: (def.type ?? "discrete") as "discrete" | "passage",
        stem: def.stem,
        correctReasoning: def.reasoning,
        status: "active" as const,
        difficultyB: def.difficulty ?? 0,
        source: { corpus: "original", license: "original-authored", authored_by: "platform" },
      };
    }),
  ).returning();

  // --- item options, concept tags, and SIRS skill tags ------------------------------
  const optionRows: (typeof itemOptions.$inferInsert)[] = [];
  const conceptTagRows: (typeof itemConcepts.$inferInsert)[] = [];
  const skillRows: (typeof itemSkills.$inferInsert)[] = [];

  allItemDefs.forEach((def, i) => {
    const itemId = insertedItems[i].id;
    def.options.forEach((opt, position) => {
      optionRows.push({
        itemId,
        position,
        text: opt.text,
        isCorrect: opt.correct ?? false,
        errorType: opt.correct ? null : (opt.errorType ?? null),
        whyAStudentPicksThis: opt.correct ? null : (opt.why ?? null),
      });
    });
    conceptTagRows.push({ itemId, conceptId: conceptId(def.concept), weight: 1 });
    if (def.sirs) skillRows.push({ itemId, sirsSkill: def.sirs });
  });

  await db.insert(itemOptions).values(optionRows);
  await db.insert(itemConcepts).values(conceptTagRows);
  if (skillRows.length > 0) await db.insert(itemSkills).values(skillRows);

  console.log(
    `Seeded 1 user, ${insertedConcepts.length} concepts, ${insertedPassages.length} passages, ${insertedItems.length} items.`,
  );
  console.log(`Demo user id: ${user.id}`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
