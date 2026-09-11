import type { ItemDef } from "./types";

export const itemsBb3: ItemDef[] = [
  // --- amino_acid_structure (2) ---
  {
    concept: "amino_acid_structure",
    stem: "Glutamine and asparagine are the amide derivatives of which two amino acids, respectively?",
    reasoning: "Glutamine is the amide of glutamate, and asparagine is the amide of aspartate — each pair differs by the side-chain carboxyl being converted to an amide group.",
    difficulty: 0.4,
    options: [
      { text: "Glutamate and aspartate", correct: true },
      { text: "Lysine and arginine", errorType: "prerequisite_misconception", why: "Lysine and arginine are basic amino acids with amine-containing side chains, unrelated to the amide derivatives of glutamate and aspartate." },
      { text: "Serine and threonine", errorType: "prerequisite_misconception", why: "Serine and threonine have hydroxyl side chains, structurally unrelated to the amide/carboxyl relationship of glutamine/asparagine." },
      { text: "Phenylalanine and tyrosine", errorType: "prerequisite_misconception", why: "These are aromatic amino acids, structurally unrelated to the amide-carboxyl pairing being asked about." },
    ],
  },
  {
    concept: "amino_acid_structure",
    stem: "Proline is structurally unusual among the standard amino acids because its side chain:",
    reasoning: "Proline's side chain loops back and bonds to the backbone nitrogen, forming a rigid ring structure — unlike any other standard amino acid, whose side chains attach only to the alpha carbon.",
    difficulty: 0.4,
    options: [
      { text: "Loops back and bonds to the backbone nitrogen, forming a ring", correct: true },
      { text: "Contains a permanent positive charge under all conditions", errorType: "prerequisite_misconception", why: "Proline's ring structure, not a permanent charge, is its defining structural feature." },
      { text: "Is the only side chain capable of forming disulfide bonds", errorType: "prerequisite_misconception", why: "Disulfide bond formation is a unique feature of cysteine's thiol group, not proline." },
      { text: "Consists of a single hydrogen atom", errorType: "prerequisite_misconception", why: "A single-hydrogen side chain describes glycine, not proline." },
    ],
  },

  // --- peptide_bond_formation (2) ---
  {
    concept: "peptide_bond_formation",
    stem: "The direction of protein synthesis on the ribosome, from the first residue added to the last, proceeds from the:",
    reasoning: "Ribosomal protein synthesis proceeds from the N-terminus to the C-terminus, with each new amino acid's amino group forming a bond to the growing chain's C-terminal carboxyl end.",
    difficulty: 0.3,
    options: [
      { text: "N-terminus to the C-terminus", correct: true },
      { text: "C-terminus to the N-terminus", errorType: "sign_or_direction_reversal", why: "Reverses the actual direction of ribosomal peptide bond formation during synthesis." },
      { text: "The middle of the sequence outward in both directions", errorType: "prerequisite_misconception", why: "Translation proceeds linearly from one end to the other, not outward from the middle." },
      { text: "A direction that varies randomly between different proteins", errorType: "prerequisite_misconception", why: "All ribosomal protein synthesis follows the same consistent N-to-C directionality, not a variable one." },
    ],
  },
  {
    concept: "peptide_bond_formation",
    stem: "A peptide bond forms specifically between which two functional groups of adjacent amino acids?",
    reasoning: "A peptide bond forms between the carboxyl group (-COOH) of one amino acid and the amino group (-NH2) of the next, releasing water in the process.",
    difficulty: 0.1,
    options: [
      { text: "The carboxyl group of one amino acid and the amino group of the next", correct: true },
      { text: "The side chains of both amino acids", errorType: "prerequisite_misconception", why: "Peptide bonds form at the shared backbone groups, not between side chains (which form different types of bonds, like disulfide bridges)." },
      { text: "The amino groups of both amino acids", errorType: "prerequisite_misconception", why: "A peptide bond specifically requires one carboxyl and one amino group, not two amino groups." },
      { text: "The carboxyl groups of both amino acids", errorType: "prerequisite_misconception", why: "A peptide bond specifically requires one carboxyl and one amino group, not two carboxyl groups." },
    ],
  },

  // --- protein_secondary_structure (2) ---
  {
    concept: "protein_secondary_structure",
    stem: "The pitch and hydrogen-bonding pattern of the alpha helix are largely independent of the specific side chains present, meaning secondary structure is determined primarily by:",
    reasoning: "Alpha helix formation depends primarily on the regular, repeating pattern of backbone hydrogen bonds, which is largely independent of which specific side chains are attached, though certain side chains (like proline) can still disrupt the pattern.",
    difficulty: 0.4,
    options: [
      { text: "The backbone's regular hydrogen-bonding pattern", correct: true },
      { text: "The specific identity of every side chain in the sequence", errorType: "prerequisite_misconception", why: "The question specifies that the helix's pitch and hydrogen-bonding pattern are largely independent of specific side-chain identity." },
      { text: "Disulfide bonds formed throughout the helix", errorType: "prerequisite_misconception", why: "Disulfide bonds are a tertiary-structure feature involving only cysteine residues, not the general driver of alpha helix geometry." },
      { text: "The overall charge of the protein", errorType: "prerequisite_misconception", why: "Overall protein charge is a bulk property unrelated to the specific local backbone hydrogen-bonding pattern that defines the alpha helix." },
    ],
  },
  {
    concept: "protein_secondary_structure",
    stem: "In an antiparallel beta sheet, adjacent strands run:",
    reasoning: "In an antiparallel beta sheet, adjacent polypeptide strands run in opposite directions (N-to-C orientations reversed relative to each other), as opposed to a parallel sheet, where adjacent strands run in the same direction.",
    difficulty: 0.3,
    options: [
      { text: "In opposite directions relative to each other", correct: true },
      { text: "In the same direction relative to each other", errorType: "sign_or_direction_reversal", why: "Describes a parallel, not antiparallel, beta sheet arrangement." },
      { text: "Perpendicular to one another", errorType: "prerequisite_misconception", why: "Beta strands in a sheet run alongside each other (parallel or antiparallel), not perpendicular." },
      { text: "In a direction that varies randomly along the sheet", errorType: "prerequisite_misconception", why: "The antiparallel arrangement is a consistent, defined geometric relationship, not a random one." },
    ],
  },

  // --- enzyme_kinetics_and_inhibition (2) ---
  {
    concept: "enzyme_kinetics_and_inhibition",
    stem: "An enzyme's optimal pH is the pH at which it exhibits maximum activity. Operating an enzyme well outside its optimal pH typically:",
    reasoning: "Extreme pH shifts away from an enzyme's optimum can disrupt ionizable side-chain interactions important for the enzyme's three-dimensional structure and active-site function, reducing or eliminating catalytic activity, and potentially denaturing the enzyme at extreme values.",
    difficulty: 0.3,
    options: [
      { text: "Reduces or eliminates the enzyme's catalytic activity", correct: true },
      { text: "Has no effect on the enzyme's activity", errorType: "prerequisite_misconception", why: "pH strongly affects the ionization state of active-site residues and overall protein structure, so extreme shifts typically do affect activity substantially." },
      { text: "Always increases the enzyme's activity beyond its optimum level", errorType: "sign_or_direction_reversal", why: "By definition, the optimal pH is where activity is highest; moving away from it decreases, not increases, activity." },
      { text: "Permanently converts the enzyme into a different enzyme entirely", errorType: "prerequisite_misconception", why: "pH-induced changes typically affect activity or cause denaturation, not a transformation into a chemically distinct enzyme." },
    ],
  },
  {
    concept: "enzyme_kinetics_and_inhibition",
    stem: "A cofactor is a non-protein chemical compound required for an enzyme's biological activity. An enzyme lacking its required cofactor is called a(n):",
    reasoning: "An enzyme lacking its necessary cofactor is termed an apoenzyme; when combined with its cofactor, the complete, catalytically active form is called a holoenzyme.",
    difficulty: 0.4,
    options: [
      { text: "Apoenzyme", correct: true },
      { text: "Holoenzyme", errorType: "sign_or_direction_reversal", why: "A holoenzyme is the complete, cofactor-bound active form, the opposite of the cofactor-lacking form being asked about." },
      { text: "Zymogen", errorType: "prerequisite_misconception", why: "A zymogen is an inactive enzyme precursor requiring proteolytic cleavage for activation, a different concept from cofactor absence." },
      { text: "Isozyme", errorType: "prerequisite_misconception", why: "An isozyme is a structurally distinct variant of an enzyme catalyzing the same reaction, unrelated to cofactor presence or absence." },
    ],
  },

  // --- cell_membrane_transport (2) ---
  {
    concept: "cell_membrane_transport",
    stem: "Endocytosis in which a cell engulfs extracellular fluid and dissolved solutes in bulk, without a specific receptor targeting a particular molecule, is called:",
    reasoning: "Pinocytosis ('cell drinking') is the nonspecific bulk uptake of extracellular fluid and dissolved solutes, as opposed to receptor-mediated endocytosis, which specifically targets particular molecules via cell-surface receptors.",
    difficulty: 0.3,
    options: [
      { text: "Pinocytosis", correct: true },
      { text: "Receptor-mediated endocytosis", errorType: "prerequisite_misconception", why: "Receptor-mediated endocytosis specifically targets particular molecules via receptors, unlike the nonspecific bulk process described here." },
      { text: "Phagocytosis", errorType: "prerequisite_misconception", why: "Phagocytosis involves engulfing large solid particles or cells, not bulk fluid and dissolved solutes." },
      { text: "Exocytosis", errorType: "sign_or_direction_reversal", why: "Exocytosis is the release, not the uptake, of material, the reverse process from what's described." },
    ],
  },
  {
    concept: "cell_membrane_transport",
    stem: "The sodium-glucose cotransporter (SGLT) moves glucose into a cell alongside sodium moving down its own gradient. If the sodium-potassium pump maintaining that sodium gradient were completely inhibited, glucose transport via SGLT would most likely:",
    reasoning: "SGLT-mediated glucose uptake is a secondary active transport mechanism that depends entirely on the sodium gradient established by the sodium-potassium pump; without that gradient, there is no driving force to move sodium (and thus glucose) into the cell, so glucose transport via this route would decline substantially.",
    difficulty: 0.5,
    options: [
      { text: "Decline substantially, since the driving sodium gradient would collapse", correct: true },
      { text: "Increase, since more sodium would be available near the transporter", errorType: "prerequisite_misconception", why: "Inhibiting the pump would eventually dissipate, not increase, the sodium gradient that drives this cotransport." },
      { text: "Remain completely unaffected, since SGLT does not depend on any ion gradient", errorType: "prerequisite_misconception", why: "SGLT is defined by its dependence on the sodium gradient as a secondary active transporter; it is not independent of that gradient." },
      { text: "Immediately reverse direction, pumping glucose back out of the cell", errorType: "outside_knowledge_not_supported_by_passage", why: "Losing the driving gradient would reduce net transport rather than actively reverse the transporter's directionality." },
    ],
  },

  // --- dna_replication (2) ---
  {
    concept: "dna_replication",
    stem: "DNA polymerase's proofreading (3' to 5' exonuclease) activity serves to:",
    reasoning: "Proofreading activity allows DNA polymerase to detect and remove a mismatched nucleotide immediately after it is added, substantially increasing the fidelity of DNA replication.",
    difficulty: 0.4,
    options: [
      { text: "Detect and remove incorrectly paired nucleotides, increasing replication accuracy", correct: true },
      { text: "Speed up the overall rate of DNA synthesis", correct: false, errorType: "prerequisite_misconception", why: "Proofreading actually slows synthesis somewhat by pausing to check and correct errors; its purpose is accuracy, not speed." },
      { text: "Unwind the double helix ahead of the replication fork", correct: false, errorType: "prerequisite_misconception", why: "Unwinding the helix is the role of helicase, a separate enzyme from DNA polymerase's proofreading function." },
      { text: "Attach RNA primers to the template strand", correct: false, errorType: "prerequisite_misconception", why: "Primer synthesis is carried out by primase, unrelated to DNA polymerase's proofreading exonuclease activity." },
    ],
  },
  {
    concept: "dna_replication",
    stem: "In eukaryotic DNA replication, multiple replication origins are used along a single chromosome primarily because:",
    reasoning: "Eukaryotic chromosomes are far longer than bacterial genomes; using multiple origins allows replication to proceed simultaneously at many points along the chromosome, completing the process in a feasible amount of time rather than requiring one very slow single-origin process.",
    difficulty: 0.4,
    options: [
      { text: "It allows replication of a long chromosome to complete in a feasible amount of time", correct: true },
      { text: "It prevents any mutations from ever occurring during replication", errorType: "prerequisite_misconception", why: "Multiple origins address the speed of replicating long chromosomes, not mutation prevention, which is handled by proofreading and repair systems." },
      { text: "Each origin produces a genetically distinct copy of the chromosome", errorType: "prerequisite_misconception", why: "All origins on a single chromosome replicate the same DNA sequence, not distinct genetic copies." },
      { text: "It eliminates the need for DNA polymerase entirely", errorType: "prerequisite_misconception", why: "DNA polymerase is still required at every replication origin; multiple origins don't eliminate this need." },
    ],
  },

  // --- transcription_and_translation (2) ---
  {
    concept: "transcription_and_translation",
    stem: "Alternative splicing allows a single gene to produce multiple different protein products by:",
    reasoning: "Alternative splicing allows different combinations of exons to be joined together from the same pre-mRNA transcript, producing multiple distinct mature mRNAs (and thus proteins) from a single gene.",
    difficulty: 0.4,
    options: [
      { text: "Joining different combinations of exons from the same pre-mRNA", correct: true },
      { text: "Using a completely different DNA template for each protein variant", errorType: "prerequisite_misconception", why: "Alternative splicing works from a single gene's pre-mRNA transcript, not from multiple different DNA templates." },
      { text: "Randomly mutating the DNA sequence before transcription begins", errorType: "prerequisite_misconception", why: "Alternative splicing is a regulated post-transcriptional processing event, not a mutational process affecting the DNA sequence." },
      { text: "Duplicating the entire gene multiple times in the genome", errorType: "prerequisite_misconception", why: "Alternative splicing produces variation from a single gene copy through differential exon inclusion, not through gene duplication." },
    ],
  },
  {
    concept: "transcription_and_translation",
    stem: "The start codon (AUG) in mRNA serves to establish:",
    reasoning: "The AUG start codon establishes the reading frame for translation and codes for the first amino acid (methionine in eukaryotes), setting how subsequent codons downstream will be read in groups of three.",
    difficulty: 0.3,
    options: [
      { text: "The reading frame for translation and the first amino acid", correct: true },
      { text: "The point where transcription terminates", errorType: "prerequisite_misconception", why: "Transcription termination is governed by separate sequences/signals; AUG specifically marks the start of translation, not the end of transcription." },
      { text: "The location where the poly-A tail will be added", errorType: "prerequisite_misconception", why: "Poly-A tail addition occurs at the 3' end of the mRNA, unrelated to the start codon's role in translation initiation." },
      { text: "The site of intron removal during splicing", errorType: "prerequisite_misconception", why: "Intron removal occurs at splice sites defined by different sequence signals, not by the start codon." },
    ],
  },

  // --- glycolysis_and_cellular_respiration (2) ---
  {
    concept: "glycolysis_and_cellular_respiration",
    stem: "The net ATP yield from glycolysis alone (glucose to pyruvate) is:",
    reasoning: "Glycolysis invests 2 ATP early and produces 4 ATP later via substrate-level phosphorylation, for a net yield of 2 ATP per glucose molecule.",
    difficulty: 0.2,
    options: [
      { text: "2 ATP", correct: true },
      { text: "4 ATP", errorType: "correct_concept_wrong_step_in_sequence", why: "Counts the gross ATP produced without subtracting the 2 ATP invested earlier in the pathway." },
      { text: "36-38 ATP", errorType: "prerequisite_misconception", why: "That figure describes the total yield from complete aerobic oxidation of glucose, not glycolysis alone." },
      { text: "0 ATP; glycolysis only consumes ATP", errorType: "prerequisite_misconception", why: "Glycolysis does invest 2 ATP early on, but it also produces 4 ATP later, for a net positive yield of 2 ATP." },
    ],
  },
  {
    concept: "glycolysis_and_cellular_respiration",
    stem: "The conversion of pyruvate to acetyl-CoA, linking glycolysis to the citric acid cycle, occurs in the:",
    reasoning: "This link reaction, catalyzed by the pyruvate dehydrogenase complex, occurs in the mitochondrial matrix after pyruvate is transported in from the cytoplasm.",
    difficulty: 0.3,
    options: [
      { text: "Mitochondrial matrix", correct: true },
      { text: "Cytoplasm", errorType: "prerequisite_misconception", why: "The cytoplasm is where glycolysis itself occurs, but pyruvate must be transported into the mitochondria before this conversion step." },
      { text: "Nucleus", errorType: "prerequisite_misconception", why: "The nucleus is not involved in cellular respiration's metabolic reactions." },
      { text: "Inner mitochondrial membrane", errorType: "prerequisite_misconception", why: "The inner mitochondrial membrane hosts the electron transport chain, a later stage, not the pyruvate-to-acetyl-CoA conversion, which occurs in the matrix." },
    ],
  },

  // --- mendelian_genetics (2) ---
  {
    concept: "mendelian_genetics",
    stem: "Incomplete dominance differs from codominance in that incomplete dominance produces a heterozygous phenotype that is:",
    reasoning: "Incomplete dominance produces a blended, intermediate phenotype in heterozygotes (e.g., red x white flowers producing pink), whereas codominance produces a phenotype in which both alleles are fully and separately expressed (e.g., both red and white patches).",
    difficulty: 0.4,
    options: [
      { text: "An intermediate blend between the two homozygous phenotypes", correct: true },
      { text: "Identical to one of the two homozygous parental phenotypes", errorType: "prerequisite_misconception", why: "That describes simple complete dominance, not incomplete dominance, which produces a blended intermediate instead." },
      { text: "A phenotype showing both parental traits fully and separately", errorType: "correct_concept_wrong_step_in_sequence", why: "Describes codominance, the concept incomplete dominance is being distinguished from in this question." },
      { text: "Always lethal in the heterozygous state", errorType: "outside_knowledge_not_supported_by_passage", why: "Incomplete dominance describes a blended phenotype, not lethality; lethal alleles are a separate genetic phenomenon." },
    ],
  },
  {
    concept: "mendelian_genetics",
    stem: "A pedigree shows a trait appearing in every generation, in both males and females, and any affected individual has at least one affected parent. This pattern is most consistent with:",
    reasoning: "A trait appearing in every generation, affecting both sexes, and always tracing to an affected parent is the classic pattern of autosomal dominant inheritance.",
    difficulty: 0.4,
    options: [
      { text: "Autosomal dominant inheritance", correct: true },
      { text: "Autosomal recessive inheritance", errorType: "prerequisite_misconception", why: "Autosomal recessive traits often skip generations and can appear in offspring of unaffected (carrier) parents, unlike the pattern described here." },
      { text: "X-linked recessive inheritance", errorType: "prerequisite_misconception", why: "X-linked recessive traits predominantly affect males and typically involve unaffected carrier mothers, not the every-generation, both-sexes pattern described." },
      { text: "Mitochondrial inheritance", errorType: "prerequisite_misconception", why: "Mitochondrial inheritance passes exclusively through the mother to all offspring, a distinct pattern from the described one requiring an affected parent of either sex." },
    ],
  },

  // --- mitosis_and_the_cell_cycle (2) ---
  {
    concept: "mitosis_and_the_cell_cycle",
    stem: "The G0 phase of the cell cycle refers to a state in which a cell:",
    reasoning: "G0 is a quiescent, non-dividing state that some cells enter, temporarily or permanently exiting the active cell cycle rather than progressing through G1, S, G2, and M.",
    difficulty: 0.3,
    options: [
      { text: "Has exited the active cell cycle and is not preparing to divide", correct: true },
      { text: "Is actively synthesizing new DNA", errorType: "prerequisite_misconception", why: "DNA synthesis occurs in S phase, an active cell-cycle phase, not G0, which is a resting state outside the cycle." },
      { text: "Is in the process of dividing into two daughter cells", errorType: "prerequisite_misconception", why: "Active division occurs during M phase, not G0, which represents cells that have left the cycle." },
      { text: "Is preparing specifically for mitosis by synthesizing spindle proteins", errorType: "prerequisite_misconception", why: "That description fits G2, an active preparatory phase, not the quiescent G0 state." },
    ],
  },
  {
    concept: "mitosis_and_the_cell_cycle",
    stem: "Apoptosis, or programmed cell death, differs from necrosis (uncontrolled cell death from injury) in that apoptosis:",
    reasoning: "Apoptosis is a controlled, genetically programmed process that neatly packages cellular contents for disposal without triggering inflammation, whereas necrosis results from injury and causes uncontrolled cell rupture and inflammation.",
    difficulty: 0.4,
    options: [
      { text: "Is a controlled, regulated process that avoids triggering inflammation", correct: true },
      { text: "Always results from external injury to the cell", errorType: "prerequisite_misconception", why: "Necrosis, not apoptosis, is specifically characterized as resulting from external injury." },
      { text: "Causes uncontrolled rupture of the cell, spilling contents into surrounding tissue", errorType: "prerequisite_misconception", why: "Uncontrolled rupture and content spillage describes necrosis, not the tidy, regulated process of apoptosis." },
      { text: "Cannot occur in normally developing, healthy tissue", errorType: "prerequisite_misconception", why: "Apoptosis is a normal, essential part of development and tissue maintenance in healthy organisms, not something restricted to disease states." },
    ],
  },

  // --- muscle_contraction (2) ---
  {
    concept: "muscle_contraction",
    stem: "Smooth muscle differs from skeletal muscle in that smooth muscle:",
    reasoning: "Smooth muscle is involuntary and lacks the organized sarcomere structure that gives skeletal (and cardiac) muscle its striated appearance, instead having actin and myosin arranged less regularly.",
    difficulty: 0.3,
    options: [
      { text: "Is involuntary and lacks the striated sarcomere organization of skeletal muscle", correct: true },
      { text: "Is voluntary and has the same striated appearance as skeletal muscle", errorType: "sign_or_direction_reversal", why: "Reverses both defining features; smooth muscle is involuntary and non-striated." },
      { text: "Contains no actin or myosin filaments at all", errorType: "prerequisite_misconception", why: "Smooth muscle still uses actin and myosin for contraction, just without the highly organized sarcomere arrangement." },
      { text: "Is found exclusively in skeletal attachments to bone", errorType: "prerequisite_misconception", why: "Smooth muscle is found in the walls of internal organs and blood vessels, not attached to bone, which is where skeletal muscle is found." },
    ],
  },
  {
    concept: "muscle_contraction",
    stem: "During prolonged, intense exercise, muscle fatigue is associated in part with:",
    reasoning: "Fatigue during intense exercise is associated with factors such as depletion of ATP and glycogen stores and accumulation of metabolic byproducts, which impair the muscle's ability to sustain effective cross-bridge cycling.",
    difficulty: 0.3,
    options: [
      { text: "Depletion of energy substrates and accumulation of metabolic byproducts", correct: true },
      { text: "An increase in the number of available myosin cross-bridges", errorType: "sign_or_direction_reversal", why: "Fatigue is associated with impaired, not increased, effective cross-bridge function." },
      { text: "A permanent increase in sarcomere length", errorType: "outside_knowledge_not_supported_by_passage", why: "Fatigue is primarily a metabolic/functional phenomenon, not a description of permanent structural lengthening of sarcomeres." },
      { text: "Complete and permanent destruction of all muscle fibers involved", errorType: "prerequisite_misconception", why: "Fatigue is a temporary, reversible functional state, not permanent destruction of the muscle tissue." },
    ],
  },

  // --- hormone_signaling (2) ---
  {
    concept: "hormone_signaling",
    stem: "The adrenal medulla releases which hormone in response to acute stress, producing the 'fight-or-flight' response?",
    reasoning: "The adrenal medulla releases epinephrine (adrenaline), which rapidly mobilizes the body's fight-or-flight response, including increased heart rate and blood glucose availability.",
    difficulty: 0.2,
    options: [
      { text: "Epinephrine", correct: true },
      { text: "Insulin", errorType: "prerequisite_misconception", why: "Insulin is released by the pancreas to lower blood glucose, an unrelated hormone from the acute stress response." },
      { text: "Thyroxine", errorType: "prerequisite_misconception", why: "Thyroxine is released by the thyroid gland and regulates metabolic rate over a longer timescale, not the acute fight-or-flight response." },
      { text: "Melatonin", errorType: "prerequisite_misconception", why: "Melatonin, from the pineal gland, regulates sleep-wake cycles, unrelated to the adrenal medulla's stress response." },
    ],
  },
  {
    concept: "hormone_signaling",
    stem: "Hormones that bind cell-surface receptors and act via second messengers generally have a more rapid onset of action than steroid hormones because:",
    reasoning: "Cell-surface receptor signaling activates existing intracellular machinery immediately, whereas steroid hormones typically must enter the cell, bind intracellular receptors, and alter gene transcription — a process requiring new protein synthesis and inherently taking longer.",
    difficulty: 0.5,
    options: [
      { text: "They activate existing cellular machinery immediately, rather than requiring new gene transcription and protein synthesis first", correct: true },
      { text: "They are present in the bloodstream at much higher concentrations", errorType: "outside_knowledge_not_supported_by_passage", why: "Concentration differences are not the mechanism explaining the difference in speed; the mechanism of action (surface vs. intracellular receptor) is." },
      { text: "Steroid hormones cannot cross the cell membrane at all", errorType: "prerequisite_misconception", why: "Steroid hormones' defining feature is their lipid solubility, which allows them to cross the membrane readily; the delay comes from the downstream transcriptional mechanism, not an inability to enter the cell." },
      { text: "Surface receptor hormones bypass the need for a receptor entirely", errorType: "prerequisite_misconception", why: "Surface receptor hormones still require binding a receptor; they simply trigger faster downstream signaling than the gene-transcription route steroids typically use." },
    ],
  },

  // --- lipid_structure_and_membranes (2) ---
  {
    concept: "lipid_structure_and_membranes",
    stem: "A triglyceride molecule consists of glycerol bonded to:",
    reasoning: "A triglyceride is formed from one glycerol molecule esterified to three fatty acid chains, one at each of glycerol's three hydroxyl groups.",
    difficulty: 0.1,
    options: [
      { text: "Three fatty acid chains", correct: true },
      { text: "Three amino acids", errorType: "prerequisite_misconception", why: "Amino acids are the building blocks of proteins, not the components of a triglyceride." },
      { text: "One phosphate group and two fatty acid chains", errorType: "prerequisite_misconception", why: "Describes a phospholipid's structure, not a triglyceride, which has three fatty acids and no phosphate group." },
      { text: "A single long carbohydrate chain", errorType: "prerequisite_misconception", why: "Carbohydrate chains are unrelated to triglyceride structure, which consists of glycerol and fatty acids." },
    ],
  },
  {
    concept: "lipid_structure_and_membranes",
    stem: "Membrane proteins that span the entire lipid bilayer, with portions exposed on both the extracellular and intracellular sides, are called:",
    reasoning: "Integral (transmembrane) membrane proteins span the entire bilayer, in contrast to peripheral membrane proteins, which associate loosely with only one surface of the membrane.",
    difficulty: 0.2,
    options: [
      { text: "Integral (transmembrane) proteins", correct: true },
      { text: "Peripheral proteins", errorType: "prerequisite_misconception", why: "Peripheral proteins associate loosely with just one surface of the membrane, rather than spanning it entirely." },
      { text: "Cytoskeletal proteins", errorType: "prerequisite_misconception", why: "Cytoskeletal proteins form the cell's internal structural scaffold; they are not defined by spanning the lipid bilayer." },
      { text: "Glycoproteins exclusively", errorType: "prerequisite_misconception", why: "Glycoproteins are proteins with attached carbohydrate groups, a modification independent of whether they span the membrane." },
    ],
  },

  // --- nervous_system_signaling (2) ---
  {
    concept: "nervous_system_signaling",
    stem: "The resting membrane potential of a typical neuron (roughly -70 mV) is maintained primarily by:",
    reasoning: "The resting potential is maintained by the combined effects of selective membrane permeability (especially higher resting permeability to K+ than Na+) and the sodium-potassium pump actively maintaining the underlying ion concentration gradients.",
    difficulty: 0.4,
    options: [
      { text: "Selective membrane permeability to ions and the sodium-potassium pump", correct: true },
      { text: "The complete absence of any ion channels in the resting membrane", errorType: "prerequisite_misconception", why: "Resting membrane potential specifically depends on channels being present and selectively permeable (especially to K+), not on an absence of channels." },
      { text: "Continuous action potentials firing at rest", errorType: "prerequisite_misconception", why: "The resting potential exists precisely when the neuron is not firing action potentials; it's the baseline state between signals." },
      { text: "Calcium ions alone, with no contribution from sodium or potassium", errorType: "prerequisite_misconception", why: "Sodium and potassium gradients (and their differential permeabilities) are the primary drivers of the resting potential, not calcium alone." },
    ],
  },
  {
    concept: "nervous_system_signaling",
    stem: "An inhibitory postsynaptic potential (IPSP) makes a neuron less likely to fire an action potential typically by:",
    reasoning: "IPSPs typically hyperpolarize the postsynaptic membrane (often via Cl- influx or K+ efflux), moving the membrane potential further from threshold, making it less likely to fire.",
    difficulty: 0.4,
    options: [
      { text: "Hyperpolarizing the membrane, moving it further from threshold", correct: true },
      { text: "Depolarizing the membrane, moving it closer to threshold", errorType: "sign_or_direction_reversal", why: "Describes an excitatory, not inhibitory, postsynaptic potential." },
      { text: "Directly destroying voltage-gated sodium channels", errorType: "prerequisite_misconception", why: "IPSPs work through reversible changes in membrane potential via ion flow, not by physically destroying channels." },
      { text: "Increasing the amount of neurotransmitter released at the presynaptic terminal", errorType: "outside_knowledge_not_supported_by_passage", why: "An IPSP describes an effect at the postsynaptic membrane, not a change in presynaptic neurotransmitter release." },
    ],
  },

  // --- immune_system_basics (2) ---
  {
    concept: "immune_system_basics",
    stem: "Passive immunity, such as antibodies passed from mother to infant, differs from active immunity in that passive immunity:",
    reasoning: "Passive immunity involves receiving pre-made antibodies from an external source (rather than the individual's own immune system producing them), providing immediate but temporary protection since no memory cells are generated.",
    difficulty: 0.4,
    options: [
      { text: "Involves receiving pre-made antibodies rather than producing one's own immune response", correct: true },
      { text: "Requires the individual's own B cells to be activated first", errorType: "prerequisite_misconception", why: "Passive immunity specifically bypasses the individual's own B-cell activation, unlike active immunity." },
      { text: "Produces long-lasting memory cells for future protection", errorType: "prerequisite_misconception", why: "Passive immunity does not generate memory cells in the recipient, unlike active immunity, so its protection is typically temporary." },
      { text: "Only occurs following vaccination, never naturally", errorType: "prerequisite_misconception", why: "Passive immunity occurs naturally (e.g., maternal antibodies) as well as artificially (e.g., antibody injections), not only through vaccination." },
    ],
  },
  {
    concept: "immune_system_basics",
    stem: "An autoimmune disorder occurs when:",
    reasoning: "An autoimmune disorder occurs when the immune system fails to properly distinguish self from non-self, mistakenly attacking the body's own healthy tissues as if they were foreign.",
    difficulty: 0.2,
    options: [
      { text: "The immune system mistakenly attacks the body's own healthy tissue", correct: true },
      { text: "The immune system fails to respond to any pathogen at all", errorType: "prerequisite_misconception", why: "Describes immunodeficiency, a distinct condition from autoimmunity, which involves misdirected (not absent) immune activity." },
      { text: "A pathogen successfully evades detection permanently", errorType: "prerequisite_misconception", why: "Pathogen evasion is a separate phenomenon from autoimmunity, which concerns the immune system targeting the body's own tissue, not a pathogen." },
      { text: "Memory cells are permanently destroyed after a single infection", errorType: "prerequisite_misconception", why: "Loss of memory cells is unrelated to the self/non-self misrecognition that defines autoimmune disease." },
    ],
  },

  // --- population_genetics_hardy_weinberg (2) ---
  {
    concept: "population_genetics_hardy_weinberg",
    stem: "In a population at Hardy-Weinberg equilibrium with allele frequencies p = 0.6 and q = 0.4, the frequency of homozygous dominant individuals (p²) is:",
    reasoning: "p² = (0.6)² = 0.36.",
    difficulty: 0.2,
    options: [
      { text: "0.36", correct: true },
      { text: "0.6", errorType: "correct_concept_wrong_step_in_sequence", why: "Uses the allele frequency p directly instead of squaring it to get the genotype frequency." },
      { text: "0.16", errorType: "prerequisite_misconception", why: "Squares q (0.4² = 0.16) instead of p, calculating the wrong genotype frequency." },
      { text: "1.2", errorType: "unit_or_order_of_magnitude_error", why: "Doubles p instead of squaring it." },
    ],
  },
  {
    concept: "population_genetics_hardy_weinberg",
    stem: "Nonrandom mating, such as a strong preference for mates with similar phenotypes (assortative mating), disturbs Hardy-Weinberg equilibrium primarily by:",
    reasoning: "Nonrandom mating changes the way genotypes combine in the next generation (increasing homozygosity for the preferred traits, for example), without necessarily changing overall allele frequencies — but it does violate the random-mating assumption Hardy-Weinberg equilibrium requires for its genotype-frequency predictions to hold.",
    difficulty: 0.5,
    options: [
      { text: "Changing genotype frequencies (e.g., increasing homozygosity) without necessarily changing allele frequencies", correct: true },
      { text: "Directly introducing brand-new alleles into the population", errorType: "prerequisite_misconception", why: "Nonrandom mating doesn't introduce new alleles; that would be a mutation or migration effect, a distinct mechanism." },
      { text: "Having no effect on the population's genetics whatsoever", errorType: "prerequisite_misconception", why: "Nonrandom mating specifically violates one of the core Hardy-Weinberg assumptions, so it does have a genetic effect on genotype distribution." },
      { text: "Eliminating genetic variation from the population entirely within one generation", errorType: "prerequisite_misconception", why: "Nonrandom mating shifts genotype frequencies gradually; it doesn't eliminate all variation in a single generation." },
    ],
  },

  // --- carbohydrate_structure_and_function (4, plus 5 via passage) ---
  {
    concept: "carbohydrate_structure_and_function",
    stem: "Glucose and fructose are both simple sugars with the same molecular formula (C6H12O6) but different structures. Two compounds sharing a molecular formula but differing in structure are called:",
    reasoning: "Compounds with identical molecular formulas but different structural arrangements of atoms are structural isomers.",
    difficulty: 0.2,
    options: [
      { text: "Structural isomers", correct: true },
      { text: "Enantiomers", errorType: "prerequisite_misconception", why: "Enantiomers are non-superimposable mirror images of each other with identical connectivity, a more specific relationship than glucose and fructose share." },
      { text: "Identical compounds", errorType: "prerequisite_misconception", why: "Glucose and fructose have distinctly different structures (an aldehyde vs. a ketone group, for instance) despite sharing a molecular formula." },
      { text: "Polymers of one another", errorType: "prerequisite_misconception", why: "Glucose and fructose are both individual monosaccharides, not polymers built from repeating units of each other." },
    ],
  },
  {
    concept: "carbohydrate_structure_and_function",
    stem: "Cellulose and starch are both polymers of glucose, yet humans can digest starch but not cellulose. This difference is primarily due to:",
    reasoning: "Starch consists of glucose units linked by alpha-glycosidic bonds, which human digestive enzymes (amylases) can cleave, whereas cellulose consists of glucose units linked by beta-glycosidic bonds, which human enzymes cannot break down.",
    difficulty: 0.4,
    options: [
      { text: "The different type of glycosidic bond (alpha vs. beta) linking the glucose units", correct: true },
      { text: "Cellulose being made of a completely different sugar than glucose", errorType: "prerequisite_misconception", why: "Both starch and cellulose are explicitly described as polymers of glucose; the difference lies in the bond type, not the sugar identity." },
      { text: "Starch containing far fewer glucose units than cellulose", errorType: "outside_knowledge_not_supported_by_passage", why: "Chain length is not the digestibility-determining factor here; bond type (alpha vs. beta linkage) is." },
      { text: "Cellulose being digested more easily due to its branched structure", errorType: "prerequisite_misconception", why: "Cellulose is generally a straight, unbranched chain, and branching is not the reason for its indigestibility in humans; the beta linkages are." },
    ],
  },
  {
    concept: "carbohydrate_structure_and_function",
    stem: "Glycogen serves as the primary short-term carbohydrate storage molecule in animals, analogous to starch in plants. Glycogen is stored predominantly in:",
    reasoning: "Glycogen is stored predominantly in the liver and skeletal muscle in animals, serving as a readily mobilized glucose reserve.",
    difficulty: 0.2,
    options: [
      { text: "The liver and skeletal muscle", correct: true },
      { text: "The lungs and skin", errorType: "outside_knowledge_not_supported_by_passage", why: "These tissues are not the primary glycogen storage sites in animals." },
      { text: "Red blood cells exclusively", errorType: "prerequisite_misconception", why: "Red blood cells are not the primary glycogen storage site; the liver and muscle are." },
      { text: "Bone tissue exclusively", errorType: "outside_knowledge_not_supported_by_passage", why: "Bone is not a significant glycogen storage site in animals." },
    ],
  },
  {
    concept: "carbohydrate_structure_and_function",
    stem: "A glycosidic bond linking two monosaccharides together to form a disaccharide is formed via which type of reaction, and what byproduct is released?",
    reasoning: "Like peptide bond formation, glycosidic bond formation is a dehydration (condensation) reaction, releasing a water molecule as the two monosaccharides are joined.",
    difficulty: 0.3,
    options: [
      { text: "A dehydration (condensation) reaction, releasing water", correct: true },
      { text: "A hydrolysis reaction, consuming water", errorType: "sign_or_direction_reversal", why: "Hydrolysis is the reverse reaction that breaks a glycosidic bond, not the reaction that forms it." },
      { text: "An oxidation-reduction reaction, transferring electrons", errorType: "prerequisite_misconception", why: "Glycosidic bond formation is a condensation reaction involving loss of water, not an electron-transfer redox reaction." },
      { text: "A reaction that releases carbon dioxide as a byproduct", errorType: "prerequisite_misconception", why: "Water, not carbon dioxide, is the byproduct released when a glycosidic bond forms." },
    ],
  },

  // --- osmoregulation_and_kidney_function (4, plus 5 via passage) ---
  {
    concept: "osmoregulation_and_kidney_function",
    stem: "Antidiuretic hormone (ADH) acts on the kidney's collecting ducts to:",
    reasoning: "ADH increases the permeability of the collecting duct to water (by inserting aquaporin channels), promoting water reabsorption back into the blood and producing more concentrated urine, especially important during dehydration.",
    difficulty: 0.3,
    options: [
      { text: "Increase water permeability, promoting water reabsorption and concentrated urine", correct: true },
      { text: "Decrease water permeability, promoting water loss and dilute urine", errorType: "sign_or_direction_reversal", why: "Reverses ADH's actual effect; it increases, not decreases, water reabsorption." },
      { text: "Directly filter glucose out of the blood", errorType: "prerequisite_misconception", why: "Glucose filtration occurs at the glomerulus, unrelated to ADH's specific role regulating water permeability at the collecting duct." },
      { text: "Have no effect on urine concentration", errorType: "prerequisite_misconception", why: "ADH's defining physiological role is precisely to regulate urine concentration via water reabsorption." },
    ],
  },
  {
    concept: "osmoregulation_and_kidney_function",
    stem: "The countercurrent multiplier system in the loop of Henle functions to:",
    reasoning: "The countercurrent multiplier establishes a strong osmotic gradient in the kidney's medulla, which is essential for the kidney's ability to reabsorb water and concentrate urine beyond the concentration of blood plasma.",
    difficulty: 0.5,
    options: [
      { text: "Establish an osmotic gradient in the medulla that enables concentrated urine production", correct: true },
      { text: "Directly filter blood at the glomerulus", errorType: "prerequisite_misconception", why: "Glomerular filtration is a separate, earlier step in the nephron, not the function of the countercurrent multiplier in the loop of Henle." },
      { text: "Actively secrete hormones directly into the urine", correct: false, errorType: "prerequisite_misconception", why: "The countercurrent multiplier is a physical/osmotic mechanism for concentrating urine, not a hormone secretion system." },
      { text: "Prevent any reabsorption of water from occurring", correct: false, errorType: "sign_or_direction_reversal", why: "The system's entire purpose is to enable, not prevent, substantial water reabsorption via the osmotic gradient it creates." },
    ],
  },
  {
    concept: "osmoregulation_and_kidney_function",
    stem: "The renin-angiotensin-aldosterone system (RAAS) is activated in response to low blood pressure or low blood volume, ultimately leading to:",
    reasoning: "RAAS activation leads to aldosterone release, which increases sodium (and water) reabsorption in the kidney, along with angiotensin II's vasoconstrictive effects — both actions raise blood pressure and blood volume.",
    difficulty: 0.4,
    options: [
      { text: "Increased sodium and water reabsorption, raising blood pressure and volume", correct: true },
      { text: "Decreased sodium reabsorption, lowering blood pressure further", errorType: "sign_or_direction_reversal", why: "Reverses the actual effect; RAAS activation raises, not further lowers, blood pressure and volume." },
      { text: "Immediate excretion of all filtered sodium", errorType: "sign_or_direction_reversal", why: "RAAS promotes sodium retention, not excretion, in response to low blood pressure or volume." },
      { text: "No effect on blood pressure, only on blood glucose levels", errorType: "prerequisite_misconception", why: "RAAS's primary physiological role is regulating blood pressure and volume, not blood glucose." },
    ],
  },
  {
    concept: "osmoregulation_and_kidney_function",
    stem: "A substance that is freely filtered at the glomerulus but neither reabsorbed nor secreted anywhere along the nephron would have a urine concentration, relative to its plasma concentration, that:",
    reasoning: "If a substance is filtered but not reabsorbed or secreted, its total amount in the urine simply reflects the amount filtered, and as water is reabsorbed along the nephron, the substance becomes progressively more concentrated in the remaining fluid — a principle used clinically (e.g., inulin) to measure filtration rate.",
    difficulty: 0.5,
    options: [
      { text: "Becomes progressively more concentrated as water is reabsorbed along the nephron", correct: true },
      { text: "Stays exactly the same as plasma concentration throughout the nephron", errorType: "prerequisite_misconception", why: "Since water is reabsorbed while this substance is not, its relative concentration in the remaining fluid necessarily rises, not stays constant." },
      { text: "Becomes progressively less concentrated as it moves through the nephron", errorType: "sign_or_direction_reversal", why: "Reverses the actual effect; concentration rises due to water removal, not falls." },
      { text: "Cannot be measured in urine at all", errorType: "prerequisite_misconception", why: "Such substances (like inulin) are specifically useful because they can be reliably measured in urine to calculate filtration rate." },
    ],
  },

  // --- passage: bb_carbohydrate_digestion (5) ---
  {
    concept: "carbohydrate_structure_and_function",
    type: "passage",
    passage: "bb_carbohydrate_digestion",
    stem: "According to the passage, why is salivary amylase's digestion of starch interrupted once food reaches the stomach?",
    reasoning: "The passage states this interruption occurs because the stomach's acidic environment 'denatures the enzyme.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "The stomach's acidic environment denatures the enzyme", correct: true },
      { text: "All the starch has already been fully digested by that point", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes digestion continuing later in the small intestine, meaning starch is not yet fully digested by the time it reaches the stomach." },
      { text: "The stomach actively destroys all enzymes using a specific antienzyme", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage attributes the interruption to the acidic environment denaturing the enzyme, not to a specific antienzyme mechanism." },
      { text: "Pancreatic amylase takes over immediately upon entering the stomach", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage places pancreatic amylase's action in the small intestine, not the stomach." },
    ],
  },
  {
    concept: "carbohydrate_structure_and_function",
    type: "passage",
    passage: "bb_carbohydrate_digestion",
    stem: "Based on the passage, the final step of starch digestion, producing free glucose monomers, is carried out by:",
    reasoning: "The passage states 'enzymes anchored to the intestinal lining complete the process, cleaving these fragments into free glucose molecules.'",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Enzymes anchored to the intestinal lining", correct: true },
      { text: "Salivary amylase, completing its job in the small intestine", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage states salivary amylase's action is interrupted in the stomach, well before this final step in the small intestine." },
      { text: "Stomach acid alone, without any enzymes", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes this final cleavage step to intestinal-lining enzymes, not to stomach acid." },
      { text: "Pancreatic amylase, completing the entire process alone", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes pancreatic amylase producing smaller fragments, with a separate set of intestinal-lining enzymes completing the final cleavage to free glucose." },
    ],
  },
  {
    concept: "carbohydrate_structure_and_function",
    type: "passage",
    passage: "bb_carbohydrate_digestion",
    stem: "According to the passage, once glucose is freed by digestion, intestinal cells absorb it into the bloodstream via:",
    reasoning: "The passage states intestinal cells absorb the freed glucose molecules 'via active transport into the bloodstream.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Active transport", correct: true },
      { text: "Simple diffusion alone, requiring no transport proteins", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage specifically describes active transport, not simple, protein-free diffusion." },
      { text: "Exocytosis of vesicles containing glucose", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes active transport, not a vesicle-based exocytotic mechanism." },
      { text: "Osmosis, following the movement of water", errorType: "prerequisite_misconception", why: "Osmosis refers specifically to water movement; the passage describes an active transport mechanism for glucose itself." },
    ],
  },
  {
    concept: "carbohydrate_structure_and_function",
    type: "passage",
    passage: "bb_carbohydrate_digestion",
    stem: "Based on the passage, if a person had a genetic deficiency preventing the intestinal-lining enzymes from functioning, but salivary and pancreatic amylase worked normally, the most likely outcome would be:",
    reasoning: "Since the passage describes the intestinal-lining enzymes as completing the final cleavage of amylase-produced fragments into free glucose, a deficiency in those enzymes would leave short glucose fragments un-cleaved, preventing their absorption as free glucose even though the earlier amylase steps proceeded normally.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Starch would be broken into smaller fragments by amylase, but those fragments could not be cleaved into free, absorbable glucose", correct: true },
      { text: "Starch digestion would proceed completely normally, since amylase alone is sufficient", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage explicitly describes the intestinal-lining enzymes as necessary to complete the process into free glucose, so their absence would disrupt digestion despite normal amylase function." },
      { text: "Starch would never be broken down at all, even in the mouth or stomach", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes salivary and pancreatic amylase (unaffected in this scenario) as still capable of producing shorter fragments; only the final cleavage step would fail." },
      { text: "The person would absorb starch directly without any digestion at all", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes intact starch as unable to be absorbed directly; digestion into glucose is required, and this scenario would leave that process incomplete." },
    ],
  },
  {
    concept: "carbohydrate_structure_and_function",
    type: "passage",
    passage: "bb_carbohydrate_digestion",
    stem: "According to the passage, starch cannot be absorbed directly by intestinal cells because it:",
    reasoning: "The passage opens by stating starch 'cannot be absorbed directly by intestinal cells and must first be broken down into individual glucose monomers.'",
    difficulty: 0.1,
    sirs: 1,
    options: [
      { text: "Is a polysaccharide that must first be broken down into individual glucose monomers", correct: true },
      { text: "Is toxic to intestinal cells in its intact form", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage attributes the need for digestion to starch's polysaccharide structure, not to any toxicity." },
      { text: "Is not found in the human diet in significant amounts", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage discusses starch as 'dietary starch,' clearly present in the diet, requiring digestion before absorption." },
      { text: "Contains no glucose units at all", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes starch as 'a polysaccharide made of long chains of glucose units.'" },
    ],
  },

  // --- passage: bb_nephron_filtration (5) ---
  {
    concept: "osmoregulation_and_kidney_function",
    type: "passage",
    passage: "bb_nephron_filtration",
    stem: "According to the passage, what drives the initial movement of water and small molecules from blood into Bowman's capsule?",
    reasoning: "The passage states 'blood pressure forces water, ions, glucose, and small molecules out of the blood and into Bowman's capsule.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Blood pressure in the glomerular capillaries", correct: true },
      { text: "Active transport requiring ATP", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes this initial filtration to blood pressure, a passive force, not an active, ATP-dependent transport process." },
      { text: "Osmotic pressure pulling water out of the capillaries", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage specifically identifies blood pressure, not an osmotic pulling force, as driving glomerular filtration." },
      { text: "Hormonal signals from the collecting duct", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes this initial filtration step as driven mechanically by blood pressure, not by hormonal signaling from a downstream structure." },
    ],
  },
  {
    concept: "osmoregulation_and_kidney_function",
    type: "passage",
    passage: "bb_nephron_filtration",
    stem: "According to the passage, which components typically remain in the blood rather than entering the filtrate at the glomerulus?",
    reasoning: "The passage states 'larger components like blood cells and most proteins remain in the blood.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Blood cells and most proteins", correct: true },
      { text: "Water and small ions", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes water and ions as being filtered out into Bowman's capsule, not retained in the blood." },
      { text: "Glucose exclusively", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly lists glucose among the substances filtered into Bowman's capsule under normal conditions." },
      { text: "All dissolved substances without exception", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage specifically distinguishes filtered small molecules from retained larger components like cells and proteins, not an across-the-board rule." },
    ],
  },
  {
    concept: "osmoregulation_and_kidney_function",
    type: "passage",
    passage: "bb_nephron_filtration",
    stem: "Based on the passage, under normal conditions, filtered glucose is:",
    reasoning: "The passage states 'under normal conditions nearly all filtered glucose is reabsorbed' back into the blood as the filtrate passes through the tubule system.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Almost entirely reabsorbed back into the blood", correct: true },
      { text: "Entirely excreted in the urine", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states nearly all filtered glucose is reabsorbed, the opposite of being excreted, under normal conditions." },
      { text: "Left unfiltered at the glomerulus entirely", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly lists glucose among the substances that are filtered at the glomerulus." },
      { text: "Converted into a different molecule before reabsorption", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes straightforward reabsorption of glucose, not a chemical conversion step." },
    ],
  },
  {
    concept: "osmoregulation_and_kidney_function",
    type: "passage",
    passage: "bb_nephron_filtration",
    stem: "According to the passage, the appearance of glucose in the final urine typically signals that:",
    reasoning: "The passage states this typically signals 'that the filtered glucose load has exceeded the tubule's reabsorption capacity, as occurs in uncontrolled diabetes.'",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "The filtered glucose load has exceeded the tubule's reabsorption capacity", correct: true },
      { text: "The glomerulus has stopped filtering glucose entirely", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage's explanation involves glucose still being filtered but exceeding reabsorption capacity, not the glomerulus ceasing to filter it." },
      { text: "The kidney is functioning with unusually high efficiency", errorType: "sign_or_direction_reversal", why: "Glucose in urine signals a reabsorption problem (or excess filtered load), not unusually high kidney efficiency." },
      { text: "The person has consumed too much water recently", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage links glucose in urine to exceeded reabsorption capacity (as in diabetes), not to water intake." },
    ],
  },
  {
    concept: "osmoregulation_and_kidney_function",
    type: "passage",
    passage: "bb_nephron_filtration",
    stem: "Based on the passage's description, secretion into the tubule differs from filtration at the glomerulus in that secretion:",
    reasoning: "The passage describes filtration as occurring only at the glomerulus, while secretion is described as occurring from surrounding capillaries directly into the tubule at later points along the nephron (proximal tubule, loop, distal tubule, collecting duct), a distinct process happening at different locations along the nephron.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "Occurs at multiple points along the tubule, not only at the glomerulus", correct: true },
      { text: "Only occurs before any filtration has taken place", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes secretion happening as filtrate travels through the tubule, after glomerular filtration has already occurred, not before it." },
      { text: "Moves substances from the tubule back into the blood", errorType: "sign_or_direction_reversal", why: "The passage describes secretion as moving wastes from the blood into the tubule, the opposite direction from reabsorption." },
      { text: "Is identical to filtration in every respect", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes these as distinct processes — filtration at the glomerulus versus secretion from capillaries along the tubule — not identical processes." },
    ],
  },
];
