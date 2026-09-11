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

  // --- Chem/Phys (batch 2) -----------------------------------------------------
  {
    key: "cp_calorimetry",
    section: "cp",
    title: "Determining a metal's specific heat by calorimetry",
    topic: "thermodynamics",
    body: `A student heats a 50 g sample of an unknown metal to 95°C and then drops it into 100 g of water at 22°C inside an insulated calorimeter. The mixture reaches a final equilibrium temperature of 26°C. Assuming no heat is lost to the surroundings or the calorimeter itself, the heat lost by the metal as it cools must equal the heat gained by the water as it warms. The student uses the known specific heat of water (4.18 J/g·°C) and the measured temperature changes to solve for the metal's unknown specific heat, then compares the result to a reference table to identify the metal.`,
  },
  {
    key: "cp_projectile_lab",
    section: "cp",
    title: "A projectile launch lab",
    topic: "kinematics",
    body: `A lab group launches a small ball horizontally off the edge of a table with an initial speed of 3.0 m/s, aiming to predict where it will land on the floor below. They reason that the ball's horizontal and vertical motions can be analyzed independently: horizontally, the ball moves at a constant 3.0 m/s with no horizontal acceleration (ignoring air resistance), while vertically, it accelerates downward at g starting from zero vertical velocity, exactly as if it had simply been dropped from the same height. The group measures the table height, calculates the time to fall using only the vertical motion equations, and then multiplies that time by the constant horizontal speed to predict the landing distance from the table's edge.`,
  },

  // --- Bio/Biochem (batch 2) -----------------------------------------------------
  {
    key: "bb_action_potential",
    section: "bb",
    title: "Propagation of an action potential along an axon",
    topic: "neurophysiology",
    body: `A neuron at rest maintains a membrane potential of about -70 mV, with sodium (Na+) concentrated outside the cell and potassium (K+) concentrated inside, a gradient maintained by the sodium-potassium pump. When a stimulus depolarizes the membrane past a threshold (around -55 mV), voltage-gated Na+ channels open, and Na+ rushes into the cell, rapidly driving the membrane potential positive. Shortly after, voltage-gated Na+ channels inactivate while voltage-gated K+ channels open, allowing K+ to flow out and repolarize the membrane, often briefly overshooting the resting potential (hyperpolarization) before the membrane settles back to rest. This entire sequence at one point on the membrane triggers depolarization at the immediately adjacent patch of membrane, propagating the action potential down the length of the axon without any loss of signal strength.`,
  },
  {
    key: "bb_immune_response",
    section: "bb",
    title: "Primary versus secondary immune response",
    topic: "immunology",
    body: `When the immune system first encounters a novel pathogen, B and T lymphocytes specific to that pathogen's antigens must be located and activated from a large, mostly naive pool, a process that takes roughly one to two weeks before antibody levels peak — the primary response. During this response, some activated B cells differentiate into long-lived memory B cells rather than short-lived antibody-secreting plasma cells. If the same pathogen is encountered again, these memory cells allow a secondary response that is both faster (peaking in just a few days) and larger in magnitude than the primary response, typically clearing the pathogen before symptoms become severe. Vaccination exploits this mechanism by safely generating a primary response and a pool of memory cells in advance of any real exposure.`,
  },

  // --- Psych/Soc (batch 2) -----------------------------------------------------
  {
    key: "ps_health_behavior_study",
    section: "ps",
    title: "Predicting adherence to a new medication regimen",
    topic: "health psychology",
    body: `Researchers surveyed patients newly prescribed a daily medication for a chronic condition, measuring each patient's perceived susceptibility to complications if they skipped doses, their perceived severity of those complications, their perceived benefits of adherence, and the perceived barriers (cost, inconvenience, side effects) to taking the medication consistently. Patients who rated both perceived susceptibility and perceived severity as high, and who rated perceived benefits as outweighing perceived barriers, were substantially more likely to report consistent adherence at a three-month follow-up than patients with any other combination of these ratings. Notably, patients who rated the condition as severe but did not see themselves as personally susceptible to complications showed adherence rates barely above patients who rated both severity and susceptibility as low.`,
  },
  {
    key: "ps_social_facilitation_study",
    section: "ps",
    title: "Audience effects on task performance",
    topic: "social psychology",
    body: `Researchers had participants complete two types of tasks — one well-practiced and simple (signing their own name repeatedly) and one novel and complex (tracing a shape visible only in a mirror) — either alone or in the presence of an audience of observers. On the simple, well-practiced task, participants performed faster and with fewer errors when observed than when alone. On the novel, complex task, the pattern reversed: observed participants performed slower and made more errors than participants working alone. The researchers also found that when participants performed the same tasks as an anonymous member of a large group rather than as identifiable individuals, performance on the simple task no longer improved, and effort on both tasks declined compared to working alone.`,
  },

  // --- CARS (batch 2) --------------------------------------------------------------
  {
    key: "cars_paradox_of_choice",
    section: "cars",
    title: "The paradox of choice",
    topic: "decision theory",
    body: `More options are usually assumed to make a decision-maker better off, since additional alternatives can only be ignored, never mandatory. But this assumption treats the act of choosing itself as costless, when in practice evaluating each additional option consumes time, attention, and confidence. Beyond some point, additional alternatives can leave a chooser not better equipped but more anxious about having overlooked a superior option, and more prone to regret whatever is eventually chosen. If this is right, the traditional economic picture of choice — where an ideal decision-maker simply selects the best of all available options — understates a real cost that scales with the size of the option set itself, a cost that no amount of information about the individual options can offset.`,
  },
  {
    key: "cars_built_environment",
    section: "cars",
    title: "Designing streets for behavior, not just traffic",
    topic: "public health",
    body: `Traffic engineers have long designed streets primarily to move vehicles efficiently, treating pedestrian and cyclist safety as a constraint to be satisfied rather than a design goal in its own right. Public health researchers studying injury rates have increasingly challenged this priority, arguing that a street's design does more to determine driver behavior than posted speed limits or signage ever could: a wide, straight street with few visual obstructions invites higher speeds regardless of what the speed limit sign says, while a narrower street with parked cars, trees, and tighter turns naturally slows traffic by making higher speeds feel effortful and risky to the driver. On this view, a persistent speeding problem is best treated not as a matter of insufficient enforcement or driver discipline, but as evidence that the street itself was designed for a different, faster kind of use than the one now considered desirable.`,
  },
  {
    key: "cars_humor_theory",
    section: "cars",
    title: "What makes a joke funny",
    topic: "aesthetics",
    body: `Theories of humor have long struggled to explain why an incongruity — a punchline that violates what a listener expected — is sometimes funny and sometimes merely confusing or unsettling. One influential answer holds that incongruity alone is not sufficient; the violation must also be resolved as benign, understood by the listener as ultimately safe, harmless, or not a real threat to anyone's well-being, once its logic is worked out. Under this view, the same incongruous premise can land as comedy or as horror depending entirely on whether the surrounding context signals safety or danger, which would explain why identical jokes can fail completely when told in a context that makes the underlying violation feel genuinely threatening rather than playful.`,
  },
  {
    key: "cars_ship_of_theseus",
    section: "cars",
    title: "Identity over time and the Ship of Theseus",
    topic: "philosophy",
    body: `The ancient puzzle of the Ship of Theseus asks whether a ship remains the same ship after every one of its original planks has been replaced, one at a time, during routine repairs. Most people's intuitions say yes — gradual replacement seems compatible with persistence of identity — yet the same intuition falters when a further twist is added: suppose the discarded original planks are collected and reassembled into a second ship. Now there appear to be two candidates for the "real" ship of Theseus, and no principled way to award the title to one over the other using only the criteria that made the first scenario feel unproblematic. The puzzle suggests that ordinary judgments about identity over time may rest on criteria — spatiotemporal continuity, sameness of material — that quietly diverge once pushed to their limits, rather than tracking any single underlying fact about what identity really consists in.`,
  },
  {
    key: "cars_anthropomorphism",
    section: "cars",
    title: "Why we anthropomorphize machines",
    topic: "philosophy of mind",
    body: `Users of voice assistants and chatbots routinely say "please" and "thank you" to software they know is not conscious, and many report genuine discomfort at the idea of being rude to it. One explanation dismisses this as simple confusion, a failure to fully internalize that no one is home behind the interface. A more interesting explanation holds that the politeness is not really about the machine at all: it is a form of self-regulation, a way of maintaining habits of civility that the speaker does not want to see erode even in contexts where, strictly speaking, no one can be wronged by their absence. On this second account, anthropomorphizing a chatbot is less a mistake about what the chatbot is and more a decision about what kind of person the user wants to remain, regardless of who or what is listening.`,
  },
  {
    key: "cars_gift_economics",
    section: "cars",
    title: "The economics of gift-giving",
    topic: "economics",
    body: `Economists have long noted an apparent inefficiency in gift-giving: a giver spends money to buy something the recipient would often not have chosen for themselves, producing, on average, less satisfaction per dollar than if the recipient had simply been given cash to spend as they wished. Yet gift-giving persists and is not obviously irrational, which suggests the standard efficiency calculation is measuring the wrong thing. An alternative account holds that a gift's value lies substantially in what choosing it reveals about the giver's attention to the recipient's particular tastes, a signal that cash — precisely because it requires no such attention — cannot send. Under this account, the "inefficiency" economists measure is not a flaw in gift-giving but the cost of purchasing a signal that a more efficient transfer could never provide.`,
  },
  {
    key: "cars_collective_memory",
    section: "cars",
    title: "Collective memory and oral tradition",
    topic: "history",
    body: `Communities without written records have often been assumed by outsiders to possess only a hazy, unreliable sense of their own past, since oral transmission seems obviously more prone to distortion than a fixed written text. Anthropologists studying oral tradition in practice have complicated this assumption, documenting cases where genealogies or historical accounts passed down orally across many generations remained remarkably stable, preserved by formal recitation practices, communal correction of errors during retelling, and social investment in getting the account right. This suggests the reliability of a historical record depends less on whether it is written or spoken and more on whether a community has built institutions — of whatever form — dedicated to checking and preserving it, a possibility the written/oral distinction alone obscures.`,
  },
  {
    key: "cars_imperfection_aesthetics",
    section: "cars",
    title: "The appeal of visible imperfection",
    topic: "aesthetics",
    body: `Certain aesthetic traditions deliberately incorporate visible flaws — an asymmetry left uncorrected, a crack in ceramic filled with visible gold lacquer rather than hidden — treating the imperfection as part of the object's value rather than a defect to be concealed. A purely functional account struggles to explain this, since the flaw contributes nothing to the object's use. A more promising account holds that the visible imperfection serves as a record of the object's particular history — its making, its use, its survival — in a way a flawless, mass-producible version could not, converting a mark of wear into a kind of evidence that the object has actually lived a life rather than merely existing as an interchangeable specimen of its type.`,
  },
  {
    key: "cars_rhetoric_of_apology",
    section: "cars",
    title: "What makes an apology land",
    topic: "rhetoric",
    body: `Public apologies are frequently criticized as insincere even when they include the expected components — an acknowledgment of wrongdoing, an expression of regret, and a statement of intent to do better. This suggests that sincerity, whatever it is, is not simply a matter of including the right verbal ingredients. One account locates the missing element in costliness: an apology is judged sincere to the extent that it imposes some genuine cost on the person offering it — a real sacrifice, a real change in behavior, a real risk to reputation — since only a costly signal is hard for an insincere apologizer to fake cheaply. On this account, an apology that costs the speaker nothing beyond the words themselves will tend to be received as strategic regardless of how carefully its language is crafted, because listeners are implicitly pricing the apology's cost, not just parsing its content.`,
  },
  {
    key: "cars_maps_and_power",
    section: "cars",
    title: "Maps as arguments, not neutral records",
    topic: "geography",
    body: `A map is often treated as a neutral, technical translation of physical space onto paper, faithful to the terrain it represents. Critical geographers have challenged this view, pointing out that every map involves choices — what to include, what to omit, which projection to use, whose place names to adopt — that are not dictated by the terrain itself but by the purposes and priorities of whoever made the map. A map drawn to aid a colonial administration will foreground different features than one drawn to aid a hiker, even of the identical terrain, and neither is simply "more accurate" in some purpose-independent sense. This reframes cartography as an inherently rhetorical practice: a map does not just show where things are, it argues, through its selective inclusions, for a particular way of understanding a place.`,
  },

  // --- Chem/Phys (batch 3) -----------------------------------------------------
  {
    key: "cp_solubility_lab",
    section: "cp",
    title: "Predicting solubility from intermolecular forces",
    topic: "intermolecular forces",
    body: `A chemistry student is asked to predict, before testing, whether several solid compounds will dissolve readily in water. The student reasons from the principle "like dissolves like": water is a highly polar solvent capable of hydrogen bonding, so compounds that are themselves polar or capable of hydrogen bonding with water should dissolve well, while compounds held together primarily by weak, nonpolar dispersion forces should dissolve poorly. Testing an ionic salt, the student predicts high solubility, since the strong dipole of water molecules can surround and stabilize individual ions, overcoming the ionic lattice energy. Testing a nonpolar hydrocarbon wax, the student predicts poor solubility, since water molecules would have to sacrifice favorable hydrogen bonds with each other to accommodate a molecule that can offer no comparable interaction in return.`,
  },
  {
    key: "cp_ir_spectrum",
    section: "cp",
    title: "Identifying functional groups by infrared spectroscopy",
    topic: "spectroscopy",
    body: `Infrared (IR) spectroscopy works by exposing a sample to a range of infrared frequencies and measuring which frequencies are absorbed. A given chemical bond absorbs IR radiation at a frequency that depends on the bond's strength and the masses of the atoms it connects, causing the bond to vibrate (stretch or bend) more energetically; different functional groups therefore produce a distinctive pattern of absorption peaks. A chemist analyzing an unknown compound's IR spectrum looks first at the broad, strong stretching regions characteristic of easily identified groups — a broad peak around 3300 wavenumbers suggesting an O-H or N-H bond, a sharp strong peak near 1700 wavenumbers suggesting a C=O bond — before examining the more complex "fingerprint region" at lower wavenumbers, which is often unique enough to a specific molecule to allow comparison against a reference library.`,
  },

  // --- Bio/Biochem (batch 3) -----------------------------------------------------
  {
    key: "bb_carbohydrate_digestion",
    section: "bb",
    title: "Enzymatic digestion of dietary starch",
    topic: "carbohydrate metabolism",
    body: `Dietary starch, a polysaccharide made of long chains of glucose units, cannot be absorbed directly by intestinal cells and must first be broken down into individual glucose monomers. Digestion begins in the mouth, where salivary amylase begins hydrolyzing the glycosidic bonds linking glucose units into shorter chains, though this process is interrupted once food reaches the acidic environment of the stomach, which denatures the enzyme. In the small intestine, pancreatic amylase resumes breaking the starch chains into smaller fragments, and enzymes anchored to the intestinal lining complete the process, cleaving these fragments into free glucose molecules that intestinal cells can then absorb via active transport into the bloodstream.`,
  },
  {
    key: "bb_nephron_filtration",
    section: "bb",
    title: "Filtration and reabsorption in the nephron",
    topic: "renal physiology",
    body: `Each nephron, the functional unit of the kidney, begins with the glomerulus, a tuft of capillaries where blood pressure forces water, ions, glucose, and small molecules out of the blood and into Bowman's capsule, forming filtrate; larger components like blood cells and most proteins remain in the blood. As this filtrate travels through the proximal tubule, the loop of Henle, the distal tubule, and the collecting duct, most of the filtered water, glucose, and ions are selectively reabsorbed back into the blood via surrounding capillaries, while some additional wastes are secreted into the tubule from the blood. Under normal conditions nearly all filtered glucose is reabsorbed, so the appearance of glucose in the final urine typically signals that the filtered glucose load has exceeded the tubule's reabsorption capacity, as occurs in uncontrolled diabetes.`,
  },

  // --- Psych/Soc (batch 3) -----------------------------------------------------
  {
    key: "ps_strange_situation_study",
    section: "ps",
    title: "The Strange Situation and infant attachment styles",
    topic: "attachment",
    body: `In Mary Ainsworth's Strange Situation procedure, an infant and caregiver are observed in a room as the caregiver briefly leaves and then returns, with a stranger also entering and leaving at points during the session. Researchers focus especially on the infant's behavior upon the caregiver's return. Infants who are distressed by the separation but are readily comforted by the caregiver's return, quickly resuming play, are classified as securely attached. Infants who show little distress at separation and largely ignore the caregiver upon return are classified as avoidant. A third pattern, in which infants are highly distressed by separation but respond to the caregiver's return with a mix of seeking comfort and resisting it — for example clinging while also arching away or hitting — is classified as anxious-resistant (ambivalent) attachment.`,
  },
  {
    key: "ps_cross_cultural_study",
    section: "ps",
    title: "Individualism and collectivism across cultures",
    topic: "cultural psychology",
    body: `Cross-cultural psychologists have documented systematic differences in how individuals in different societies describe themselves and explain their own behavior. Participants from societies often characterized as individualist tend to describe themselves using internal, trait-based terms ("I am ambitious") and to explain their own behavior by appeal to personal preferences and internal states. Participants from societies often characterized as collectivist tend to describe themselves more often in terms of social roles and relationships ("I am a daughter, a member of my community") and to explain behavior more readily by appeal to social obligations, relationships, and context. Researchers caution that these are population-level tendencies observed across large samples, not fixed rules describing any given individual, and that most societies show a mix of both orientations depending on the specific domain of life being considered.`,
  },

  // --- CARS (batch 3) --------------------------------------------------------------
  {
    key: "cars_tyranny_of_clock",
    section: "cars",
    title: "The tyranny of the clock",
    topic: "history of timekeeping",
    body: `Before mechanical clocks became widespread, most people organized their days around events — sunrise, the completion of a task, the ringing of a bell for a specific purpose — rather than around a uniform, abstract measure of elapsed time. The spread of the factory clock is often credited with introducing a new discipline: workers were now paid, scheduled, and disciplined according to a clock's indifferent ticking rather than the natural completion of a task. Critics of this shift have argued that clock time did not simply measure labor more accurately but actively reorganized what counted as labor in the first place, since a task-based day has no natural concept of "wasted time" between tasks, while a clock-based day converts every unproductive minute into a visible, countable loss — a loss that did not exist, even in principle, before the clock made it measurable.`,
  },
  {
    key: "cars_rosy_retrospection",
    section: "cars",
    title: "Why we misremember how bad the past felt",
    topic: "psychology of memory",
    body: `People asked to recall how they felt during a difficult period — a hard semester, a demanding trip — often rate the experience, in retrospect, as more positive than the moment-by-moment reports they gave while actually living through it. One explanation treats this simply as motivated forgetting, a self-serving edit that makes the past more flattering. A less flattering-to-the-rememberer but perhaps more accurate explanation holds that memory for extended experiences is not an average of every moment but a reconstruction weighted heavily toward the ending and toward a few salient peaks, largely discarding the tedious middle. If the second account is correct, "misremembering" the past as better than it felt is not really a distortion introduced after the fact, but a direct consequence of how experience gets summarized into memory in the first place.`,
  },
  {
    key: "cars_norman_doors",
    section: "cars",
    title: "Doors that lie to you",
    topic: "design",
    body: `A door that must be pulled but is fitted with a flat plate handle, which visually suggests pushing, will reliably cause people to push it first — and the mistake is not the fault of the person pushing. Designers call this a failure of "affordance": the visible features of an object should suggest, without any label or instruction, how it is meant to be used, and a design that suggests the wrong action has failed regardless of how capable or attentive its users are. This principle generalizes well beyond doors: a well-designed interface, tool, or system requires no manual because its correct use is legible from its shape and arrangement alone, while a poorly designed one requires users to memorize an arbitrary correction to what their eyes are telling them, and will keep producing the same "human error" indefinitely, no matter how many people encounter it.`,
  },
  {
    key: "cars_currency_representation",
    section: "cars",
    title: "What money actually represents",
    topic: "philosophy of economics",
    body: `A coin or banknote is often assumed to have value because of some property intrinsic to the object itself — the metal it contains, the promise printed on its face. Modern fiat currency makes this assumption difficult to sustain, since a banknote's material cost is negligible and no metal backs its value. A more accurate account treats currency's value as entirely relational: a currency is valuable to the extent that a large enough community of others is confidently expected to accept it in exchange for goods and labor, a form of value that exists only in the collective expectation and evaporates rapidly once that expectation breaks down, as in a hyperinflationary collapse. On this view, asking "what backs the currency" independently of collective confidence is close to a category error — the confidence is not a precondition for the currency's value, it is the value.`,
  },
  {
    key: "cars_eavesdropping_ethics",
    section: "cars",
    title: "The ethics of overhearing",
    topic: "ethics",
    body: `Deliberately eavesdropping on a private conversation is widely considered a clear ethical violation, but the ethical status of merely overhearing one — without any intention to listen in — is treated far more ambiguously, even though the informational outcome for the listener can be identical. One account locates the moral difference entirely in intention: since the overhearer did nothing to bring the information to themselves, no wrong has been committed regardless of what they now know. A competing account argues that once information has been overheard, however innocently, further ethical obligations attach to what the listener does next — repeating it, acting on it, or pretending not to have heard it — meaning the initial innocence of overhearing does not settle the ethics of the situation but merely opens a second set of questions the intention-based account leaves unaddressed.`,
  },
  {
    key: "cars_street_naming",
    section: "cars",
    title: "What street names are actually for",
    topic: "urban history",
    body: `Street names are often treated as simple labels, chosen for navigation and otherwise arbitrary. A closer look at how cities actually name and rename their streets suggests otherwise: renaming a street after a historical figure is rarely a neutral administrative act, and disputes over such renamings are rarely about navigation at all, since any name would serve equally well for wayfinding. What is actually being contested in these disputes is whose history the everyday, unremarkable act of giving directions will quietly repeat, thousands of times a day, to residents who may never consciously register the name's origin at all. A street name, on this account, functions less like a label and more like a very slow, very durable form of public commemoration — one that most people encounter too casually to notice they are encountering it at all.`,
  },
  {
    key: "cars_true_crime_appeal",
    section: "cars",
    title: "The appeal of true crime storytelling",
    topic: "media studies",
    body: `The popularity of true crime as entertainment is often explained as simple morbid curiosity, but this explanation struggles to account for the genre's most common narrative shape: true crime stories are disproportionately told from the perspective of the investigator working toward a solution, rather than from the perspective of the victim or the crime itself. This structural choice suggests a different appeal than pure morbidity: what the genre most reliably offers is not exposure to violence but the satisfaction of a chaotic, frightening event being rendered comprehensible and ultimately controlled through careful reasoning. Under this account, true crime's core promise is closer to that of a puzzle or a procedural drama than to horror, which would explain why unsolved cases, however dramatic, tend to be far less commercially popular than cases with a clear resolution.`,
  },
  {
    key: "cars_improvisation_illusion",
    section: "cars",
    title: "The illusion of spontaneity in improvisation",
    topic: "performance studies",
    body: `Skilled improvisational performers are often praised for spontaneity, as though their work emerges from nothing in the moment of performance. Performers themselves frequently describe the experience differently: what looks like spontaneous invention is typically built from a large repertoire of previously rehearsed patterns, phrases, and structures, recombined quickly enough that the recombination itself is what feels improvised, even to the performer. This suggests that what audiences experience as spontaneity is not the absence of preparation but its successful concealment — the performer has practiced enough distinct components, and enough ways of joining them, that no single combination needs to have been planned in advance for the overall performance to feel unplanned. Genuine spontaneity, on this account, may be less valuable to good improvisation than a large enough stock of prepared material to make planning invisible.`,
  },
  {
    key: "cars_recipe_copyright",
    section: "cars",
    title: "Why a recipe is hard to copyright",
    topic: "intellectual property",
    body: `A chef who spends years developing a distinctive dish generally cannot copyright the recipe itself, a fact that strikes many people as an odd gap in intellectual property protection given how much creative work can go into a dish. Copyright law's usual explanation is that a recipe's list of ingredients and basic steps is a functional process, akin to an instruction manual, rather than an expressive work — and functional processes are traditionally excluded from copyright regardless of how much ingenuity produced them, on the theory that granting exclusive rights over a method would improperly restrict others from independently discovering and using the same functional solution. What can be protected is the specific expressive language used to describe the recipe, such as an accompanying essay or distinctive photography, but never the underlying sequence of actions the recipe instructs a cook to perform.`,
  },
  {
    key: "cars_small_talk_function",
    section: "cars",
    title: "What small talk is actually doing",
    topic: "sociolinguistics",
    body: `Small talk — remarks about weather, weekend plans, minor pleasantries exchanged between near-strangers — is frequently dismissed as empty or meaningless precisely because so little substantive information is exchanged. This dismissal assumes conversation's only legitimate function is transmitting information, an assumption sociolinguists studying everyday interaction have challenged. On their account, small talk's real function is not informational but relational: it signals, through a low-stakes exchange, that both parties are willing to engage cooperatively and are not hostile or withdrawn, establishing a minimal baseline of social trust before (or instead of) any substantive exchange occurs. Under this view, judging small talk by how much information it conveys is analogous to judging a handshake by how much it tells you about someone's grip strength — measuring the wrong thing, since the real content of the exchange lies in the willingness to perform it at all.`,
  },
];
