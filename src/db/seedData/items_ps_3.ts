import type { ItemDef } from "./types";

export const itemsPs3: ItemDef[] = [
  // --- attribution_theory (2) ---
  {
    concept: "attribution_theory",
    stem: "The self-serving bias is generally understood to serve which psychological function?",
    reasoning: "The self-serving bias (attributing successes internally and failures externally) is generally understood to protect and maintain self-esteem.",
    difficulty: 0.3,
    options: [
      { text: "Protecting and maintaining self-esteem", correct: true },
      { text: "Improving the objective accuracy of self-assessment", errorType: "sign_or_direction_reversal", why: "The self-serving bias is a systematic distortion away from accuracy, not a mechanism for improving it." },
      { text: "Helping a person attribute others' behavior more accurately", errorType: "prerequisite_misconception", why: "The self-serving bias concerns explanations of one's own outcomes, not judgments about others' behavior." },
      { text: "Reducing group conformity pressures", errorType: "outside_knowledge_not_supported_by_passage", why: "Conformity pressure is a distinct social phenomenon unrelated to the self-protective function of the self-serving bias." },
    ],
  },
  {
    concept: "attribution_theory",
    stem: "According to Kelley's covariation model, high 'distinctiveness' means a person's behavior:",
    reasoning: "High distinctiveness means the person behaves differently in this specific situation than they do in most other situations — the behavior is distinctive to this particular circumstance.",
    difficulty: 0.4,
    options: [
      { text: "Occurs specifically in this situation but not across most other situations", correct: true },
      { text: "Occurs identically across almost every situation the person encounters", errorType: "sign_or_direction_reversal", why: "Describes low, not high, distinctiveness." },
      { text: "Is shared by almost everyone who encounters the same situation", errorType: "prerequisite_misconception", why: "Describes high consensus, a separate dimension in Kelley's model from distinctiveness." },
      { text: "Has occurred consistently every time this situation has arisen before", errorType: "prerequisite_misconception", why: "Describes high consistency, a separate dimension in Kelley's model from distinctiveness." },
    ],
  },

  // --- social_identity_theory (2) ---
  {
    concept: "social_identity_theory",
    stem: "According to social identity theory, when a person's group membership becomes especially salient in a given situation, they are more likely to:",
    reasoning: "When group identity is salient, individuals tend to think and act more in terms of the group's norms and interests, increasing in-group favoritism and intergroup differentiation in that context.",
    difficulty: 0.4,
    options: [
      { text: "Think and act in terms of the group's norms and interests", correct: true },
      { text: "Ignore their group membership entirely in favor of individual identity", errorType: "sign_or_direction_reversal", why: "Increased salience of group membership pushes behavior toward group-based, not purely individual, thinking." },
      { text: "Automatically switch their group membership to a higher-status group", errorType: "outside_knowledge_not_supported_by_passage", why: "Salience of an existing group membership doesn't imply switching group affiliation altogether." },
      { text: "Become entirely indifferent to any social comparison", errorType: "sign_or_direction_reversal", why: "Increased group salience typically increases, not eliminates, social comparison with out-groups." },
    ],
  },
  {
    concept: "social_identity_theory",
    stem: "A person can hold multiple social identities (e.g., based on profession, nationality, family role) simultaneously. Social identity theory would predict that which identity most strongly shapes behavior in a given moment depends on:",
    reasoning: "Social identity theory holds that which of a person's multiple identities is currently salient (activated by the specific context or situation) most strongly shapes their behavior at that moment, rather than a single fixed identity always dominating.",
    difficulty: 0.5,
    options: [
      { text: "Which identity is most salient given the current context", correct: true },
      { text: "Whichever identity the person was born with first", errorType: "outside_knowledge_not_supported_by_passage", why: "Order of acquiring an identity isn't the factor the theory identifies as determining behavior in the moment; situational salience is." },
      { text: "The identity with the smallest overall group membership", errorType: "outside_knowledge_not_supported_by_passage", why: "Group size isn't the salience-determining factor the theory identifies; contextual relevance is." },
      { text: "Only the identity the person considers highest status, regardless of context", errorType: "outside_knowledge_not_supported_by_passage", why: "The theory ties identity salience to contextual relevance, not simply the highest-status identity in every situation." },
    ],
  },

  // --- classical_conditioning (2) ---
  {
    concept: "classical_conditioning",
    stem: "In a conditioning experiment, a light is presented briefly before a tone, and the tone is then paired with food to produce salivation. Later, the light alone (never directly paired with food) also produces some salivation. This phenomenon is called:",
    reasoning: "Higher-order (second-order) conditioning occurs when a neutral stimulus (the light) becomes associated with an already-established conditioned stimulus (the tone), acquiring some ability to elicit the conditioned response even without ever being directly paired with the unconditioned stimulus.",
    difficulty: 0.5,
    options: [
      { text: "Higher-order (second-order) conditioning", correct: true },
      { text: "Simple extinction", errorType: "prerequisite_misconception", why: "Extinction describes the fading of a learned response, not the acquisition of a new one through indirect association." },
      { text: "Spontaneous recovery", errorType: "prerequisite_misconception", why: "Spontaneous recovery is the reappearance of an extinguished response after a rest period, unrelated to this indirect pairing scenario." },
      { text: "Stimulus discrimination", errorType: "prerequisite_misconception", why: "Discrimination involves learning to respond differently to distinct stimuli, not acquiring a new conditioned response through indirect pairing." },
    ],
  },
  {
    concept: "classical_conditioning",
    stem: "Little Albert, in Watson's classic (and ethically controversial) experiment, was conditioned to fear a white rat by pairing it with a loud, frightening noise. Albert's subsequent fear of a white rabbit and a white fur coat illustrates:",
    reasoning: "Albert's fear extending to physically similar stimuli (other white, furry objects) that were never directly paired with the frightening noise illustrates stimulus generalization.",
    difficulty: 0.3,
    options: [
      { text: "Stimulus generalization", correct: true },
      { text: "Stimulus discrimination", errorType: "sign_or_direction_reversal", why: "Discrimination would mean Albert responded only to the original rat and not to similar objects, the opposite of what's described." },
      { text: "Operant shaping", errorType: "prerequisite_misconception", why: "This experiment involved classical conditioning of a fear response, not the operant shaping of a voluntary behavior." },
      { text: "Latent learning", errorType: "prerequisite_misconception", why: "Latent learning refers to learning that occurs without reinforcement and isn't demonstrated until later; it's unrelated to this generalization of a conditioned fear response." },
    ],
  },

  // --- operant_conditioning (2) ---
  {
    concept: "operant_conditioning",
    stem: "A rat receives a mild electric shock every time it enters a particular corner of its cage, and it subsequently avoids that corner. This is an example of:",
    reasoning: "Adding an aversive stimulus (the shock) contingent on a behavior (entering the corner) to decrease that behavior's future frequency is positive punishment.",
    difficulty: 0.3,
    options: [
      { text: "Positive punishment", correct: true },
      { text: "Negative punishment", errorType: "sign_or_direction_reversal", why: "Negative punishment removes a pleasant stimulus to decrease behavior, whereas this scenario adds an aversive stimulus." },
      { text: "Positive reinforcement", errorType: "sign_or_direction_reversal", why: "Reinforcement increases behavior frequency, but this scenario describes a behavior (entering the corner) decreasing." },
      { text: "Negative reinforcement", errorType: "sign_or_direction_reversal", why: "Negative reinforcement increases behavior by removing an aversive stimulus, whereas this scenario decreases behavior by adding one." },
    ],
  },
  {
    concept: "operant_conditioning",
    stem: "A pigeon is reinforced with food for pecking a key, but only when a green light is on; pecking during a red light produces no food. Over time, the pigeon pecks almost exclusively when the green light is on. The green and red lights in this scenario are functioning as:",
    reasoning: "Stimuli that signal whether a particular response will be reinforced are called discriminative stimuli; the green light signals reinforcement is available, while the red light signals it is not.",
    difficulty: 0.5,
    options: [
      { text: "Discriminative stimuli", correct: true },
      { text: "Unconditioned stimuli", errorType: "prerequisite_misconception", why: "Unconditioned stimuli are specific to classical conditioning and naturally elicit a response; the lights here are operant signals for reinforcement availability, not classically conditioned triggers." },
      { text: "Primary reinforcers", errorType: "prerequisite_misconception", why: "The lights themselves are not being delivered as rewards; they are signals indicating whether pecking will be reinforced." },
      { text: "Punishers", errorType: "prerequisite_misconception", why: "The red light's absence of reinforcement isn't an active aversive punisher; it simply signals non-reinforcement, a distinct concept." },
    ],
  },

  // --- memory_encoding_and_retrieval (2) ---
  {
    concept: "memory_encoding_and_retrieval",
    stem: "Procedural memory, such as remembering how to ride a bicycle, is classified as a type of:",
    reasoning: "Procedural memory is a form of implicit (nondeclarative) long-term memory, for skills and habits that can be performed without conscious recollection of learning them.",
    difficulty: 0.2,
    options: [
      { text: "Implicit (nondeclarative) long-term memory", correct: true },
      { text: "Explicit (declarative) long-term memory", errorType: "sign_or_direction_reversal", why: "Explicit/declarative memory covers facts and events that can be consciously recalled and stated, unlike procedural skill memory." },
      { text: "Sensory memory", errorType: "prerequisite_misconception", why: "Sensory memory is an extremely brief initial stage holding raw sensory input, unrelated to a well-learned motor skill." },
      { text: "Short-term (working) memory", errorType: "prerequisite_misconception", why: "Short-term memory holds information temporarily for active processing, unlike a durable, long-term learned skill." },
    ],
  },
  {
    concept: "memory_encoding_and_retrieval",
    stem: "Chunking, as a memory strategy, improves short-term memory capacity by:",
    reasoning: "Chunking groups individual pieces of information into larger, meaningful units, allowing more total information to be held within short-term memory's limited number of 'slots,' since each slot can now hold a bigger chunk.",
    difficulty: 0.3,
    options: [
      { text: "Grouping individual items into larger, meaningful units", correct: true },
      { text: "Repeating each individual item silently, one at a time, with no grouping", errorType: "prerequisite_misconception", why: "Describes simple maintenance rehearsal, a different strategy from chunking, which specifically involves grouping items together." },
      { text: "Physically writing information down instead of remembering it", errorType: "outside_knowledge_not_supported_by_passage", why: "Chunking is an internal cognitive strategy for organizing information, not a strategy of external note-taking." },
      { text: "Ignoring most of the information and remembering only a small fraction", errorType: "prerequisite_misconception", why: "Chunking aims to effectively remember more information overall, not simply to discard most of it." },
    ],
  },

  // --- cognitive_dissonance (2) ---
  {
    concept: "cognitive_dissonance",
    stem: "A person who joins an intensive, initially unpleasant club initiation rite tends to rate their subsequent enjoyment of the club more highly than someone who joined with an easy initiation. This is best explained by:",
    reasoning: "This is a classic dissonance-reduction effect: having endured an unpleasant, effortful initiation creates dissonance ('why did I put up with that for this club?'), which is resolved by increasing one's valuation of the club itself, consistent with effort justification.",
    difficulty: 0.4,
    options: [
      { text: "Effort justification, resolving dissonance by valuing the club more highly", correct: true },
      { text: "Classical conditioning, pairing the club directly with positive stimuli", errorType: "prerequisite_misconception", why: "No repeated stimulus pairing is involved here; this is a cognitive dissonance-reduction effect from a one-time, effortful initiation, not classical conditioning." },
      { text: "The mere-exposure effect from repeated visits to the club", errorType: "prerequisite_misconception", why: "The scenario centers on a single difficult initiation event, not repeated mere exposure over time." },
      { text: "Social loafing during the group initiation activity", errorType: "prerequisite_misconception", why: "Social loafing concerns reduced individual effort in group tasks, an unrelated concept from valuing the club more after a difficult entry experience." },
    ],
  },
  {
    concept: "cognitive_dissonance",
    stem: "According to cognitive dissonance theory, selective exposure — seeking information that confirms existing beliefs while avoiding contradictory information — functions primarily to:",
    reasoning: "Selective exposure to belief-confirming information helps avoid the dissonance that would arise from encountering information that contradicts existing beliefs, serving as a preventive dissonance-avoidance strategy.",
    difficulty: 0.4,
    options: [
      { text: "Avoid the dissonance that contradictory information would create", correct: true },
      { text: "Maximize exposure to the widest possible range of viewpoints", errorType: "sign_or_direction_reversal", why: "Selective exposure specifically narrows, rather than maximizes, exposure to viewpoints, avoiding those that would conflict with existing beliefs." },
      { text: "Improve the objective accuracy of one's overall knowledge", errorType: "sign_or_direction_reversal", why: "Selectively avoiding contradictory information tends to reduce, not improve, the balance and accuracy of one's overall knowledge." },
      { text: "Increase social loafing within a group discussion", errorType: "outside_knowledge_not_supported_by_passage", why: "Social loafing is an unrelated group-effort phenomenon, not a function of individual selective exposure to information." },
    ],
  },

  // --- conformity_and_obedience (2) ---
  {
    concept: "conformity_and_obedience",
    stem: "The foot-in-the-door technique for gaining compliance involves:",
    reasoning: "The foot-in-the-door technique involves securing agreement to a small initial request first, which increases the likelihood of subsequent agreement to a larger, related request.",
    difficulty: 0.3,
    options: [
      { text: "Securing agreement to a small request first, to increase compliance with a larger later request", correct: true },
      { text: "Making an extremely large request first, followed by a smaller one", errorType: "sign_or_direction_reversal", why: "Describes the door-in-the-face technique, the reverse ordering from foot-in-the-door." },
      { text: "Offering a reward immediately in exchange for compliance", errorType: "prerequisite_misconception", why: "Foot-in-the-door relies on the psychological effect of prior small commitment, not on offering a direct reward." },
      { text: "Threatening a punishment if the person does not comply", errorType: "prerequisite_misconception", why: "This technique relies on gradually escalating voluntary commitment, not on threats or punishment." },
    ],
  },
  {
    concept: "conformity_and_obedience",
    stem: "The door-in-the-face technique for gaining compliance relies on:",
    reasoning: "The door-in-the-face technique starts with an unreasonably large request (expected to be refused), followed by a smaller, more reasonable request, which appears more acceptable by comparison and via a sense of reciprocal concession.",
    difficulty: 0.4,
    options: [
      { text: "Starting with an unreasonably large request, followed by a smaller, more reasonable one", correct: true },
      { text: "Starting with a small request, followed by an increasingly large one", errorType: "sign_or_direction_reversal", why: "Describes the foot-in-the-door technique, the reverse ordering from door-in-the-face." },
      { text: "Repeating the exact same request multiple times without variation", errorType: "prerequisite_misconception", why: "The technique specifically relies on two different-sized requests in sequence, not repetition of an identical request." },
      { text: "Only working when the requester is a stranger to the target", errorType: "outside_knowledge_not_supported_by_passage", why: "The relationship between requester and target isn't the defining condition of this technique; the sequencing of request size is." },
    ],
  },

  // --- stereotypes_and_prejudice (2) ---
  {
    concept: "stereotypes_and_prejudice",
    stem: "Symbolic (modern) racism differs from old-fashioned, overt racism primarily in that symbolic racism is expressed through:",
    reasoning: "Symbolic racism is expressed through more indirect, socially acceptable means — such as opposition to policies framed in racially coded terms — rather than through overt, explicit statements of racial inferiority.",
    difficulty: 0.5,
    options: [
      { text: "Indirect, socially acceptable means, such as opposition to certain policies", correct: true },
      { text: "Explicit, direct statements of racial inferiority", errorType: "sign_or_direction_reversal", why: "Describes old-fashioned overt racism, the concept symbolic racism is contrasted against." },
      { text: "Physical violence exclusively", errorType: "prerequisite_misconception", why: "Symbolic racism concerns indirect attitudes and policy positions, not necessarily physical violence." },
      { text: "Legally codified segregation policies", errorType: "outside_knowledge_not_supported_by_passage", why: "Legally codified segregation is a historical form of overt, institutional discrimination, not the indirect, attitudinal form symbolic racism describes." },
    ],
  },
  {
    concept: "stereotypes_and_prejudice",
    stem: "Scapegoating, as a social-psychological phenomenon, refers to the tendency to:",
    reasoning: "Scapegoating is directing aggression or blame toward a relatively powerless out-group, especially during times of frustration or hardship, rather than toward the actual source of the frustration.",
    difficulty: 0.3,
    options: [
      { text: "Direct blame or aggression toward a relatively powerless out-group during times of frustration", correct: true },
      { text: "Direct blame toward the actual, powerful source of one's frustration", errorType: "sign_or_direction_reversal", why: "Scapegoating specifically involves displacing blame away from the real source onto an easier, less powerful target." },
      { text: "Give credit to an out-group for a shared success", errorType: "sign_or_direction_reversal", why: "Scapegoating concerns assigning blame during hardship, not assigning credit during success." },
      { text: "Only occur between individuals of the same social group", errorType: "prerequisite_misconception", why: "Scapegoating specifically involves an out-group target, not blame directed within one's own group." },
    ],
  },

  // --- socioeconomic_status_and_health (2) ---
  {
    concept: "socioeconomic_status_and_health",
    stem: "Health literacy, the ability to obtain, process, and understand basic health information, is one factor linking socioeconomic status to health outcomes because:",
    reasoning: "Lower health literacy, which is statistically associated with lower socioeconomic status, can impair a person's ability to understand medical instructions, navigate the healthcare system, and make informed health decisions, contributing to worse health outcomes.",
    difficulty: 0.4,
    options: [
      { text: "Lower health literacy can impair understanding of medical instructions and informed decision-making", correct: true },
      { text: "Health literacy has no measurable relationship to socioeconomic status", errorType: "prerequisite_misconception", why: "Health literacy is statistically associated with socioeconomic status, contrary to this claim of no relationship." },
      { text: "Higher socioeconomic status always guarantees perfect health literacy", errorType: "prerequisite_misconception", why: "The relationship is a statistical association, not an absolute guarantee for every individual." },
      { text: "Health literacy is entirely unrelated to health outcomes", errorType: "prerequisite_misconception", why: "Health literacy is specifically identified as a mechanism connecting socioeconomic status to health outcomes, not something unrelated to outcomes." },
    ],
  },
  {
    concept: "socioeconomic_status_and_health",
    stem: "Allostatic load refers to the cumulative physiological wear-and-tear resulting from:",
    reasoning: "Allostatic load describes the cumulative biological cost of chronic or repeated activation of the body's stress response systems, which has been proposed as one biological pathway linking chronic socioeconomic stress to poorer long-term health.",
    difficulty: 0.4,
    options: [
      { text: "Chronic or repeated activation of the body's stress response systems", correct: true },
      { text: "A single acute injury with no lasting effect", errorType: "prerequisite_misconception", why: "Allostatic load concerns cumulative, repeated stress exposure over time, not a single isolated injury." },
      { text: "Normal, healthy aging with no relationship to stress", errorType: "prerequisite_misconception", why: "Allostatic load is specifically tied to stress-response activation, not simply the passage of time through normal aging." },
      { text: "A genetic mutation present from birth", errorType: "prerequisite_misconception", why: "Allostatic load is an accumulated physiological response to environmental/psychological stress exposure, not an inherited genetic condition." },
    ],
  },

  // --- psychosocial_development_stages (2) ---
  {
    concept: "psychosocial_development_stages",
    stem: "According to Erikson, the psychosocial crisis of intimacy versus isolation is most characteristic of which life stage?",
    reasoning: "Erikson's intimacy versus isolation stage is characteristic of young adulthood, centering on forming close, committed relationships with others.",
    difficulty: 0.2,
    options: [
      { text: "Young adulthood", correct: true },
      { text: "Adolescence", errorType: "prerequisite_misconception", why: "Adolescence is characterized by Erikson's identity versus role confusion stage, which precedes the intimacy versus isolation stage." },
      { text: "Middle childhood", correct: false, errorType: "prerequisite_misconception", why: "Middle childhood is characterized by industry versus inferiority in Erikson's framework, not intimacy versus isolation." },
      { text: "Late adulthood", correct: false, errorType: "prerequisite_misconception", why: "Late adulthood is characterized by integrity versus despair in Erikson's framework, well after the intimacy versus isolation stage." },
    ],
  },
  {
    concept: "psychosocial_development_stages",
    stem: "According to Kohlberg, moral reasoning based on abstract principles of justice that may transcend specific laws (e.g., civil disobedience against an unjust law) reflects the:",
    reasoning: "Kohlberg's postconventional level involves moral reasoning based on self-chosen, abstract ethical principles that can transcend or even conflict with existing laws or social conventions.",
    difficulty: 0.4,
    options: [
      { text: "Postconventional level", correct: true },
      { text: "Preconventional level", errorType: "prerequisite_misconception", why: "The preconventional level centers on punishment avoidance and self-interest, far more basic than abstract principled reasoning that can override law." },
      { text: "Conventional level", errorType: "prerequisite_misconception", why: "The conventional level centers on obeying laws and social norms to maintain social order, not reasoning that can justify transcending those very laws." },
      { text: "Sensorimotor level", errorType: "outside_knowledge_not_supported_by_passage", why: "'Sensorimotor' belongs to Piaget's cognitive development framework, not Kohlberg's moral development framework." },
    ],
  },

  // --- sensation_vs_perception (2) ---
  {
    concept: "sensation_vs_perception",
    stem: "Perceptual constancy refers to the tendency to perceive an object as having consistent properties (size, shape, color) even when:",
    reasoning: "Perceptual constancy allows the brain to perceive an object's size, shape, or color as stable and unchanging even when the raw sensory input (retinal image size, shape, or lighting) actually varies, e.g., due to viewing distance or angle.",
    difficulty: 0.3,
    options: [
      { text: "The raw sensory input from the object changes (e.g., due to distance or angle)", correct: true },
      { text: "The object itself physically changes its actual properties", errorType: "prerequisite_misconception", why: "Perceptual constancy concerns stable perception despite varying sensory input, not perception of an object that has genuinely, physically changed." },
      { text: "The observer closes their eyes completely", errorType: "outside_knowledge_not_supported_by_passage", why: "Perceptual constancy concerns ongoing perception despite varying input conditions, not perception with the eyes closed." },
      { text: "No sensory information about the object is available at all", errorType: "prerequisite_misconception", why: "Perceptual constancy still relies on some sensory input; it is not perception occurring with a complete absence of sensory information." },
    ],
  },
  {
    concept: "sensation_vs_perception",
    stem: "The phenomenon in which a person fails to notice an obvious but unexpected object or event in their visual field because their attention is focused elsewhere is called:",
    reasoning: "Inattentional blindness describes the failure to notice a fully visible but unexpected stimulus when attention is focused on another task, as demonstrated in the classic 'invisible gorilla' experiment.",
    difficulty: 0.4,
    options: [
      { text: "Inattentional blindness", correct: true },
      { text: "Sensory adaptation", errorType: "prerequisite_misconception", why: "Sensory adaptation is decreased sensitivity to an unchanging stimulus over time, unrelated to attention-driven failure to notice a distinct, unexpected event." },
      { text: "Signal detection bias", errorType: "prerequisite_misconception", why: "Signal detection bias concerns a general tendency in reporting detection judgments, a different concept from a specific attention-driven failure to notice something." },
      { text: "The just-noticeable difference", errorType: "prerequisite_misconception", why: "The just-noticeable difference concerns the smallest detectable difference between two stimuli, unrelated to attention-driven noticing failures." },
    ],
  },

  // --- group_dynamics_and_groupthink (2) ---
  {
    concept: "group_dynamics_and_groupthink",
    stem: "According to social identity and group dynamics research, being assigned to a group, even based on a trivial or arbitrary criterion, is generally sufficient to produce:",
    reasoning: "Minimal group studies have shown that even arbitrary group assignment is generally sufficient to produce some degree of in-group favoritism, an important finding for understanding the basic dynamics of group formation and bias.",
    difficulty: 0.3,
    options: [
      { text: "Some degree of in-group favoritism", correct: true },
      { text: "Complete indifference toward any group members", errorType: "sign_or_direction_reversal", why: "Minimal group research shows measurable in-group favoritism arises, not indifference, even from arbitrary assignment." },
      { text: "Immediate hostility toward one's own group", errorType: "sign_or_direction_reversal", why: "Minimal group effects produce favoritism toward, not hostility against, one's own group." },
      { text: "No measurable psychological effect at all", errorType: "prerequisite_misconception", why: "The well-established minimal group effect demonstrates a measurable psychological effect from even arbitrary group assignment." },
    ],
  },
  {
    concept: "group_dynamics_and_groupthink",
    stem: "The 'risky shift' phenomenon, an early observation related to group polarization, described the tendency for group discussion to:",
    reasoning: "The risky shift phenomenon was the early observation that group discussion tended to push decisions toward riskier options than individuals would choose alone — later understood as one manifestation of the broader group polarization effect.",
    difficulty: 0.4,
    options: [
      { text: "Push group decisions toward riskier options than individuals would choose alone", correct: true },
      { text: "Push group decisions toward more cautious options than individuals would choose alone", errorType: "sign_or_direction_reversal", why: "The risky shift specifically describes a shift toward greater, not lesser, risk-taking in group decisions." },
      { text: "Have no measurable effect on the riskiness of decisions", errorType: "prerequisite_misconception", why: "The entire phenomenon being named and studied is a measurable shift in risk-taking following group discussion." },
      { text: "Only occur in groups smaller than three people", errorType: "outside_knowledge_not_supported_by_passage", why: "Group size restrictions of this kind are not part of the risky shift or group polarization findings." },
    ],
  },

  // --- motivation_and_drive_theory (2) ---
  {
    concept: "motivation_and_drive_theory",
    stem: "Maslow's hierarchy of needs proposes that a person is generally motivated to pursue higher-level needs (such as self-actualization) only after:",
    reasoning: "Maslow's hierarchy proposes that lower-level, more basic needs (such as physiological needs and safety) must generally be reasonably satisfied before a person is strongly motivated to pursue higher-level needs like belonging, esteem, and self-actualization.",
    difficulty: 0.3,
    options: [
      { text: "Lower-level, more basic needs have been reasonably satisfied", correct: true },
      { text: "All higher-level needs have already been fully satisfied", errorType: "prerequisite_misconception", why: "This reverses the hierarchy's logic; basic needs are the prerequisite for pursuing higher-level needs, not the other way around." },
      { text: "The person has reached old age", errorType: "outside_knowledge_not_supported_by_passage", why: "Maslow's hierarchy is about the order of need satisfaction, not a claim tied to a specific age or life stage." },
      { text: "The person has received formal education on the topic", errorType: "outside_knowledge_not_supported_by_passage", why: "Formal education is not a condition Maslow's hierarchy specifies for pursuing higher-level needs." },
    ],
  },
  {
    concept: "motivation_and_drive_theory",
    stem: "Self-determination theory identifies autonomy, competence, and relatedness as three basic psychological needs that, when satisfied, tend to:",
    reasoning: "Self-determination theory proposes that satisfying these three basic psychological needs supports and enhances intrinsic motivation and overall psychological well-being.",
    difficulty: 0.4,
    options: [
      { text: "Support intrinsic motivation and psychological well-being", correct: true },
      { text: "Undermine intrinsic motivation, requiring external rewards instead", errorType: "sign_or_direction_reversal", why: "Self-determination theory holds that satisfying these needs supports, not undermines, intrinsic motivation." },
      { text: "Have no relationship to motivation of any kind", errorType: "prerequisite_misconception", why: "These three needs are central to the theory's account of what drives and sustains motivation." },
      { text: "Only apply to children, not adults", errorType: "outside_knowledge_not_supported_by_passage", why: "Self-determination theory is applied broadly across the lifespan, not restricted specifically to children." },
    ],
  },

  // --- personality_trait_theory (2) ---
  {
    concept: "personality_trait_theory",
    stem: "A person who scores high on the Big Five trait of openness would be expected to show:",
    reasoning: "High openness is characterized by curiosity, imagination, and a preference for novel experiences and abstract or unconventional ideas.",
    difficulty: 0.2,
    options: [
      { text: "Curiosity and a preference for novel experiences and abstract ideas", correct: true },
      { text: "A strong preference for familiar routines and conventional thinking", errorType: "sign_or_direction_reversal", why: "Describes low, not high, openness." },
      { text: "High anxiety and emotional instability", errorType: "prerequisite_misconception", why: "Describes high neuroticism, a separate Big Five trait from openness." },
      { text: "A strong tendency toward organization and self-discipline", errorType: "prerequisite_misconception", why: "Describes high conscientiousness, a separate Big Five trait from openness." },
    ],
  },
  {
    concept: "personality_trait_theory",
    stem: "Psychodynamic theories of personality, in contrast to trait theories, place greater emphasis on:",
    reasoning: "Psychodynamic theories (originating with Freud) emphasize unconscious conflicts and early childhood experiences as key shapers of personality, in contrast to trait theories, which focus on describing and measuring stable, observable dispositions.",
    difficulty: 0.4,
    options: [
      { text: "Unconscious conflicts and early childhood experiences", correct: true },
      { text: "Directly observable, measurable behavioral dispositions", errorType: "sign_or_direction_reversal", why: "Describes the focus of trait theory, the approach psychodynamic theory is being contrasted with here." },
      { text: "Genetic determinants of personality exclusively", errorType: "outside_knowledge_not_supported_by_passage", why: "Psychodynamic theory's emphasis is on unconscious psychological processes and early experience, not primarily genetics." },
      { text: "Cross-situational consistency of behavior", errorType: "outside_knowledge_not_supported_by_passage", why: "Cross-situational consistency is more closely associated with trait theory's approach, not the psychodynamic emphasis on unconscious conflict." },
    ],
  },

  // --- health_belief_model (2) ---
  {
    concept: "health_belief_model",
    stem: "According to the health belief model, 'cues to action' refer to:",
    reasoning: "Cues to action are internal or external triggers (such as a symptom, a public health campaign, or a friend's diagnosis) that prompt a person to actually engage in a recommended health behavior, complementing the model's other belief-based factors.",
    difficulty: 0.4,
    options: [
      { text: "Internal or external triggers that prompt engaging in a health behavior", correct: true },
      { text: "A permanent personality trait predicting health behavior", errorType: "prerequisite_misconception", why: "Cues to action are situational triggers, not stable personality traits." },
      { text: "The financial cost of a medical treatment", errorType: "prerequisite_misconception", why: "Financial cost is generally categorized under perceived barriers in the model, a separate factor from cues to action." },
      { text: "A doctor's medical license status", errorType: "outside_knowledge_not_supported_by_passage", why: "Not a component the health belief model identifies as a cue to action." },
    ],
  },
  {
    concept: "health_belief_model",
    stem: "The health belief model includes the concept of 'self-efficacy' — a person's belief in their own ability to successfully perform a health behavior. Adding self-efficacy to the model reflects the recognition that:",
    reasoning: "Even when a person believes a health behavior is important and beneficial, they may not act on it if they lack confidence in their own ability to actually carry it out — self-efficacy captures this additional, distinct requirement for behavior change.",
    difficulty: 0.5,
    options: [
      { text: "Believing a behavior is important is not sufficient without confidence in one's ability to perform it", correct: true },
      { text: "Perceived severity alone is always sufficient to predict behavior change", errorType: "prerequisite_misconception", why: "The model's inclusion of self-efficacy reflects the opposite recognition — that belief factors alone (like severity) are not sufficient without confidence in one's own capability." },
      { text: "Self-efficacy replaces the need for considering perceived barriers", errorType: "prerequisite_misconception", why: "Self-efficacy is an additional factor alongside perceived barriers, not a replacement for considering them." },
      { text: "Health behaviors are entirely determined by chance, not belief", errorType: "prerequisite_misconception", why: "The health belief model is built entirely around the premise that beliefs (including self-efficacy) systematically predict behavior, not that outcomes are due to chance." },
    ],
  },

  // --- social_facilitation_and_deindividuation (2) ---
  {
    concept: "social_facilitation_and_deindividuation",
    stem: "According to Zajonc's drive theory of social facilitation, the presence of others increases arousal, which in turn:",
    reasoning: "Zajonc's theory proposes increased arousal from an audience strengthens an organism's dominant (most likely, well-learned) response — helping simple/well-learned tasks but hurting complex/novel ones where the dominant response may be incorrect.",
    difficulty: 0.5,
    options: [
      { text: "Strengthens the dominant (most likely) response, whether or not that response is correct for the task", correct: true },
      { text: "Always improves performance on every type of task equally", errorType: "prerequisite_misconception", why: "The theory specifically predicts differing effects depending on whether the task's dominant response is correct (simple tasks) or not (complex tasks)." },
      { text: "Eliminates the dominant response entirely, forcing a new one", errorType: "prerequisite_misconception", why: "The theory proposes arousal strengthens, rather than eliminates, the existing dominant response." },
      { text: "Has no relationship to which response becomes more likely", errorType: "prerequisite_misconception", why: "The theory's central claim is precisely that arousal increases the likelihood of the dominant response occurring." },
    ],
  },
  {
    concept: "social_facilitation_and_deindividuation",
    stem: "Deindividuation is most likely to lead to increased antisocial or norm-violating behavior when it is combined with:",
    reasoning: "Deindividuation's effects on behavior depend heavily on situational norms; when anonymity/deindividuation is combined with situational cues suggesting antisocial behavior is acceptable or expected, that behavior becomes more likely — deindividuation on its own doesn't guarantee a specific behavioral direction.",
    difficulty: 0.5,
    options: [
      { text: "Situational cues suggesting antisocial behavior is acceptable or expected", correct: true },
      { text: "Clear identification of every individual in the group", correct: false, errorType: "sign_or_direction_reversal", why: "Deindividuation specifically depends on anonymity, the opposite of clear individual identification." },
      { text: "Strong, explicit social norms discouraging any misbehavior", correct: false, errorType: "sign_or_direction_reversal", why: "Strong prosocial norms would tend to counteract, not encourage, antisocial behavior even under deindividuation." },
      { text: "Complete isolation from any group at all", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "Deindividuation is specifically a group-anonymity phenomenon, not something that occurs in complete isolation from a group." },
    ],
  },

  // --- attachment_theory (4, plus 5 via passage) ---
  {
    concept: "attachment_theory",
    stem: "According to attachment theory, a securely attached infant uses their caregiver as a:",
    reasoning: "A securely attached infant uses the caregiver as a 'secure base' from which to explore the environment, returning for comfort when distressed and then resuming exploration.",
    difficulty: 0.2,
    options: [
      { text: "Secure base for exploring the environment", correct: true },
      { text: "Source of consistent distress and avoidance", errorType: "sign_or_direction_reversal", why: "Describes an insecure (avoidant), not secure, attachment pattern." },
      { text: "Object of complete indifference during exploration", errorType: "prerequisite_misconception", why: "A securely attached infant actively uses the caregiver as a reference point, rather than being indifferent to them." },
      { text: "The sole source of all sensory stimulation", errorType: "outside_knowledge_not_supported_by_passage", why: "Attachment theory is about the emotional/relational function of the caregiver, not a claim about being the infant's only source of sensory input." },
    ],
  },
  {
    concept: "attachment_theory",
    stem: "According to attachment theory, early attachment patterns with a primary caregiver are proposed to influence later development primarily through the formation of:",
    reasoning: "Attachment theory proposes early caregiving experiences shape an 'internal working model' — a mental template for relationships that shapes expectations about self-worth and others' trustworthiness in later relationships.",
    difficulty: 0.4,
    options: [
      { text: "An internal working model of relationships", correct: true },
      { text: "A completely fixed, unchangeable adult personality by age one", errorType: "prerequisite_misconception", why: "Attachment theory proposes an influential, but not absolutely fixed or unchangeable, template for later relationships, not a complete adult personality set in infancy." },
      { text: "A specific set of memorized facts about the caregiver", errorType: "prerequisite_misconception", why: "The internal working model is a relational/emotional template, not a set of explicit factual memories." },
      { text: "A genetically inherited trait passed directly to the child", errorType: "outside_knowledge_not_supported_by_passage", why: "Attachment theory emphasizes early relational experience with a caregiver, not direct genetic inheritance, as the driver of these patterns." },
    ],
  },
  {
    concept: "attachment_theory",
    stem: "Disorganized attachment, a pattern identified in later attachment research beyond Ainsworth's original three categories, is characterized by:",
    reasoning: "Disorganized attachment is characterized by contradictory, confused behavior toward the caregiver (e.g., approaching then freezing or avoiding), often associated with caregiving environments involving fear or inconsistency, such as maltreatment.",
    difficulty: 0.5,
    options: [
      { text: "Contradictory, confused behavior toward the caregiver, such as approaching then freezing", correct: true },
      { text: "Calm, confident exploration with quick comfort upon the caregiver's return", errorType: "sign_or_direction_reversal", why: "Describes secure attachment, not the confused, contradictory pattern of disorganized attachment." },
      { text: "Complete and consistent avoidance of the caregiver at all times", errorType: "prerequisite_misconception", why: "Describes avoidant attachment's more consistent pattern, whereas disorganized attachment is marked by inconsistency and contradiction." },
      { text: "Consistent clinging combined with active resistance to comfort at all times", errorType: "prerequisite_misconception", why: "Describes anxious-resistant (ambivalent) attachment's more consistent ambivalence, whereas disorganized attachment involves less predictable, contradictory behavior." },
    ],
  },
  {
    concept: "attachment_theory",
    stem: "Harry Harlow's classic experiments with infant rhesus monkeys and surrogate 'mothers' (one wire mother providing food, one soft cloth mother providing no food) found that the infant monkeys:",
    reasoning: "Harlow's monkeys spent most of their time clinging to the soft cloth mother, even though it provided no food, seeking it especially for comfort when frightened — challenging the then-dominant view that attachment was based primarily on feeding.",
    difficulty: 0.4,
    options: [
      { text: "Preferred and clung to the soft cloth mother, especially when frightened, despite it providing no food", correct: true },
      { text: "Preferred the wire mother exclusively, since it provided food", errorType: "sign_or_direction_reversal", why: "Reverses Harlow's actual finding; the monkeys strongly preferred the cloth mother despite it offering no food." },
      { text: "Showed no preference at all between the two surrogate mothers", errorType: "prerequisite_misconception", why: "Harlow's monkeys showed a strong, clear preference for the cloth mother, not equal indifference to both." },
      { text: "Avoided both surrogate mothers entirely in favor of isolation", errorType: "prerequisite_misconception", why: "The monkeys actively sought out and clung to the cloth mother, rather than avoiding both surrogates." },
    ],
  },

  // --- culture_and_socialization (4, plus 5 via passage) ---
  {
    concept: "culture_and_socialization",
    stem: "Socialization refers to the process by which:",
    reasoning: "Socialization is the lifelong process through which individuals learn and internalize the norms, values, and behaviors of their culture or social group.",
    difficulty: 0.2,
    options: [
      { text: "Individuals learn and internalize their culture's norms, values, and behaviors", correct: true },
      { text: "A society develops its economic system independent of individuals", errorType: "outside_knowledge_not_supported_by_passage", why: "Socialization concerns individual-level learning of culture, not the abstract development of an economic system." },
      { text: "A person's genetic traits are passed to their offspring", errorType: "prerequisite_misconception", why: "Genetic inheritance is a biological process, distinct from the social/cultural learning process of socialization." },
      { text: "Cultural norms remain completely fixed and unchanging across generations", errorType: "prerequisite_misconception", why: "Socialization is a dynamic learning process; it doesn't claim or require that cultural norms stay perfectly fixed over time." },
    ],
  },
  {
    concept: "culture_and_socialization",
    stem: "Agents of socialization — such as family, peers, schools, and media — function to:",
    reasoning: "Agents of socialization are the various social institutions and relationships through which individuals learn cultural norms, values, and roles throughout their lives.",
    difficulty: 0.2,
    options: [
      { text: "Transmit cultural norms, values, and roles to individuals", correct: true },
      { text: "Physically enforce laws against individuals who break them", errorType: "prerequisite_misconception", why: "Legal enforcement is a function of formal institutions like the justice system, distinct from the broader cultural transmission role of socialization agents." },
      { text: "Determine a person's genetic predispositions", errorType: "prerequisite_misconception", why: "Agents of socialization operate through social learning and interaction, not through genetic transmission." },
      { text: "Exist only during a person's childhood years", errorType: "prerequisite_misconception", why: "Socialization and its agents (e.g., workplace, media) continue to operate throughout adulthood, not only in childhood." },
    ],
  },
  {
    concept: "culture_and_socialization",
    stem: "A researcher studying acculturation examines what happens when individuals or groups from one culture come into sustained contact with a different culture. Acculturation specifically refers to:",
    reasoning: "Acculturation is the process of cultural and psychological change that results from sustained contact between people of different cultural backgrounds, potentially affecting values, behaviors, and identity on either or both sides.",
    difficulty: 0.3,
    options: [
      { text: "Cultural and psychological change resulting from sustained contact between different cultures", correct: true },
      { text: "The complete, permanent loss of one's original cultural identity", errorType: "prerequisite_misconception", why: "Acculturation describes a range of possible adaptation outcomes, not necessarily complete or permanent loss of original identity." },
      { text: "A process that occurs only through formal, government-run programs", errorType: "outside_knowledge_not_supported_by_passage", why: "Acculturation occurs through everyday sustained intercultural contact, not exclusively through formal government programs." },
      { text: "A purely biological process unrelated to social contact", errorType: "prerequisite_misconception", why: "Acculturation is fundamentally a social and psychological process arising from cultural contact, not a biological one." },
    ],
  },
  {
    concept: "culture_and_socialization",
    stem: "Ethnocentrism refers to the tendency to:",
    reasoning: "Ethnocentrism is evaluating other cultures using the standards and values of one's own culture, often implicitly treating one's own culture's norms as the correct or superior baseline.",
    difficulty: 0.3,
    options: [
      { text: "Evaluate other cultures using the standards of one's own culture", correct: true },
      { text: "Evaluate one's own culture using the standards of another culture", errorType: "sign_or_direction_reversal", why: "Reverses the direction of the evaluative comparison that defines ethnocentrism." },
      { text: "Treat all cultures as equally valid without any comparative judgment", errorType: "sign_or_direction_reversal", why: "Describes cultural relativism, essentially the opposite orientation from ethnocentrism." },
      { text: "Refuse to learn about any culture other than one's own", errorType: "prerequisite_misconception", why: "Ethnocentrism concerns the standard used for evaluation, not necessarily a refusal to learn about other cultures at all." },
    ],
  },

  // --- passage: ps_strange_situation_study (5) ---
  {
    concept: "attachment_theory",
    type: "passage",
    passage: "ps_strange_situation_study",
    stem: "According to the passage, infants classified as securely attached, upon the caregiver's return, typically:",
    reasoning: "The passage states securely attached infants 'are readily comforted by the caregiver's return, quickly resuming play.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Are readily comforted and quickly resume play", correct: true },
      { text: "Show little distress at any point and ignore the caregiver upon return", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns this pattern to avoidant, not securely attached, infants." },
      { text: "Cling to the caregiver while simultaneously resisting comfort", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns this mixed clinging/resisting pattern to anxious-resistant, not securely attached, infants." },
      { text: "Remain permanently distressed for the rest of the session", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes securely attached infants as being readily comforted, not remaining permanently distressed." },
    ],
  },
  {
    concept: "attachment_theory",
    type: "passage",
    passage: "ps_strange_situation_study",
    stem: "Based on the passage, an infant who shows little distress during separation and largely ignores the caregiver upon return would be classified as:",
    reasoning: "The passage explicitly states this exact pattern — little distress at separation, ignoring the caregiver upon return — is classified as avoidant.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Avoidant", correct: true },
      { text: "Securely attached", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns distress-then-comfort as the securely attached pattern, distinct from the little-distress, ignoring pattern described here." },
      { text: "Anxious-resistant (ambivalent)", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes anxious-resistant infants as highly distressed at separation, not showing little distress as in this scenario." },
      { text: "Disorganized", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage does not discuss a disorganized attachment category at all; it describes only three classifications." },
    ],
  },
  {
    concept: "attachment_theory",
    type: "passage",
    passage: "ps_strange_situation_study",
    stem: "According to the passage, an anxious-resistant (ambivalent) infant's response to the caregiver's return is characterized by:",
    reasoning: "The passage describes this pattern as 'a mix of seeking comfort and resisting it — for example clinging while also arching away or hitting.'",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "A mix of seeking comfort and resisting it simultaneously", correct: true },
      { text: "Purely seeking comfort with no resistance at all", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes a mixed pattern, including resistance, not comfort-seeking alone." },
      { text: "Purely ignoring the caregiver with no comfort-seeking at all", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes this infant as still seeking some comfort, unlike the described avoidant pattern of ignoring the caregiver." },
      { text: "Complete calm with no visible emotional reaction", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes these infants as highly distressed by separation, not showing complete calm." },
    ],
  },
  {
    concept: "attachment_theory",
    type: "passage",
    passage: "ps_strange_situation_study",
    stem: "Based on the passage, researchers using the Strange Situation focus especially on which moment to classify attachment style?",
    reasoning: "The passage states 'researchers focus especially on the infant's behavior upon the caregiver's return' after the brief separation.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "The infant's behavior upon the caregiver's return", correct: true },
      { text: "The infant's behavior when the stranger first enters the room", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage specifically highlights the caregiver's return as the key moment of focus, not the stranger's entrance." },
      { text: "The infant's behavior during the very first minute of the entire session", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage specifically emphasizes the reunion moment (caregiver's return), not simply the first minute overall." },
      { text: "The infant's behavior only when completely alone with the stranger", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage's key classification moment is the caregiver's return, not the period alone with the stranger." },
    ],
  },
  {
    concept: "attachment_theory",
    type: "passage",
    passage: "ps_strange_situation_study",
    stem: "Based on the passage's description, a researcher observing a new infant who shows moderate distress at separation and calms down within a minute of the caregiver's return, resuming play, would most likely classify this infant as:",
    reasoning: "This pattern (some distress, then quick comfort and resumed play) matches the passage's description of secure attachment precisely, so applying that same classification criterion to this new case should yield the same 'secure' classification.",
    difficulty: 0.4,
    sirs: 3,
    options: [
      { text: "Securely attached", correct: true },
      { text: "Avoidant", errorType: "outside_knowledge_not_supported_by_passage", why: "Avoidant infants are described as showing little distress and ignoring the caregiver upon return, unlike this infant who is distressed and quickly seeks and accepts comfort." },
      { text: "Anxious-resistant (ambivalent)", errorType: "outside_knowledge_not_supported_by_passage", why: "Anxious-resistant infants are described as showing a mix of seeking and resisting comfort, unlike this infant who is quickly and straightforwardly comforted." },
      { text: "Impossible to classify using the criteria described in the passage", errorType: "outside_knowledge_not_supported_by_passage", why: "This infant's behavior matches the passage's secure-attachment description closely enough to be classified using the stated criteria." },
    ],
  },

  // --- passage: ps_cross_cultural_study (5) ---
  {
    concept: "culture_and_socialization",
    type: "passage",
    passage: "ps_cross_cultural_study",
    stem: "According to the passage, participants from individualist societies tend to describe themselves using:",
    reasoning: "The passage states such participants 'tend to describe themselves using internal, trait-based terms.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Internal, trait-based terms", correct: true },
      { text: "Terms based on social roles and relationships", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns this relational, role-based self-description more to collectivist, not individualist, societies." },
      { text: "Terms describing only their physical appearance", errorType: "outside_knowledge_not_supported_by_passage", why: "Physical appearance-based self-description is not what the passage attributes to either cultural orientation." },
      { text: "No self-descriptive terms at all", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes a specific pattern of self-description (trait-based terms), not an absence of self-description." },
    ],
  },
  {
    concept: "culture_and_socialization",
    type: "passage",
    passage: "ps_cross_cultural_study",
    stem: "According to the passage, participants from collectivist societies tend to explain their own behavior by appeal to:",
    reasoning: "The passage states such participants 'explain behavior more readily by appeal to social obligations, relationships, and context.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Social obligations, relationships, and context", correct: true },
      { text: "Personal preferences and internal states exclusively", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes this internal-preference-based explanation style more to individualist, not collectivist, societies." },
      { text: "Random chance, with no consistent explanatory pattern", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes a specific, consistent explanatory tendency (social obligations/context), not randomness." },
      { text: "Genetic predispositions inherited from parents", errorType: "outside_knowledge_not_supported_by_passage", why: "Genetic explanations for behavior are not discussed in the passage's account of cross-cultural differences." },
    ],
  },
  {
    concept: "culture_and_socialization",
    type: "passage",
    passage: "ps_cross_cultural_study",
    stem: "According to the passage, researchers caution that the individualist/collectivist differences described are:",
    reasoning: "The passage explicitly states these are 'population-level tendencies observed across large samples, not fixed rules describing any given individual,' and that 'most societies show a mix of both orientations depending on the specific domain of life being considered.'",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Population-level tendencies, not fixed rules describing any given individual", correct: true },
      { text: "Absolute, universal laws that apply to every individual without exception", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly warns against this exact interpretation, describing the findings as population-level tendencies, not universal individual rules." },
      { text: "Findings that have since been completely discredited by later research", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage doesn't state the findings have been discredited; it offers a nuanced caution about their scope, not a rejection of them." },
      { text: "Differences that apply equally and identically across every domain of a given society", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly notes most societies show a mix of both orientations depending on the specific domain, not uniform application across all domains." },
    ],
  },
  {
    concept: "culture_and_socialization",
    type: "passage",
    passage: "ps_cross_cultural_study",
    stem: "Based on the passage, a collectivist-oriented participant asked to complete the sentence 'I am ___' would be predicted to be more likely, relative to an individualist-oriented participant, to respond with:",
    reasoning: "Consistent with the passage's description of collectivist self-description emphasizing social roles and relationships, a response like 'a member of my family' reflects that relational orientation, in contrast to an individualist trait-based response like 'ambitious.'",
    difficulty: 0.4,
    sirs: 3,
    options: [
      { text: "\"A member of my family\"", correct: true },
      { text: "\"Ambitious\"", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage explicitly gives this trait-based response as an example of the individualist, not collectivist, pattern." },
      { text: "\"Independent\"", errorType: "outside_knowledge_not_supported_by_passage", why: "A trait emphasizing independence fits the individualist, internal-trait self-description pattern, not the collectivist relational pattern." },
      { text: "\"Curious\"", errorType: "outside_knowledge_not_supported_by_passage", why: "This is another internal trait-based response, consistent with the individualist pattern rather than the collectivist relational pattern." },
    ],
  },
  {
    concept: "culture_and_socialization",
    type: "passage",
    passage: "ps_cross_cultural_study",
    stem: "The passage's overall findings about self-description and behavioral explanation across cultures are most directly relevant to which broader psychological concept?",
    reasoning: "The passage's findings, comparing internal/trait-based explanations to social/contextual explanations of behavior across cultures, directly illustrate cultural variation in attributional style — closely related to concepts like the fundamental attribution error, which some research suggests is less pronounced in collectivist cultures that more readily consider situational and social context.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "Cultural variation in attributional style when explaining behavior", correct: true },
      { text: "The biological basis of personality traits", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's findings concern culturally learned patterns of self-description and explanation, not the biological basis of personality." },
      { text: "The stages of prenatal cognitive development", errorType: "outside_knowledge_not_supported_by_passage", why: "Prenatal development is an entirely unrelated topic from the cross-cultural self-description findings the passage discusses." },
      { text: "The physiology of the stress response", errorType: "outside_knowledge_not_supported_by_passage", why: "Stress physiology is unrelated to the passage's findings about self-description and behavioral explanation across cultures." },
    ],
  },
];
