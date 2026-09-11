import type { ItemDef } from "./types";

export const itemsPs4: ItemDef[] = [
  // --- attribution_theory (2) ---
  {
    concept: "attribution_theory",
    stem: "The 'defensive attribution hypothesis' predicts that observers are more likely to blame a victim for an accident when:",
    reasoning: "The defensive attribution hypothesis predicts that observers who perceive themselves as similar to the victim, or who fear a similar outcome could happen to them, tend to blame the victim more (rather than situational factors) as a way of psychologically distancing themselves from the possibility of a similar fate.",
    difficulty: 0.5,
    options: [
      { text: "The observer perceives themselves as similar to the victim and wants to feel less vulnerable to a similar fate", correct: true },
      { text: "The observer has no similarity to the victim at all and feels no personal risk", errorType: "sign_or_direction_reversal", why: "The hypothesis specifically predicts more victim-blaming when an observer feels personally vulnerable to a similar outcome, not when they feel entirely unaffected." },
      { text: "The accident was clearly caused by a mechanical failure with no human involvement", errorType: "outside_knowledge_not_supported_by_passage", why: "The hypothesis concerns psychological motivations for blame assignment, not cases where causation is already unambiguous and mechanical." },
      { text: "The observer personally witnessed the entire accident in complete detail", errorType: "outside_knowledge_not_supported_by_passage", why: "Direct witnessing of details is not the factor the defensive attribution hypothesis identifies as driving increased victim-blaming; perceived similarity/vulnerability is." },
    ],
  },
  {
    concept: "attribution_theory",
    stem: "Attributing a friend's promotion to 'being in the right place at the right time' rather than to their skill or effort is an example of attributing the outcome to:",
    reasoning: "This is an external (situational) attribution, crediting circumstances rather than the person's own internal traits or effort.",
    difficulty: 0.2,
    options: [
      { text: "External, situational factors", correct: true },
      { text: "Internal, dispositional factors", errorType: "sign_or_direction_reversal", why: "Crediting skill or effort would be an internal attribution; crediting circumstance/luck is external, the opposite." },
      { text: "A stable, unchanging personality trait", errorType: "prerequisite_misconception", why: "'Right place, right time' describes a circumstantial, situational factor, not an internal, stable trait." },
      { text: "The fundamental attribution error specifically", errorType: "prerequisite_misconception", why: "The fundamental attribution error refers to over-crediting disposition and under-crediting situation; this example does the opposite, crediting situation." },
    ],
  },

  // --- social_identity_theory (2) ---
  {
    concept: "social_identity_theory",
    stem: "According to social identity theory, one strategy for improving a low-status group's social identity, distinct from direct competition with the higher-status group, is:",
    reasoning: "Social identity theory describes social creativity as a strategy where a low-status group reframes comparisons — for example, by valuing a different dimension where they excel, or comparing themselves to an even lower-status group — rather than directly competing on the original dimension of disadvantage.",
    difficulty: 0.5,
    options: [
      { text: "Social creativity, redefining or shifting the basis of comparison", correct: true },
      { text: "Ignoring group membership entirely and acting as isolated individuals", errorType: "prerequisite_misconception", why: "This describes individual mobility, a distinct strategy from social creativity, which still operates at the group level by reframing the comparison itself." },
      { text: "Directly overthrowing the higher-status group through competition", errorType: "prerequisite_misconception", why: "This describes social competition, the strategy the question explicitly asks to distinguish social creativity from." },
      { text: "Refusing to acknowledge the existence of a higher-status group", errorType: "outside_knowledge_not_supported_by_passage", why: "Social creativity involves reframing comparisons, not denying the existence of the other group altogether." },
    ],
  },
  {
    concept: "social_identity_theory",
    stem: "Individual mobility, as a response to belonging to a low-status group according to social identity theory, refers to:",
    reasoning: "Individual mobility is the strategy of an individual attempting to leave a low-status group and join a higher-status group, addressing the identity threat at the individual level rather than through collective group action.",
    difficulty: 0.4,
    options: [
      { text: "An individual attempting to leave their group and join a higher-status group", correct: true },
      { text: "The entire group collectively working to raise its status together", errorType: "prerequisite_misconception", why: "Describes a collective strategy (social competition or creativity), whereas individual mobility is specifically an individual-level response." },
      { text: "A group redefining what dimension of comparison matters most", errorType: "prerequisite_misconception", why: "Describes social creativity, a distinct group-level strategy from individual mobility." },
      { text: "A group directly competing with a higher-status group for resources", errorType: "prerequisite_misconception", why: "Describes social competition, a distinct group-level strategy from individual mobility." },
    ],
  },

  // --- classical_conditioning (2) ---
  {
    concept: "classical_conditioning",
    stem: "Preparedness theory, an extension of classical conditioning, proposes that organisms are biologically predisposed to more readily learn associations between certain stimuli, such as taste and nausea, than others. This helps explain why:",
    reasoning: "Preparedness theory explains why taste aversion can be conditioned in a single trial with a long delay between the taste and nausea, unlike most classical conditioning, which typically requires a short interval between stimuli — because taste-illness associations are evolutionarily adaptive and thus more readily learned.",
    difficulty: 0.5,
    options: [
      { text: "Taste aversion can form after just one pairing, even with a long delay before illness", correct: true },
      { text: "All conditioned associations require exactly the same number of pairings to form", errorType: "sign_or_direction_reversal", why: "Preparedness theory specifically explains why some associations (like taste-illness) form unusually easily, contradicting a claim that all associations require equal learning effort." },
      { text: "Organisms cannot learn any taste-based associations at all", errorType: "prerequisite_misconception", why: "Preparedness theory explains why taste-illness associations are learned unusually easily, not that they cannot be learned." },
      { text: "Classical conditioning never occurs in real-world settings outside the laboratory", errorType: "outside_knowledge_not_supported_by_passage", why: "Preparedness theory addresses differential ease of learning specific associations, not a claim that conditioning is confined to laboratory settings." },
    ],
  },
  {
    concept: "classical_conditioning",
    stem: "In classical conditioning, the interstimulus interval refers to:",
    reasoning: "The interstimulus interval is the time gap between the onset of the conditioned stimulus and the onset of the unconditioned stimulus, a timing factor that affects how readily and strongly conditioning occurs.",
    difficulty: 0.3,
    options: [
      { text: "The time between the onset of the conditioned stimulus and the unconditioned stimulus", correct: true },
      { text: "The total number of pairings required for conditioning to occur", errorType: "prerequisite_misconception", why: "Describes trial count, a different variable from the specific timing interval between the two stimuli within a single trial." },
      { text: "The time between the conditioned response and the extinction of that response", errorType: "prerequisite_misconception", why: "This describes something related to extinction timing, not the interstimulus interval, which concerns the CS-US timing within a trial." },
      { text: "The strength of the unconditioned response alone", errorType: "prerequisite_misconception", why: "Response strength is a separate variable from the timing interval between the two stimuli." },
    ],
  },

  // --- operant_conditioning (2) ---
  {
    concept: "operant_conditioning",
    stem: "A secondary (conditioned) reinforcer, such as money, differs from a primary reinforcer, such as food, in that a secondary reinforcer:",
    reasoning: "A secondary reinforcer acquires its reinforcing value through learned association with a primary reinforcer or other established reinforcers, rather than satisfying a biological need directly, as a primary reinforcer does.",
    difficulty: 0.3,
    options: [
      { text: "Acquires its reinforcing value through learned association, rather than satisfying a biological need directly", correct: true },
      { text: "Satisfies a biological need directly, just like a primary reinforcer", errorType: "sign_or_direction_reversal", why: "This is precisely the defining feature of a primary reinforcer, the category secondary reinforcers are being distinguished from." },
      { text: "Is always more effective than any primary reinforcer", errorType: "prerequisite_misconception", why: "Effectiveness isn't the defining distinction; the key difference is the source of reinforcing value (learned vs. innate)." },
      { text: "Cannot be used to shape behavior in any species other than humans", errorType: "outside_knowledge_not_supported_by_passage", why: "Secondary reinforcers (e.g., tokens) have been used to shape behavior in non-human animals as well, not exclusively in humans." },
    ],
  },
  {
    concept: "operant_conditioning",
    stem: "A token economy, used in some clinical and educational settings, applies operant conditioning principles by:",
    reasoning: "A token economy rewards desired behaviors with tokens (a secondary reinforcer) that can later be exchanged for a primary or otherwise desirable reinforcer (a 'backup reinforcer'), leveraging operant reinforcement principles systematically.",
    difficulty: 0.4,
    options: [
      { text: "Rewarding desired behaviors with tokens that can later be exchanged for other reinforcers", correct: true },
      { text: "Punishing all undesired behaviors with immediate physical consequences", errorType: "prerequisite_misconception", why: "A token economy is centered on positive reinforcement via tokens, not primarily on physical punishment." },
      { text: "Using classical conditioning to pair a neutral stimulus with an unconditioned response", errorType: "prerequisite_misconception", why: "A token economy is an operant conditioning application (reinforcing voluntary behavior), not a classical conditioning procedure." },
      { text: "Eliminating all reinforcement to see if behavior persists through extinction", errorType: "prerequisite_misconception", why: "A token economy actively applies reinforcement systematically; it is not designed to study extinction by removing reinforcement." },
    ],
  },

  // --- memory_encoding_and_retrieval (2) ---
  {
    concept: "memory_encoding_and_retrieval",
    stem: "The misinformation effect, studied extensively by Elizabeth Loftus, demonstrates that:",
    reasoning: "The misinformation effect shows that exposure to misleading information after an event can alter a person's memory of that event, causing them to incorporate the false details into their recollection, sometimes with high confidence.",
    difficulty: 0.3,
    options: [
      { text: "Exposure to misleading post-event information can alter a person's memory of the original event", correct: true },
      { text: "Memories, once formed, can never be changed by any subsequent information", errorType: "sign_or_direction_reversal", why: "The misinformation effect specifically demonstrates that memories can be altered by later information, the opposite of permanence." },
      { text: "Eyewitness memory is always more accurate than any other type of memory", errorType: "prerequisite_misconception", why: "The misinformation effect research specifically highlights eyewitness memory's vulnerability to distortion, not superior accuracy." },
      { text: "Only childhood memories are susceptible to being altered by new information", errorType: "prerequisite_misconception", why: "The misinformation effect has been demonstrated across memories of various types and ages, not restricted specifically to childhood memories." },
    ],
  },
  {
    concept: "memory_encoding_and_retrieval",
    stem: "State-dependent memory refers to improved recall when a person's:",
    reasoning: "State-dependent memory refers to enhanced recall when a person's internal physiological or emotional state at retrieval matches their state during encoding (e.g., recalling something better while in a similar mood or under the influence of a similar substance).",
    difficulty: 0.3,
    options: [
      { text: "Internal physiological or emotional state at retrieval matches their state during encoding", correct: true },
      { text: "External physical environment at retrieval matches the environment during encoding", errorType: "prerequisite_misconception", why: "Describes context-dependent memory, a related but distinct concept from state-dependent memory, which concerns internal states rather than external environment." },
      { text: "Memory is tested immediately after encoding, with no delay at all", errorType: "outside_knowledge_not_supported_by_passage", why: "State-dependent memory concerns matching internal states, not simply minimizing the delay between encoding and retrieval." },
      { text: "The information was originally encoded using rote repetition only", errorType: "outside_knowledge_not_supported_by_passage", why: "Encoding strategy (rote repetition vs. deeper processing) is a separate factor from the internal-state matching that defines state-dependent memory." },
    ],
  },

  // --- cognitive_dissonance (2) ---
  {
    concept: "cognitive_dissonance",
    stem: "Cognitive dissonance theory would predict that a person who spends a great deal of money on a car that turns out to have significant problems is most likely to:",
    reasoning: "To reduce the dissonance between 'I spent a lot of money' and 'the car has problems,' the person is likely to minimize or rationalize the problems, or emphasize the car's positive features, rather than fully acknowledging the purchase was a poor decision.",
    difficulty: 0.4,
    options: [
      { text: "Minimize or rationalize the car's problems rather than fully acknowledge the purchase was a mistake", correct: true },
      { text: "Immediately and fully acknowledge the purchase was a complete mistake with no rationalization", errorType: "sign_or_direction_reversal", why: "Dissonance theory predicts the opposite tendency — some degree of rationalization to reduce the discomfort of a costly, flawed decision." },
      { text: "Forget that they ever purchased the car at all", errorType: "prerequisite_misconception", why: "Dissonance theory predicts belief adjustment (rationalization) to resolve discomfort, not complete memory suppression of the purchase itself." },
      { text: "Feel no discomfort at all about the situation", errorType: "prerequisite_misconception", why: "The theory's premise is that this scenario would create genuine dissonance/discomfort, which then motivates the rationalizing response." },
    ],
  },
  {
    concept: "cognitive_dissonance",
    stem: "Which of the following situations would cognitive dissonance theory predict produces the least psychological discomfort?",
    reasoning: "When a behavior that conflicts with a belief is performed under a clear, sufficient external justification (like being paid a large, explicitly-stated amount specifically for the conflicting action), the external cause fully accounts for the behavior, minimizing the need for internal belief change and thus minimizing dissonance.",
    difficulty: 0.5,
    options: [
      { text: "A person who dislikes public speaking gives a speech, having been paid a large sum specifically to do so, with the payment made explicit and salient", correct: true },
      { text: "A person who values honesty tells a small lie with no clear reason to do so", errorType: "sign_or_direction_reversal", why: "Lacking a clear external justification, this scenario would be predicted to produce more, not less, dissonance." },
      { text: "A person who believes exercise is important skips their workout for no particular reason", errorType: "sign_or_direction_reversal", why: "Without a clear external justification for skipping, this scenario should produce meaningful dissonance, not minimal discomfort." },
      { text: "A person who supports a political position votes in line with that same position", errorType: "prerequisite_misconception", why: "Acting consistently with one's own beliefs, with no conflict at all, doesn't create dissonance in the first place, so it isn't a case of minimized dissonance from external justification." },
    ],
  },

  // --- conformity_and_obedience (2) ---
  {
    concept: "conformity_and_obedience",
    stem: "In Milgram's obedience studies, moving the location of the study from a prestigious university to a nondescript office building resulted in:",
    reasoning: "This variation showed a decrease (though still a substantial rate) in obedience, suggesting the perceived legitimacy and authority of the setting itself contributed to participants' willingness to obey.",
    difficulty: 0.4,
    options: [
      { text: "A decrease in obedience rates, though still substantial", correct: true },
      { text: "A complete elimination of any obedience whatsoever", errorType: "prerequisite_misconception", why: "The setting change reduced but did not eliminate obedience; a still-substantial rate of obedience persisted." },
      { text: "An increase in obedience rates compared to the university setting", errorType: "sign_or_direction_reversal", why: "Reverses the actual direction of the effect; obedience decreased, not increased, in the less prestigious setting." },
      { text: "No measurable change at all in obedience rates", errorType: "prerequisite_misconception", why: "The setting variation did produce a measurable change (a decrease) in obedience rates, not no change at all." },
    ],
  },
  {
    concept: "conformity_and_obedience",
    stem: "In Milgram's studies, when two additional 'teachers' (confederates) refused to continue administering shocks, genuine participants' willingness to continue:",
    reasoning: "This variation, similar to breaking unanimity in Asch's conformity studies, dramatically decreased obedience — the presence of peers who model disobedience made it substantially easier for genuine participants to also refuse to continue.",
    difficulty: 0.4,
    options: [
      { text: "Dramatically decreased, as peer disobedience made refusal easier", correct: true },
      { text: "Increased, since more people were now present in the room", errorType: "sign_or_direction_reversal", why: "The presence of more people who model disobedience decreased, rather than increased, the genuine participant's willingness to continue." },
      { text: "Remained completely unaffected by the confederates' behavior", errorType: "prerequisite_misconception", why: "This variation was specifically found to have a substantial effect, sharply reducing obedience rates." },
      { text: "Could not be measured in this particular variation of the study", errorType: "outside_knowledge_not_supported_by_passage", why: "Obedience rates were measured across all of Milgram's variations, including this one." },
    ],
  },

  // --- stereotypes_and_prejudice (2) ---
  {
    concept: "stereotypes_and_prejudice",
    stem: "Aversive racism refers to a form of prejudice in which a person:",
    reasoning: "Aversive racism describes a pattern in which a person consciously holds egalitarian, non-prejudiced values and would strongly reject being called prejudiced, while still harboring subtle, often unconscious negative associations that can influence their behavior in ambiguous situations.",
    difficulty: 0.5,
    options: [
      { text: "Consciously endorses egalitarian values while still harboring subtle, unconscious negative associations", correct: true },
      { text: "Openly and explicitly states discriminatory beliefs without any discomfort", errorType: "sign_or_direction_reversal", why: "Describes old-fashioned overt prejudice, the opposite of aversive racism's conscious egalitarianism paired with unconscious bias." },
      { text: "Holds no biases of any kind, conscious or unconscious", errorType: "prerequisite_misconception", why: "Aversive racism specifically describes the coexistence of conscious egalitarian values with unconscious bias, not a complete absence of any bias." },
      { text: "Is only found among individuals who have never had any contact with an out-group", errorType: "outside_knowledge_not_supported_by_passage", why: "Aversive racism is not defined by lack of out-group contact; it concerns a specific pattern of conscious versus unconscious attitudes." },
    ],
  },
  {
    concept: "stereotypes_and_prejudice",
    stem: "The 'jigsaw classroom' technique, developed to reduce prejudice among students, works by:",
    reasoning: "The jigsaw classroom divides students into diverse groups where each member holds a unique piece of information necessary for the group's success, requiring genuine interdependent cooperation — directly implementing key conditions of the contact hypothesis (equal status, cooperative goals).",
    difficulty: 0.5,
    options: [
      { text: "Requiring interdependent cooperation among diverse students toward a shared goal", correct: true },
      { text: "Separating students by group membership to reduce direct contact", errorType: "sign_or_direction_reversal", why: "The jigsaw classroom specifically increases meaningful, cooperative contact between diverse students, rather than separating them." },
      { text: "Having students compete against each other for the best individual grade", errorType: "sign_or_direction_reversal", why: "The technique is built around cooperation, not competition, consistent with contact hypothesis conditions that reduce prejudice." },
      { text: "Punishing students who express any prejudiced statements", errorType: "outside_knowledge_not_supported_by_passage", why: "The jigsaw classroom's core mechanism is structured cooperative interdependence, not a punishment-based approach to prejudiced speech." },
    ],
  },

  // --- socioeconomic_status_and_health (2) ---
  {
    concept: "socioeconomic_status_and_health",
    stem: "Food deserts, areas with limited access to affordable and nutritious food, are one structural mechanism proposed to link socioeconomic status to health because:",
    reasoning: "Residents of food deserts, often in lower-income areas, may lack convenient access to healthy food options, potentially relying more on less nutritious, processed alternatives, illustrating how socioeconomic and geographic factors together can shape diet-related health outcomes.",
    difficulty: 0.3,
    options: [
      { text: "Limited access to affordable, nutritious food can lead to poorer diet-related health outcomes", correct: true },
      { text: "Food deserts are equally distributed across all income levels", errorType: "prerequisite_misconception", why: "Food deserts are disproportionately associated with lower-income areas, not evenly distributed across all income levels." },
      { text: "Food deserts have no relationship to socioeconomic status", errorType: "prerequisite_misconception", why: "Food deserts are specifically discussed as a socioeconomic and geographic phenomenon linked to health disparities, not as unrelated to socioeconomic status." },
      { text: "Food deserts only affect mental health, not physical health outcomes", errorType: "outside_knowledge_not_supported_by_passage", why: "Food deserts are primarily discussed in relation to diet-related physical health outcomes, not exclusively mental health." },
    ],
  },
  {
    concept: "socioeconomic_status_and_health",
    stem: "Occupational hazards and workplace conditions are considered one mechanism linking socioeconomic status to health because lower-wage jobs:",
    reasoning: "Lower-wage occupations are statistically more likely to involve greater physical hazards, less control over work conditions, and fewer protective benefits, contributing to worse average health outcomes among lower-SES workers.",
    difficulty: 0.3,
    options: [
      { text: "Are statistically more likely to involve greater physical hazards and less control over conditions", correct: true },
      { text: "Always provide better health insurance than higher-wage jobs", errorType: "sign_or_direction_reversal", why: "Lower-wage jobs are generally associated with less, not more, access to health insurance and benefits." },
      { text: "Have no relationship to physical health risks of any kind", errorType: "prerequisite_misconception", why: "Occupational hazard exposure is specifically identified as a mechanism linking lower-wage work to worse health outcomes." },
      { text: "Are only found in a small number of specific industries", errorType: "outside_knowledge_not_supported_by_passage", why: "The socioeconomic-health link via occupational hazard applies broadly across many lower-wage sectors, not a narrow, specific set of industries." },
    ],
  },

  // --- psychosocial_development_stages (2) ---
  {
    concept: "psychosocial_development_stages",
    stem: "Vygotsky's concept of the 'zone of proximal development' refers to:",
    reasoning: "Vygotsky's zone of proximal development is the range of tasks a learner cannot yet do independently but can accomplish with guidance or support from a more knowledgeable other, representing the space where learning is most effectively facilitated.",
    difficulty: 0.4,
    options: [
      { text: "The range of tasks a learner can accomplish with guidance but not yet independently", correct: true },
      { text: "Tasks a learner can already perform entirely independently", errorType: "prerequisite_misconception", why: "Tasks already mastered independently fall outside the zone of proximal development, which specifically concerns tasks requiring assistance." },
      { text: "Tasks a learner will never be able to perform, even with assistance", errorType: "prerequisite_misconception", why: "The zone specifically concerns tasks that ARE achievable with appropriate guidance, not tasks permanently beyond a learner's reach." },
      { text: "A fixed developmental stage that occurs at a specific, universal age", errorType: "prerequisite_misconception", why: "The zone of proximal development is task-specific and varies by individual and context, not a single fixed universal age-stage." },
    ],
  },
  {
    concept: "psychosocial_development_stages",
    stem: "According to Piaget, a child in the preoperational stage typically struggles with tasks requiring conservation (understanding that a quantity remains the same despite a change in appearance) because they:",
    reasoning: "Preoperational children tend to focus on a single perceptually salient dimension of a situation (centration) — for example, the height of a liquid in a container — rather than considering multiple dimensions simultaneously (like height and width together), leading them to conclude quantity has changed when only appearance has.",
    difficulty: 0.4,
    options: [
      { text: "Tend to focus on only one perceptually salient dimension at a time (centration)", correct: true },
      { text: "Have already mastered abstract, hypothetical reasoning", errorType: "prerequisite_misconception", why: "Abstract, hypothetical reasoning is a hallmark of the much later formal operational stage, not the preoperational stage, which struggles with conservation for the opposite reason." },
      { text: "Cannot perceive any visual differences in the stimuli presented to them", errorType: "prerequisite_misconception", why: "Preoperational children can perceive visual differences; their difficulty lies in reasoning about conservation despite perceptual change, not in basic perception itself." },
      { text: "Have not yet developed object permanence", errorType: "prerequisite_misconception", why: "Object permanence is achieved earlier, during the sensorimotor stage, before the preoperational stage even begins." },
    ],
  },

  // --- sensation_vs_perception (2) ---
  {
    concept: "sensation_vs_perception",
    stem: "The Gestalt principle of 'closure' describes the tendency to:",
    reasoning: "Closure is the perceptual tendency to mentally fill in gaps in an incomplete figure, perceiving it as a complete, whole object even when parts of the outline are missing.",
    difficulty: 0.3,
    options: [
      { text: "Mentally fill in gaps to perceive an incomplete figure as a whole", correct: true },
      { text: "Group elements together based on their physical proximity to one another", errorType: "prerequisite_misconception", why: "Describes the Gestalt principle of proximity, a distinct principle from closure." },
      { text: "Group elements together based on their visual similarity", errorType: "prerequisite_misconception", why: "Describes the Gestalt principle of similarity, a distinct principle from closure." },
      { text: "Perceive moving elements as belonging together as a single unit", errorType: "prerequisite_misconception", why: "Describes the Gestalt principle of common fate, a distinct principle from closure." },
    ],
  },
  // --- group_dynamics_and_groupthink (2) ---
  {
    concept: "group_dynamics_and_groupthink",
    stem: "Irving Janis, who coined the term groupthink, identified several warning signs of the phenomenon, including an 'illusion of unanimity.' This illusion refers to:",
    reasoning: "The illusion of unanimity occurs when group members mistakenly believe everyone agrees, partly because dissenters stay silent rather than voice concerns, creating a false impression of consensus that isn't actually present.",
    difficulty: 0.4,
    options: [
      { text: "A false impression that everyone agrees, partly because dissenters stay silent", correct: true },
      { text: "A situation where the group has genuinely and thoroughly verified complete agreement", errorType: "sign_or_direction_reversal", why: "The 'illusion' specifically refers to a false appearance of agreement, not genuine, thoroughly verified consensus." },
      { text: "A formal, recorded vote showing unanimous support for a decision", errorType: "prerequisite_misconception", why: "The illusion of unanimity concerns an unspoken, assumed consensus, not a formal, explicit vote." },
      { text: "A single dominant member who openly overrules all dissent", errorType: "prerequisite_misconception", why: "The illusion of unanimity is about the group's mistaken perception of agreement, distinct from a single member openly and visibly overruling dissent." },
    ],
  },
  // --- motivation_and_drive_theory (2) ---
  {
    concept: "motivation_and_drive_theory",
    stem: "Arousal theory of motivation proposes that individuals are motivated to maintain:",
    reasoning: "Arousal theory proposes people are motivated to maintain an optimal level of physiological arousal — not too high, not too low — seeking stimulation when understimulated and seeking calm when overstimulated.",
    difficulty: 0.3,
    options: [
      { text: "An optimal, moderate level of physiological arousal", correct: true },
      { text: "The highest possible level of arousal at all times", errorType: "prerequisite_misconception", why: "Arousal theory specifically proposes an optimal moderate level, not a constant drive toward maximum arousal." },
      { text: "The lowest possible level of arousal at all times", errorType: "prerequisite_misconception", why: "Arousal theory specifically proposes an optimal moderate level, not a constant drive toward minimum arousal." },
      { text: "A level of arousal entirely unrelated to behavior or motivation", errorType: "prerequisite_misconception", why: "Arousal theory directly ties arousal level to motivated behavior, not treating them as unrelated." },
    ],
  },
  {
    concept: "motivation_and_drive_theory",
    stem: "Incentive theory of motivation, in contrast to drive-reduction theory, emphasizes that behavior is pulled by:",
    reasoning: "Incentive theory emphasizes external stimuli (incentives) pulling behavior toward them because of their anticipated reward value, in contrast to drive-reduction theory's emphasis on internal, need-based pushes toward behavior.",
    difficulty: 0.3,
    options: [
      { text: "External incentives with anticipated reward value", correct: true },
      { text: "Internal physiological needs pushing behavior from within", errorType: "sign_or_direction_reversal", why: "Describes drive-reduction theory's emphasis, the theory incentive theory is being contrasted with." },
      { text: "Random, unmotivated behavior with no identifiable cause", errorType: "prerequisite_misconception", why: "Incentive theory identifies a specific motivating factor (external reward value), not randomness." },
      { text: "Unconscious childhood conflicts", errorType: "outside_knowledge_not_supported_by_passage", why: "Unconscious childhood conflict is a psychodynamic concept, unrelated to incentive theory's focus on external reward-driven motivation." },
    ],
  },

  // --- personality_trait_theory (2) ---
  {
    concept: "personality_trait_theory",
    stem: "The humanistic approach to personality, associated with theorists like Carl Rogers, emphasizes:",
    reasoning: "The humanistic approach emphasizes personal growth, free will, and self-actualization — an individual's inherent drive to fulfill their potential — in contrast to psychodynamic theory's emphasis on unconscious conflict or behaviorism's emphasis on external reinforcement.",
    difficulty: 0.3,
    options: [
      { text: "Personal growth, free will, and self-actualization", correct: true },
      { text: "Unconscious conflicts rooted in early childhood", errorType: "prerequisite_misconception", why: "Describes the psychodynamic approach, a distinct perspective from the humanistic approach." },
      { text: "Behavior shaped entirely by external reinforcement and punishment", errorType: "prerequisite_misconception", why: "Describes the behaviorist approach, a distinct perspective from the humanistic approach, which emphasizes internal growth and agency." },
      { text: "Fixed, stable traits measurable through standardized questionnaires", errorType: "prerequisite_misconception", why: "Describes the trait approach to personality, a distinct perspective from the humanistic approach's emphasis on growth and self-actualization." },
    ],
  },
  {
    concept: "personality_trait_theory",
    stem: "Social-cognitive theories of personality, such as Bandura's, emphasize the concept of reciprocal determinism, meaning that personality and behavior emerge from the interaction of:",
    reasoning: "Reciprocal determinism proposes that personal factors (thoughts, beliefs), behavior, and the environment all continuously and mutually influence one another, rather than any one factor acting as a one-way, sole cause of behavior.",
    difficulty: 0.5,
    options: [
      { text: "Personal factors, behavior, and the environment, all mutually influencing each other", correct: true },
      { text: "Only genetic factors, with no role for environment or behavior", errorType: "prerequisite_misconception", why: "Reciprocal determinism explicitly incorporates environment and behavior alongside personal factors, not genetics in isolation." },
      { text: "Only the environment, with personal factors and behavior playing no role", errorType: "prerequisite_misconception", why: "Reciprocal determinism explicitly includes personal factors and behavior as mutually influential, not environment acting alone." },
      { text: "A single fixed childhood experience that determines all future personality", errorType: "prerequisite_misconception", why: "Reciprocal determinism describes an ongoing, mutual interaction among factors, not a single fixed formative childhood event." },
    ],
  },

  // --- health_belief_model (2) ---
  {
    concept: "health_belief_model",
    stem: "According to the health belief model, 'perceived barriers' to a health behavior can include:",
    reasoning: "Perceived barriers encompass any obstacles a person believes might prevent them from performing a health behavior, such as cost, inconvenience, potential side effects, or embarrassment.",
    difficulty: 0.2,
    options: [
      { text: "Cost, inconvenience, potential side effects, or embarrassment", correct: true },
      { text: "Only physical pain directly caused by the health behavior itself", errorType: "prerequisite_misconception", why: "Perceived barriers encompass a broad range of obstacles beyond physical pain alone, including cost, convenience, and social factors." },
      { text: "A person's genetic predisposition to a disease", errorType: "prerequisite_misconception", why: "Genetic predisposition relates more closely to perceived susceptibility, a separate factor in the model from perceived barriers." },
      { text: "The actual, objective effectiveness of a treatment as measured in clinical trials", errorType: "prerequisite_misconception", why: "The model is built around subjective, perceived beliefs, not objective clinical trial data; perceived barriers are what a person personally believes stands in their way." },
    ],
  },
  {
    concept: "health_belief_model",
    stem: "According to the health belief model, a person's perceived benefits of a health behavior must generally outweigh their perceived barriers for them to:",
    reasoning: "The health belief model proposes that a person is more likely to adopt a health behavior when they perceive its benefits as outweighing the barriers to performing it, alongside sufficient perceived susceptibility and severity.",
    difficulty: 0.3,
    options: [
      { text: "Be likely to adopt the recommended health behavior", correct: true },
      { text: "Completely eliminate any possibility of ever getting the disease", errorType: "prerequisite_misconception", why: "The model predicts behavior adoption likelihood, not a guarantee of disease elimination." },
      { text: "Automatically become immune to the disease in question", errorType: "outside_knowledge_not_supported_by_passage", why: "The model addresses behavioral likelihood, not biological immunity, which is unrelated to belief-based behavior prediction." },
      { text: "Stop perceiving any severity in the disease at all", errorType: "outside_knowledge_not_supported_by_passage", why: "Perceived severity is a separate factor in the model; benefits outweighing barriers doesn't mean severity perception disappears." },
    ],
  },

  // --- social_facilitation_and_deindividuation (2) ---
  {
    concept: "social_facilitation_and_deindividuation",
    stem: "The Stanford Prison Experiment, though methodologically controversial, is often cited in discussions of deindividuation because participants assigned to the 'guard' role:",
    reasoning: "The Stanford Prison Experiment is frequently cited because guards, wearing uniforms and sunglasses that increased anonymity, exhibited increasingly abusive behavior toward 'prisoners,' illustrating how anonymity and role-based deindividuation can be associated with behavior shifts away from a person's typical individual conduct.",
    difficulty: 0.4,
    options: [
      { text: "Wearing anonymity-increasing uniforms, exhibited increasingly abusive behavior inconsistent with their typical conduct", correct: true },
      { text: "Refused to wear any uniforms at all, maintaining full individual identifiability", errorType: "passage_detail_misread_or_over_extrapolated", why: "Guards specifically wore uniforms and sunglasses that increased anonymity; the experiment is cited precisely because of this anonymizing element." },
      { text: "Behaved identically to how they behaved in their everyday lives outside the study", errorType: "prerequisite_misconception", why: "The experiment is notable specifically because guards' behavior notably shifted from their typical conduct, which is the point relevant to deindividuation." },
      { text: "Were closely monitored by external evaluators the entire time, preventing any behavior change", errorType: "outside_knowledge_not_supported_by_passage", why: "The study is discussed precisely because behavior did shift, not because external monitoring prevented any change." },
    ],
  },
  {
    concept: "social_facilitation_and_deindividuation",
    stem: "According to social facilitation research, the effect of an audience on task performance depends most on whether the task is:",
    reasoning: "Both classic and later social facilitation research consistently identify the well-learned/simple versus complex/novel nature of the task as the key moderator of whether an audience helps or hurts performance.",
    difficulty: 0.3,
    options: [
      { text: "Well-learned and simple, or complex and novel", correct: true },
      { text: "Performed indoors or outdoors", errorType: "outside_knowledge_not_supported_by_passage", why: "Indoor versus outdoor setting is not the factor social facilitation research identifies as the key moderator of audience effects." },
      { text: "Timed or untimed", errorType: "outside_knowledge_not_supported_by_passage", why: "Whether a task is timed is not the key moderating factor identified in social facilitation research; task familiarity/complexity is." },
      { text: "Performed in the morning or evening", errorType: "outside_knowledge_not_supported_by_passage", why: "Time of day is not the factor social facilitation theory identifies as determining whether an audience helps or hurts performance." },
    ],
  },

  // --- attachment_theory (2) ---
  {
    concept: "attachment_theory",
    stem: "According to attachment theory, adult romantic attachment styles are proposed to be influenced by:",
    reasoning: "Research extending attachment theory to adulthood proposes that early attachment patterns with caregivers can shape internal working models that influence expectations and behaviors in later adult romantic relationships.",
    difficulty: 0.3,
    options: [
      { text: "Early attachment patterns formed with primary caregivers", correct: true },
      { text: "Only experiences occurring after age 18, with no earlier influence", errorType: "prerequisite_misconception", why: "Attachment theory specifically proposes early childhood caregiving experiences as influential, not exclusively post-18 experiences." },
      { text: "Random chance, unrelated to any prior relational experience", errorType: "prerequisite_misconception", why: "Attachment theory proposes a systematic (though not deterministic) link to earlier relational experience, not pure randomness." },
      { text: "Genetic factors exclusively, with no influence from caregiving experience", errorType: "outside_knowledge_not_supported_by_passage", why: "Attachment theory centers on early relational/caregiving experience as the key influence, not genetics in isolation." },
    ],
  },
  // --- culture_and_socialization (2) ---
  {
    concept: "culture_and_socialization",
    stem: "Anticipatory socialization refers to the process of:",
    reasoning: "Anticipatory socialization is learning and adopting the norms, values, and behaviors of a group or role a person expects to join in the future, before they actually enter it.",
    difficulty: 0.3,
    options: [
      { text: "Learning the norms and behaviors of a group before actually joining it", correct: true },
      { text: "Learning norms only after having been part of a group for many years", errorType: "sign_or_direction_reversal", why: "Anticipatory socialization specifically occurs before joining a group, not after long-term membership." },
      { text: "Rejecting all norms of any group a person might join in the future", errorType: "sign_or_direction_reversal", why: "Anticipatory socialization involves adopting, not rejecting, anticipated group norms." },
      { text: "A purely biological, non-social process", errorType: "prerequisite_misconception", why: "Anticipatory socialization is fundamentally a social learning process, not a biological one." },
    ],
  },
  // --- emotion_theories (4, plus 5 via passage) ---
  {
    concept: "emotion_theories",
    stem: "The James-Lange theory of emotion proposes that emotional experience occurs:",
    reasoning: "The James-Lange theory proposes that physiological arousal occurs first, and the subjective emotional experience follows as an interpretation of that bodily response (e.g., 'I feel afraid because I am trembling'), reversing the commonsense order.",
    difficulty: 0.3,
    options: [
      { text: "After and as a result of physiological arousal, which occurs first", correct: true },
      { text: "Before any physiological arousal occurs at all", errorType: "sign_or_direction_reversal", why: "The James-Lange theory proposes physiological arousal precedes, not follows, the subjective emotional experience." },
      { text: "Completely independently of any physiological response", errorType: "prerequisite_misconception", why: "The James-Lange theory specifically ties emotional experience directly to physiological arousal, not independence from it." },
      { text: "Simultaneously with, and completely unrelated to, cognitive appraisal", errorType: "outside_knowledge_not_supported_by_passage", why: "The James-Lange theory centers specifically on the sequence of physiological arousal preceding emotion, not a claim about simultaneous, unrelated cognitive appraisal." },
    ],
  },
  {
    concept: "emotion_theories",
    stem: "The Cannon-Bard theory of emotion, in contrast to the James-Lange theory, proposes that physiological arousal and the subjective experience of emotion:",
    reasoning: "The Cannon-Bard theory proposes physiological arousal and the subjective emotional experience occur simultaneously and somewhat independently, both triggered by the same stimulus via the thalamus, rather than one causing the other in sequence.",
    difficulty: 0.4,
    options: [
      { text: "Occur simultaneously and somewhat independently, both triggered by the same stimulus", correct: true },
      { text: "Occur in strict sequence, with arousal always causing the emotional experience", errorType: "prerequisite_misconception", why: "Describes the James-Lange theory's sequential causal claim, the theory Cannon-Bard is contrasted with." },
      { text: "Never occur together under any circumstances", errorType: "prerequisite_misconception", why: "Cannon-Bard proposes both occur together (simultaneously), not that they never co-occur." },
      { text: "Are entirely unrelated phenomena with no shared cause", errorType: "prerequisite_misconception", why: "Cannon-Bard proposes both arise from the same triggering stimulus, not that they are entirely unrelated with no shared cause." },
    ],
  },
  {
    concept: "emotion_theories",
    stem: "The Schachter-Singer two-factor theory of emotion proposes that emotional experience results from the combination of:",
    reasoning: "The two-factor theory proposes emotion results from physiological arousal plus a cognitive label/interpretation of that arousal based on the surrounding situational context — both factors are necessary to produce a specific emotional experience.",
    difficulty: 0.4,
    options: [
      { text: "Physiological arousal and a cognitive interpretation (label) based on context", correct: true },
      { text: "Physiological arousal alone, with no cognitive component at all", errorType: "prerequisite_misconception", why: "The two-factor theory specifically requires both physiological arousal AND a cognitive label; arousal alone is insufficient in this theory." },
      { text: "Cognitive interpretation alone, with no physiological arousal involved", errorType: "prerequisite_misconception", why: "The two-factor theory requires both factors together; cognitive interpretation alone, without arousal, is not sufficient in this theory." },
      { text: "Genetic predisposition alone, unrelated to any situational context", errorType: "outside_knowledge_not_supported_by_passage", why: "The two-factor theory centers on arousal plus contextual cognitive labeling, not a purely genetic account unrelated to situational context." },
    ],
  },
  {
    concept: "emotion_theories",
    stem: "The facial feedback hypothesis proposes that:",
    reasoning: "The facial feedback hypothesis proposes that facial muscle movements themselves can influence emotional experience — for example, that adopting a smiling expression can make a person feel somewhat happier, not just express an emotion already felt.",
    difficulty: 0.3,
    options: [
      { text: "Facial muscle movements can influence, not just express, emotional experience", correct: true },
      { text: "Facial expressions are entirely random and unrelated to any emotional state", errorType: "prerequisite_misconception", why: "The facial feedback hypothesis proposes a specific causal relationship between facial expression and emotional experience, not randomness." },
      { text: "Emotional experience always precedes and causes facial expression, with no reverse influence", errorType: "sign_or_direction_reversal", why: "The facial feedback hypothesis specifically proposes the expression can also influence the felt emotion, a reverse or bidirectional influence, not only expression following feeling." },
      { text: "Facial expressions can only be produced voluntarily, never automatically", errorType: "outside_knowledge_not_supported_by_passage", why: "The hypothesis doesn't make a claim about voluntary versus automatic expression; it concerns the effect of facial movement on subjective emotional experience." },
    ],
  },

  // --- social_perception_and_impression_formation (4, plus 5 via passage) ---
  {
    concept: "social_perception_and_impression_formation",
    stem: "The halo effect in impression formation refers to the tendency for:",
    reasoning: "The halo effect is the tendency for an overall positive impression of a person (often based on one salient trait, like attractiveness) to bias perceptions of their other, unrelated traits in a positive direction as well.",
    difficulty: 0.2,
    options: [
      { text: "An overall positive impression to bias perception of a person's other, unrelated traits positively", correct: true },
      { text: "A negative first impression to be impossible to ever change", errorType: "prerequisite_misconception", why: "The halo effect concerns the spread of a positive overall impression across trait judgments, not permanence of a negative first impression." },
      { text: "People to judge others solely based on directly observed behavior, ignoring appearance entirely", errorType: "sign_or_direction_reversal", why: "The halo effect specifically describes appearance or one salient trait influencing broader judgments, the opposite of appearance being ignored." },
      { text: "Group membership to have no effect on individual trait judgments", errorType: "outside_knowledge_not_supported_by_passage", why: "The halo effect concerns an individual-level global impression bias, not a claim about group membership's effect on trait judgments." },
    ],
  },
  {
    concept: "social_perception_and_impression_formation",
    stem: "Implicit personality theories refer to the assumptions people hold about:",
    reasoning: "Implicit personality theories are a person's own everyday, often unstated beliefs about which personality traits tend to cluster together in other people (e.g., assuming someone who is friendly is also generous), used to fill in gaps in limited information about a new person.",
    difficulty: 0.4,
    options: [
      { text: "Which personality traits tend to co-occur together in other people", correct: true },
      { text: "Only their own personality, with no beliefs about others", errorType: "prerequisite_misconception", why: "Implicit personality theories specifically concern beliefs about how traits cluster together in other people, not solely self-focused beliefs." },
      { text: "Formal, scientifically validated personality assessment instruments", errorType: "prerequisite_misconception", why: "Implicit personality theories are informal, everyday lay beliefs, not formal scientific assessment tools." },
      { text: "The genetic basis of personality traits", errorType: "outside_knowledge_not_supported_by_passage", why: "Implicit personality theories concern everyday trait-clustering beliefs, not claims about genetic mechanisms." },
    ],
  },
  {
    concept: "social_perception_and_impression_formation",
    stem: "Physical attractiveness stereotypes, sometimes summarized as 'what is beautiful is good,' describe the tendency to:",
    reasoning: "This stereotype describes the tendency to attribute positive personality traits (such as kindness, competence, or intelligence) to physically attractive individuals, even absent any direct evidence about those traits.",
    difficulty: 0.3,
    options: [
      { text: "Attribute positive personality traits to physically attractive individuals", correct: true },
      { text: "Assume physically attractive individuals have worse personalities on average", errorType: "sign_or_direction_reversal", why: "The stereotype specifically involves attributing more, not fewer, positive traits to attractive individuals." },
      { text: "Ignore physical appearance entirely when forming impressions", errorType: "sign_or_direction_reversal", why: "This stereotype is precisely about appearance influencing trait attributions, the opposite of ignoring appearance." },
      { text: "Only apply to judgments about intelligence, not any other trait", errorType: "prerequisite_misconception", why: "The stereotype applies broadly across many positive traits (kindness, competence, sociability), not narrowly to intelligence alone." },
    ],
  },
  {
    concept: "social_perception_and_impression_formation",
    stem: "A self-fulfilling prophecy in social perception occurs when:",
    reasoning: "A self-fulfilling prophecy occurs when a perceiver's expectation about a target person actually shapes their own behavior toward that person in a way that causes the target to behave in a manner consistent with the original expectation, confirming it.",
    difficulty: 0.4,
    options: [
      { text: "An expectation about a person causes behavior that leads the person to confirm that expectation", correct: true },
      { text: "A prediction is made and later verified to be false", errorType: "sign_or_direction_reversal", why: "A self-fulfilling prophecy specifically involves the expectation being confirmed (made true), not disproven." },
      { text: "A person's behavior is completely unaffected by others' expectations of them", errorType: "sign_or_direction_reversal", why: "The self-fulfilling prophecy specifically demonstrates that others' expectations DO influence a person's resulting behavior." },
      { text: "Two people form identical impressions of each other independently, with no interaction", errorType: "outside_knowledge_not_supported_by_passage", why: "A self-fulfilling prophecy requires an interaction where expectation shapes behavior, not two independent, non-interacting impressions." },
    ],
  },

  // --- passage: ps_emotion_study (5) ---
  {
    concept: "emotion_theories",
    type: "passage",
    passage: "ps_emotion_study",
    stem: "According to the passage, participants who were told what physical symptoms to expect from the epinephrine injection tended to:",
    reasoning: "The passage states this group tends 'to attribute their arousal to the drug and report relatively little emotional change regardless of the confederate's behavior.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Attribute their arousal to the drug, with relatively little emotional change", correct: true },
      { text: "Attribute their arousal entirely to the confederate's behavior", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns this situational attribution pattern to the group that was NOT told what to expect, not this informed group." },
      { text: "Report the strongest emotional reactions of any group in the study", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes this informed group as showing relatively little emotional change, not the strongest reactions." },
      { text: "Refuse to participate further in the study once informed", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes this group continuing through the study and providing emotional reports, not refusing to participate." },
    ],
  },
  {
    concept: "emotion_theories",
    type: "passage",
    passage: "ps_emotion_study",
    stem: "According to the passage, participants who were not told what symptoms to expect tended to:",
    reasoning: "The passage states this group tends 'to look to the situation for an explanation of their unexplained arousal, reporting themselves as euphoric or angry' depending on the confederate.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Look to the situation (the confederate's behavior) to explain their unexplained arousal", correct: true },
      { text: "Attribute their arousal directly and correctly to the injection", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns this drug-attribution pattern to the informed group, not the uninformed group, who instead looked to the situation." },
      { text: "Report no emotional reaction of any kind", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes this group reporting specific emotions (euphoria or anger) matching the confederate's behavior, not an absence of reaction." },
      { text: "Show identical results to the informed group in every respect", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly contrasts the two groups' patterns, showing they behaved differently, not identically." },
    ],
  },
  {
    concept: "emotion_theories",
    type: "passage",
    passage: "ps_emotion_study",
    stem: "The study described in the passage most directly supports which theory of emotion?",
    reasoning: "The finding that identical physiological arousal produces different emotions depending on cognitive interpretation of the situational context directly supports the Schachter-Singer two-factor theory, which proposes emotion results from arousal plus a cognitive label based on context.",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "The Schachter-Singer two-factor theory", correct: true },
      { text: "The James-Lange theory, which proposes arousal alone directly determines the specific emotion felt", errorType: "outside_knowledge_not_supported_by_passage", why: "The study shows identical arousal producing different emotions depending on context, contradicting a theory where arousal alone directly determines the specific emotion." },
      { text: "A theory proposing emotion and arousal are entirely unrelated to each other", errorType: "outside_knowledge_not_supported_by_passage", why: "The study explicitly manipulates arousal (via the injection) and examines its role in emotional experience, showing they are related, not unrelated." },
      { text: "A theory proposing cognitive interpretation plays no role in emotional experience", errorType: "outside_knowledge_not_supported_by_passage", why: "The study's key finding is that situational/cognitive interpretation of ambiguous arousal shapes the resulting emotion, directly contradicting a no-cognitive-role theory." },
    ],
  },
  {
    concept: "emotion_theories",
    type: "passage",
    passage: "ps_emotion_study",
    stem: "Based on the passage, if a third group had been given a placebo injection (no physiological arousal at all) and exposed to the same confederates, this design would most directly help researchers determine:",
    reasoning: "Since the study's key comparison hinges on whether arousal (present in both experimental groups) combined with situational interpretation drives the emotional effect, adding a no-arousal placebo group would help isolate whether the confederate's behavior alone (without any arousal) is sufficient to produce a comparable emotional effect, clarifying arousal's necessary role.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Whether physiological arousal itself is necessary to produce the situationally-driven emotional effect", correct: true },
      { text: "The exact chemical composition of epinephrine", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "Chemical composition of epinephrine is not something a placebo comparison group would help determine; it would help isolate the causal role of arousal itself." },
      { text: "Whether confederates enjoy acting euphoric or angry", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "The confederates' own enjoyment is irrelevant to the experimental logic of adding a placebo comparison group." },
      { text: "The long-term health effects of epinephrine injections", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "Long-term health effects are unrelated to what a placebo control group would reveal about the arousal-emotion relationship being studied." },
    ],
  },
  {
    concept: "emotion_theories",
    type: "passage",
    passage: "ps_emotion_study",
    stem: "According to the passage, both groups of participants received:",
    reasoning: "The passage states both groups received 'the identical injection,' with the key manipulated variable being whether they were told what to expect, not the injection itself.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "The identical epinephrine injection", correct: true },
      { text: "Different doses of epinephrine tailored to each group", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states both groups received 'the identical injection,' not different tailored doses." },
      { text: "A placebo with no active physiological effect", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes an epinephrine injection producing genuine physiological arousal (increased heart rate, trembling), not an inert placebo." },
      { text: "No injection at all, only verbal instructions", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes both groups receiving an actual epinephrine injection, not verbal instructions alone." },
    ],
  },

  // --- passage: ps_impression_formation_study (5) ---
  {
    concept: "social_perception_and_impression_formation",
    type: "passage",
    passage: "ps_impression_formation_study",
    stem: "According to the passage, the group that received adjectives in positive-to-negative order rated the hypothetical person:",
    reasoning: "The passage states this group 'rates the hypothetical person substantially more favorably overall' than the group receiving the reverse order.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Substantially more favorably than the group receiving the reverse order", correct: true },
      { text: "Identically to the group receiving the reverse order", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes a substantial difference between the two groups' ratings, not identical ratings." },
      { text: "Less favorably than the group receiving the reverse order", errorType: "sign_or_direction_reversal", why: "Reverses the passage's explicitly stated direction of the effect." },
      { text: "In a way that could not be measured or compared", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly reports a measurable, comparable difference in ratings between the two groups." },
    ],
  },
  {
    concept: "social_perception_and_impression_formation",
    type: "passage",
    passage: "ps_impression_formation_study",
    stem: "According to the passage, both groups in the study received:",
    reasoning: "The passage states both groups receive 'the exact same six adjectives,' differing only in the order of presentation.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "The exact same six adjectives, differing only in order", correct: true },
      { text: "Completely different sets of adjectives", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states both groups receive 'the exact same six adjectives,' just in different orders." },
      { text: "The same adjectives, but one group received twice as many", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes an identical set of six adjectives for both groups, not differing quantities." },
      { text: "Adjectives along with a photograph of the hypothetical person", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes only a list of adjectives being presented, with no mention of an accompanying photograph." },
    ],
  },
  {
    concept: "social_perception_and_impression_formation",
    type: "passage",
    passage: "ps_impression_formation_study",
    stem: "According to the passage, researchers interpret the finding as evidence that:",
    reasoning: "The passage states researchers interpret this as evidence 'that earlier information disproportionately shapes an overall impression, with later information being interpreted through the lens the earlier information already established.'",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Earlier information disproportionately shapes overall impressions", correct: true },
      { text: "All pieces of information are weighted exactly equally, regardless of order", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states this is what the finding argues AGAINST — information is not weighted equally regardless of order." },
      { text: "Later information disproportionately shapes overall impressions, more than earlier information", errorType: "sign_or_direction_reversal", why: "The passage attributes disproportionate influence to earlier, not later, information." },
      { text: "Order of information presentation has no effect on impressions at all", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage's entire point is that order does have a substantial, measurable effect on impressions." },
    ],
  },
  {
    concept: "social_perception_and_impression_formation",
    type: "passage",
    passage: "ps_impression_formation_study",
    stem: "This finding, as described in the passage, is best understood as an example of which broader phenomenon in impression formation?",
    reasoning: "The passage's finding — that information presented first disproportionately shapes overall judgment — directly illustrates the primacy effect as it applies to impression formation, distinct from the primacy effect in list-recall memory, but conceptually parallel.",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "A primacy effect in impression formation", correct: true },
      { text: "A recency effect in impression formation", errorType: "outside_knowledge_not_supported_by_passage", why: "A recency effect would mean later information carries more weight, the opposite of what the passage describes." },
      { text: "The halo effect", errorType: "outside_knowledge_not_supported_by_passage", why: "The halo effect concerns one trait or overall impression coloring judgments of unrelated traits, not specifically the effect of information order." },
      { text: "The self-fulfilling prophecy", errorType: "outside_knowledge_not_supported_by_passage", why: "The self-fulfilling prophecy concerns expectations shaping another person's actual behavior through interaction, not simply the order-dependent weighting of static information." },
    ],
  },
  {
    concept: "social_perception_and_impression_formation",
    type: "passage",
    passage: "ps_impression_formation_study",
    stem: "Based on the passage's logic, if a job interviewer forms a strong positive impression of a candidate in the first five minutes of an hour-long interview, this research would predict that information from the remaining 55 minutes will most likely be:",
    reasoning: "Extending the passage's finding, later information tends to be interpreted through the lens the earlier information established; so information from later in the interview would likely be filtered through and assimilated into the already-favorable early impression, rather than being weighted independently and equally.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Interpreted through the lens of, and likely assimilated into, that initial positive impression", correct: true },
      { text: "Weighted far more heavily than the first five minutes, overriding the initial impression completely", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's finding suggests the opposite — earlier information, not later, tends to carry disproportionate weight in shaping overall impressions." },
      { text: "Given exactly equal weight to the first five minutes, with no bias in either direction", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's finding specifically argues against equal weighting of information regardless of when it's presented." },
      { text: "Completely ignored by the interviewer for the rest of the interview", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's account describes later information being interpreted through the established lens, not literally ignored altogether." },
    ],
  },
];
