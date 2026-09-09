/**
 * Socratic tutor (§5 "Teaching layer"). On a missed item, doesn't give the
 * answer — asks what the student thought the question was testing and what
 * each distractor was designed to catch. Constrained hard with the item's
 * own concept tags and rubric (the distractors' error_type / "why a student
 * picks this" fields) so it can't hallucinate MCAT content.
 */
import Anthropic from "@anthropic-ai/sdk";
import { db } from "@/db";
import { concepts, itemConcepts, itemOptions, items, passages } from "@/db/schema";
import { eq } from "drizzle-orm";

export interface TutorMessage {
  role: "user" | "assistant";
  content: string;
}

function buildSystemPrompt(params: {
  stem: string;
  passageBody: string | null;
  correctReasoning: string | null;
  options: { position: number; text: string; isCorrect: boolean; errorType: string | null; whyAStudentPicksThis: string | null }[];
  conceptNames: string[];
}): string {
  const { stem, passageBody, correctReasoning, options, conceptNames } = params;

  const optionsBlock = options
    .map((o, i) => {
      const letter = String.fromCharCode(65 + i);
      if (o.isCorrect) {
        return `${letter}. ${o.text}  [CORRECT — reasoning: ${correctReasoning ?? "n/a"}]`;
      }
      return `${letter}. ${o.text}  [WRONG — the error it catches: ${o.errorType ?? "unspecified"}. A student picks this because: ${o.whyAStudentPicksThis ?? "unspecified"}]`;
    })
    .join("\n");

  return `You are a Socratic MCAT tutor helping a student understand an item they got wrong.

RULES — follow these exactly:
1. Never state which option is correct, even if asked directly. If the student explicitly gives up twice, you may reveal it as a last resort, but always ask a guiding question first.
2. Do not introduce any fact, concept, or outside knowledge not already given below. If the student asks something outside this item's scope, redirect them back to the item — you are not a general tutor.
3. Lead with questions, not statements. Ask what the student thought the question was testing, and what they think each distractor is designed to catch.
4. Use the rubric below (each distractor's real error type) to steer the conversation toward the actual reasoning gap — but make the student articulate it themselves before you confirm it.
5. Keep responses short — 2-4 sentences, one question at a time. This is a dialogue, not a lecture.
6. If this is the first message in the conversation (no prior turns), open by asking what the student thought this question was testing, without restating the stem back to them.

ITEM CONTEXT (ground truth — do not deviate from this)
Concepts tested: ${conceptNames.join(", ") || "unspecified"}
${passageBody ? `Passage:\n${passageBody}\n` : ""}
Stem: ${stem}

Options and rubric:
${optionsBlock}`;
}

export async function runTutorTurn(itemId: number, messages: TutorMessage[]): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not set — add it to .env.local to enable the tutor.");
  }

  const [item] = await db.select().from(items).where(eq(items.id, itemId));
  if (!item) throw new Error(`item ${itemId} not found`);

  const options = await db.select().from(itemOptions).where(eq(itemOptions.itemId, itemId));
  const sortedOptions = options.sort((a, b) => a.position - b.position);

  const conceptRows = await db
    .select({ name: concepts.name })
    .from(itemConcepts)
    .innerJoin(concepts, eq(concepts.id, itemConcepts.conceptId))
    .where(eq(itemConcepts.itemId, itemId));

  let passageBody: string | null = null;
  if (item.passageId) {
    const [passage] = await db.select().from(passages).where(eq(passages.id, item.passageId));
    passageBody = passage?.body ?? null;
  }

  const system = buildSystemPrompt({
    stem: item.stem,
    passageBody,
    correctReasoning: item.correctReasoning,
    options: sortedOptions,
    conceptNames: conceptRows.map((c) => c.name),
  });

  const client = new Anthropic({ apiKey });
  const userTurns: Anthropic.MessageParam[] =
    messages.length > 0
      ? messages.map((m) => ({ role: m.role, content: m.content }))
      : [{ role: "user", content: "(the student just opened the tutor for this item — start the conversation)" }];

  const response = await client.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 400,
    system,
    messages: userTurns,
  });

  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock && textBlock.type === "text" ? textBlock.text : "";
}
