import type { ItemDef } from "./types";

export const itemsBb4: ItemDef[] = [
  // --- amino_acid_structure (2) ---
  {
    concept: "amino_acid_structure",
    stem: "Amino acids with side chains capable of hydrogen bonding, such as serine or threonine, are classified as:",
    reasoning: "Serine and threonine have hydroxyl-containing side chains that can hydrogen bond with water and other polar groups, making them polar but uncharged amino acids.",
    difficulty: 0.2,
    options: [
      { text: "Polar, uncharged", correct: true },
      { text: "Nonpolar, hydrophobic", errorType: "prerequisite_misconception", why: "Hydroxyl-containing side chains are polar and hydrophilic, not nonpolar and hydrophobic." },
      { text: "Acidic and negatively charged", errorType: "prerequisite_misconception", why: "Serine and threonine's hydroxyl groups are not acidic carboxyl groups and do not carry a negative charge at physiological pH." },
      { text: "Basic and positively charged", errorType: "prerequisite_misconception", why: "Hydroxyl groups are not basic amine groups and do not carry a positive charge at physiological pH." },
    ],
  },
  {
    concept: "amino_acid_structure",
    stem: "The alpha carbon of a standard amino acid (excluding glycine) is a chiral center because it is bonded to four different groups: an amino group, a carboxyl group, a hydrogen, and:",
    reasoning: "The fourth distinct group bonded to the alpha carbon is the amino acid's unique side chain (R group), which differs from one amino acid to another, giving the alpha carbon four different substituents and making it chiral.",
    difficulty: 0.2,
    options: [
      { text: "A unique side chain (R group)", correct: true },
      { text: "A second carboxyl group", errorType: "prerequisite_misconception", why: "The standard amino acid backbone has only one carboxyl group per alpha carbon, not two." },
      { text: "A second amino group", errorType: "prerequisite_misconception", why: "The standard amino acid backbone has only one amino group per alpha carbon, not two." },
      { text: "Another hydrogen atom", errorType: "prerequisite_misconception", why: "Two identical hydrogen atoms on the alpha carbon (as in glycine) would make it achiral, not chiral, since it would lack four distinct substituents." },
    ],
  },

  // --- peptide_bond_formation (2) ---
  {
    concept: "peptide_bond_formation",
    stem: "Protease enzymes catalyze the hydrolysis of peptide bonds. This reaction is the reverse of:",
    reasoning: "Peptide bond hydrolysis (adding water to break the bond) is the reverse of peptide bond formation (condensation, releasing water), the same reaction that links amino acids together during protein synthesis.",
    difficulty: 0.2,
    options: [
      { text: "Peptide bond formation (condensation)", correct: true },
      { text: "DNA replication", errorType: "prerequisite_misconception", why: "DNA replication is an unrelated process involving nucleotide polymerization, not peptide bond chemistry." },
      { text: "Glycolysis", errorType: "prerequisite_misconception", why: "Glycolysis is a distinct metabolic pathway for glucose breakdown, unrelated to peptide bond chemistry." },
      { text: "Oxidative phosphorylation", errorType: "prerequisite_misconception", why: "Oxidative phosphorylation is an ATP-generating process in the electron transport chain, unrelated to peptide bond formation or hydrolysis." },
    ],
  },
  {
    concept: "peptide_bond_formation",
    stem: "A dipeptide bond linking two amino acids can be identified in a molecular structure by looking for:",
    reasoning: "A peptide bond is structurally identifiable as a carbonyl carbon (C=O) directly bonded to a nitrogen atom (the amide linkage), connecting what were originally two separate amino acid backbones.",
    difficulty: 0.3,
    options: [
      { text: "A carbonyl carbon bonded directly to a nitrogen atom (an amide linkage)", correct: true },
      { text: "Two adjacent hydroxyl groups", errorType: "prerequisite_misconception", why: "Hydroxyl groups are unrelated to the amide linkage that defines a peptide bond." },
      { text: "A disulfide bridge between two sulfur atoms", errorType: "prerequisite_misconception", why: "Disulfide bridges are a distinct type of bond found only between cysteine side chains, not the peptide backbone linkage." },
      { text: "A double bond between two carbon atoms", errorType: "prerequisite_misconception", why: "A peptide bond specifically involves a carbon-nitrogen linkage (with partial double-bond character), not a simple carbon-carbon double bond." },
    ],
  },

  // --- protein_secondary_structure (2) ---
  {
    concept: "protein_secondary_structure",
    stem: "A protein segment that has no regular, repeating hydrogen-bonding pattern and does not fit the alpha helix or beta sheet classifications is generally described as:",
    reasoning: "Such irregular segments, lacking the defined periodic hydrogen bonding of an alpha helix or beta sheet, are typically classified as random coil or loop regions.",
    difficulty: 0.2,
    options: [
      { text: "Random coil (loop) structure", correct: true },
      { text: "A third type of regular helix distinct from the alpha helix", errorType: "prerequisite_misconception", why: "The question specifies the segment lacks any regular, repeating pattern, ruling out classification as another type of regular helix." },
      { text: "A quaternary structure element", errorType: "prerequisite_misconception", why: "Quaternary structure refers to the arrangement of multiple protein subunits, not a description of local backbone conformation within a single chain." },
      { text: "A disulfide-linked domain", errorType: "prerequisite_misconception", why: "Disulfide linkages are a distinct covalent feature unrelated to the local hydrogen-bonding pattern (or lack thereof) that defines secondary structure classification." },
    ],
  },
  {
    concept: "protein_secondary_structure",
    stem: "The specific sequence of amino acids in a protein (its primary structure) ultimately determines the protein's secondary and tertiary structure because:",
    reasoning: "The properties of each amino acid's side chain (size, charge, polarity, hydrogen-bonding capacity) determine which local and long-range interactions are favorable, so the linear sequence dictates how the chain folds into its higher-order structures.",
    difficulty: 0.4,
    options: [
      { text: "Each side chain's chemical properties determine which folding interactions are energetically favorable", correct: true },
      { text: "Secondary and tertiary structure are entirely independent of amino acid sequence", errorType: "prerequisite_misconception", why: "This directly contradicts the well-established principle that primary sequence determines higher-order structure through side-chain interactions." },
      { text: "A separate 'folding gene' independent of the protein-coding gene determines the fold", errorType: "outside_knowledge_not_supported_by_passage", why: "No such distinct 'folding gene' exists; folding is determined by the same sequence encoded by the protein-coding gene itself." },
      { text: "All proteins fold into an identical final structure regardless of sequence", errorType: "prerequisite_misconception", why: "Different sequences produce different fold structures precisely because of their differing side-chain properties, not identical folds." },
    ],
  },

  // --- enzyme_kinetics_and_inhibition (2) ---
  {
    concept: "enzyme_kinetics_and_inhibition",
    stem: "A mixed inhibitor can bind to both the free enzyme and the enzyme-substrate complex, but with different affinities for each. This type of inhibition typically affects:",
    reasoning: "Mixed inhibition typically changes both the apparent Km and Vmax of the reaction, unlike purely competitive (Km only) or purely noncompetitive (Vmax only) inhibition, since the inhibitor interacts with both enzyme forms.",
    difficulty: 0.5,
    options: [
      { text: "Both the apparent Km and Vmax", correct: true },
      { text: "Only Km, leaving Vmax completely unchanged", errorType: "prerequisite_misconception", why: "Describes purely competitive inhibition, not mixed inhibition, which affects both parameters." },
      { text: "Only Vmax, leaving Km completely unchanged", errorType: "prerequisite_misconception", why: "Describes purely noncompetitive inhibition, not mixed inhibition, which affects both parameters." },
      { text: "Neither Km nor Vmax", errorType: "prerequisite_misconception", why: "Mixed inhibition, by binding both enzyme forms, generally does affect the observed kinetic parameters." },
    ],
  },
  {
    concept: "enzyme_kinetics_and_inhibition",
    stem: "Irreversible enzyme inhibitors typically act by:",
    reasoning: "Irreversible inhibitors typically form a stable covalent bond with the enzyme (often at or near the active site), permanently inactivating it, unlike reversible inhibitors, which bind noncovalently and can dissociate.",
    difficulty: 0.3,
    options: [
      { text: "Forming a covalent bond with the enzyme, permanently inactivating it", correct: true },
      { text: "Binding noncovalently and dissociating easily over time", errorType: "prerequisite_misconception", why: "Describes reversible inhibition, not irreversible inhibition, which involves a stable, typically covalent modification." },
      { text: "Increasing the enzyme's affinity for its substrate", errorType: "sign_or_direction_reversal", why: "Irreversible inhibitors decrease or eliminate enzyme function, rather than increasing substrate affinity." },
      { text: "Only working at extremely low temperatures", errorType: "outside_knowledge_not_supported_by_passage", why: "Irreversible inhibition is defined by the covalent, permanent nature of binding, not by a specific temperature requirement." },
    ],
  },

  // --- cell_membrane_transport (2) ---
  {
    concept: "cell_membrane_transport",
    stem: "Gap junctions between adjacent animal cells allow for:",
    reasoning: "Gap junctions are channel proteins directly connecting the cytoplasm of adjacent cells, allowing small molecules and ions to pass directly between cells without crossing the extracellular space.",
    difficulty: 0.3,
    options: [
      { text: "Direct passage of small molecules and ions between adjacent cells' cytoplasm", correct: true },
      { text: "Strong mechanical adhesion between cells with no molecular exchange", errorType: "prerequisite_misconception", why: "Describes desmosomes or similar adhesive junctions, not gap junctions, which specifically allow molecular/ionic passage." },
      { text: "Complete sealing of the space between adjacent cells, preventing any passage", errorType: "prerequisite_misconception", why: "Describes tight junctions, which seal the space between cells, rather than gap junctions, which allow direct intercellular communication." },
      { text: "Transport of large proteins between the extracellular space and the cytoplasm", errorType: "prerequisite_misconception", why: "Gap junctions connect the cytoplasm of two adjacent cells directly, not the extracellular space to a single cell's cytoplasm, and they only pass small molecules, not large proteins." },
    ],
  },
  {
    concept: "cell_membrane_transport",
    stem: "Tight junctions between epithelial cells function primarily to:",
    reasoning: "Tight junctions seal the space between adjacent epithelial cells, preventing materials from passing freely between cells (paracellular transport) and forcing selective transport through the cells themselves.",
    difficulty: 0.3,
    options: [
      { text: "Seal the space between cells, preventing free paracellular passage of materials", correct: true },
      { text: "Allow direct cytoplasmic communication between adjacent cells", errorType: "prerequisite_misconception", why: "Describes gap junctions, not tight junctions, which specifically seal rather than connect adjacent cells' cytoplasm." },
      { text: "Actively transport ions using ATP", errorType: "prerequisite_misconception", why: "Tight junctions are structural seals, not active ATP-driven transport mechanisms." },
      { text: "Allow unrestricted passage of all molecules between cells", errorType: "sign_or_direction_reversal", why: "Tight junctions specifically restrict, rather than allow unrestricted, passage of material between cells." },
    ],
  },

  // --- dna_replication (2) ---
  {
    concept: "dna_replication",
    stem: "Single-strand binding proteins (SSBs) function during DNA replication to:",
    reasoning: "SSBs bind to and stabilize the single-stranded DNA exposed by helicase at the replication fork, preventing the strands from re-annealing (rejoining) or being degraded before they can be used as templates.",
    difficulty: 0.4,
    options: [
      { text: "Stabilize single-stranded DNA and prevent it from re-annealing", correct: true },
      { text: "Synthesize new complementary DNA strands", errorType: "prerequisite_misconception", why: "DNA polymerase, not SSBs, is responsible for synthesizing new DNA strands." },
      { text: "Unwind the double helix at the replication fork", errorType: "prerequisite_misconception", why: "Helicase, not SSBs, is responsible for unwinding the double helix." },
      { text: "Seal nicks between newly synthesized DNA fragments", errorType: "prerequisite_misconception", why: "DNA ligase, not SSBs, is responsible for sealing nicks between fragments like Okazaki fragments." },
    ],
  },
  {
    concept: "dna_replication",
    stem: "Semiconservative replication was experimentally confirmed by the Meselson-Stahl experiment, which used density labeling of DNA with different nitrogen isotopes across generations. This experiment worked by distinguishing DNA molecules based on:",
    reasoning: "By growing bacteria first in heavy nitrogen (¹⁵N) then switching to light nitrogen (¹⁴N), Meselson and Stahl could distinguish DNA of different densities via centrifugation, tracking how heavy and light strands combined across generations to confirm the semiconservative model.",
    difficulty: 0.5,
    options: [
      { text: "Their density, based on which nitrogen isotope was incorporated during synthesis", correct: true },
      { text: "Their color under a standard light microscope", errorType: "outside_knowledge_not_supported_by_passage", why: "DNA is not directly visualized by color under a light microscope; the experiment used density-based centrifugation." },
      { text: "Their overall length in base pairs", errorType: "outside_knowledge_not_supported_by_passage", why: "Length was not the distinguishing factor; isotope-based density differences allowed strands to be separated and tracked." },
      { text: "Their electrical charge", errorType: "outside_knowledge_not_supported_by_passage", why: "While DNA does carry charge, the Meselson-Stahl experiment specifically exploited density differences from isotope labeling, not charge differences." },
    ],
  },

  // --- transcription_and_translation (2) ---
  {
    concept: "transcription_and_translation",
    stem: "The genetic code is described as degenerate (or redundant) because:",
    reasoning: "The genetic code is degenerate because most amino acids are specified by more than one codon (there are 64 possible codons but only 20 standard amino acids plus stop signals), providing redundancy.",
    difficulty: 0.3,
    options: [
      { text: "Most amino acids are specified by more than one codon", correct: true },
      { text: "Each codon can code for multiple different amino acids", errorType: "sign_or_direction_reversal", why: "The genetic code is unambiguous in this direction — each codon specifies only one amino acid; it's the reverse (an amino acid having multiple codons) that makes it degenerate." },
      { text: "The code varies randomly between different species with no consistent pattern", errorType: "prerequisite_misconception", why: "The genetic code is nearly universal across species, not randomly varying; degeneracy refers specifically to codon redundancy for amino acids." },
      { text: "Some codons do not code for anything at all and are simply skipped", errorType: "prerequisite_misconception", why: "All codons either specify an amino acid or serve as a stop signal; none are simply 'skipped' as meaningless." },
    ],
  },
  {
    concept: "transcription_and_translation",
    stem: "During translation, when the ribosome encounters a stop codon (UAA, UAG, or UGA), a release factor binds instead of a tRNA. This causes:",
    reasoning: "Since no tRNA recognizes a stop codon, a release factor binds instead, triggering hydrolysis of the bond holding the completed polypeptide to the final tRNA, releasing the finished protein from the ribosome.",
    difficulty: 0.4,
    options: [
      { text: "Release of the completed polypeptide chain from the ribosome", correct: true },
      { text: "Addition of one final, special amino acid to the chain", errorType: "prerequisite_misconception", why: "Stop codons do not code for an amino acid; they signal termination, triggering release rather than one more addition." },
      { text: "Immediate degradation of the mRNA before translation can finish", errorType: "outside_knowledge_not_supported_by_passage", why: "The stop codon signals proper termination and release of the completed protein, not premature mRNA degradation." },
      { text: "Reversal of translation, removing amino acids one by one from the chain", errorType: "prerequisite_misconception", why: "Reaching a stop codon completes and releases the finished chain; it does not trigger a reverse, disassembly process." },
    ],
  },

  // --- glycolysis_and_cellular_respiration (2) ---
  {
    concept: "glycolysis_and_cellular_respiration",
    stem: "The electron transport chain is embedded in which mitochondrial structure?",
    reasoning: "The electron transport chain's protein complexes are embedded in the inner mitochondrial membrane, which is folded into cristae to increase surface area for this process.",
    difficulty: 0.1,
    options: [
      { text: "The inner mitochondrial membrane", correct: true },
      { text: "The mitochondrial matrix", errorType: "prerequisite_misconception", why: "The matrix hosts the citric acid cycle enzymes, not the electron transport chain, which is membrane-embedded." },
      { text: "The outer mitochondrial membrane", errorType: "prerequisite_misconception", why: "The outer membrane is relatively permeable and does not house the electron transport chain complexes; these are in the inner membrane." },
      { text: "The cytoplasm, outside the mitochondria entirely", errorType: "prerequisite_misconception", why: "The electron transport chain is specifically a mitochondrial (inner membrane) process, not a cytoplasmic one." },
    ],
  },
  {
    concept: "glycolysis_and_cellular_respiration",
    stem: "ATP synthase generates ATP by harnessing the energy of:",
    reasoning: "ATP synthase uses the proton-motive force (the electrochemical gradient of H+ built up across the inner mitochondrial membrane by the electron transport chain) to drive ATP production as protons flow back through it.",
    difficulty: 0.3,
    options: [
      { text: "A proton gradient across the inner mitochondrial membrane", correct: true },
      { text: "Direct transfer of a phosphate group from glucose", errorType: "prerequisite_misconception", why: "Describes substrate-level phosphorylation (as in glycolysis), a distinct mechanism from ATP synthase's use of the proton gradient." },
      { text: "The breakdown of ATP synthase's own protein structure", errorType: "prerequisite_misconception", why: "ATP synthase is a stable enzyme that harnesses the proton gradient; it is not itself broken down to release energy for ATP production." },
      { text: "Direct absorption of light energy", errorType: "prerequisite_misconception", why: "Direct light absorption describes photosynthetic light reactions in plants, not mitochondrial oxidative phosphorylation via ATP synthase." },
    ],
  },

  // --- mendelian_genetics (2) ---
  {
    concept: "mendelian_genetics",
    stem: "A cross between a homozygous dominant individual (AA) and a homozygous recessive individual (aa) produces offspring that are:",
    reasoning: "All offspring from this cross receive one A allele and one a allele, making them all heterozygous (Aa), displaying the dominant phenotype uniformly.",
    difficulty: 0.1,
    options: [
      { text: "All heterozygous (Aa), showing the dominant phenotype", correct: true },
      { text: "A mix of AA, Aa, and aa genotypes", errorType: "prerequisite_misconception", why: "Since one parent can only contribute A and the other only a, every offspring must be Aa; no AA or aa offspring are possible from this specific cross." },
      { text: "All homozygous recessive (aa)", errorType: "prerequisite_misconception", why: "The dominant parent contributes an A allele to every offspring, so none can be homozygous recessive." },
      { text: "All homozygous dominant (AA)", errorType: "prerequisite_misconception", why: "The recessive parent contributes an a allele to every offspring, so none can be homozygous dominant." },
    ],
  },
  {
    concept: "mendelian_genetics",
    stem: "Polygenic traits, such as human height, differ from traits studied in simple Mendelian genetics in that polygenic traits are influenced by:",
    reasoning: "Polygenic traits are controlled by multiple genes acting together (often along with environmental factors), producing continuous variation (like a bell curve), unlike single-gene Mendelian traits with discrete phenotypic categories.",
    difficulty: 0.3,
    options: [
      { text: "Multiple genes acting together, often producing continuous variation", correct: true },
      { text: "A single gene with complete dominance", errorType: "prerequisite_misconception", why: "Describes a simple Mendelian trait, the type polygenic traits are being contrasted with." },
      { text: "No genetic influence at all, only environmental factors", errorType: "prerequisite_misconception", why: "Polygenic traits are influenced by multiple genes (in addition to possible environmental factors), not solely by environment with no genetic component." },
      { text: "A single gene located on the Y chromosome exclusively", errorType: "prerequisite_misconception", why: "Polygenic traits involve multiple genes, often on multiple different chromosomes, not a single gene confined to the Y chromosome." },
    ],
  },

  // --- mitosis_and_the_cell_cycle (2) ---
  {
    concept: "mitosis_and_the_cell_cycle",
    stem: "Cytokinesis, the physical division of the cytoplasm into two daughter cells, typically occurs:",
    reasoning: "Cytokinesis typically begins during or immediately following telophase, the final stage of mitosis, completing the division into two separate daughter cells after the nuclear material has already separated.",
    difficulty: 0.2,
    options: [
      { text: "During or immediately after telophase", correct: true },
      { text: "Before prophase begins", errorType: "prerequisite_misconception", why: "Cytokinesis is the final step of cell division, occurring after mitosis's nuclear division stages, not before prophase." },
      { text: "During metaphase, at the same time chromosomes align", errorType: "prerequisite_misconception", why: "Cytokinesis occurs after nuclear division is essentially complete (telophase), not during the earlier metaphase alignment stage." },
      { text: "Only in plant cells, never in animal cells", errorType: "prerequisite_misconception", why: "Cytokinesis occurs in both plant and animal cells, though the specific mechanism (cell plate vs. cleavage furrow) differs." },
    ],
  },
  {
    concept: "mitosis_and_the_cell_cycle",
    stem: "The spindle assembly checkpoint during mitosis specifically verifies that:",
    reasoning: "The spindle assembly checkpoint ensures all chromosomes are properly attached to spindle fibers from both poles before allowing the cell to proceed into anaphase, preventing errors in chromosome segregation.",
    difficulty: 0.4,
    options: [
      { text: "All chromosomes are properly attached to spindle fibers before anaphase begins", correct: true },
      { text: "DNA replication has occurred without any errors", errorType: "prerequisite_misconception", why: "DNA replication accuracy is checked by a separate checkpoint (in S phase/G2), not the spindle assembly checkpoint, which concerns chromosome attachment." },
      { text: "The cell has reached a sufficient size to divide", errorType: "prerequisite_misconception", why: "Cell size checkpoints occur earlier in the cycle (G1), distinct from the spindle assembly checkpoint's specific focus on chromosome attachment." },
      { text: "Enough ATP has been produced to complete cytokinesis", errorType: "outside_knowledge_not_supported_by_passage", why: "The spindle assembly checkpoint specifically monitors chromosome-spindle attachment, not cellular energy (ATP) levels." },
    ],
  },

  // --- muscle_contraction (2) ---
  {
    concept: "muscle_contraction",
    stem: "Cardiac muscle cells are connected to one another by specialized structures called intercalated discs, which contain gap junctions. This structural feature allows cardiac muscle to:",
    reasoning: "Gap junctions within intercalated discs allow electrical signals (action potentials) to pass directly and rapidly between adjacent cardiac muscle cells, allowing the heart to contract as a coordinated, synchronized unit.",
    difficulty: 0.4,
    options: [
      { text: "Contract as a coordinated, synchronized unit via rapid electrical signal spread", correct: true },
      { text: "Contract completely independently, with each cell acting on its own schedule", errorType: "sign_or_direction_reversal", why: "Gap junctions specifically enable coordinated, synchronized contraction, the opposite of independent, uncoordinated cell activity." },
      { text: "Avoid ever needing calcium for contraction", errorType: "prerequisite_misconception", why: "Cardiac muscle, like other muscle types, still relies on calcium signaling for contraction; intercalated discs specifically enable electrical coordination between cells." },
      { text: "Grow new muscle fibers more rapidly than skeletal muscle", errorType: "outside_knowledge_not_supported_by_passage", why: "Intercalated discs and gap junctions relate to electrical coordination of contraction, not to the rate of new fiber growth." },
    ],
  },
  // --- hormone_signaling (1) ---
  {
    concept: "hormone_signaling",
    stem: "Insulin and glucagon are both secreted by the pancreas but by different specific cell types. Insulin is secreted by:",
    reasoning: "Insulin is secreted by beta cells of the pancreatic islets, while glucagon is secreted by alpha cells — distinct cell populations within the same organ producing opposing hormones.",
    difficulty: 0.2,
    options: [
      { text: "Beta cells of the pancreatic islets", correct: true },
      { text: "Alpha cells of the pancreatic islets", errorType: "sign_or_direction_reversal", why: "Alpha cells secrete glucagon, not insulin; beta cells are responsible for insulin secretion." },
      { text: "The adrenal medulla", errorType: "prerequisite_misconception", why: "The adrenal medulla secretes epinephrine and norepinephrine, not insulin, which comes from the pancreas." },
      { text: "The anterior pituitary gland", errorType: "prerequisite_misconception", why: "The anterior pituitary secretes hormones like growth hormone and ACTH, not insulin, which is secreted by the pancreas." },
    ],
  },
  // --- lipid_structure_and_membranes (1) ---
  {
    concept: "lipid_structure_and_membranes",
    stem: "Steroid hormones, such as cortisol and estrogen, are derived from which lipid precursor?",
    reasoning: "Steroid hormones are synthesized from cholesterol, a lipid with a characteristic four-ring structure that serves as the backbone for all steroid hormone synthesis.",
    difficulty: 0.2,
    options: [
      { text: "Cholesterol", correct: true },
      { text: "Triglycerides", errorType: "prerequisite_misconception", why: "Triglycerides are primarily energy-storage lipids, not the structural precursor for steroid hormone synthesis." },
      { text: "Phospholipids", errorType: "prerequisite_misconception", why: "Phospholipids are primarily membrane-structural lipids, not the precursor molecule for steroid hormones." },
      { text: "Glycogen", errorType: "prerequisite_misconception", why: "Glycogen is a carbohydrate storage molecule, not a lipid, and is unrelated to steroid hormone synthesis." },
    ],
  },
  // --- nervous_system_signaling (2) ---
  {
    concept: "nervous_system_signaling",
    stem: "The all-or-none principle of action potentials means that once threshold is reached:",
    reasoning: "The all-or-none principle states that an action potential either fires at full, consistent amplitude or does not fire at all — its size does not vary with the strength of the stimulus once threshold is crossed.",
    difficulty: 0.2,
    options: [
      { text: "The action potential fires at full amplitude, regardless of how far above threshold the stimulus was", correct: true },
      { text: "The action potential's amplitude increases proportionally with a stronger stimulus", errorType: "prerequisite_misconception", why: "Contradicts the all-or-none principle, which states amplitude is fixed once threshold is reached, not proportional to stimulus strength." },
      { text: "No action potential occurs, since threshold has already been surpassed", errorType: "prerequisite_misconception", why: "Reaching (or exceeding) threshold is precisely what triggers the action potential to fire, not what prevents it." },
      { text: "Multiple action potentials of varying sizes occur simultaneously", errorType: "prerequisite_misconception", why: "A single action potential of fixed, full amplitude occurs per triggering event, not multiple varying-size potentials simultaneously." },
    ],
  },
  {
    concept: "nervous_system_signaling",
    stem: "Temporal summation at a synapse occurs when:",
    reasoning: "Temporal summation occurs when multiple postsynaptic potentials from a single presynaptic neuron, arriving in rapid succession (close together in time), add together to reach threshold, even if any single potential alone would not have been sufficient.",
    difficulty: 0.4,
    options: [
      { text: "Multiple postsynaptic potentials from a single input arrive in rapid succession and add together", correct: true },
      { text: "Postsynaptic potentials from many different synapses arrive at the same instant", errorType: "prerequisite_misconception", why: "Describes spatial summation, a distinct process from temporal summation, which involves the same input over closely-spaced time rather than many different inputs simultaneously." },
      { text: "A single large postsynaptic potential occurs from one synapse", errorType: "prerequisite_misconception", why: "Summation, by definition, requires combining multiple potentials; a single potential alone doesn't constitute summation." },
      { text: "An action potential fails to be generated under any circumstances", errorType: "prerequisite_misconception", why: "Temporal summation is a mechanism that can help reach threshold and generate an action potential, not a description of failure to generate one." },
    ],
  },

  // --- immune_system_basics (2) ---
  {
    concept: "immune_system_basics",
    stem: "Cytotoxic T cells (CD8+ T cells) function to eliminate infected or abnormal cells primarily by:",
    reasoning: "Cytotoxic T cells recognize infected or abnormal cells (via MHC class I presentation of foreign/abnormal peptides) and directly induce their death, often by releasing perforin and granzymes that trigger apoptosis.",
    difficulty: 0.3,
    options: [
      { text: "Directly inducing apoptosis (programmed cell death) in the target cell", correct: true },
      { text: "Producing and secreting antibodies against the target cell", errorType: "prerequisite_misconception", why: "Antibody production is carried out by B cells (as plasma cells), not by cytotoxic T cells, which act through direct cell-killing mechanisms." },
      { text: "Engulfing and digesting the target cell through phagocytosis", errorType: "prerequisite_misconception", why: "Phagocytosis is carried out by cells like macrophages and neutrophils, not by cytotoxic T cells, which trigger apoptosis in target cells instead." },
      { text: "Signaling the target cell to increase its own rate of division", errorType: "sign_or_direction_reversal", why: "Cytotoxic T cells act to eliminate the target cell, the opposite of signaling it to proliferate further." },
    ],
  },
  // --- population_genetics_hardy_weinberg (2) ---
  {
    concept: "population_genetics_hardy_weinberg",
    stem: "Genetic drift is expected to have the largest relative effect on allele frequencies in:",
    reasoning: "Genetic drift (random fluctuation in allele frequencies due to chance) has proportionally larger effects in small populations, where random sampling variation is not averaged out by large numbers, unlike in large populations.",
    difficulty: 0.3,
    options: [
      { text: "A small population", correct: true },
      { text: "A very large population", errorType: "sign_or_direction_reversal", why: "Genetic drift's effects are proportionally smaller, not larger, in large populations, where random sampling variation tends to average out." },
      { text: "A population with no genetic variation at all", errorType: "prerequisite_misconception", why: "With no variation, there is no allele frequency for drift to act upon in the first place; drift requires existing variation to have any effect." },
      { text: "A population undergoing strong directional selection only", errorType: "outside_knowledge_not_supported_by_passage", why: "Directional selection is a distinct, non-random mechanism from genetic drift; the question specifically concerns drift's effect based on population size." },
    ],
  },
  {
    concept: "population_genetics_hardy_weinberg",
    stem: "Gene flow (migration) between two previously isolated populations tends to:",
    reasoning: "Gene flow introduces new alleles or shifts allele frequencies from one population to another, generally making the allele frequencies of the two populations more similar to each other over time.",
    difficulty: 0.3,
    options: [
      { text: "Make the allele frequencies of the two populations more similar over time", correct: true },
      { text: "Make the allele frequencies of the two populations more different over time", errorType: "sign_or_direction_reversal", why: "Gene flow generally homogenizes, rather than further differentiates, allele frequencies between connected populations." },
      { text: "Have no effect on allele frequencies in either population", errorType: "prerequisite_misconception", why: "Gene flow is specifically one of the mechanisms that can alter allele frequencies, violating Hardy-Weinberg equilibrium's no-migration assumption." },
      { text: "Only affect the population's phenotypes, not its underlying allele frequencies", errorType: "prerequisite_misconception", why: "Gene flow directly introduces or removes alleles from a population's gene pool, affecting allele frequencies themselves, not just phenotypic expression." },
    ],
  },

  // --- carbohydrate_structure_and_function (2) ---
  {
    concept: "carbohydrate_structure_and_function",
    stem: "Lactose, a disaccharide found in milk, is composed of which two monosaccharides linked together?",
    reasoning: "Lactose is formed from glucose and galactose linked by a glycosidic bond, and requires the enzyme lactase to be broken down for absorption.",
    difficulty: 0.2,
    options: [
      { text: "Glucose and galactose", correct: true },
      { text: "Glucose and fructose", errorType: "prerequisite_misconception", why: "Glucose and fructose combine to form sucrose, not lactose." },
      { text: "Two glucose molecules", errorType: "prerequisite_misconception", why: "Two linked glucose molecules form maltose, not lactose." },
      { text: "Fructose and galactose", errorType: "prerequisite_misconception", why: "This combination is not a standard common disaccharide; lactose specifically consists of glucose and galactose." },
    ],
  },
  {
    concept: "carbohydrate_structure_and_function",
    stem: "A person with lactose intolerance lacks sufficient lactase enzyme activity. As a result, undigested lactose reaching the large intestine is most likely to cause symptoms because it:",
    reasoning: "Undigested lactose in the large intestine draws water osmotically into the intestinal lumen and is fermented by gut bacteria, producing gas — together causing the bloating, cramping, and diarrhea typical of lactose intolerance.",
    difficulty: 0.4,
    options: [
      { text: "Draws water osmotically into the intestine and is fermented by bacteria, producing gas", correct: true },
      { text: "Is directly toxic to intestinal epithelial cells", errorType: "outside_knowledge_not_supported_by_passage", why: "Lactose intolerance symptoms arise from osmotic and fermentation effects, not direct cellular toxicity from the lactose molecule itself." },
      { text: "Is immediately absorbed into the bloodstream, causing a blood sugar spike", errorType: "prerequisite_misconception", why: "The core problem in lactose intolerance is that lactose is not broken down and absorbed properly; it remains in the gut rather than being absorbed and spiking blood sugar." },
      { text: "Triggers an autoimmune attack on the pancreas", errorType: "outside_knowledge_not_supported_by_passage", why: "Lactose intolerance is due to insufficient lactase enzyme, not an autoimmune process targeting the pancreas." },
    ],
  },

  // --- osmoregulation_and_kidney_function (2) ---
  {
    concept: "osmoregulation_and_kidney_function",
    stem: "The juxtaglomerular apparatus, located near the glomerulus, helps regulate blood pressure by monitoring:",
    reasoning: "The juxtaglomerular apparatus monitors blood pressure (via stretch) and sodium chloride concentration in the filtrate, releasing renin when blood pressure or sodium delivery is low, triggering the renin-angiotensin-aldosterone system.",
    difficulty: 0.4,
    options: [
      { text: "Blood pressure and sodium chloride concentration in the filtrate", correct: true },
      { text: "The pH of the urine exclusively", errorType: "prerequisite_misconception", why: "The juxtaglomerular apparatus's key monitored variables are blood pressure and filtrate sodium chloride, not urine pH specifically." },
      { text: "Blood glucose levels exclusively", errorType: "prerequisite_misconception", why: "Blood glucose regulation is primarily a pancreatic function; the juxtaglomerular apparatus is specifically involved in blood pressure/sodium regulation via renin release." },
      { text: "Body temperature", errorType: "outside_knowledge_not_supported_by_passage", why: "Temperature regulation is not a function of the juxtaglomerular apparatus, which is specifically tied to blood pressure and renin release." },
    ],
  },
  {
    concept: "osmoregulation_and_kidney_function",
    stem: "A person becomes severely dehydrated. In response, the posterior pituitary is expected to release more:",
    reasoning: "Dehydration increases blood osmolarity, which is detected by osmoreceptors and triggers increased release of ADH (antidiuretic hormone) from the posterior pituitary, promoting water reabsorption to conserve fluid.",
    difficulty: 0.3,
    options: [
      { text: "Antidiuretic hormone (ADH)", correct: true },
      { text: "Aldosterone", errorType: "prerequisite_misconception", why: "Aldosterone is released by the adrenal cortex, not the posterior pituitary, though it works alongside ADH in fluid regulation." },
      { text: "Insulin", errorType: "prerequisite_misconception", why: "Insulin is released by the pancreas and regulates blood glucose, unrelated to the posterior pituitary's response to dehydration." },
      { text: "Oxytocin", errorType: "prerequisite_misconception", why: "While also released by the posterior pituitary, oxytocin is involved in childbirth and bonding, not the body's primary hormonal response to dehydration." },
    ],
  },

  // --- digestive_system_and_nutrient_absorption (4, plus 5 via passage) ---
  {
    concept: "digestive_system_and_nutrient_absorption",
    stem: "Pepsinogen is secreted by stomach chief cells in an inactive form and is converted to active pepsin by:",
    reasoning: "Pepsinogen is activated by the stomach's highly acidic environment (produced by parietal cells secreting HCl), which cleaves it into active pepsin, a strategy that prevents the enzyme from digesting the cells that produce it before secretion.",
    difficulty: 0.3,
    options: [
      { text: "The stomach's acidic environment", correct: true },
      { text: "Bile from the gallbladder", errorType: "prerequisite_misconception", why: "Bile emulsifies fats in the small intestine; it is not responsible for activating pepsinogen in the stomach." },
      { text: "Salivary amylase", errorType: "prerequisite_misconception", why: "Salivary amylase acts on starch in the mouth and has no role in activating pepsinogen in the stomach." },
      { text: "Insulin released by the pancreas", errorType: "prerequisite_misconception", why: "Insulin regulates blood glucose and has no role in activating digestive proenzymes like pepsinogen." },
    ],
  },
  {
    concept: "digestive_system_and_nutrient_absorption",
    stem: "Bile, produced by the liver and stored in the gallbladder, aids fat digestion primarily by:",
    reasoning: "Bile contains bile salts that emulsify large fat globules into smaller droplets, increasing the surface area available for lipase enzymes to act on, since bile itself does not chemically break down fat.",
    difficulty: 0.3,
    options: [
      { text: "Emulsifying fat into smaller droplets, increasing surface area for lipase", correct: true },
      { text: "Directly hydrolyzing triglycerides into fatty acids and glycerol", errorType: "prerequisite_misconception", why: "Direct hydrolysis of triglycerides is carried out by lipase enzymes; bile's role is physical emulsification, not chemical breakdown." },
      { text: "Neutralizing stomach acid before it enters the small intestine", errorType: "prerequisite_misconception", why: "Bicarbonate from the pancreas, not bile, is primarily responsible for neutralizing acidic chyme entering the small intestine." },
      { text: "Absorbing fat directly into the bloodstream", errorType: "prerequisite_misconception", why: "Bile aids in preparing fat for enzymatic digestion; it does not itself absorb fat into the bloodstream." },
    ],
  },
  {
    concept: "digestive_system_and_nutrient_absorption",
    stem: "The small intestine's villi and microvilli dramatically increase its surface area primarily to:",
    reasoning: "A greatly increased surface area maximizes the small intestine's capacity for absorbing digested nutrients (amino acids, fatty acids, monosaccharides) into the bloodstream or lymphatic system.",
    difficulty: 0.2,
    options: [
      { text: "Maximize the surface area available for nutrient absorption", correct: true },
      { text: "Increase the strength of the intestinal wall's muscle contractions", errorType: "outside_knowledge_not_supported_by_passage", why: "Muscular contraction strength is a separate property from surface area, which specifically serves absorption efficiency." },
      { text: "Slow down the movement of food through the intestine", errorType: "outside_knowledge_not_supported_by_passage", why: "While transit time matters for digestion generally, the specific structural feature of villi/microvilli is about maximizing absorptive surface area, not directly about slowing transit." },
      { text: "Produce digestive enzymes exclusively", errorType: "prerequisite_misconception", why: "While some enzymes are anchored at the intestinal lining, the primary functional benefit of the vastly increased surface area is absorption capacity, not enzyme production specifically." },
    ],
  },
  {
    concept: "digestive_system_and_nutrient_absorption",
    stem: "The large intestine's primary functions, following the small intestine's absorption of most nutrients, include:",
    reasoning: "The large intestine's main roles are absorbing remaining water and electrolytes from indigestible material and housing bacteria that ferment remaining material, in addition to forming and storing feces before elimination.",
    difficulty: 0.3,
    options: [
      { text: "Absorbing remaining water and housing bacteria that ferment indigestible material", correct: true },
      { text: "Absorbing the majority of dietary amino acids and fatty acids", errorType: "prerequisite_misconception", why: "The vast majority of amino acid and fatty acid absorption occurs in the small intestine, not the large intestine." },
      { text: "Producing the majority of the body's digestive enzymes", errorType: "prerequisite_misconception", why: "Most digestive enzymes are produced by the pancreas, stomach, and small intestine, not primarily by the large intestine." },
      { text: "Serving as the primary site for protein digestion", errorType: "prerequisite_misconception", why: "Protein digestion primarily occurs in the stomach and small intestine via pepsin and pancreatic proteases, not mainly in the large intestine." },
    ],
  },

  // --- skeletal_system_and_bone_physiology (4, plus 5 via passage) ---
  {
    concept: "skeletal_system_and_bone_physiology",
    stem: "Osteoblasts and osteoclasts have largely opposite functions in bone tissue. Osteoblasts are primarily responsible for:",
    reasoning: "Osteoblasts build new bone tissue by depositing bone matrix (including collagen and mineral components), the opposite function of osteoclasts, which break down (resorb) existing bone tissue.",
    difficulty: 0.2,
    options: [
      { text: "Building new bone tissue (bone deposition)", correct: true },
      { text: "Breaking down existing bone tissue (bone resorption)", errorType: "sign_or_direction_reversal", why: "Describes osteoclast function, the opposite of osteoblast function, which is bone deposition." },
      { text: "Producing red blood cells within the bone marrow", errorType: "prerequisite_misconception", why: "Red blood cell production (hematopoiesis) occurs in bone marrow but is not the function of osteoblasts themselves, which build bone matrix." },
      { text: "Storing calcium without any active building or breakdown activity", errorType: "prerequisite_misconception", why: "Osteoblasts actively deposit new bone matrix rather than simply passively storing calcium without activity." },
    ],
  },
  {
    concept: "skeletal_system_and_bone_physiology",
    stem: "The two main hormones regulating blood calcium via bone remodeling are parathyroid hormone (PTH) and calcitonin. PTH raises blood calcium levels primarily by:",
    reasoning: "PTH raises blood calcium by stimulating osteoclast activity, promoting bone resorption and releasing stored calcium into the bloodstream, among other effects like increasing renal calcium reabsorption.",
    difficulty: 0.3,
    options: [
      { text: "Stimulating osteoclast activity, promoting bone resorption", correct: true },
      { text: "Stimulating osteoblast activity, promoting bone deposition", errorType: "sign_or_direction_reversal", why: "This describes calcitonin's effect (lowering blood calcium via deposition), not PTH's effect of raising blood calcium via resorption." },
      { text: "Directly absorbing calcium from ingested food in the mouth", errorType: "outside_knowledge_not_supported_by_passage", why: "PTH acts on bone (and kidney and indirectly intestine via vitamin D), not directly in the mouth on ingested food." },
      { text: "Converting calcium into phosphate ions", errorType: "outside_knowledge_not_supported_by_passage", why: "PTH regulates calcium release from bone into the blood; it does not chemically convert calcium into phosphate." },
    ],
  },
  {
    concept: "skeletal_system_and_bone_physiology",
    stem: "Osteoporosis, a condition of reduced bone density and increased fracture risk, results from an imbalance in bone remodeling favoring:",
    reasoning: "Osteoporosis results when bone resorption (osteoclast activity) outpaces bone formation (osteoblast activity) over an extended period, gradually reducing overall bone density.",
    difficulty: 0.3,
    options: [
      { text: "Bone resorption over bone formation", correct: true },
      { text: "Bone formation over bone resorption", errorType: "sign_or_direction_reversal", why: "An imbalance favoring bone formation over resorption would increase, not decrease, bone density." },
      { text: "Equal rates of resorption and formation, exactly as in healthy bone", errorType: "prerequisite_misconception", why: "Osteoporosis specifically arises from an imbalance, not from equal rates of resorption and formation, which would maintain stable bone density." },
      { text: "A complete cessation of bone remodeling entirely", errorType: "prerequisite_misconception", why: "Osteoporosis reflects an imbalance between ongoing resorption and formation processes, not a complete halt to remodeling altogether." },
    ],
  },
  {
    concept: "skeletal_system_and_bone_physiology",
    stem: "Compact (cortical) bone and spongy (cancellous) bone differ structurally in that compact bone is:",
    reasoning: "Compact bone is dense and solid, forming the strong outer layer of bones, while spongy bone has a porous, trabecular structure typically found in the interior, particularly at the ends of long bones.",
    difficulty: 0.2,
    options: [
      { text: "Dense and solid, forming the strong outer layer of bones", correct: true },
      { text: "Porous and trabecular, forming the interior structure of bones", errorType: "sign_or_direction_reversal", why: "Describes spongy (cancellous) bone, not compact bone, which is dense and solid." },
      { text: "Composed entirely of cartilage rather than mineralized bone matrix", errorType: "prerequisite_misconception", why: "Compact bone is mineralized bone tissue, not cartilage; cartilage is a distinct connective tissue type." },
      { text: "Found exclusively in the skull, absent from other bones", errorType: "outside_knowledge_not_supported_by_passage", why: "Compact bone is found throughout the skeleton, forming the outer layer of most bones, not exclusively in the skull." },
    ],
  },

  // --- passage: bb_digestion_overview (5) ---
  {
    concept: "digestive_system_and_nutrient_absorption",
    type: "passage",
    passage: "bb_digestion_overview",
    stem: "According to the passage, pepsinogen is activated into pepsin by:",
    reasoning: "The passage states pepsinogen is 'activated from pepsinogen by the stomach's acidic environment.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "The stomach's acidic environment", correct: true },
      { text: "Bile released from the gallbladder", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes bile's role to fat emulsification in the small intestine, not pepsinogen activation in the stomach." },
      { text: "Bicarbonate secreted by the pancreas", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes pancreatic bicarbonate as neutralizing acidic chyme in the small intestine, not activating pepsinogen in the stomach." },
      { text: "Enzymes anchored to the small intestine's lining", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes pepsinogen activation to the stomach's acidity, occurring before chyme even reaches the small intestine's lining enzymes." },
    ],
  },
  {
    concept: "digestive_system_and_nutrient_absorption",
    type: "passage",
    passage: "bb_digestion_overview",
    stem: "According to the passage, what neutralizes the acidic chyme as it enters the small intestine?",
    reasoning: "The passage states 'the pancreas secretes bicarbonate to neutralize the acidic chyme.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Bicarbonate secreted by the pancreas", correct: true },
      { text: "Bile from the liver", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes bile's role specifically to emulsifying fats, not to neutralizing acidic chyme." },
      { text: "Pepsin from the stomach", errorType: "passage_detail_misread_or_over_extrapolated", why: "Pepsin is a protein-digesting enzyme in the passage's description, not the acid-neutralizing agent." },
      { text: "Water absorbed from the large intestine", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes bicarbonate neutralizing chyme in the small intestine, a separate and earlier process from large intestine water absorption." },
    ],
  },
  {
    concept: "digestive_system_and_nutrient_absorption",
    type: "passage",
    passage: "bb_digestion_overview",
    stem: "According to the passage, bile's role in fat digestion is to:",
    reasoning: "The passage states bile 'emulsifies dietary fats, increasing their surface area for lipase action.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Emulsify dietary fats, increasing surface area for lipase action", correct: true },
      { text: "Directly break fat molecules into fatty acids and glycerol", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns direct enzymatic breakdown of fat to lipase, with bile playing a physical emulsification role instead." },
      { text: "Neutralize stomach acid before it reaches the pancreas", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns acid neutralization to pancreatic bicarbonate, not bile." },
      { text: "Activate pepsinogen into its active form", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes pepsinogen activation to the stomach's acidic environment, not to bile." },
    ],
  },
  {
    concept: "digestive_system_and_nutrient_absorption",
    type: "passage",
    passage: "bb_digestion_overview",
    stem: "Based on the passage, if a person's gallbladder were removed and bile could no longer be stored and released in a concentrated bolus after a meal, the most likely direct consequence would be:",
    reasoning: "Since the passage attributes fat emulsification specifically to bile, and emulsification is necessary to give lipase sufficient surface area to act efficiently, a disruption in the timely, concentrated release of bile would most directly impair the efficient digestion and absorption of dietary fats specifically.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Impaired fat digestion and absorption, due to reduced fat emulsification", correct: true },
      { text: "Complete failure to digest proteins, since bile is essential for pepsin activity", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes protein digestion to pepsin (activated by stomach acid) and pancreatic proteases, not to bile." },
      { text: "No effect at all, since bile plays no significant digestive role", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes bile's important role in emulsifying fat for lipase action, so its disruption should have a noticeable effect." },
      { text: "Immediate impairment of carbohydrate digestion specifically", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes carbohydrate digestion to amylases, not to bile, whose described role is specifically about fat emulsification." },
    ],
  },
  {
    concept: "digestive_system_and_nutrient_absorption",
    type: "passage",
    passage: "bb_digestion_overview",
    stem: "According to the passage, the large intestine's functions include absorbing remaining water and:",
    reasoning: "The passage states the large intestine 'absorbs remaining water and houses bacteria that ferment otherwise indigestible material.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Housing bacteria that ferment otherwise indigestible material", correct: true },
      { text: "Completing the digestion of the majority of dietary protein", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns protein digestion primarily to the stomach and small intestine, not the large intestine, whose role is water absorption and bacterial fermentation." },
      { text: "Absorbing the majority of monosaccharides from digested starch", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes monosaccharide absorption occurring across the small intestine's lining, not the large intestine." },
      { text: "Producing bile for fat digestion", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes bile production to the liver, not the large intestine." },
    ],
  },

  // --- passage: bb_bone_remodeling (5) ---
  {
    concept: "skeletal_system_and_bone_physiology",
    type: "passage",
    passage: "bb_bone_remodeling",
    stem: "According to the passage, osteoclasts function to:",
    reasoning: "The passage states osteoclasts 'break down (resorb) bone tissue, releasing calcium into the blood.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Break down bone tissue, releasing calcium into the blood", correct: true },
      { text: "Build new bone tissue, depositing calcium into it", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns this bone-building function to osteoblasts, not osteoclasts." },
      { text: "Produce parathyroid hormone directly", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes PTH as being released by a separate regulatory system (the parathyroid), not produced by osteoclasts themselves." },
      { text: "Convert calcitonin into its active form", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage doesn't describe osteoclasts as converting calcitonin; it describes them as cells that resorb bone in response to hormonal signals." },
    ],
  },
  {
    concept: "skeletal_system_and_bone_physiology",
    type: "passage",
    passage: "bb_bone_remodeling",
    stem: "According to the passage, when blood calcium drops, the resulting release of parathyroid hormone causes:",
    reasoning: "The passage states low blood calcium triggers PTH release, 'stimulating osteoclast activity to release calcium from bone and raise blood calcium levels.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Increased osteoclast activity, releasing calcium from bone", correct: true },
      { text: "Increased osteoblast activity, depositing more calcium into bone", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns this response to calcitonin (when calcium is high), not to PTH's response to low calcium." },
      { text: "A decrease in blood calcium levels", errorType: "sign_or_direction_reversal", why: "The passage explicitly states PTH acts to raise, not further decrease, blood calcium levels." },
      { text: "No measurable effect on blood calcium at all", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes PTH as raising blood calcium levels through osteoclast stimulation, a clear measurable effect." },
    ],
  },
  {
    concept: "skeletal_system_and_bone_physiology",
    type: "passage",
    passage: "bb_bone_remodeling",
    stem: "According to the passage, calcitonin is released when blood calcium:",
    reasoning: "The passage states 'when blood calcium rises above normal, the hormone calcitonin is released.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Rises above normal", correct: true },
      { text: "Falls below normal", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns the low-calcium trigger to PTH release, not calcitonin, which responds to elevated calcium." },
      { text: "Remains perfectly constant with no fluctuation", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes calcitonin release specifically in response to a calcium increase, implying fluctuation, not constancy." },
      { text: "Is entirely unrelated to hormone release in this system", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly ties calcitonin release directly to blood calcium level changes." },
    ],
  },
  {
    concept: "skeletal_system_and_bone_physiology",
    type: "passage",
    passage: "bb_bone_remodeling",
    stem: "According to the passage, declining estrogen levels in some individuals can gradually reduce bone density because they:",
    reasoning: "The passage states this occurs when there is 'an imbalance favoring osteoclast activity over long periods,' implying declining estrogen shifts the balance toward greater relative osteoclast (resorptive) activity over osteoblast (depositing) activity.",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "Shift the balance of bone remodeling toward greater relative osteoclast activity", correct: true },
      { text: "Completely stop all osteoblast activity permanently", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes an imbalance favoring resorption, not a complete cessation of osteoblast activity altogether." },
      { text: "Directly destroy existing bone tissue through a separate mechanism unrelated to osteoclasts", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage frames this specifically as a shift in the osteoclast/osteoblast balance, not an unrelated separate destructive mechanism." },
      { text: "Increase blood calcium levels permanently", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage doesn't claim declining estrogen causes a permanent rise in blood calcium; it describes an imbalance in bone remodeling activity specifically." },
    ],
  },
  {
    concept: "skeletal_system_and_bone_physiology",
    type: "passage",
    passage: "bb_bone_remodeling",
    stem: "The passage's description of bone remodeling as a continuous, ongoing process (rather than a one-time event) most directly supports which conclusion?",
    reasoning: "Since the passage describes bone as 'continuously remodeled throughout life' via ongoing osteoclast/osteoblast activity, this supports the conclusion that bone density at any given time reflects an ongoing dynamic balance between resorption and deposition, rather than a fixed amount set once early in life.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "Bone density at any given time reflects an ongoing dynamic balance between resorption and deposition, not a fixed amount set once", correct: true },
      { text: "Bone density is determined entirely at birth and cannot change afterward", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes continuous remodeling throughout life, directly contradicting a claim that bone density is fixed at birth." },
      { text: "Osteoclasts and osteoblasts only become active during childhood growth", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes this remodeling process as continuing 'throughout life,' not limited to childhood growth." },
      { text: "Bone remodeling stops entirely once skeletal growth is complete in adulthood", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states remodeling is continuous throughout life, including examples relevant to adults (like declining estrogen), not something that halts after growth." },
    ],
  },
];
