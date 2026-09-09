/**
 * Seed data for local dev. All item/passage content below is original,
 * authored for this project — no AAMC/UWorld/Kaplan/Blueprint material is
 * used, per §10.0 of the design doc. AAMC content-category codes are used
 * only as taxonomy labels, which the doc explicitly permits.
 */
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

async function main() {
  console.log("Seeding...");

  // --- demo user ---------------------------------------------------------
  const [user] = await db
    .insert(users)
    .values({ email: "demo@example.com", displayName: "Demo Student", hoursPerDay: 2 })
    .returning();

  // --- concepts ------------------------------------------------------------
  const [logMath] = await db
    .insert(concepts)
    .values({
      section: "cp",
      aamcCategory: "5A",
      name: "log_math_estimation",
      estLearnMinutes: 8,
    })
    .returning();

  const [acidBase] = await db
    .insert(concepts)
    .values({
      section: "cp",
      aamcCategory: "5A",
      name: "acid_base_titration",
      estLearnMinutes: 12,
    })
    .returning();

  const [aminoPka] = await db
    .insert(concepts)
    .values({
      section: "cp",
      aamcCategory: "5A",
      name: "amino_acid_pKa_reasoning",
      estLearnMinutes: 15,
    })
    .returning();

  const [aminoStructure] = await db
    .insert(concepts)
    .values({
      section: "bb",
      aamcCategory: "1A",
      name: "amino_acid_structure",
      estLearnMinutes: 10,
    })
    .returning();

  const [peptideBond] = await db
    .insert(concepts)
    .values({
      section: "bb",
      aamcCategory: "1A",
      name: "peptide_bond_formation",
      estLearnMinutes: 10,
    })
    .returning();

  const [attribution] = await db
    .insert(concepts)
    .values({
      section: "ps",
      aamcCategory: "7A",
      name: "attribution_theory",
      estLearnMinutes: 10,
    })
    .returning();

  const [socialIdentity] = await db
    .insert(concepts)
    .values({
      section: "ps",
      aamcCategory: "7B",
      name: "social_identity_theory",
      estLearnMinutes: 10,
    })
    .returning();

  // CARS has no content model — these are skill labels, not content (§1.4)
  const [carsComprehension] = await db
    .insert(concepts)
    .values({ section: "cars", aamcCategory: "SIRS1", name: "cars_comprehension", estLearnMinutes: 5 })
    .returning();

  const [carsBeyondText] = await db
    .insert(concepts)
    .values({
      section: "cars",
      aamcCategory: "SIRS3",
      name: "cars_reasoning_beyond_text",
      estLearnMinutes: 5,
    })
    .returning();

  // --- prerequisite edges (§2 example: acid_base_titration <- log_math_estimation) ---
  await db.insert(conceptEdges).values([
    { prereqId: logMath.id, dependentId: acidBase.id, strength: 0.7 },
    { prereqId: acidBase.id, dependentId: aminoPka.id, strength: 0.8 },
    { prereqId: aminoStructure.id, dependentId: aminoPka.id, strength: 0.5 },
    { prereqId: aminoStructure.id, dependentId: peptideBond.id, strength: 0.6 },
  ]);

  // --- passages ------------------------------------------------------------
  const [pkaPassage] = await db
    .insert(passages)
    .values({
      section: "cp",
      title: "Buffering capacity of a diprotic amino acid",
      body: `Glycine exists in solution as a diprotic species with two titratable groups: the carboxyl group (pKa1 ≈ 2.3) and the amino group (pKa2 ≈ 9.6). A researcher dissolves glycine in water and titrates the solution with NaOH while recording pH. Near each pKa, the solution resists changes in pH as OH- is added, because the conjugate acid-base pair present at that point neutralizes added base without a large pH shift. Far from either pKa, the same increment of NaOH produces a much larger pH change. The isoelectric point, where the net charge on glycine is zero, falls at the average of the two pKa values.`,
      wordCount: 108,
      topic: "amino acid titration",
      difficulty: 0,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  const [carsPassage] = await db
    .insert(passages)
    .values({
      section: "cars",
      title: "On the habit of revision",
      body: `Most people treat a first draft as a diminished version of the finished piece, something to be tolerated on the way to the real work. This gets the relationship backward. A first draft is not a weak copy of the final text; it is a different kind of object entirely, one whose job is to discover what the piece is about rather than to state it. Writers who revise well tend to describe early drafts not as failures but as instruments of discovery, artifacts whose main value was used up in the writing of them. The discomfort many writers feel toward their own drafts, then, may be a category error: they are judging a tool by the standards of a finished product.`,
      wordCount: 114,
      topic: "writing process",
      difficulty: 0,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  // --- items -----------------------------------------------------------------

  // 1. C/P discrete — log_math_estimation
  const [item1] = await db
    .insert(items)
    .values({
      type: "discrete",
      stem: "A solution has a hydrogen ion concentration of 4 × 10⁻⁶ M. Without a calculator, this pH is closest to:",
      correctReasoning:
        "log(4×10⁻⁶) ≈ log(4) + log(10⁻⁶) ≈ 0.6 − 6 = −5.4, so pH ≈ 5.4, closest to 5.",
      status: "active",
      difficultyB: -0.3,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  await db.insert(itemOptions).values([
    { itemId: item1.id, position: 0, text: "3", isCorrect: false, errorType: "sign_or_direction_reversal", whyAStudentPicksThis: "Confuses concentration exponent with pH directly." },
    { itemId: item1.id, position: 1, text: "5", isCorrect: true },
    { itemId: item1.id, position: 2, text: "6", isCorrect: false, errorType: "unit_or_order_of_magnitude_error", whyAStudentPicksThis: "Ignores the leading coefficient (4) and just negates the exponent." },
    { itemId: item1.id, position: 3, text: "8", isCorrect: false, errorType: "reciprocal_or_inverted_relationship", whyAStudentPicksThis: "Inverts the relationship between [H+] and pH." },
  ]);
  await db.insert(itemConcepts).values({ itemId: item1.id, conceptId: logMath.id, weight: 1 });

  // 2. C/P discrete — acid_base_titration
  const [item2] = await db
    .insert(items)
    .values({
      type: "discrete",
      stem: "A weak acid buffer is at a pH equal to its pKa. If a small amount of strong base is added, the ratio [A-]/[HA]:",
      correctReasoning:
        "At pH = pKa, [A-]/[HA] = 1. Adding base converts some HA to A-, so the ratio increases modestly but the buffer resists a large pH swing — that resistance is the defining feature of the buffering region.",
      status: "active",
      difficultyB: 0.1,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  await db.insert(itemOptions).values([
    { itemId: item2.id, position: 0, text: "Increases slightly, and pH rises only slightly", isCorrect: true },
    { itemId: item2.id, position: 1, text: "Stays exactly at 1, and pH does not change at all", isCorrect: false, errorType: "correct_concept_wrong_step_in_sequence", whyAStudentPicksThis: "Overextends 'resists pH change' to mean 'no change at all'." },
    { itemId: item2.id, position: 2, text: "Decreases, and pH falls", isCorrect: false, errorType: "sign_or_direction_reversal", whyAStudentPicksThis: "Reverses the direction of the equilibrium shift on adding base." },
    { itemId: item2.id, position: 3, text: "Increases sharply, causing a large pH jump", isCorrect: false, errorType: "prerequisite_misconception", whyAStudentPicksThis: "Misses that the buffering region is specifically where pH is resistant to change." },
  ]);
  await db.insert(itemConcepts).values({ itemId: item2.id, conceptId: acidBase.id, weight: 1 });

  // 3. C/P passage-based — amino_acid_pKa_reasoning (requires the passage)
  const [item3] = await db
    .insert(items)
    .values({
      passageId: pkaPassage.id,
      type: "passage",
      stem: "According to the passage, the pH region where the glycine solution most strongly resists change upon addition of NaOH is:",
      correctReasoning:
        "The passage states the solution resists pH change 'near each pKa' — this is passage-specific and cannot be answered from outside knowledge of pKa alone without that framing.",
      status: "active",
      difficultyB: 0.4,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  await db.insert(itemOptions).values([
    { itemId: item3.id, position: 0, text: "Near the isoelectric point only", isCorrect: false, errorType: "passage_detail_misread_or_over_extrapolated", whyAStudentPicksThis: "Conflates the isoelectric point (charge-neutral) with the buffering regions (near each pKa)." },
    { itemId: item3.id, position: 1, text: "Near pH 2.3 and near pH 9.6", isCorrect: true },
    { itemId: item3.id, position: 2, text: "At pH 7, regardless of the titratable groups", isCorrect: false, errorType: "outside_knowledge_not_supported_by_passage", whyAStudentPicksThis: "Imports a generic 'neutral pH' assumption not supported by the passage." },
    { itemId: item3.id, position: 3, text: "Uniformly across the entire titration", isCorrect: false, errorType: "true_statement_that_does_not_answer_the_question", whyAStudentPicksThis: "Ignores that the passage explicitly contrasts near-pKa vs. far-from-pKa behavior." },
  ]);
  await db.insert(itemConcepts).values({ itemId: item3.id, conceptId: aminoPka.id, weight: 1 });
  await db.insert(itemSkills).values({ itemId: item3.id, sirsSkill: 2 }); // scientific reasoning/problem solving

  // 4. B/B discrete — amino_acid_structure
  const [item4] = await db
    .insert(items)
    .values({
      type: "discrete",
      stem: "At physiological pH, the side chain of aspartate is best described as:",
      correctReasoning: "Aspartate's side-chain carboxyl has a pKa around 3.9, well below physiological pH ~7.4, so it is deprotonated and negatively charged.",
      status: "active",
      difficultyB: -0.2,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  await db.insert(itemOptions).values([
    { itemId: item4.id, position: 0, text: "Negatively charged", isCorrect: true },
    { itemId: item4.id, position: 1, text: "Positively charged", isCorrect: false, errorType: "sign_or_direction_reversal", whyAStudentPicksThis: "Confuses acidic side chains with basic ones." },
    { itemId: item4.id, position: 2, text: "Uncharged and hydrophobic", isCorrect: false, errorType: "prerequisite_misconception", whyAStudentPicksThis: "Misclassifies an acidic residue as nonpolar." },
    { itemId: item4.id, position: 3, text: "Uncharged and hydrophilic", isCorrect: false, errorType: "correct_concept_wrong_step_in_sequence", whyAStudentPicksThis: "Recognizes polarity but fails to complete the ionization step at physiological pH." },
  ]);
  await db.insert(itemConcepts).values({ itemId: item4.id, conceptId: aminoStructure.id, weight: 1 });

  // 5. B/B discrete — peptide_bond_formation
  const [item5] = await db
    .insert(items)
    .values({
      type: "discrete",
      stem: "Formation of a peptide bond between two amino acids releases which small molecule?",
      correctReasoning: "Peptide bond formation is a condensation reaction: the carboxyl of one amino acid and the amino group of the next combine, releasing water.",
      status: "active",
      difficultyB: -0.6,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  await db.insert(itemOptions).values([
    { itemId: item5.id, position: 0, text: "Water", isCorrect: true },
    { itemId: item5.id, position: 1, text: "Ammonia", isCorrect: false, errorType: "prerequisite_misconception", whyAStudentPicksThis: "Confuses deamination reactions with condensation." },
    { itemId: item5.id, position: 2, text: "Carbon dioxide", isCorrect: false, errorType: "prerequisite_misconception", whyAStudentPicksThis: "Confuses with decarboxylation reactions." },
    { itemId: item5.id, position: 3, text: "Hydrogen gas", isCorrect: false, errorType: "unit_or_order_of_magnitude_error", whyAStudentPicksThis: "Not a plausible byproduct of any amino acid reaction; distractor testing pure guessing." },
  ]);
  await db.insert(itemConcepts).values({ itemId: item5.id, conceptId: peptideBond.id, weight: 1 });

  // 6. P/S discrete — attribution_theory
  const [item6] = await db
    .insert(items)
    .values({
      type: "discrete",
      stem: "A manager assumes an employee missed a deadline because they are lazy, while overlooking that the employee's computer had been down for two days. This is best described as:",
      correctReasoning: "Attributing another person's behavior to dispositional factors while discounting situational factors is the fundamental attribution error.",
      status: "active",
      difficultyB: -0.1,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  await db.insert(itemOptions).values([
    { itemId: item6.id, position: 0, text: "The fundamental attribution error", isCorrect: true },
    { itemId: item6.id, position: 1, text: "The self-serving bias", isCorrect: false, errorType: "prerequisite_misconception", whyAStudentPicksThis: "Self-serving bias concerns attributions about one's own outcomes, not judgments of others." },
    { itemId: item6.id, position: 2, text: "The actor-observer bias", isCorrect: false, errorType: "correct_concept_wrong_step_in_sequence", whyAStudentPicksThis: "Related concept but requires comparing the same person's self- vs. other-attributions, not present here." },
    { itemId: item6.id, position: 3, text: "Cognitive dissonance", isCorrect: false, errorType: "prerequisite_misconception", whyAStudentPicksThis: "Unrelated construct about conflicting beliefs, not attribution." },
  ]);
  await db.insert(itemConcepts).values({ itemId: item6.id, conceptId: attribution.id, weight: 1 });

  // 7. P/S discrete — social_identity_theory
  const [item7] = await db
    .insert(items)
    .values({
      type: "discrete",
      stem: "According to social identity theory, an individual's self-esteem is partly derived from:",
      correctReasoning: "Social identity theory holds that people derive part of their self-concept and self-esteem from membership in social groups, motivating in-group favoritism.",
      status: "active",
      difficultyB: 0.0,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  await db.insert(itemOptions).values([
    { itemId: item7.id, position: 0, text: "Membership in valued social groups", isCorrect: true },
    { itemId: item7.id, position: 1, text: "Individual comparison to a single rival only", isCorrect: false, errorType: "correct_concept_wrong_step_in_sequence", whyAStudentPicksThis: "Confuses social comparison theory's narrower framing with group-based identity." },
    { itemId: item7.id, position: 2, text: "Strict adherence to internal moral standards", isCorrect: false, errorType: "prerequisite_misconception", whyAStudentPicksThis: "Describes self-discrepancy theory, not social identity theory." },
    { itemId: item7.id, position: 3, text: "Genetic predisposition toward extraversion", isCorrect: false, errorType: "outside_knowledge_not_supported_by_passage", whyAStudentPicksThis: "Imports a personality-trait framework unrelated to the theory being tested." },
  ]);
  await db.insert(itemConcepts).values({ itemId: item7.id, conceptId: socialIdentity.id, weight: 1 });

  // 8-9. CARS passage-based
  const [item8] = await db
    .insert(items)
    .values({
      passageId: carsPassage.id,
      type: "passage",
      stem: "The passage suggests that writers who are uncomfortable with their own early drafts may be making which error?",
      correctReasoning:
        "The passage's final sentence states this discomfort 'may be a category error: they are judging a tool by the standards of a finished product' — directly answerable only from the passage.",
      status: "active",
      difficultyB: 0.2,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  await db.insert(itemOptions).values([
    { itemId: item8.id, position: 0, text: "Judging an instrument of discovery by the standards of a finished product", isCorrect: true },
    { itemId: item8.id, position: 1, text: "Underestimating how much time revision actually takes", isCorrect: false, errorType: "passage_detail_misread_or_over_extrapolated", whyAStudentPicksThis: "Introduces a time-management claim the passage never makes." },
    { itemId: item8.id, position: 2, text: "Failing to outline before writing a first draft", isCorrect: false, errorType: "outside_knowledge_not_supported_by_passage", whyAStudentPicksThis: "Imports generic writing-advice knowledge not present in the passage." },
    { itemId: item8.id, position: 3, text: "Revising too early in the writing process", isCorrect: false, errorType: "true_statement_that_does_not_answer_the_question", whyAStudentPicksThis: "Plausible-sounding writing advice, but not the error the passage names." },
  ]);
  await db.insert(itemConcepts).values({ itemId: item8.id, conceptId: carsComprehension.id, weight: 1 });
  await db.insert(itemSkills).values({ itemId: item8.id, sirsSkill: 1 }); // foundations of comprehension

  const [item9] = await db
    .insert(items)
    .values({
      passageId: carsPassage.id,
      type: "passage",
      stem: "Which of the following, if true, would most directly challenge the passage's central claim?",
      correctReasoning:
        "The passage argues first drafts serve discovery, not final-product quality. A finding that skipping drafting entirely (going straight to a polished version) produces equally strong discovery of ideas would undercut the claim that drafts are a distinct, necessary kind of instrument.",
      status: "active",
      difficultyB: 0.6,
      source: { corpus: "original", license: "original-authored", authored_by: "platform" },
    })
    .returning();

  await db.insert(itemOptions).values([
    { itemId: item9.id, position: 0, text: "Writers who skip drafting and write final versions directly report discovering just as many new ideas about their subject", isCorrect: true },
    { itemId: item9.id, position: 1, text: "Most professional writers produce more than one draft before publication", isCorrect: false, errorType: "true_statement_that_does_not_answer_the_question", whyAStudentPicksThis: "Consistent with, not a challenge to, the passage's claim." },
    { itemId: item9.id, position: 2, text: "Editing software has made revision faster than in previous decades", isCorrect: false, errorType: "passage_detail_misread_or_over_extrapolated", whyAStudentPicksThis: "Irrelevant to whether drafts serve a discovery function." },
    { itemId: item9.id, position: 3, text: "Some writers feel anxious when rereading their own first drafts", isCorrect: false, errorType: "true_statement_that_does_not_answer_the_question", whyAStudentPicksThis: "Restates a premise from the passage rather than challenging the conclusion." },
  ]);
  await db.insert(itemConcepts).values({ itemId: item9.id, conceptId: carsBeyondText.id, weight: 1 });
  await db.insert(itemSkills).values({ itemId: item9.id, sirsSkill: 3 }); // reasoning beyond the text

  console.log(`Seeded 1 user, 9 concepts, 2 passages, 9 items.`);
  console.log(`Demo user id: ${user.id}`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
