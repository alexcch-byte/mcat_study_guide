import { NextResponse } from "next/server";
import { db } from "@/db";
import { items, itemOptions, passages, type Section } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getItemSectionMap } from "@/lib/pacing";

// Official MCAT section timing — used to scale a per-item time budget to
// whatever the (much smaller) seed bank actually has available.
const SECTION_ORDER: Section[] = ["cp", "cars", "bb", "ps"];
const SECTION_TIMING: Record<Section, { officialMinutes: number; officialQuestions: number; label: string }> = {
  cp: { officialMinutes: 95, officialQuestions: 59, label: "Chemical and Physical Foundations of Biological Systems" },
  cars: { officialMinutes: 90, officialQuestions: 53, label: "Critical Analysis and Reasoning Skills" },
  bb: { officialMinutes: 95, officialQuestions: 59, label: "Biological and Biochemical Foundations of Living Systems" },
  ps: { officialMinutes: 95, officialQuestions: 59, label: "Psychological, Social, and Biological Foundations of Behavior" },
};
const BREAK_AFTER_MINUTES: Partial<Record<Section, number>> = { cp: 10, cars: 30, bb: 10 };

export async function GET() {
  const sectionMap = await getItemSectionMap();

  const rows = await db
    .select({ id: items.id, type: items.type, stem: items.stem, passageId: items.passageId })
    .from(items)
    .where(eq(items.status, "active"));

  const allOptions = await db
    .select({ id: itemOptions.id, itemId: itemOptions.itemId, position: itemOptions.position, text: itemOptions.text })
    .from(itemOptions);
  const allPassages = await db.select().from(passages);
  const passageById = new Map(allPassages.map((p) => [p.id, p]));

  const sections = SECTION_ORDER.map((section) => {
    const sectionItems = rows
      .filter((r) => sectionMap.get(r.id) === section)
      .map((item) => ({
        ...item,
        passage: item.passageId ? passageById.get(item.passageId) ?? null : null,
        options: allOptions.filter((o) => o.itemId === item.id).sort((a, b) => a.position - b.position),
      }))
      .sort((a, b) => a.id - b.id);

    const timing = SECTION_TIMING[section];
    const budgetSeconds =
      sectionItems.length > 0
        ? Math.round((timing.officialMinutes * 60 * sectionItems.length) / timing.officialQuestions)
        : 0;

    return {
      section,
      label: timing.label,
      items: sectionItems,
      budgetSeconds,
      breakAfterMinutes: BREAK_AFTER_MINUTES[section] ?? 0,
    };
  }).filter((s) => s.items.length > 0);

  return NextResponse.json({ sections });
}
