import type { PassageDef } from "./types";

/**
 * All original-authored, per §10.0 — no AAMC/UWorld/Kaplan/Blueprint source
 * material. CARS passages are original short essays rather than public-domain
 * excerpts; see README/design-doc note on this tradeoff.
 */
export const passages: PassageDef[] = [
  // --- Chem/Phys -------------------------------------------------------------
  {
    key: "cp_pka_titration",
    section: "cp",
    title: "Buffering capacity of a diprotic amino acid",
    topic: "amino acid titration",
    body: `Glycine exists in solution as a diprotic species with two titratable groups: the carboxyl group (pKa1 ≈ 2.3) and the amino group (pKa2 ≈ 9.6). A researcher dissolves glycine in water and titrates the solution with NaOH while recording pH. Near each pKa, the solution resists changes in pH as OH- is added, because the conjugate acid-base pair present at that point neutralizes added base without a large pH shift. Far from either pKa, the same increment of NaOH produces a much larger pH change. The isoelectric point, where the net charge on glycine is zero, falls at the average of the two pKa values.`,
  },
  {
    key: "cp_circuit_design",
    section: "cp",
    title: "Series and parallel resistor networks in a sensor circuit",
    topic: "circuits",
    body: `An engineer designs a temperature-sensing circuit using a thermistor whose resistance drops as temperature rises. The thermistor is placed in series with a fixed 100-ohm resistor across a 9-volt supply, and the voltage across the fixed resistor is read as the sensor output. At low temperature the thermistor's resistance is much larger than 100 ohms, so nearly all the supply voltage drops across the thermistor and the output voltage is small. As temperature rises and the thermistor's resistance falls toward 100 ohms, a larger share of the total voltage drops across the fixed resistor instead, so the output voltage rises. The engineer notes that if the fixed resistor were instead placed in parallel with the thermistor rather than in series, the pair's combined resistance would always be less than the smaller of the two individual resistances, and the simple voltage-divider relationship used to interpret the sensor's output would no longer apply.`,
  },

  // --- Bio/Biochem -------------------------------------------------------------
  {
    key: "bb_enzyme_inhibition",
    section: "bb",
    title: "Distinguishing competitive from noncompetitive inhibition",
    topic: "enzyme kinetics",
    body: `A biochemist studies an enzyme that converts substrate S to product P and tests two candidate inhibitor compounds, X and Y. Adding compound X raises the enzyme's apparent Km for S while leaving Vmax unchanged, and this effect can be reversed by adding a large excess of S. Adding compound Y instead lowers Vmax while leaving Km essentially unchanged, and increasing the concentration of S does not reverse this effect. The biochemist also finds that X's binding site can be predicted from the structure of S, since X closely resembles the substrate, whereas Y binds a site on the enzyme distinct from the active site and is structurally unrelated to S.`,
  },
  {
    key: "bb_mendelian_cross",
    section: "bb",
    title: "A dihybrid cross in a model plant",
    topic: "genetics",
    body: `A geneticist crosses two pea plants that are each heterozygous for seed color (yellow Y dominant over green y) and seed shape (round R dominant over wrinkled r), with the two genes located on different chromosomes. The parental cross is YyRr x YyRr. Among a large sample of offspring, the geneticist counts approximately 9/16 yellow-round, 3/16 yellow-wrinkled, 3/16 green-round, and 1/16 green-wrinkled — the classic dihybrid ratio expected when the two genes assort independently. In a second experiment, the geneticist crosses a YyRr plant with a yyrr plant (a testcross) and finds the four phenotypic classes appear in a roughly 1:1:1:1 ratio instead.`,
  },

  // --- Psych/Soc -------------------------------------------------------------
  {
    key: "ps_conditioning_study",
    section: "ps",
    title: "An aversion-training study in laboratory rats",
    topic: "learning",
    body: `In a conditioning study, rats are given saccharin-flavored water (a novel taste they initially find appealing) immediately followed by an injection that induces mild nausea. After a single pairing, the rats subsequently avoid saccharin-flavored water even when it is no longer followed by the nauseating injection. In a separate arm of the study, a different group of rats is trained to press a lever for a food pellet on a schedule where a pellet is delivered after a variable, unpredictable number of lever presses rather than after a fixed number. When food delivery is later stopped entirely, the rats trained on the unpredictable schedule continue pressing the lever far longer before giving up than a comparison group trained on a fixed schedule.`,
  },
  {
    key: "ps_conformity_study",
    section: "ps",
    title: "Group pressure and dissent in a decision-making task",
    topic: "social influence",
    body: `Researchers place a participant in a group of confederates who are instructed to unanimously give an obviously incorrect answer to a simple perceptual judgment. Across many trials, a substantial fraction of participants conform to the group's incorrect answer at least once, even though the correct answer is unambiguous when judged alone. When a single confederate is instructed to break with the majority and give the correct answer, conformity among genuine participants drops sharply, even though the majority position is otherwise unchanged. Researchers also find that when participants can respond privately and anonymously rather than aloud in front of the group, conformity rates fall substantially further.`,
  },

  // --- CARS --------------------------------------------------------------------
  {
    key: "cars_revision",
    section: "cars",
    title: "On the habit of revision",
    topic: "writing process",
    body: `Most people treat a first draft as a diminished version of the finished piece, something to be tolerated on the way to the real work. This gets the relationship backward. A first draft is not a weak copy of the final text; it is a different kind of object entirely, one whose job is to discover what the piece is about rather than to state it. Writers who revise well tend to describe early drafts not as failures but as instruments of discovery, artifacts whose main value was used up in the writing of them. The discomfort many writers feel toward their own drafts, then, may be a category error: they are judging a tool by the standards of a finished product.`,
  },
  {
    key: "cars_walkability",
    section: "cars",
    title: "Walkability as an accidental virtue",
    topic: "urban design",
    body: `Cities celebrated today for their walkability were rarely designed with pedestrians foremost in mind; more often, walkability survived as an accident of age, having been laid out before the automobile existed to demand wider streets and greater setbacks. This origin matters for policy, because it suggests that walkability is not a style that can simply be applied to a newer district, but a byproduct of constraints — narrow lots, mixed uses packed close together, a street grid never widened to accommodate car speeds — that most contemporary development is not otherwise inclined to accept. A planner who wants a walkable neighborhood, on this view, is not selecting an aesthetic but reintroducing a set of restrictions that a car-oriented planning process would ordinarily discard.`,
  },
  {
    key: "cars_monuments",
    section: "cars",
    title: "Monuments and the memory they interrupt",
    topic: "historical memory",
    body: `A monument is often treated as a settled verdict on the past, a stone answer to a historical question. But monuments are better understood as arguments frozen at the moment they were persuasive, not as neutral records of what happened. The choice of whom to commemorate, in what pose, and at what scale reflects the priorities of the era that built the monument at least as much as the era it depicts. This is why removing or recontextualizing a monument is not an act of erasing history, as its defenders sometimes claim, but an act of updating an argument that was never history in the first place — merely one generation's case for how the past should be remembered, now open to a later generation's revision.`,
  },
  {
    key: "cars_nostalgia",
    section: "cars",
    title: "The ethics of nostalgia",
    topic: "philosophy",
    body: `Nostalgia is often dismissed as sentimental self-indulgence, a refusal to see the past clearly in favor of a flattering, edited version of it. But this dismissal assumes nostalgia's function is descriptive — that it purports to be an accurate report on how things were. A more charitable reading treats nostalgia as evaluative rather than descriptive: it is less a claim about what the past was like and more a claim about what mattered, a way of marking which relationships, places, or practices a person judges to have been worth having. Under this reading, nostalgia can misfire — it can attach to the wrong thing, or curdle into an excuse for present inaction — but the failure is a failure of judgment, not a categorical failure of honesty, and it does not follow that nostalgia is inherently a distortion of the past.`,
  },
  {
    key: "cars_translation",
    section: "cars",
    title: "What gets lost, and what gets found, in translation",
    topic: "language",
    body: `The common complaint that something is always lost in translation treats translation as a lossy copy of an original, judged by how much of the source it fails to preserve. This framing obscures a second and equally real process: a translation does not only subtract, it also introduces. A translator working between two languages with different grammatical genders, different densities of formal address, or different poetic traditions is not merely failing to preserve the original but actively making choices that add texture the original never had, for readers who never had access to the source in the first place. To describe translation only as loss, then, is to describe half of what actually happens on the page.`,
  },
  {
    key: "cars_attention_economy",
    section: "cars",
    title: "Attention as a scarce resource",
    topic: "economics of media",
    body: `Economists analyzing digital media increasingly describe attention itself as the scarce resource being allocated, with content serving as the mechanism of allocation rather than the product being sold. On this account, a free article or video is not really free; the reader or viewer pays in the currency of attention, which is then resold to advertisers. This reframing has an uncomfortable implication: because attention, unlike money, cannot be saved for later or borrowed against future income, competition for it tends toward whatever reliably captures it in the moment — novelty, outrage, and interruption — regardless of whether those qualities serve the audience's longer-term interests. A market this structured, critics argue, will systematically underproduce content that rewards sustained attention, however much any individual buyer might prefer it.`,
  },
  {
    key: "cars_ritual",
    section: "cars",
    title: "Ritual without belief",
    topic: "sociology of religion",
    body: `Sociologists studying declining religious affiliation have noted a puzzle: many people who no longer hold the doctrinal beliefs associated with a tradition continue to observe its rituals — a holiday meal, a rite of passage, a moment of communal silence. One explanation treats this as mere habit, a vestige that will fade once the beliefs that originally motivated it are gone. A competing explanation holds that ritual and belief were never as tightly coupled as this account assumes; ritual performs social work — marking transitions, binding a group together at a shared moment — that does not depend on the participants sharing a metaphysical commitment. If the second account is right, the persistence of ritual after belief has faded is not a contradiction to be explained away but evidence that ritual was doing its own work all along.`,
  },
  {
    key: "cars_authorship",
    section: "cars",
    title: "The myth of the solitary author",
    topic: "authorship and collaboration",
    body: `The image of the author working alone, producing a text that springs fully formed from a single mind, persists despite substantial evidence against it: editors reshape structure, workshop peers redirect arguments, and even solitary drafting depends on a body of prior work the author has absorbed and is, in some sense, continuing. None of this is controversial among people who study how texts actually get made. What is more contested is what follows from it. Some conclude that individual authorship is therefore a legal fiction useful mainly for assigning credit and liability. Others argue that collaboration at every stage does not erase the meaningful sense in which one person made the decisive choices that give a text its particular shape — the myth may be exaggerated, without being entirely false.`,
  },
  {
    key: "cars_expertise",
    section: "cars",
    title: "What makes someone an expert",
    topic: "epistemology",
    body: `A common definition treats expertise as accumulated correct answers: an expert is someone who reliably gets the right result. This definition works poorly for fields where the right result is only knowable long after the fact, or not at all — a policy expert's advice may look wise or foolish only decades later, if ever. An alternative definition locates expertise not in outcomes but in process: an expert is someone whose reasoning, when examined, reflects a defensible weighing of the available evidence, whether or not that reasoning happens to produce a correct prediction this time. This process-based account has the advantage of being assessable in the moment, but it invites a harder question in turn — who is qualified to judge whether a given process was defensible, if not someone who already has the very expertise in question?`,
  },
  {
    key: "cars_silence_in_music",
    section: "cars",
    title: "Silence as a compositional element",
    topic: "music theory",
    body: `A rest in a musical score is sometimes treated as an absence, a gap between the notes that actually matter. Composers who use silence deliberately resist this framing: a well-placed rest is not an absence of music but a specific compositional choice, shaping the listener's expectation of what comes next and controlling the emotional weight of the sound that follows it. The difference between a phrase that ends and a phrase that is interrupted often comes down entirely to the length and placement of the silence around it. To hear a rest as merely the absence of notes, on this view, is analogous to reading punctuation as merely the absence of letters — technically true, but missing that the gap is doing constructive work rather than simply marking where work has stopped.`,
  },
];
