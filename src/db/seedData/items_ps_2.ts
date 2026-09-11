import type { ItemDef } from "./types";

export const itemsPs2: ItemDef[] = [
  // --- attribution_theory (3) ---
  {
    concept: "attribution_theory",
    stem: "According to Kelley's covariation model, an observer is more likely to make an external (situational) attribution for a friend's rude behavior toward a waiter when the observer learns that:",
    reasoning: "High consensus (many people are rude to this particular waiter), high distinctiveness (the friend isn't rude to other people), and low consistency all push toward a situational attribution, since the covariation model weighs whether the behavior is specific to this situation rather than reflecting the person's general disposition.",
    difficulty: 0.5,
    options: [
      { text: "Many other customers are also rude to this same waiter (high consensus)", correct: true },
      { text: "The friend is rude to almost everyone, in every situation (low distinctiveness)", errorType: "sign_or_direction_reversal", why: "Low distinctiveness across situations pushes toward a dispositional, not situational, attribution." },
      { text: "The friend has never behaved this way before (low consistency) with no other information", errorType: "correct_concept_wrong_step_in_sequence", why: "Low consistency alone, without consensus or distinctiveness information, is actually more ambiguous and often suggests attributing the behavior to a one-off circumstance rather than confidently pointing to the situation generally." },
      { text: "The friend is generally described by others as a rude person", errorType: "sign_or_direction_reversal", why: "A general reputation for rudeness supports a dispositional attribution, not a situational one." },
    ],
  },
  {
    concept: "attribution_theory",
    stem: "Learned helplessness, as studied by Seligman, describes the tendency to:",
    reasoning: "Learned helplessness describes giving up and failing to attempt to escape or improve a situation after repeated exposure to uncontrollable negative outcomes, even when control later becomes possible.",
    difficulty: 0.3,
    options: [
      { text: "Stop trying to escape or improve a situation after repeated exposure to uncontrollable outcomes", correct: true },
      { text: "Attribute all failures to external, situational causes", errorType: "prerequisite_misconception", why: "Learned helplessness concerns giving up effort altogether, not a specific attributional style like the self-serving bias." },
      { text: "Increase effort dramatically after a single failure", errorType: "sign_or_direction_reversal", why: "Learned helplessness describes decreased, not increased, effort following repeated failure." },
      { text: "Only occur in non-human animals, not in humans", errorType: "outside_knowledge_not_supported_by_passage", why: "Learned helplessness has been studied and demonstrated in humans as well as animals." },
    ],
  },
  {
    concept: "attribution_theory",
    stem: "The just-world hypothesis refers to the tendency to believe that:",
    reasoning: "The just-world hypothesis is the belief that people generally get what they deserve — that the world is fundamentally fair — which can lead to blaming victims for their own misfortune.",
    difficulty: 0.3,
    options: [
      { text: "People generally get what they deserve", correct: true },
      { text: "Outcomes are entirely random and unrelated to a person's actions", errorType: "sign_or_direction_reversal", why: "The just-world hypothesis is precisely the opposite belief — that outcomes are deserved, not random." },
      { text: "Only bad things happen to bad people, never to good people", errorType: "correct_concept_wrong_step_in_sequence", why: "Overstates the hypothesis into an absolute rule rather than a general belief tendency that admits exceptions." },
      { text: "Social structures, not individuals, are responsible for all outcomes", errorType: "sign_or_direction_reversal", why: "The just-world hypothesis tends to locate responsibility in the individual's deservingness, not in social structures." },
    ],
  },

  // --- social_identity_theory (3) ---
  {
    concept: "social_identity_theory",
    stem: "Social identity theory distinguishes between a person's personal identity and their social identity. Social identity specifically refers to:",
    reasoning: "Social identity refers to the part of self-concept derived from perceived membership in social groups, as distinct from personal identity, which reflects individual traits and personal relationships.",
    difficulty: 0.3,
    options: [
      { text: "The part of self-concept derived from group memberships", correct: true },
      { text: "A person's unique individual traits and personal relationships", errorType: "sign_or_direction_reversal", why: "Describes personal identity, which the theory explicitly distinguishes from social identity." },
      { text: "A person's biological, inherited characteristics", errorType: "outside_knowledge_not_supported_by_passage", why: "Biological inheritance is not the basis of either personal or social identity in this theory's framework." },
      { text: "A fixed identity that cannot change across different social contexts", errorType: "prerequisite_misconception", why: "Social identity theory recognizes that different group memberships can become salient in different contexts, not that identity is fixed." },
    ],
  },
  {
    concept: "social_identity_theory",
    stem: "According to social identity theory, categorizing the social world into 'us' and 'them' groups is considered:",
    reasoning: "Social categorization — dividing the world into in-groups and out-groups — is described by the theory as a basic, largely automatic cognitive process that underlies the formation of social identity and subsequent intergroup bias.",
    difficulty: 0.4,
    options: [
      { text: "A basic, largely automatic cognitive process", correct: true },
      { text: "A rare event that only occurs during explicit political conflict", errorType: "prerequisite_misconception", why: "The theory treats categorization as a routine, everyday cognitive process, not something limited to rare political conflict." },
      { text: "A deliberate, effortful strategic choice made only by group leaders", errorType: "prerequisite_misconception", why: "Categorization is described as a basic cognitive process available to any individual, not a strategic act only by leaders." },
      { text: "Something that only occurs in individualist, not collectivist, cultures", errorType: "outside_knowledge_not_supported_by_passage", why: "The theory doesn't restrict this categorization process to a specific cultural orientation." },
    ],
  },
  {
    concept: "social_identity_theory",
    stem: "Social comparison, as it relates to social identity theory, refers to evaluating one's own group by comparing it to:",
    reasoning: "In social identity theory, groups evaluate their own standing by comparing themselves to relevant out-groups, and a favorable comparison bolsters a positive social identity.",
    difficulty: 0.3,
    options: [
      { text: "A relevant out-group", correct: true },
      { text: "An idealized, hypothetical version of the same group", errorType: "prerequisite_misconception", why: "Social comparison in this theory is explicitly between one's own group and an actual out-group, not an idealized version of one's own group." },
      { text: "Random individuals with no group affiliation at all", errorType: "outside_knowledge_not_supported_by_passage", why: "The comparison relevant to social identity is specifically intergroup, between one's own group and another group." },
      { text: "Historical data about the group from many decades ago", errorType: "outside_knowledge_not_supported_by_passage", why: "The relevant comparison in the theory is with a contemporary out-group, not historical data about one's own group." },
    ],
  },

  // --- classical_conditioning (2, plus prior 2 items from batch 1) ---
  {
    concept: "classical_conditioning",
    stem: "A dog conditioned to salivate to a specific tone also begins salivating to slightly different but similar tones. This phenomenon is called:",
    reasoning: "Stimulus generalization is the tendency for a conditioned response to be elicited by stimuli similar to, but not identical to, the original conditioned stimulus.",
    difficulty: 0.2,
    options: [
      { text: "Stimulus generalization", correct: true },
      { text: "Stimulus discrimination", errorType: "sign_or_direction_reversal", why: "Discrimination is learning to respond only to the specific original stimulus and not to similar ones, the opposite of generalization." },
      { text: "Extinction", errorType: "prerequisite_misconception", why: "Extinction is the fading of a learned response over repeated unreinforced trials, unrelated to responding to similar stimuli." },
      { text: "Spontaneous recovery", errorType: "prerequisite_misconception", why: "Spontaneous recovery is the reappearance of an extinguished response after a rest period, not a response to a new similar stimulus." },
    ],
  },
  {
    concept: "classical_conditioning",
    stem: "In systematic desensitization, a therapy technique based on classical conditioning, a patient with a phobia is gradually exposed to the feared stimulus while engaging in relaxation techniques. This therapy works by:",
    reasoning: "Systematic desensitization works through counterconditioning: pairing the feared stimulus with a relaxation response that is incompatible with anxiety, gradually replacing the learned fear association with a calmer one.",
    difficulty: 0.4,
    options: [
      { text: "Counterconditioning the feared stimulus with an incompatible relaxation response", correct: true },
      { text: "Punishing the patient for exhibiting fear responses", errorType: "prerequisite_misconception", why: "The technique uses relaxation pairing, not punishment, to address the phobia." },
      { text: "Completely avoiding the feared stimulus at all times going forward", errorType: "sign_or_direction_reversal", why: "The technique involves gradual, controlled exposure to the stimulus, not avoidance of it." },
      { text: "Operant reinforcement of calm behavior with tangible rewards", errorType: "prerequisite_misconception", why: "The core mechanism described is classical counterconditioning through paired association, not operant reward for behavior." },
    ],
  },

  // --- operant_conditioning (2, plus prior 2 items from batch 1) ---
  {
    concept: "operant_conditioning",
    stem: "A teacher gives students a pop quiz on random, unpredictable days throughout the semester. Compared to quizzes given on a predictable fixed schedule, this unpredictable schedule is most likely to produce:",
    reasoning: "A variable schedule (unpredictable timing) tends to produce a more steady, consistent rate of the target behavior (studying) compared to a fixed schedule, which tends to produce a pattern of low effort followed by a burst of effort just before the predictable event.",
    difficulty: 0.4,
    options: [
      { text: "A more steady, consistent rate of studying throughout the semester", correct: true },
      { text: "Studying only immediately before each quiz, with none in between", errorType: "sign_or_direction_reversal", why: "That cramming pattern is characteristic of a predictable fixed schedule, not an unpredictable variable one." },
      { text: "No effect on study behavior compared to a fixed schedule", errorType: "prerequisite_misconception", why: "Reinforcement schedule predictability is well-documented to affect the pattern of behavior, contrary to having no effect." },
      { text: "Complete elimination of studying, since students can't predict when to prepare", errorType: "prerequisite_misconception", why: "Unpredictability tends to promote sustained, consistent behavior rather than eliminating it entirely." },
    ],
  },
  {
    concept: "operant_conditioning",
    stem: "Shaping, as a behavioral technique, involves reinforcing:",
    reasoning: "Shaping builds a complex target behavior gradually by reinforcing successive approximations — behaviors that are progressively more similar to the desired final behavior — rather than waiting for the complete behavior to occur spontaneously.",
    difficulty: 0.3,
    options: [
      { text: "Successive approximations of a desired behavior", correct: true },
      { text: "Only the exact final target behavior, from the very first trial", errorType: "prerequisite_misconception", why: "Shaping specifically works by reinforcing intermediate steps, not by waiting for the exact final behavior from the start." },
      { text: "Any random behavior the organism happens to perform", errorType: "prerequisite_misconception", why: "Shaping selectively reinforces behaviors that move toward the specific target, not just any random behavior." },
      { text: "Behaviors that are the complete opposite of the desired outcome", errorType: "sign_or_direction_reversal", why: "Shaping reinforces behaviors approaching the desired outcome, not behaviors opposite to it." },
    ],
  },

  // --- memory_encoding_and_retrieval (3) ---
  {
    concept: "memory_encoding_and_retrieval",
    stem: "According to the Atkinson-Shiffrin multi-store model of memory, information must pass through which stage before it can enter long-term memory?",
    reasoning: "The Atkinson-Shiffrin model proposes information flows from sensory memory to short-term (working) memory, and only with sufficient rehearsal does it transfer from short-term to long-term memory.",
    difficulty: 0.3,
    options: [
      { text: "Short-term (working) memory", correct: true },
      { text: "Long-term memory itself, in a preliminary form", errorType: "prerequisite_misconception", why: "The model proposes long-term memory is the destination, not an intermediate stage information passes through before reaching itself." },
      { text: "Procedural memory specifically", errorType: "prerequisite_misconception", why: "Procedural memory is one type of long-term memory content, not a required intermediate processing stage in the model." },
      { text: "No intermediate stage is required in this model", errorType: "prerequisite_misconception", why: "The multi-store model specifically proposes sequential stages, including short-term memory, before long-term storage." },
    ],
  },
  {
    concept: "memory_encoding_and_retrieval",
    stem: "Retroactive interference occurs when:",
    reasoning: "Retroactive interference is when newly learned information disrupts the ability to recall previously learned information — the new material interferes 'backward' on old memories.",
    difficulty: 0.3,
    options: [
      { text: "New information disrupts recall of previously learned information", correct: true },
      { text: "Old information disrupts the learning of new information", errorType: "sign_or_direction_reversal", why: "Describes proactive interference, the reverse direction of interference from retroactive." },
      { text: "A memory becomes stronger the more recently it was formed", errorType: "prerequisite_misconception", why: "Not a description of interference at all; simply describes recency, unrelated to one memory disrupting another." },
      { text: "Two memories are formed at exactly the same time with no conflict", errorType: "prerequisite_misconception", why: "Interference specifically involves memories conflicting or disrupting each other, not forming without conflict." },
    ],
  },
  {
    concept: "memory_encoding_and_retrieval",
    stem: "Flashbulb memories are characterized by:",
    reasoning: "Flashbulb memories are vivid, highly detailed memories of the circumstances surrounding a surprising, emotionally significant event, though research shows they are not necessarily more accurate than ordinary memories despite feeling especially vivid and confident.",
    difficulty: 0.4,
    options: [
      { text: "Vivid, detailed recall of the circumstances of a surprising, emotional event, though not necessarily more accurate", correct: true },
      { text: "Perfectly accurate recall guaranteed by the intensity of the emotional event", errorType: "prerequisite_misconception", why: "Research on flashbulb memories shows high subjective vividness and confidence does not guarantee accuracy." },
      { text: "Memories that fade unusually quickly compared to ordinary memories", errorType: "sign_or_direction_reversal", why: "Flashbulb memories are characterized by unusual vividness and persistence, not unusually rapid fading." },
      { text: "A type of memory exclusively related to procedural skills", errorType: "prerequisite_misconception", why: "Flashbulb memories concern autobiographical/episodic recall of an event's circumstances, not procedural skill memory." },
    ],
  },

  // --- cognitive_dissonance (3) ---
  {
    concept: "cognitive_dissonance",
    stem: "According to cognitive dissonance theory, which of the following situations would most likely produce the strongest dissonance?",
    reasoning: "Dissonance is strongest when a person's own freely chosen behavior directly conflicts with a strongly held belief or self-image, especially when the behavior can't be easily externally justified — as opposed to situations with a clear, sufficient external excuse.",
    difficulty: 0.5,
    options: [
      { text: "A person who values honesty freely chooses to tell a lie with no clear external pressure to do so", correct: true },
      { text: "A person tells a lie only because they were explicitly ordered to at gunpoint", errorType: "sign_or_direction_reversal", why: "A severe, obvious external justification (a direct threat) minimizes dissonance, since the behavior is easily explained by the coercion rather than reflecting the person's own values." },
      { text: "A person performs a behavior that is fully consistent with all of their existing beliefs", correct: false, errorType: "prerequisite_misconception", why: "Dissonance requires an inconsistency between cognitions; full consistency produces no dissonance at all." },
      { text: "A person is paid a very large sum of money to perform an action inconsistent with their beliefs", errorType: "sign_or_direction_reversal", why: "A large external reward provides ample justification for the behavior, reducing rather than maximizing dissonance." },
    ],
  },
  {
    concept: "cognitive_dissonance",
    stem: "Effort justification, a specific form of dissonance reduction, describes the tendency to:",
    reasoning: "Effort justification is increasing one's valuation of an outcome or group after expending significant effort to obtain or join it, resolving the dissonance between 'I worked hard for this' and 'maybe it wasn't worth it.'",
    difficulty: 0.4,
    options: [
      { text: "Increase how much one values something after working hard to attain it", correct: true },
      { text: "Decrease how much one values something after working hard to attain it", errorType: "sign_or_direction_reversal", why: "Effort justification specifically describes an increase, not a decrease, in valuation following high effort." },
      { text: "Avoid any effort at all to prevent future dissonance", errorType: "prerequisite_misconception", why: "Effort justification describes how people cognitively respond after expending effort, not a strategy of avoiding effort altogether." },
      { text: "Value an outcome equally regardless of the effort invested in it", errorType: "prerequisite_misconception", why: "The entire phenomenon is that effort level does change subsequent valuation, contrary to this claim of no relationship." },
    ],
  },
  {
    concept: "cognitive_dissonance",
    stem: "A key difference between cognitive dissonance theory and simple reinforcement-based learning theories is that dissonance theory emphasizes:",
    reasoning: "Cognitive dissonance theory emphasizes an internal drive to maintain cognitive consistency (a psychological, belief-based motivation), as opposed to reinforcement theories, which explain behavior purely through external rewards and punishments without reference to internal belief states.",
    difficulty: 0.5,
    options: [
      { text: "An internal drive toward cognitive consistency, rather than only external rewards and punishments", correct: true },
      { text: "External rewards and punishments as the sole drivers of behavior change", errorType: "sign_or_direction_reversal", why: "This describes the reinforcement-based approach that dissonance theory is being contrasted with, not dissonance theory's own emphasis." },
      { text: "The complete absence of any internal psychological states", errorType: "prerequisite_misconception", why: "Dissonance theory is specifically about an internal psychological state (discomfort from inconsistency), not a denial of internal states." },
      { text: "A focus on observable behavior alone, with no reference to belief", errorType: "sign_or_direction_reversal", why: "This describes a purely behaviorist approach, the opposite of dissonance theory's focus on beliefs and cognitions." },
    ],
  },

  // --- conformity_and_obedience (3, plus prior 2 items from batch 1) ---
  {
    concept: "conformity_and_obedience",
    stem: "Informational social influence refers to conforming to a group primarily because:",
    reasoning: "Informational social influence is conformity driven by using the group as a source of information to determine the correct or appropriate response, especially in ambiguous situations — distinct from normative influence's concern with social acceptance.",
    difficulty: 0.3,
    options: [
      { text: "The group is seen as a source of information about the correct response", correct: true },
      { text: "A person wants to be liked and accepted by the group", errorType: "correct_concept_wrong_step_in_sequence", why: "Describes normative social influence, the related but distinct motive from informational influence." },
      { text: "A direct authority figure has given an explicit command", errorType: "prerequisite_misconception", why: "Describes obedience to authority, a distinct phenomenon from informational conformity to peers." },
      { text: "A person fears a specific punishment for nonconformity", errorType: "outside_knowledge_not_supported_by_passage", why: "Informational influence is about seeking accurate information, not primarily about fear of punishment." },
    ],
  },
  {
    concept: "conformity_and_obedience",
    stem: "In Milgram's original obedience studies, moving the 'teacher' and 'learner' into the same room (increasing physical proximity) had what effect on obedience rates, compared to when they were in separate rooms?",
    reasoning: "Milgram's proximity variations found that obedience decreased as the teacher was placed physically closer to the learner (and especially when required to have direct physical contact), suggesting that psychological distance from the victim was a key factor supporting high obedience rates.",
    difficulty: 0.5,
    options: [
      { text: "Obedience decreased with greater physical proximity to the learner", correct: true },
      { text: "Obedience increased with greater physical proximity to the learner", errorType: "sign_or_direction_reversal", why: "Reverses Milgram's actual finding, in which closer proximity reduced obedience." },
      { text: "Obedience was completely unaffected by physical proximity", errorType: "prerequisite_misconception", why: "Proximity was in fact one of the variables Milgram found to have a measurable effect on obedience rates." },
      { text: "Obedience rates could not be measured once proximity changed", errorType: "outside_knowledge_not_supported_by_passage", why: "Milgram's proximity variations were specifically designed to measure and did measure changes in obedience rate." },
    ],
  },
  {
    concept: "conformity_and_obedience",
    stem: "Asch's classic line-judgment conformity studies are best understood as demonstrating primarily:",
    reasoning: "Asch's studies used an unambiguous, easy perceptual task specifically to isolate and demonstrate conformity to obviously incorrect group pressure — showing conformity can occur even without genuine uncertainty about the correct answer.",
    difficulty: 0.4,
    options: [
      { text: "That conformity can occur even on an unambiguous task with an obviously correct answer", correct: true },
      { text: "That people conform only when a task is genuinely difficult or ambiguous", errorType: "sign_or_direction_reversal", why: "Asch deliberately used an unambiguous task, showing conformity even without any genuine difficulty or uncertainty." },
      { text: "That obedience to a direct authority figure is a powerful social force", errorType: "prerequisite_misconception", why: "Asch's studies concerned peer conformity to a group's judgment, not obedience to an authority figure's direct commands, which is Milgram's paradigm." },
      { text: "That people almost never conform to obviously wrong answers", errorType: "sign_or_direction_reversal", why: "Asch's key finding was that a substantial proportion of participants did conform to obviously wrong group answers." },
    ],
  },

  // --- stereotypes_and_prejudice (3) ---
  {
    concept: "stereotypes_and_prejudice",
    stem: "The contact hypothesis proposes that prejudice between groups can be reduced by intergroup contact, provided that certain conditions are met, including:",
    reasoning: "The contact hypothesis specifies conditions such as equal status between groups during contact, cooperation toward shared goals, and institutional support, arguing that mere unstructured contact without these conditions may not reduce (and can even increase) prejudice.",
    difficulty: 0.5,
    options: [
      { text: "Equal status between the groups and cooperation toward a shared goal", correct: true },
      { text: "One group having clearly higher status than the other during the contact", errorType: "sign_or_direction_reversal", why: "The contact hypothesis specifies equal, not unequal, status as a key condition for reducing prejudice." },
      { text: "Complete avoidance of any interaction between the groups", errorType: "sign_or_direction_reversal", why: "The contact hypothesis is specifically about the effects of contact occurring, not the effects of avoiding contact." },
      { text: "Competition between the groups for a limited, shared resource", errorType: "sign_or_direction_reversal", why: "The hypothesis specifies cooperation toward shared goals as helpful, whereas competition for scarce resources is more associated with increasing intergroup hostility (per realistic conflict theory)." },
    ],
  },
  {
    concept: "stereotypes_and_prejudice",
    stem: "Implicit bias, as distinguished from explicit prejudice, refers to:",
    reasoning: "Implicit bias refers to automatic, often unconscious associations and attitudes that can influence behavior and judgment even when a person explicitly and sincerely disavows prejudiced beliefs.",
    difficulty: 0.4,
    options: [
      { text: "Automatic, often unconscious attitudes that can operate outside conscious awareness", correct: true },
      { text: "Attitudes a person consciously and deliberately endorses", errorType: "sign_or_direction_reversal", why: "Describes explicit prejudice, the concept implicit bias is being distinguished from." },
      { text: "A complete absence of any bias whatsoever", errorType: "prerequisite_misconception", why: "Implicit bias refers to a specific, measurable kind of automatic bias, not the absence of bias." },
      { text: "Bias that only appears in formal written policy documents", errorType: "outside_knowledge_not_supported_by_passage", why: "Implicit bias operates at the level of individual cognition and behavior, not specifically in written institutional policy." },
    ],
  },
  {
    concept: "stereotypes_and_prejudice",
    stem: "The 'out-group homogeneity effect' refers to the tendency to perceive:",
    reasoning: "The out-group homogeneity effect is the tendency to see members of an out-group as more similar to one another ('they're all alike') than members of one's own in-group, which is typically perceived as more diverse.",
    difficulty: 0.4,
    options: [
      { text: "Members of an out-group as more similar to each other than members of one's own group", correct: true },
      { text: "Members of one's own in-group as more similar to each other than out-group members", errorType: "sign_or_direction_reversal", why: "Reverses the direction of the effect, which specifically applies to perceptions of the out-group, not the in-group." },
      { text: "All groups, in-group and out-group alike, as equally diverse", errorType: "prerequisite_misconception", why: "The effect specifically describes an asymmetry in perceived diversity between in-group and out-group, not equal perceived diversity." },
      { text: "Out-group members as more competent than in-group members", errorType: "outside_knowledge_not_supported_by_passage", why: "The effect concerns perceived similarity/homogeneity, not a judgment about relative competence." },
    ],
  },

  // --- socioeconomic_status_and_health (2) ---
  {
    concept: "socioeconomic_status_and_health",
    stem: "Access to healthcare is one commonly cited mechanism linking low socioeconomic status to worse health outcomes. Which of the following best illustrates this specific mechanism?",
    reasoning: "Reduced access to routine and preventive healthcare (e.g., due to cost, lack of insurance, or fewer nearby providers) is a direct structural mechanism by which lower SES can translate into worse health outcomes, distinct from other mechanisms like chronic stress.",
    difficulty: 0.3,
    options: [
      { text: "A lower-income individual delaying a doctor's visit due to the cost of care", correct: true },
      { text: "A lower-income individual reporting higher day-to-day happiness", errorType: "outside_knowledge_not_supported_by_passage", why: "This describes a subjective wellbeing outcome, not the healthcare-access mechanism being asked about." },
      { text: "A higher-income individual choosing to skip a recommended vaccination", errorType: "outside_knowledge_not_supported_by_passage", why: "This example doesn't involve socioeconomic status as a barrier to access at all." },
      { text: "A lower-income individual receiving the same quality of care as a higher-income individual", errorType: "outside_knowledge_not_supported_by_passage", why: "Equal access/quality would not illustrate a disparity mechanism, which is what the question asks about." },
    ],
  },
  {
    concept: "socioeconomic_status_and_health",
    stem: "Health disparities research distinguishes between health equality (identical outcomes for everyone) and health equity. Health equity specifically refers to:",
    reasoning: "Health equity refers to fairness in outcomes achieved by addressing different underlying needs and barriers — it may require providing different levels of resources to different groups, rather than treating everyone identically (equality), in order to achieve genuinely fair outcomes.",
    difficulty: 0.5,
    options: [
      { text: "Fairness achieved by addressing different groups' different needs and barriers, even if that means unequal resource distribution", correct: true },
      { text: "Providing the exact same resources to every individual regardless of need", errorType: "prerequisite_misconception", why: "Describes equality, which the question explicitly distinguishes from equity." },
      { text: "Ignoring socioeconomic status entirely when allocating healthcare resources", errorType: "prerequisite_misconception", why: "Equity specifically requires accounting for differing circumstances like socioeconomic status, not ignoring them." },
      { text: "A guarantee that all groups will have statistically identical health outcomes", errorType: "prerequisite_misconception", why: "Equity is about fairness in addressing need and access, not a guarantee of statistically identical final outcomes." },
    ],
  },

  // --- psychosocial_development_stages (3) ---
  {
    concept: "psychosocial_development_stages",
    stem: "According to Kohlberg's stages of moral development, a person who follows rules primarily to avoid punishment is reasoning at the:",
    reasoning: "Kohlberg's preconventional level (specifically its first stage) centers moral reasoning on obedience and punishment avoidance, the most basic stage in his framework.",
    difficulty: 0.3,
    options: [
      { text: "Preconventional level", correct: true },
      { text: "Conventional level", errorType: "prerequisite_misconception", why: "The conventional level centers reasoning on social approval and maintaining social order, not simple punishment avoidance." },
      { text: "Postconventional level", errorType: "prerequisite_misconception", why: "The postconventional level involves reasoning based on abstract ethical principles, well beyond simple punishment avoidance." },
      { text: "Sensorimotor level", errorType: "outside_knowledge_not_supported_by_passage", why: "'Sensorimotor' is a stage from Piaget's cognitive development framework, not a level in Kohlberg's moral development framework." },
    ],
  },
  {
    concept: "psychosocial_development_stages",
    stem: "In Erikson's stage of generativity versus stagnation, characteristic of middle adulthood, an individual is primarily concerned with:",
    reasoning: "Erikson's generativity versus stagnation stage centers on contributing to and guiding the next generation, through parenting, mentorship, or productive work that outlasts the individual.",
    difficulty: 0.3,
    options: [
      { text: "Contributing to and guiding the next generation", correct: true },
      { text: "Forming a coherent personal identity for the first time", errorType: "prerequisite_misconception", why: "Identity formation is the focus of Erikson's adolescent stage (identity versus role confusion), not middle adulthood." },
      { text: "Developing a basic sense of trust in caregivers", errorType: "prerequisite_misconception", why: "Basic trust is the focus of Erikson's infancy stage, far removed from middle adulthood." },
      { text: "Establishing intimate romantic relationships for the first time", errorType: "prerequisite_misconception", why: "Intimacy versus isolation is Erikson's young-adulthood stage, which precedes the generativity stage." },
    ],
  },
  {
    concept: "psychosocial_development_stages",
    stem: "Object permanence, the understanding that objects continue to exist even when out of sight, develops during which of Piaget's stages?",
    reasoning: "Object permanence is the hallmark cognitive achievement of Piaget's sensorimotor stage (infancy), typically developing gradually over the first two years of life.",
    difficulty: 0.2,
    options: [
      { text: "The sensorimotor stage", correct: true },
      { text: "The preoperational stage", errorType: "prerequisite_misconception", why: "Object permanence is generally already established by the start of the preoperational stage, which follows sensorimotor development." },
      { text: "The concrete operational stage", errorType: "prerequisite_misconception", why: "Concrete operational thought develops much later, well after object permanence is established." },
      { text: "The formal operational stage", errorType: "prerequisite_misconception", why: "Formal operational thought is Piaget's final, most advanced stage, far removed from the infancy achievement of object permanence." },
    ],
  },

  // --- sensation_vs_perception (3) ---
  {
    concept: "sensation_vs_perception",
    stem: "Top-down processing in perception refers to interpreting sensory information primarily using:",
    reasoning: "Top-down processing draws on prior knowledge, expectations, and context to interpret incoming sensory data, as opposed to bottom-up processing, which builds a perception directly from raw sensory input alone.",
    difficulty: 0.3,
    options: [
      { text: "Prior knowledge, expectations, and context", correct: true },
      { text: "Raw sensory data alone, with no influence from prior knowledge", errorType: "sign_or_direction_reversal", why: "Describes bottom-up processing, the concept top-down processing is contrasted with." },
      { text: "Only information from a single sensory modality at a time", errorType: "outside_knowledge_not_supported_by_passage", why: "Top-down processing is defined by the direction of information flow (concept-driven), not by restriction to one sensory modality." },
      { text: "Reflexive responses that bypass the brain entirely", errorType: "prerequisite_misconception", why: "Top-down processing is a cognitive, knowledge-driven process, not a reflexive bypass of higher brain function." },
    ],
  },
  {
    concept: "sensation_vs_perception",
    stem: "Gestalt principles of perceptual organization, such as proximity and similarity, describe the brain's tendency to:",
    reasoning: "Gestalt principles describe how the brain organizes individual sensory elements into unified, meaningful wholes — for example, grouping nearby (proximity) or similar-looking (similarity) elements together as a single perceived group.",
    difficulty: 0.3,
    options: [
      { text: "Group individual sensory elements into unified, organized wholes", correct: true },
      { text: "Process each individual sensory element in complete isolation", errorType: "sign_or_direction_reversal", why: "Gestalt principles are specifically about integrating elements together, not processing them in isolation." },
      { text: "Ignore all context when interpreting a visual scene", errorType: "prerequisite_misconception", why: "Gestalt grouping principles rely heavily on contextual relationships among elements, such as their relative proximity." },
      { text: "Detect the absolute physical intensity of a stimulus", errorType: "outside_knowledge_not_supported_by_passage", why: "That describes basic sensory thresholds, a different topic from Gestalt organizational principles." },
    ],
  },
  {
    concept: "sensation_vs_perception",
    stem: "Signal detection theory distinguishes a person's sensitivity to a stimulus from their:",
    reasoning: "Signal detection theory separates sensitivity (the ability to genuinely discriminate a signal from noise) from response bias (a person's general tendency to say 'yes, I detect it' regardless of actual sensitivity), recognizing both influence detection judgments.",
    difficulty: 0.5,
    options: [
      { text: "Response bias, or general tendency to report detecting a stimulus", correct: true },
      { text: "The physical intensity of the stimulus itself", errorType: "outside_knowledge_not_supported_by_passage", why: "Stimulus intensity is an external physical property, not the internal decision-making factor signal detection theory separates from sensitivity." },
      { text: "The specific sensory organ used to detect the stimulus", errorType: "outside_knowledge_not_supported_by_passage", why: "Signal detection theory is about decision processes in detection judgments, not about which sensory organ is involved." },
      { text: "The absolute threshold of a completely different sense", errorType: "outside_knowledge_not_supported_by_passage", why: "Signal detection theory concerns the same detection task's sensitivity versus bias, not a comparison across different senses." },
    ],
  },

  // --- group_dynamics_and_groupthink (2) ---
  {
    concept: "group_dynamics_and_groupthink",
    stem: "Deindividuation refers to the loss of self-awareness and personal accountability that can occur when a person is:",
    reasoning: "Deindividuation describes a psychological state, often triggered by anonymity within a large group, in which normal self-regulation and personal accountability weaken, sometimes leading to behavior a person would not display individually.",
    difficulty: 0.3,
    options: [
      { text: "Anonymous within a large group", correct: true },
      { text: "Alone and easily identifiable", errorType: "sign_or_direction_reversal", why: "Deindividuation specifically depends on anonymity within a group, not being alone and identifiable." },
      { text: "Working on a task requiring careful individual concentration", errorType: "outside_knowledge_not_supported_by_passage", why: "Deindividuation is a social-group phenomenon linked to anonymity, not simply a state of individual task concentration." },
      { text: "Given a specific, well-defined leadership role within a small group", errorType: "outside_knowledge_not_supported_by_passage", why: "A defined leadership role tends to increase, not decrease, individual accountability and visibility." },
    ],
  },
  {
    concept: "group_dynamics_and_groupthink",
    stem: "One recommended countermeasure against groupthink is to:",
    reasoning: "Assigning a devil's advocate role, whose explicit job is to challenge the group's emerging consensus, is a well-established countermeasure designed to introduce critical evaluation and reduce the premature consensus-seeking that defines groupthink.",
    difficulty: 0.3,
    options: [
      { text: "Assign someone the explicit role of devil's advocate", correct: true },
      { text: "Increase group cohesiveness as much as possible", errorType: "sign_or_direction_reversal", why: "High cohesiveness is a risk factor for groupthink, not a countermeasure against it." },
      { text: "Have the leader state a strong preferred position at the very start of discussion", errorType: "sign_or_direction_reversal", why: "A leader stating a strong early preference tends to suppress dissent and increase groupthink risk, the opposite of a countermeasure." },
      { text: "Discourage seeking any outside opinions during deliberation", errorType: "sign_or_direction_reversal", why: "Seeking outside opinions is generally recommended as a countermeasure; discouraging it would increase groupthink risk." },
    ],
  },

  // --- motivation_and_drive_theory (4) ---
  {
    concept: "motivation_and_drive_theory",
    stem: "Drive-reduction theory explains motivated behavior as arising from an organism's attempt to:",
    reasoning: "Drive-reduction theory holds that physiological needs (e.g., hunger, thirst) create an aversive drive state, and behavior is motivated by the attempt to reduce that drive and restore homeostasis.",
    difficulty: 0.2,
    options: [
      { text: "Reduce an aversive internal drive state and restore homeostasis", correct: true },
      { text: "Maximize external rewards regardless of internal physiological state", errorType: "prerequisite_misconception", why: "Describes an incentive-based account of motivation, distinct from the internal-state-driven logic of drive-reduction theory." },
      { text: "Seek out entirely novel stimulation with no regard for physiological needs", errorType: "prerequisite_misconception", why: "Drive-reduction theory is specifically about reducing internal physiological drives, not seeking novelty for its own sake." },
      { text: "Increase arousal to the highest level possible at all times", errorType: "prerequisite_misconception", why: "Drive-reduction theory is about reducing an aversive drive state, not maximizing arousal." },
    ],
  },
  {
    concept: "motivation_and_drive_theory",
    stem: "The Yerkes-Dodson law describes the relationship between arousal and performance as:",
    reasoning: "The Yerkes-Dodson law proposes an inverted-U relationship: performance improves with increasing arousal up to an optimal point, then declines with further increases in arousal beyond that point.",
    difficulty: 0.4,
    options: [
      { text: "An inverted U-shape, with performance peaking at a moderate level of arousal", correct: true },
      { text: "A straight line, with performance always improving as arousal increases", errorType: "prerequisite_misconception", why: "The law specifically predicts performance eventually declines at high arousal, not a simple continuously increasing relationship." },
      { text: "A straight line, with performance always declining as arousal increases", errorType: "prerequisite_misconception", why: "The law predicts performance initially improves with arousal before declining, not a continuous decline from the start." },
      { text: "No relationship at all between arousal and performance", errorType: "prerequisite_misconception", why: "The entire point of the Yerkes-Dodson law is describing a specific, predictable relationship between the two variables." },
    ],
  },
  {
    concept: "motivation_and_drive_theory",
    stem: "Intrinsic motivation is best defined as engaging in a behavior:",
    reasoning: "Intrinsic motivation is engaging in an activity for its own inherent satisfaction or interest, rather than for an external, separable outcome or reward — which characterizes extrinsic motivation instead.",
    difficulty: 0.2,
    options: [
      { text: "For its own inherent interest or satisfaction", correct: true },
      { text: "Solely to obtain an external reward or avoid punishment", errorType: "sign_or_direction_reversal", why: "Describes extrinsic motivation, the concept intrinsic motivation is contrasted with." },
      { text: "Only when directly ordered to by an authority figure", errorType: "prerequisite_misconception", why: "Compliance with authority describes obedience, unrelated to the internal-interest basis of intrinsic motivation." },
      { text: "Randomly, with no identifiable motivating factor at all", errorType: "prerequisite_misconception", why: "Intrinsic motivation has an identifiable source — inherent interest or enjoyment — rather than being unmotivated or random." },
    ],
  },
  {
    concept: "motivation_and_drive_theory",
    stem: "Providing an unexpected external reward for a task a person already found intrinsically enjoyable can sometimes reduce their subsequent intrinsic motivation for that task. This phenomenon is known as:",
    reasoning: "The overjustification effect describes how adding an external reward for an already-enjoyable activity can shift the perceived reason for engaging in it toward the reward, undermining the original intrinsic motivation once the reward is removed.",
    difficulty: 0.5,
    options: [
      { text: "The overjustification effect", correct: true },
      { text: "The Yerkes-Dodson law", errorType: "prerequisite_misconception", why: "The Yerkes-Dodson law concerns the arousal-performance relationship, an unrelated concept from reward-driven shifts in motivation." },
      { text: "Drive-reduction theory", errorType: "prerequisite_misconception", why: "Drive-reduction theory concerns physiological needs and homeostasis, not the effect of external rewards on intrinsic interest." },
      { text: "Learned helplessness", errorType: "prerequisite_misconception", why: "Learned helplessness concerns giving up effort after uncontrollable negative outcomes, unrelated to reward-induced shifts away from intrinsic motivation." },
    ],
  },

  // --- personality_trait_theory (4) ---
  {
    concept: "personality_trait_theory",
    stem: "The Big Five (Five-Factor Model) of personality includes which of the following traits?",
    reasoning: "The Big Five model consists of Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (often remembered by the acronym OCEAN).",
    difficulty: 0.1,
    options: [
      { text: "Conscientiousness", correct: true },
      { text: "Intelligence", errorType: "prerequisite_misconception", why: "Intelligence is generally studied as a separate cognitive construct, not one of the five personality traits in this model." },
      { text: "Attractiveness", errorType: "outside_knowledge_not_supported_by_passage", why: "Not one of the five traits in the Five-Factor Model; the model concerns personality dispositions, not physical appearance." },
      { text: "Sociability score", errorType: "outside_knowledge_not_supported_by_passage", why: "Not one of the named Big Five traits, though it overlaps conceptually with extraversion, the actual trait in the model." },
    ],
  },
  {
    concept: "personality_trait_theory",
    stem: "According to trait theories of personality, traits are generally understood to be:",
    reasoning: "Trait theories conceptualize personality traits as relatively stable characteristics that are consistent across different situations and over time, distinguishing trait approaches from situational accounts of behavior.",
    difficulty: 0.3,
    options: [
      { text: "Relatively stable across different situations and over time", correct: true },
      { text: "Completely different in every new situation a person encounters", errorType: "sign_or_direction_reversal", why: "Reverses trait theory's core claim of relative cross-situational consistency." },
      { text: "Entirely determined by the immediate situation, with no personal consistency", errorType: "sign_or_direction_reversal", why: "Describes a purely situationist view of behavior, the position trait theory is generally contrasted against." },
      { text: "Fixed permanently at birth with no possibility of any change", errorType: "prerequisite_misconception", why: "Trait theories generally describe traits as relatively stable, not as absolutely fixed and entirely unchangeable across the lifespan." },
    ],
  },
  {
    concept: "personality_trait_theory",
    stem: "A person who scores high on the Big Five trait of neuroticism would be expected to show:",
    reasoning: "High neuroticism is characterized by a tendency toward negative emotions, including anxiety, moodiness, and emotional instability, in response to stress.",
    difficulty: 0.3,
    options: [
      { text: "A tendency toward anxiety and emotional instability", correct: true },
      { text: "Strong emotional stability and calmness under stress", errorType: "sign_or_direction_reversal", why: "Describes low, not high, neuroticism." },
      { text: "High sociability and enjoyment of large social gatherings", errorType: "prerequisite_misconception", why: "Describes extraversion, a separate Big Five trait from neuroticism." },
      { text: "Strong preference for novel experiences and abstract ideas", errorType: "prerequisite_misconception", why: "Describes openness, a separate Big Five trait from neuroticism." },
    ],
  },
  {
    concept: "personality_trait_theory",
    stem: "Person-situation debate in personality psychology centers on the question of whether behavior is better predicted by:",
    reasoning: "This debate contrasts trait-based predictions (behavior driven by stable internal traits) with situational predictions (behavior driven mainly by the specific context), asking which factor better accounts for observed behavior.",
    difficulty: 0.4,
    options: [
      { text: "Stable internal traits versus specific situational factors", correct: true },
      { text: "Genetics versus environment in determining intelligence", errorType: "outside_knowledge_not_supported_by_passage", why: "Describes the nature-versus-nurture debate about intelligence, a different topic from the person-situation personality debate." },
      { text: "Conscious versus unconscious motivation", errorType: "outside_knowledge_not_supported_by_passage", why: "Concerns a different psychoanalytic-style debate, not the trait-versus-situation question in personality psychology." },
      { text: "Nature versus nurture in the development of language", errorType: "outside_knowledge_not_supported_by_passage", why: "Concerns language development, an unrelated topic from the person-situation personality debate." },
    ],
  },

  // --- passage: ps_health_behavior_study (5) ---
  {
    concept: "health_belief_model",
    type: "passage",
    passage: "ps_health_behavior_study",
    stem: "According to the passage, which combination of factors was most strongly associated with consistent medication adherence?",
    reasoning: "The passage states patients high in perceived susceptibility and severity, and who saw benefits as outweighing barriers, were substantially more likely to report consistent adherence.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "High perceived susceptibility and severity, with benefits outweighing barriers", correct: true },
      { text: "Low perceived susceptibility and severity, with barriers outweighing benefits", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage associates this combination with poor adherence, not the high adherence being asked about." },
      { text: "High perceived barriers alone, regardless of other factors", errorType: "passage_detail_misread_or_over_extrapolated", why: "High barriers alone, without the other factors, is not identified in the passage as the key driver of adherence." },
      { text: "Low perceived severity but high perceived benefits", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's key combination requires both susceptibility and severity to be high, not severity to be low." },
    ],
  },
  {
    concept: "health_belief_model",
    type: "passage",
    passage: "ps_health_behavior_study",
    stem: "According to the passage, patients who saw the condition as severe but did not feel personally susceptible showed adherence rates:",
    reasoning: "The passage explicitly states this group's adherence was 'barely above patients who rated both severity and susceptibility as low' — meaning perceived severity alone, without personal susceptibility, was not enough to drive strong adherence.",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Barely above the group rating both factors as low", correct: true },
      { text: "As high as the group rating both susceptibility and severity as high", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly contrasts this group's low adherence with the much higher adherence of the high-susceptibility, high-severity group." },
      { text: "Higher than every other group in the study", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes this group's adherence as barely above the lowest-rated group, not the highest in the study." },
      { text: "Impossible to determine from the passage", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly reports this group's adherence level relative to another group, so it can be determined." },
    ],
  },
  {
    concept: "health_belief_model",
    type: "passage",
    passage: "ps_health_behavior_study",
    stem: "The finding described in the passage — that perceived severity alone was insufficient without perceived susceptibility — most directly suggests that, within this model of health behavior, susceptibility and severity:",
    reasoning: "Since high severity alone (without susceptibility) failed to produce strong adherence, this suggests the two factors interact rather than contribute independently — a person needs to feel personally at risk, not just believe the condition is serious in the abstract, for the perceived-threat factors to translate into behavior.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "Interact with each other, rather than each independently and separately predicting adherence", correct: true },
      { text: "Are entirely redundant with each other and measure the same underlying belief", errorType: "outside_knowledge_not_supported_by_passage", why: "If they were redundant, high severity alone should have produced adherence similar to having both factors high, which the passage's data contradicts." },
      { text: "Have no relationship to adherence at all in this population", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage shows a clear relationship between these factors (in combination) and adherence, not an absence of any relationship." },
      { text: "Only matter for patients who also perceive high barriers to treatment", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's contrast focuses specifically on susceptibility and severity together, not on their interaction with perceived barriers." },
    ],
  },
  {
    concept: "health_belief_model",
    type: "passage",
    passage: "ps_health_behavior_study",
    stem: "Based on the passage, an intervention designed to improve adherence among patients who feel the condition is serious but don't see themselves as personally at risk should most directly target:",
    reasoning: "Since the passage identifies low perceived personal susceptibility (despite high perceived severity) as associated with poor adherence, an intervention should logically aim to increase these patients' sense of personal susceptibility specifically, since severity beliefs are already high.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Increasing patients' sense of personal susceptibility to complications", correct: true },
      { text: "Increasing patients' perceived severity of the condition", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes this specific group as already perceiving the condition as severe; severity isn't their gap." },
      { text: "Decreasing perceived benefits of taking the medication", errorType: "outside_knowledge_not_supported_by_passage", why: "Decreasing perceived benefits would work against, not toward, improving adherence." },
      { text: "Increasing perceived barriers to taking the medication", errorType: "outside_knowledge_not_supported_by_passage", why: "Increasing barriers would work against improving adherence, the opposite of the intervention's goal." },
    ],
  },
  {
    concept: "health_belief_model",
    type: "passage",
    passage: "ps_health_behavior_study",
    stem: "The four factors measured in the study described in the passage — perceived susceptibility, perceived severity, perceived benefits, and perceived barriers — together illustrate that adherence to a medical regimen is best predicted by:",
    reasoning: "The passage's overall design and findings illustrate that adherence depends on a combination of subjective beliefs (about risk, severity, benefits, and costs) rather than any single objective medical fact about the condition or treatment.",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "A combination of the patient's own subjective beliefs about risk, severity, benefits, and costs", correct: true },
      { text: "The objective medical severity of the condition alone", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage shows perceived (subjective), not objective, severity is what's measured, and it alone was insufficient without perceived susceptibility." },
      { text: "The actual monetary cost of the medication alone", errorType: "outside_knowledge_not_supported_by_passage", why: "Cost is only one component of perceived barriers, one of four factors the passage discusses, not the sole predictor." },
      { text: "The patient's overall socioeconomic status alone", errorType: "outside_knowledge_not_supported_by_passage", why: "Socioeconomic status is never measured or discussed in the passage; the four measured factors are all subjective beliefs." },
    ],
  },

  // --- passage: ps_social_facilitation_study (5) ---
  {
    concept: "social_facilitation_and_deindividuation",
    type: "passage",
    passage: "ps_social_facilitation_study",
    stem: "According to the passage, being observed by an audience improved performance on which type of task?",
    reasoning: "The passage states that on the simple, well-practiced task (signing one's name), observed participants performed faster and with fewer errors than those alone.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "The simple, well-practiced task", correct: true },
      { text: "The novel, complex task", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes performance getting worse, not better, on the novel complex task when observed." },
      { text: "Both tasks equally", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes opposite effects on the two different task types, not equal improvement on both." },
      { text: "Neither task; the audience had no measurable effect", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly reports measurable effects (in opposite directions) for both task types." },
    ],
  },
  {
    concept: "social_facilitation_and_deindividuation",
    type: "passage",
    passage: "ps_social_facilitation_study",
    stem: "Based on the passage, an audience's presence had what effect on performance of the novel, complex mirror-tracing task?",
    reasoning: "The passage explicitly states that on the novel, complex task, 'observed participants performed slower and made more errors than participants working alone' — the pattern reversed compared to the simple task.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "It impaired performance, producing more errors and slower completion", correct: true },
      { text: "It improved performance, just as with the simple task", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states the pattern 'reversed' for the complex task compared to the simple one." },
      { text: "It had no measurable effect on the complex task", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly reports a measurable negative effect (slower, more errors) on the complex task when observed." },
      { text: "It only affected error rate, not completion speed", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes both slower speed and more errors together for the complex task under observation." },
    ],
  },
  {
    concept: "social_facilitation_and_deindividuation",
    type: "passage",
    passage: "ps_social_facilitation_study",
    stem: "The passage's finding that an audience helps performance on simple tasks but hurts performance on complex tasks is best explained by which underlying principle?",
    reasoning: "This pattern is consistent with the classic social facilitation account: the presence of an audience increases physiological arousal, which enhances performance of well-learned, dominant responses (simple tasks) but interferes with the less-automatic, more effortful responses needed for complex or novel tasks.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "Audience-induced arousal enhances well-learned responses but disrupts less-practiced, complex ones", correct: true },
      { text: "Audiences always improve performance and enjoyment, regardless of task type", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage explicitly shows performance impairment on the complex task, contradicting a claim of universal improvement." },
      { text: "Audiences reduce arousal, allowing more careful and deliberate performance", errorType: "outside_knowledge_not_supported_by_passage", why: "Standard social facilitation theory (and the passage's pattern) is explained by increased, not decreased, arousal from an audience." },
      { text: "Complex tasks are always performed better alone than any simple task would be", errorType: "outside_knowledge_not_supported_by_passage", why: "This isn't a meaningful comparison the passage makes; the relevant comparison is alone versus observed, within each task type." },
    ],
  },
  {
    concept: "social_facilitation_and_deindividuation",
    type: "passage",
    passage: "ps_social_facilitation_study",
    stem: "According to the passage, when participants performed as anonymous members of a large group rather than as identifiable individuals, what happened to their effort on both tasks?",
    reasoning: "The passage states that under anonymous large-group conditions, 'effort on both tasks declined compared to working alone,' consistent with deindividuation/social loafing reducing individual accountability and effort.",
    difficulty: 0.3,
    sirs: 1,
    options: [
      { text: "Effort declined on both tasks compared to working alone", correct: true },
      { text: "Effort increased on both tasks compared to working alone", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states effort declined under anonymous group conditions, not increased." },
      { text: "Effort was unaffected on the simple task but declined on the complex task", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes decline on both tasks together, not a selective effect on only one." },
      { text: "Effort could not be measured under anonymous conditions", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly reports a measured decline in effort, meaning it was in fact measured." },
    ],
  },
  {
    concept: "social_facilitation_and_deindividuation",
    type: "passage",
    passage: "ps_social_facilitation_study",
    stem: "Based on the passage, the finding that anonymity eliminated the simple-task performance boost seen under identifiable observation suggests that the original boost depended on:",
    reasoning: "Since the simple-task improvement disappeared once individual identifiability was removed (anonymous large group), this suggests the boost wasn't from mere audience presence alone but specifically from being individually identifiable and thus evaluable by observers — consistent with an evaluation-apprehension account of social facilitation.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Being individually identifiable and potentially evaluated by observers, not just an audience's mere presence", correct: true },
      { text: "The total number of people present in the room", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's contrast is about identifiability versus anonymity within a group, not about the raw number of people present." },
      { text: "The specific difficulty level of the simple task alone", errorType: "outside_knowledge_not_supported_by_passage", why: "Task difficulty is held constant in this comparison; what changed was identifiability/anonymity, not task difficulty." },
      { text: "Whether participants were being paid for their performance", errorType: "outside_knowledge_not_supported_by_passage", why: "Payment is never mentioned as a variable in the passage; identifiability versus anonymity is the manipulated factor." },
    ],
  },
];
