import type { ItemDef } from "./types";

export const itemsBb2: ItemDef[] = [
  // --- amino_acid_structure (2) ---
  {
    concept: "amino_acid_structure",
    stem: "Cysteine's side chain is unique among the standard amino acids in that it can:",
    reasoning: "Cysteine's thiol (-SH) side chain can form a covalent disulfide bond with another cysteine's thiol group, a property not shared by other standard amino acid side chains.",
    difficulty: 0.2,
    options: [
      { text: "Form a covalent disulfide bond with another cysteine", correct: true },
      { text: "Form a peptide bond with a second amino acid on its side chain", errorType: "prerequisite_misconception", why: "Peptide bonds form at the backbone amino/carboxyl groups shared by all amino acids, not specifically via a side chain unique to cysteine." },
      { text: "Absorb UV light strongly due to its aromatic ring", errorType: "prerequisite_misconception", why: "Confuses cysteine with aromatic residues like tryptophan or tyrosine, which absorb UV light." },
      { text: "Carry a permanent positive charge at all pH values", errorType: "prerequisite_misconception", why: "Cysteine's thiol group is only weakly acidic and not permanently charged; this describes basic residues instead." },
    ],
  },
  {
    concept: "amino_acid_structure",
    stem: "Tyrosine's side chain includes a hydroxyl group attached to an aromatic ring. This makes tyrosine a common site for:",
    reasoning: "Tyrosine's phenolic hydroxyl group is a common target for phosphorylation by tyrosine kinases, a key regulatory modification in cell signaling.",
    difficulty: 0.4,
    options: [
      { text: "Phosphorylation by protein kinases", correct: true },
      { text: "Disulfide bond formation", errorType: "prerequisite_misconception", why: "Disulfide bonds form specifically between cysteine thiol groups, not tyrosine's hydroxyl." },
      { text: "Peptide bond formation with a second residue's side chain", errorType: "prerequisite_misconception", why: "Peptide bonds link backbone groups, not side-chain hydroxyls." },
      { text: "Glycosidic bond formation identical to that in carbohydrates", errorType: "outside_knowledge_not_supported_by_passage", why: "Glycosidic bonds are a carbohydrate-specific linkage type, not a standard modification of tyrosine's hydroxyl in this context." },
    ],
  },

  // --- peptide_bond_formation (2) ---
  {
    concept: "peptide_bond_formation",
    stem: "In cells, ribosomal peptide bond formation is catalyzed by:",
    reasoning: "The ribosome's peptidyl transferase activity, carried out by ribosomal RNA (rRNA) in the large subunit, catalyzes peptide bond formation between the growing chain and the incoming amino acid.",
    difficulty: 0.4,
    options: [
      { text: "Ribosomal RNA (rRNA), via peptidyl transferase activity", correct: true },
      { text: "DNA polymerase", errorType: "prerequisite_misconception", why: "DNA polymerase functions in DNA replication, unrelated to peptide bond formation on the ribosome." },
      { text: "A dedicated peptide bond synthase protein enzyme", errorType: "prerequisite_misconception", why: "The catalytic activity is carried out by rRNA itself (a ribozyme), not a separate dedicated protein enzyme." },
      { text: "tRNA synthetase", errorType: "prerequisite_misconception", why: "tRNA synthetases attach amino acids to their tRNAs before translation, a distinct earlier step from the ribosome's own bond-forming activity." },
    ],
  },
  {
    concept: "peptide_bond_formation",
    stem: "A tripeptide has a molecular weight equal to the sum of its three constituent amino acids' weights minus:",
    reasoning: "Each peptide bond formed releases one water molecule; a tripeptide has two peptide bonds linking three residues, so two water molecules' worth of mass is lost relative to the sum of the free amino acids.",
    difficulty: 0.4,
    options: [
      { text: "The mass of two water molecules", correct: true },
      { text: "The mass of three water molecules", errorType: "unit_or_order_of_magnitude_error", why: "A tripeptide has only two peptide bonds (linking three residues), not three." },
      { text: "The mass of one water molecule", errorType: "unit_or_order_of_magnitude_error", why: "Undercounts the number of peptide bonds formed when three amino acids are joined into one chain." },
      { text: "Nothing; mass is conserved exactly", errorType: "prerequisite_misconception", why: "Condensation reactions release water, which does reduce the resulting peptide's total mass relative to the sum of the free residues." },
    ],
  },

  // --- protein_secondary_structure (2) ---
  {
    concept: "protein_secondary_structure",
    stem: "A random coil region of a protein, as opposed to an alpha helix or beta sheet, is characterized by:",
    reasoning: "A random coil lacks the regular, repeating backbone hydrogen-bonding pattern that defines alpha helices and beta sheets, instead adopting a more irregular, flexible conformation.",
    difficulty: 0.3,
    options: [
      { text: "The absence of a regular, repeating hydrogen-bonding pattern", correct: true },
      { text: "A perfectly regular helical twist, like an alpha helix", errorType: "prerequisite_misconception", why: "Describes the defining feature of an alpha helix, the opposite of a random coil's irregularity." },
      { text: "Extensive disulfide cross-linking throughout", errorType: "outside_knowledge_not_supported_by_passage", why: "Disulfide bonding is a tertiary-structure feature specific to cysteine residues, not a defining trait of random coils generally." },
      { text: "Strict alternation between hydrophobic and hydrophilic residues", errorType: "outside_knowledge_not_supported_by_passage", why: "This alternating pattern is characteristic of certain beta strands, not the defining feature of an unstructured random coil." },
    ],
  },
  {
    concept: "protein_secondary_structure",
    stem: "Which secondary structure element commonly connects two antiparallel beta strands, allowing the polypeptide chain to reverse direction?",
    reasoning: "A beta turn (or beta hairpin turn) is a short structural motif that reverses the direction of the polypeptide chain, commonly linking two antiparallel beta strands.",
    difficulty: 0.4,
    options: [
      { text: "A beta turn", correct: true },
      { text: "An alpha helix", errorType: "prerequisite_misconception", why: "An alpha helix is an extended, coiled structure, not a short reversing turn between strands." },
      { text: "A disulfide bridge", errorType: "prerequisite_misconception", why: "A disulfide bridge is a covalent side-chain linkage, not a backbone secondary-structure turn motif." },
      { text: "A leucine zipper", errorType: "outside_knowledge_not_supported_by_passage", why: "A leucine zipper is a specific tertiary/quaternary dimerization motif, not a simple turn connecting beta strands." },
    ],
  },

  // --- enzyme_kinetics_and_inhibition (2, plus prior 5-item passage from batch 1) ---
  {
    concept: "enzyme_kinetics_and_inhibition",
    stem: "An allosteric enzyme regulator that binds a site distinct from the active site and increases enzyme activity is called a(n):",
    reasoning: "An allosteric activator binds a regulatory site separate from the active site and enhances enzyme activity, often by stabilizing a more active conformation.",
    difficulty: 0.3,
    options: [
      { text: "Allosteric activator", correct: true },
      { text: "Competitive inhibitor", errorType: "sign_or_direction_reversal", why: "Competitive inhibitors decrease activity and bind the active site, the opposite of an activator binding a separate site." },
      { text: "Irreversible inhibitor", errorType: "sign_or_direction_reversal", why: "An irreversible inhibitor permanently decreases activity, the opposite effect of an activator." },
      { text: "Substrate analog", errorType: "prerequisite_misconception", why: "A substrate analog typically competes at the active site rather than binding a separate allosteric site to increase activity." },
    ],
  },
  {
    concept: "enzyme_kinetics_and_inhibition",
    stem: "Feedback inhibition in a metabolic pathway typically occurs when:",
    reasoning: "Feedback inhibition occurs when the pathway's end product accumulates and binds an earlier enzyme (often the first committed step), allosterically inhibiting it to prevent unnecessary overproduction.",
    difficulty: 0.3,
    options: [
      { text: "The pathway's end product accumulates and inhibits an earlier enzyme in the pathway", correct: true },
      { text: "The pathway's starting substrate is completely depleted", errorType: "prerequisite_misconception", why: "Feedback inhibition is driven by product accumulation, not substrate depletion." },
      { text: "A separate, unrelated pathway's product activates the enzyme", errorType: "outside_knowledge_not_supported_by_passage", why: "Feedback inhibition specifically involves a pathway's own end product acting back on its own earlier steps." },
      { text: "The enzyme is permanently degraded after each reaction cycle", errorType: "prerequisite_misconception", why: "Feedback inhibition is a reversible regulatory mechanism, not enzyme degradation." },
    ],
  },

  // --- cell_membrane_transport (2) ---
  {
    concept: "cell_membrane_transport",
    stem: "Aquaporins are membrane proteins that specifically facilitate the movement of:",
    reasoning: "Aquaporins are channel proteins specialized for rapidly transporting water molecules across the plasma membrane, a form of facilitated diffusion for water specifically.",
    difficulty: 0.1,
    options: [
      { text: "Water", correct: true },
      { text: "Glucose", errorType: "prerequisite_misconception", why: "Glucose transport uses distinct transporter proteins (e.g., GLUT transporters), not aquaporins." },
      { text: "Sodium ions", errorType: "prerequisite_misconception", why: "Sodium ions move through dedicated sodium channels or pumps, not aquaporins." },
      { text: "Large proteins", errorType: "prerequisite_misconception", why: "Aquaporins are narrow channels specific to small water molecules, not large macromolecules like proteins." },
    ],
  },
  {
    concept: "cell_membrane_transport",
    stem: "Exocytosis is the process by which a cell:",
    reasoning: "Exocytosis is the process where intracellular vesicles fuse with the plasma membrane, releasing their contents to the extracellular space.",
    difficulty: 0.1,
    options: [
      { text: "Releases materials to the outside by fusing a vesicle with the plasma membrane", correct: true },
      { text: "Engulfs extracellular material by forming a vesicle from the plasma membrane", errorType: "sign_or_direction_reversal", why: "Describes endocytosis, the reverse process of engulfing rather than releasing material." },
      { text: "Moves ions directly through a channel protein", errorType: "prerequisite_misconception", why: "Describes channel-mediated transport, an unrelated mechanism from vesicle fusion and release." },
      { text: "Actively pumps solutes against their concentration gradient using ATP", errorType: "prerequisite_misconception", why: "Describes primary active transport via a pump, not the vesicle-based release process of exocytosis." },
    ],
  },

  // --- dna_replication (2) ---
  {
    concept: "dna_replication",
    stem: "The enzyme responsible for synthesizing new DNA strands by adding nucleotides to a growing chain during replication is:",
    reasoning: "DNA polymerase catalyzes the addition of new nucleotides to the 3' end of a growing DNA strand during replication, using the template strand to determine base-pairing.",
    difficulty: 0.0,
    options: [
      { text: "DNA polymerase", correct: true },
      { text: "RNA polymerase", errorType: "prerequisite_misconception", why: "RNA polymerase synthesizes RNA during transcription, not new DNA strands during replication." },
      { text: "Ligase", errorType: "correct_concept_wrong_step_in_sequence", why: "Ligase seals nicks between DNA fragments but does not synthesize the new strand itself by adding nucleotides." },
      { text: "Topoisomerase", errorType: "prerequisite_misconception", why: "Topoisomerase relieves supercoiling tension; it does not add nucleotides to a growing strand." },
    ],
  },
  {
    concept: "dna_replication",
    stem: "Telomerase extends the ends of linear chromosomes primarily to solve the problem of:",
    reasoning: "Telomerase extends telomeric repeats to compensate for the 'end-replication problem,' in which the lagging strand's final RNA primer cannot be replaced with DNA, causing chromosome shortening with each round of replication without this compensation.",
    difficulty: 0.5,
    options: [
      { text: "Chromosome shortening from the end-replication problem", correct: true },
      { text: "Excessive supercoiling ahead of the replication fork", errorType: "prerequisite_misconception", why: "Supercoiling tension is resolved by topoisomerase, an unrelated problem from chromosome-end shortening." },
      { text: "Mismatched base pairs introduced during synthesis", errorType: "prerequisite_misconception", why: "Base-pair mismatches are addressed by proofreading and mismatch repair systems, not telomerase." },
      { text: "The need to unwind the double helix at the origin of replication", errorType: "prerequisite_misconception", why: "Unwinding at the origin is the role of helicase, unrelated to the chromosome-end shortening problem telomerase addresses." },
    ],
  },

  // --- transcription_and_translation (2) ---
  {
    concept: "transcription_and_translation",
    stem: "In eukaryotic cells, pre-mRNA processing includes the addition of a 5' cap and a poly-A tail. These modifications primarily serve to:",
    reasoning: "The 5' cap and poly-A tail protect mRNA from degradation and assist in ribosome recognition and export from the nucleus, increasing mRNA stability and translational efficiency.",
    difficulty: 0.4,
    options: [
      { text: "Protect the mRNA from degradation and assist in its translation", correct: true },
      { text: "Directly encode additional amino acids in the final protein", errorType: "prerequisite_misconception", why: "These modifications are not part of the coding sequence and do not add amino acids to the resulting protein." },
      { text: "Convert the mRNA into a double-stranded molecule", errorType: "prerequisite_misconception", why: "mRNA remains single-stranded; capping and polyadenylation don't alter its strandedness." },
      { text: "Remove introns from the pre-mRNA sequence", errorType: "prerequisite_misconception", why: "Intron removal is carried out by splicing, a distinct processing step from capping and polyadenylation." },
    ],
  },
  {
    concept: "transcription_and_translation",
    stem: "A nonsense mutation converts a codon that specified an amino acid into a stop codon. The most likely effect on the resulting protein is:",
    reasoning: "A nonsense mutation causes translation to terminate prematurely at the new stop codon, typically producing a truncated, often nonfunctional protein missing everything downstream of the mutation.",
    difficulty: 0.3,
    options: [
      { text: "A truncated, likely nonfunctional protein", correct: true },
      { text: "A full-length protein with one amino acid substituted", errorType: "prerequisite_misconception", why: "Describes a missense mutation's effect, not a nonsense mutation, which halts translation instead of merely substituting one residue." },
      { text: "No effect on the protein at all", errorType: "prerequisite_misconception", why: "Introducing a premature stop codon has a substantial effect, truncating the protein rather than leaving it unchanged." },
      { text: "A frameshifted protein sequence downstream of the mutation", errorType: "prerequisite_misconception", why: "A single nonsense substitution doesn't shift the reading frame; it simply halts translation at that codon." },
    ],
  },

  // --- glycolysis_and_cellular_respiration (2) ---
  {
    concept: "glycolysis_and_cellular_respiration",
    stem: "The citric acid (Krebs) cycle occurs in which cellular location?",
    reasoning: "The citric acid cycle takes place in the mitochondrial matrix, following the transport of pyruvate (converted to acetyl-CoA) into the mitochondria.",
    difficulty: 0.0,
    options: [
      { text: "The mitochondrial matrix", correct: true },
      { text: "The cytoplasm", errorType: "prerequisite_misconception", why: "The cytoplasm is where glycolysis occurs, not the citric acid cycle." },
      { text: "The inner mitochondrial membrane", errorType: "prerequisite_misconception", why: "The inner mitochondrial membrane hosts the electron transport chain, a separate stage from the citric acid cycle in the matrix." },
      { text: "The nucleus", errorType: "prerequisite_misconception", why: "The nucleus is not involved in cellular respiration's metabolic pathways." },
    ],
  },
  {
    concept: "glycolysis_and_cellular_respiration",
    stem: "Oxidative phosphorylation refers specifically to the process by which:",
    reasoning: "Oxidative phosphorylation is the production of ATP via ATP synthase, driven by the proton gradient (chemiosmosis) established by the electron transport chain as it passes electrons to oxygen.",
    difficulty: 0.3,
    options: [
      { text: "ATP is generated using a proton gradient created by the electron transport chain", correct: true },
      { text: "Glucose is broken down directly into pyruvate", errorType: "prerequisite_misconception", why: "Describes glycolysis, a distinct earlier stage from oxidative phosphorylation." },
      { text: "Pyruvate is converted into acetyl-CoA before entering the citric acid cycle", errorType: "prerequisite_misconception", why: "Describes pyruvate oxidation (the link reaction), not oxidative phosphorylation itself." },
      { text: "ATP is generated directly by substrate-level phosphorylation in glycolysis", errorType: "prerequisite_misconception", why: "Substrate-level phosphorylation in glycolysis is a distinct ATP-generating mechanism, not oxidative phosphorylation." },
    ],
  },

  // --- mendelian_genetics (2, plus prior 5-item passage from batch 1) ---
  {
    concept: "mendelian_genetics",
    stem: "A cross between two heterozygous individuals for a single gene with complete dominance (Aa x Aa) is expected to produce offspring in what phenotypic ratio?",
    reasoning: "A monohybrid Aa x Aa cross produces genotypes in a 1:2:1 ratio (AA:Aa:aa), but since AA and Aa share the same dominant phenotype, the phenotypic ratio is 3 dominant : 1 recessive.",
    difficulty: 0.1,
    options: [
      { text: "3:1 (dominant to recessive phenotype)", correct: true },
      { text: "1:1 (dominant to recessive phenotype)", errorType: "prerequisite_misconception", why: "A 1:1 ratio describes a testcross (Aa x aa) outcome, not a heterozygous-by-heterozygous cross." },
      { text: "1:2:1 (dominant to recessive phenotype)", errorType: "correct_concept_wrong_step_in_sequence", why: "1:2:1 is the underlying genotypic ratio; it must be collapsed to 3:1 for phenotype since AA and Aa look alike under complete dominance." },
      { text: "9:3:3:1 (dominant to recessive phenotype)", errorType: "prerequisite_misconception", why: "9:3:3:1 is the expected ratio for a dihybrid (two-gene) cross, not a single-gene monohybrid cross." },
    ],
  },
  {
    concept: "mendelian_genetics",
    stem: "A trait that is only expressed in males, and never in females, who instead act only as carriers, is most consistent with which inheritance pattern?",
    reasoning: "This pattern — affected males, carrier (unaffected) females — is the classic signature of X-linked recessive inheritance, since males need only one copy of the recessive allele (having only one X) to express the trait.",
    difficulty: 0.4,
    options: [
      { text: "X-linked recessive inheritance", correct: true },
      { text: "Autosomal dominant inheritance", errorType: "prerequisite_misconception", why: "Autosomal dominant traits typically affect both sexes roughly equally, not males exclusively." },
      { text: "Autosomal recessive inheritance", errorType: "prerequisite_misconception", why: "Autosomal recessive traits also affect both sexes roughly equally, not males exclusively." },
      { text: "Y-linked inheritance", errorType: "prerequisite_misconception", why: "Y-linked traits pass directly from father to son with no carrier females at all, unlike the pattern described here." },
    ],
  },

  // --- mitosis_and_the_cell_cycle (2) ---
  {
    concept: "mitosis_and_the_cell_cycle",
    stem: "During prophase of mitosis, which of the following events occurs?",
    reasoning: "Prophase is characterized by chromosome condensation (chromatin coiling into visible chromosomes) and the beginning of mitotic spindle formation.",
    difficulty: 0.1,
    options: [
      { text: "Chromatin condenses into visible chromosomes", correct: true },
      { text: "Sister chromatids separate and move to opposite poles", errorType: "prerequisite_misconception", why: "Sister chromatid separation is the defining event of anaphase, not prophase." },
      { text: "The nuclear envelope reforms around two new nuclei", errorType: "prerequisite_misconception", why: "Nuclear envelope reformation is characteristic of telophase, the final stage of mitosis, not prophase." },
      { text: "Chromosomes align at the cell's equatorial plate", errorType: "prerequisite_misconception", why: "Alignment at the equatorial plate is the defining event of metaphase, which follows prophase." },
    ],
  },
  {
    concept: "mitosis_and_the_cell_cycle",
    stem: "Cyclins and cyclin-dependent kinases (CDKs) regulate the cell cycle primarily by:",
    reasoning: "Cyclins bind and activate CDKs at specific points in the cell cycle; the resulting cyclin-CDK complexes phosphorylate target proteins that drive the cell through checkpoints and into the next phase.",
    difficulty: 0.4,
    options: [
      { text: "Forming complexes that phosphorylate target proteins to drive progression through checkpoints", correct: true },
      { text: "Directly synthesizing new DNA during S phase", errorType: "prerequisite_misconception", why: "DNA synthesis is carried out by DNA polymerase, not directly by cyclin-CDK complexes." },
      { text: "Physically pulling chromosomes apart during anaphase", errorType: "prerequisite_misconception", why: "Chromosome separation is driven by the mitotic spindle, not by cyclins or CDKs directly." },
      { text: "Permanently degrading damaged DNA", errorType: "prerequisite_misconception", why: "Cyclin-CDK complexes regulate cell cycle progression signaling, not DNA repair or degradation processes." },
    ],
  },

  // --- muscle_contraction (2) ---
  {
    concept: "muscle_contraction",
    stem: "The functional unit of a skeletal muscle fiber responsible for contraction, bounded by two Z-discs, is called the:",
    reasoning: "The sarcomere, the region between two adjacent Z-discs, is the basic repeating contractile unit of skeletal muscle.",
    difficulty: 0.1,
    options: [
      { text: "Sarcomere", correct: true },
      { text: "Sarcoplasmic reticulum", errorType: "prerequisite_misconception", why: "The sarcoplasmic reticulum stores and releases calcium; it is not the contractile unit itself." },
      { text: "Myofibril", errorType: "correct_concept_wrong_step_in_sequence", why: "A myofibril is a longer structure made of many repeating sarcomeres in series, not the single repeating unit itself." },
      { text: "Sarcolemma", errorType: "prerequisite_misconception", why: "The sarcolemma is the muscle cell's plasma membrane, not the contractile unit within the cell." },
    ],
  },
  {
    concept: "muscle_contraction",
    stem: "Skeletal muscle is described as striated because of the regular, repeating arrangement of:",
    reasoning: "The alternating pattern of thick (myosin) and thin (actin) filaments within each sarcomere produces the visible banding pattern (striations) characteristic of skeletal and cardiac muscle under a microscope.",
    difficulty: 0.3,
    options: [
      { text: "Thick and thin filaments within each sarcomere", correct: true },
      { text: "Mitochondria evenly spaced along the muscle fiber", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "Mitochondrial distribution supports energy needs but is not what produces the characteristic striped banding pattern." },
      { text: "Nuclei positioned at regular intervals within the fiber", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "Nuclear positioning is a separate structural feature unrelated to the striped banding pattern caused by filament arrangement." },
      { text: "Calcium channels distributed along the sarcolemma", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "Calcium channel distribution relates to signal propagation, not the visible striped appearance of the muscle fiber." },
    ],
  },

  // --- hormone_signaling (2) ---
  {
    concept: "hormone_signaling",
    stem: "Insulin and glucagon are secreted by different cell types within the pancreas and have opposing effects on blood glucose. This relationship between two hormones is an example of:",
    reasoning: "Two hormones that produce opposite physiological effects on the same process (here, blood glucose regulation) are described as having an antagonistic relationship.",
    difficulty: 0.2,
    options: [
      { text: "An antagonistic hormone relationship", correct: true },
      { text: "A synergistic hormone relationship", errorType: "sign_or_direction_reversal", why: "Synergistic hormones work together to enhance a shared effect, the opposite of insulin and glucagon's opposing actions." },
      { text: "A permissive hormone relationship", errorType: "prerequisite_misconception", why: "A permissive relationship is when one hormone enables another's action, not when two hormones directly oppose each other." },
      { text: "A tropic hormone relationship", errorType: "prerequisite_misconception", why: "Tropic hormones specifically stimulate other endocrine glands to secrete hormones, which isn't the relationship described between insulin and glucagon." },
    ],
  },
  {
    concept: "hormone_signaling",
    stem: "A hormone that requires another hormone to be present in order to exert its full effect, without directly causing that effect itself, illustrates which type of hormone interaction?",
    reasoning: "This describes a permissive interaction, where one hormone must be present for a second hormone's effect to be fully expressed, even though the first hormone doesn't produce the effect on its own.",
    difficulty: 0.4,
    options: [
      { text: "A permissive interaction", correct: true },
      { text: "An antagonistic interaction", errorType: "prerequisite_misconception", why: "Antagonistic hormones oppose each other's effects; this scenario describes one hormone enabling another's effect, not opposing it." },
      { text: "A synergistic interaction", errorType: "correct_concept_wrong_step_in_sequence", why: "Synergistic interactions involve two hormones each contributing to and enhancing a shared effect, not one hormone merely enabling the other's action without contributing itself." },
      { text: "A negative feedback interaction", errorType: "prerequisite_misconception", why: "Negative feedback involves an output suppressing its own upstream signal, a different relationship from one hormone enabling another's action." },
    ],
  },

  // --- lipid_structure_and_membranes (4) ---
  {
    concept: "lipid_structure_and_membranes",
    stem: "In the phospholipid bilayer of a cell membrane, the hydrophobic fatty acid tails orient:",
    reasoning: "In an aqueous environment, phospholipids spontaneously arrange with hydrophilic head groups facing the water on both sides and hydrophobic tails facing inward, away from water, forming the bilayer's core.",
    difficulty: 0.1,
    options: [
      { text: "Toward the interior of the membrane, away from water", correct: true },
      { text: "Toward the exterior, facing the surrounding water", errorType: "sign_or_direction_reversal", why: "Reverses the actual orientation; hydrophobic tails avoid water and face inward, not outward." },
      { text: "Randomly, with no consistent orientation", errorType: "prerequisite_misconception", why: "The bilayer's defining feature is its highly ordered, consistent orientation driven by hydrophobic interactions." },
      { text: "Toward each other on the same side only, forming a monolayer", errorType: "prerequisite_misconception", why: "A bilayer, not a monolayer, forms, with tails from both leaflets facing each other in the interior." },
    ],
  },
  {
    concept: "lipid_structure_and_membranes",
    stem: "Cholesterol embedded within the plasma membrane primarily functions to:",
    reasoning: "Cholesterol modulates membrane fluidity, generally preventing the membrane from becoming too fluid at high temperatures and too rigid at low temperatures, by interacting with the fatty acid tails of phospholipids.",
    difficulty: 0.3,
    options: [
      { text: "Modulate (stabilize) membrane fluidity across a range of temperatures", correct: true },
      { text: "Actively pump ions across the membrane", errorType: "prerequisite_misconception", why: "Ion pumping is carried out by dedicated transport proteins, not cholesterol." },
      { text: "Serve as the primary site of protein synthesis in the cell", errorType: "outside_knowledge_not_supported_by_passage", why: "Protein synthesis occurs on ribosomes, unrelated to cholesterol's structural role in the membrane." },
      { text: "Form covalent bonds linking adjacent phospholipids together", errorType: "prerequisite_misconception", why: "Cholesterol interacts with phospholipids through noncovalent packing, not covalent bonding." },
    ],
  },
  {
    concept: "lipid_structure_and_membranes",
    stem: "A fatty acid with one or more double bonds in its hydrocarbon tail is described as:",
    reasoning: "The presence of one or more carbon-carbon double bonds in a fatty acid's tail defines it as unsaturated (monounsaturated with one double bond, polyunsaturated with more than one).",
    difficulty: 0.1,
    options: [
      { text: "Unsaturated", correct: true },
      { text: "Saturated", errorType: "sign_or_direction_reversal", why: "Saturated fatty acids specifically lack double bonds, the opposite of what's described." },
      { text: "Amphipathic", errorType: "prerequisite_misconception", why: "Amphipathic describes having both hydrophilic and hydrophobic regions, unrelated to the presence of double bonds specifically." },
      { text: "Aromatic", errorType: "prerequisite_misconception", why: "Aromaticity refers to a specific ring structure with delocalized electrons, not simple carbon-carbon double bonds in a fatty acid chain." },
    ],
  },
  {
    concept: "lipid_structure_and_membranes",
    stem: "Compared to a membrane rich in saturated fatty acids, a membrane rich in unsaturated fatty acids (with their characteristic kinks) tends to be:",
    reasoning: "The kinks introduced by double bonds prevent tight packing of fatty acid tails, increasing space between them and making the membrane more fluid at a given temperature compared to straight, tightly-packed saturated tails.",
    difficulty: 0.4,
    options: [
      { text: "More fluid, due to looser packing of the kinked tails", correct: true },
      { text: "More rigid, due to tighter packing of the kinked tails", errorType: "sign_or_direction_reversal", why: "Reverses the actual effect; kinks from double bonds loosen packing and increase fluidity rather than rigidity." },
      { text: "Identical in fluidity, since fatty acid saturation doesn't affect packing", errorType: "prerequisite_misconception", why: "Saturation level directly affects how tightly fatty acid tails can pack together, and thus membrane fluidity." },
      { text: "Impermeable to all polar molecules", errorType: "outside_knowledge_not_supported_by_passage", why: "Permeability to polar molecules is a separate property from fluidity and isn't determined simply by unsaturation level in this way." },
    ],
  },

  // --- nervous_system_signaling (4, plus 5 via passage) ---
  {
    concept: "nervous_system_signaling",
    stem: "At a chemical synapse, an arriving action potential triggers the release of neurotransmitter from the presynaptic neuron primarily via:",
    reasoning: "Depolarization at the axon terminal opens voltage-gated calcium channels; the resulting calcium influx triggers synaptic vesicles to fuse with the presynaptic membrane and release neurotransmitter into the synaptic cleft.",
    difficulty: 0.4,
    options: [
      { text: "Calcium influx triggering synaptic vesicle fusion with the membrane", correct: true },
      { text: "Sodium influx directly causing vesicles to dissolve", errorType: "prerequisite_misconception", why: "Sodium influx drives the action potential itself, but calcium influx, not sodium, is the specific trigger for vesicle fusion at the terminal." },
      { text: "Potassium efflux pulling vesicles toward the membrane", errorType: "prerequisite_misconception", why: "Potassium efflux is involved in repolarization, not in triggering vesicle fusion for neurotransmitter release." },
      { text: "Direct electrical coupling between presynaptic and postsynaptic membranes", errorType: "prerequisite_misconception", why: "Describes an electrical synapse (via gap junctions), not the chemical synapse mechanism being asked about here." },
    ],
  },
  {
    concept: "nervous_system_signaling",
    stem: "Myelin sheaths, formed by Schwann cells or oligodendrocytes, increase the speed of action potential propagation primarily by:",
    reasoning: "Myelin insulates the axon, forcing the action potential to jump between unmyelinated gaps (nodes of Ranvier) via saltatory conduction, which is much faster than continuous propagation along an unmyelinated axon.",
    difficulty: 0.4,
    options: [
      { text: "Enabling saltatory conduction, where the signal jumps between nodes of Ranvier", correct: true },
      { text: "Increasing the number of voltage-gated sodium channels along the entire axon", errorType: "prerequisite_misconception", why: "Myelin actually concentrates channels at the nodes of Ranvier rather than increasing them uniformly along the whole axon." },
      { text: "Directly increasing the resting membrane potential's magnitude", errorType: "outside_knowledge_not_supported_by_passage", why: "Myelin's speed benefit comes from its insulating, saltatory-conduction effect, not from altering the resting potential's value." },
      { text: "Eliminating the need for an action potential threshold to be reached", errorType: "prerequisite_misconception", why: "A threshold must still be reached at each node; myelin speeds propagation between thresholds, it doesn't eliminate the threshold requirement." },
    ],
  },
  {
    concept: "nervous_system_signaling",
    stem: "The absolute refractory period following an action potential ensures that:",
    reasoning: "During the absolute refractory period, most voltage-gated sodium channels are inactivated and cannot reopen regardless of stimulus strength, ensuring the action potential can only travel in one direction and preventing immediate re-firing of the same membrane region.",
    difficulty: 0.4,
    options: [
      { text: "A new action potential cannot be triggered at that membrane region, regardless of stimulus strength", correct: true },
      { text: "The neuron can fire an unlimited number of action potentials simultaneously", errorType: "prerequisite_misconception", why: "The refractory period specifically limits, rather than permits unlimited, firing at that membrane location." },
      { text: "Neurotransmitter release increases dramatically at the synapse", errorType: "outside_knowledge_not_supported_by_passage", why: "The refractory period is about channel inactivation along the axon, not a change in neurotransmitter release amount at the synapse." },
      { text: "The resting membrane potential permanently shifts to a new, more positive value", errorType: "prerequisite_misconception", why: "The membrane returns to its normal resting potential after the refractory period rather than permanently shifting." },
    ],
  },
  {
    concept: "nervous_system_signaling",
    stem: "A neurotransmitter that binds a postsynaptic receptor and makes the postsynaptic membrane more likely to fire an action potential is described as:",
    reasoning: "A neurotransmitter that depolarizes the postsynaptic membrane, bringing it closer to threshold, is excitatory (e.g., producing an excitatory postsynaptic potential, or EPSP).",
    difficulty: 0.2,
    options: [
      { text: "Excitatory", correct: true },
      { text: "Inhibitory", errorType: "sign_or_direction_reversal", why: "Inhibitory neurotransmitters make the postsynaptic membrane less, not more, likely to fire." },
      { text: "Modulatory only, with no direct effect on firing likelihood", errorType: "prerequisite_misconception", why: "The scenario describes a direct effect on firing likelihood, which is the defining feature of an excitatory (or inhibitory) signal, not a purely modulatory one." },
      { text: "Hyperpolarizing", errorType: "sign_or_direction_reversal", why: "Hyperpolarization moves the membrane potential further from threshold, making firing less, not more, likely." },
    ],
  },

  // --- immune_system_basics (4, plus 5 via passage) ---
  {
    concept: "immune_system_basics",
    stem: "Which of the following is a feature of the innate immune system, as opposed to the adaptive immune system?",
    reasoning: "Innate immunity provides a rapid, nonspecific response present from birth (e.g., physical barriers, phagocytes, general inflammatory responses), without needing prior exposure to a specific pathogen, unlike adaptive immunity.",
    difficulty: 0.3,
    options: [
      { text: "A rapid, nonspecific response that doesn't require prior exposure to the pathogen", correct: true },
      { text: "The production of pathogen-specific antibodies", errorType: "prerequisite_misconception", why: "Antibody production is a hallmark of the adaptive immune system, not the innate immune system." },
      { text: "The formation of long-lived immunological memory", errorType: "prerequisite_misconception", why: "Immunological memory is a defining feature of adaptive immunity, not innate immunity." },
      { text: "A response that improves in speed and strength upon repeated exposure to the same pathogen", errorType: "prerequisite_misconception", why: "This improvement with repeated exposure is characteristic of adaptive immunity's memory response, not the innate system." },
    ],
  },
  {
    concept: "immune_system_basics",
    stem: "Antibodies are produced and secreted by which cell type?",
    reasoning: "Plasma cells, which are differentiated B lymphocytes, are the antibody-secreting cells of the adaptive immune system.",
    difficulty: 0.2,
    options: [
      { text: "Plasma cells (differentiated B cells)", correct: true },
      { text: "Cytotoxic T cells", errorType: "prerequisite_misconception", why: "Cytotoxic T cells directly kill infected cells; they do not secrete antibodies." },
      { text: "Macrophages", errorType: "prerequisite_misconception", why: "Macrophages phagocytose pathogens and present antigens; they are not the cells that secrete antibodies." },
      { text: "Red blood cells", errorType: "prerequisite_misconception", why: "Red blood cells transport oxygen and have no role in antibody production." },
    ],
  },
  {
    concept: "immune_system_basics",
    stem: "Helper T cells play a central coordinating role in the adaptive immune response primarily by:",
    reasoning: "Helper T cells recognize antigens presented by other immune cells and release cytokines that activate and coordinate both B cells (antibody production) and cytotoxic T cells, serving as a central regulatory hub of adaptive immunity.",
    difficulty: 0.4,
    options: [
      { text: "Releasing cytokines that activate and coordinate other immune cells, including B cells and cytotoxic T cells", correct: true },
      { text: "Directly phagocytosing and destroying pathogens themselves", errorType: "prerequisite_misconception", why: "Phagocytosis is carried out by cells like macrophages and neutrophils, not primarily by helper T cells." },
      { text: "Producing antibodies directly, without requiring B cells", errorType: "prerequisite_misconception", why: "Antibody production is carried out by B cells (as plasma cells), not directly by helper T cells." },
      { text: "Forming the physical skin barrier against pathogen entry", errorType: "outside_knowledge_not_supported_by_passage", why: "Physical barriers like skin are part of innate immunity and unrelated to helper T cell function." },
    ],
  },
  {
    concept: "immune_system_basics",
    stem: "A vaccine typically works by introducing a harmless form or component of a pathogen in order to:",
    reasoning: "Vaccines expose the immune system to pathogen antigens without causing disease, prompting a primary immune response and generating memory cells so that a future real exposure triggers a faster, stronger secondary response.",
    difficulty: 0.3,
    options: [
      { text: "Generate memory cells in advance, without causing the actual disease", correct: true },
      { text: "Directly destroy any pathogen present in the body at that moment", errorType: "prerequisite_misconception", why: "A vaccine is generally given before infection, priming the immune system rather than treating an existing active infection." },
      { text: "Permanently disable the innate immune system's inflammatory response", errorType: "outside_knowledge_not_supported_by_passage", why: "Vaccines work with, not against, innate and adaptive immunity; they do not disable inflammatory responses." },
      { text: "Replace the need for any future immune response to that pathogen", errorType: "prerequisite_misconception", why: "A vaccine primes a faster, stronger future response; it doesn't eliminate the need for an immune response entirely upon real exposure." },
    ],
  },

  // --- population_genetics_hardy_weinberg (4) ---
  {
    concept: "population_genetics_hardy_weinberg",
    stem: "Under the Hardy-Weinberg equation p² + 2pq + q² = 1, the term 2pq represents:",
    reasoning: "In the Hardy-Weinberg equation, p² and q² represent the frequencies of the two homozygous genotypes, while 2pq represents the frequency of the heterozygous genotype.",
    difficulty: 0.2,
    options: [
      { text: "The frequency of heterozygous individuals", correct: true },
      { text: "The frequency of homozygous dominant individuals", errorType: "prerequisite_misconception", why: "Homozygous dominant frequency is represented by p², not 2pq." },
      { text: "The frequency of homozygous recessive individuals", errorType: "prerequisite_misconception", why: "Homozygous recessive frequency is represented by q², not 2pq." },
      { text: "The total allele frequency in the population", errorType: "prerequisite_misconception", why: "Total allele frequency is represented by p + q = 1, a separate equation from the genotype frequency equation." },
    ],
  },
  {
    concept: "population_genetics_hardy_weinberg",
    stem: "A population is in Hardy-Weinberg equilibrium. Which of the following conditions must hold for this equilibrium to be maintained?",
    reasoning: "Hardy-Weinberg equilibrium requires no mutation, no migration, random mating, no natural selection, and a very large population size (no genetic drift) — violating any of these can shift allele frequencies away from equilibrium.",
    difficulty: 0.3,
    options: [
      { text: "No mutation, migration, or selection, with random mating and a large population", correct: true },
      { text: "A very small population size to allow rapid genetic change", errorType: "sign_or_direction_reversal", why: "A small population increases genetic drift, which violates rather than maintains Hardy-Weinberg equilibrium." },
      { text: "Strong natural selection favoring one allele", errorType: "sign_or_direction_reversal", why: "Selection changes allele frequencies over time, directly violating the conditions required for equilibrium." },
      { text: "Frequent migration of individuals into and out of the population", errorType: "sign_or_direction_reversal", why: "Migration (gene flow) introduces new alleles or changes frequencies, violating one of the required equilibrium conditions." },
    ],
  },
  {
    concept: "population_genetics_hardy_weinberg",
    stem: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.2. The expected frequency of homozygous recessive individuals (q²) is:",
    reasoning: "q² = (0.2)² = 0.04.",
    difficulty: 0.2,
    options: [
      { text: "0.04", correct: true },
      { text: "0.4", errorType: "unit_or_order_of_magnitude_error", why: "Doubles q instead of squaring it." },
      { text: "0.2", errorType: "correct_concept_wrong_step_in_sequence", why: "Uses the allele frequency q directly instead of squaring it to get the genotype frequency." },
      { text: "0.8", errorType: "prerequisite_misconception", why: "Confuses q² with the frequency of the dominant allele (p = 1 − q)." },
    ],
  },
  {
    concept: "population_genetics_hardy_weinberg",
    stem: "A sudden, large reduction in population size (a bottleneck event) is most likely to disturb Hardy-Weinberg equilibrium primarily through:",
    reasoning: "A dramatic reduction in population size increases the role of genetic drift — random chance fluctuations in allele frequency — which is one of the conditions Hardy-Weinberg equilibrium explicitly requires to be negligible (a very large population).",
    difficulty: 0.4,
    options: [
      { text: "Increased genetic drift due to the smaller population size", correct: true },
      { text: "A sudden increase in mutation rate caused by the population decline", errorType: "outside_knowledge_not_supported_by_passage", why: "A bottleneck doesn't inherently increase mutation rate; its primary genetic effect is increased drift from the smaller population." },
      { text: "Complete elimination of natural selection", errorType: "outside_knowledge_not_supported_by_passage", why: "A bottleneck doesn't eliminate selection; its main equilibrium-disrupting effect is amplifying random genetic drift." },
      { text: "A guaranteed shift toward random mating", errorType: "outside_knowledge_not_supported_by_passage", why: "A bottleneck's defining genetic consequence is increased drift, not a change in mating pattern." },
    ],
  },

  // --- passage: bb_action_potential (5) ---
  {
    concept: "nervous_system_signaling",
    type: "passage",
    passage: "bb_action_potential",
    stem: "According to the passage, the initial rapid depolarization of the membrane during an action potential is caused by:",
    reasoning: "The passage states that once threshold is reached, 'voltage-gated Na+ channels open, and Na+ rushes into the cell, rapidly driving the membrane potential positive.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Na+ rushing into the cell through voltage-gated channels", correct: true },
      { text: "K+ rushing out of the cell through voltage-gated channels", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns K+ efflux to the repolarization phase, not the initial depolarization." },
      { text: "The sodium-potassium pump suddenly reversing direction", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes the pump as maintaining the resting gradient, not as the mechanism of rapid depolarization." },
      { text: "Calcium ions flooding into the cell body", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's depolarization mechanism is specifically about Na+ channels, not calcium." },
    ],
  },
  {
    concept: "nervous_system_signaling",
    type: "passage",
    passage: "bb_action_potential",
    stem: "Based on the passage, repolarization of the membrane occurs because:",
    reasoning: "The passage states that Na+ channels inactivate while K+ channels open, 'allowing K+ to flow out and repolarize the membrane.'",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Na+ channels inactivate while K+ channels open, allowing K+ to flow out", correct: true },
      { text: "The sodium-potassium pump immediately restores the resting potential", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes rapid repolarization to K+ channel opening, not the slower-acting sodium-potassium pump." },
      { text: "Na+ channels remain open and continue letting Na+ into the cell", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states Na+ channels inactivate at this point, the opposite of remaining open." },
      { text: "The membrane simply runs out of Na+ ions to move", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "The passage attributes repolarization to channel gating (Na+ inactivation, K+ opening), not depletion of available ions." },
    ],
  },
  {
    concept: "nervous_system_signaling",
    type: "passage",
    passage: "bb_action_potential",
    stem: "According to the passage, the brief 'hyperpolarization' that can occur after repolarization refers to the membrane potential:",
    reasoning: "The passage states K+ efflux can 'briefly overshoot the resting potential (hyperpolarization) before the membrane settles back to rest' — meaning the potential temporarily becomes more negative than the normal resting value.",
    difficulty: 0.3,
    sirs: 1,
    options: [
      { text: "Briefly becoming more negative than the normal resting potential", correct: true },
      { text: "Briefly becoming more positive than at the peak of the action potential", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes hyperpolarization as an overshoot past the resting potential, not exceeding the action potential's peak." },
      { text: "Permanently settling at a new, more negative resting value", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes the membrane eventually settling 'back to rest' at its normal value, not permanently shifting." },
      { text: "Remaining exactly at threshold indefinitely", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes a brief overshoot below resting potential, not a prolonged plateau at threshold." },
    ],
  },
  {
    concept: "nervous_system_signaling",
    type: "passage",
    passage: "bb_action_potential",
    stem: "The passage states that depolarization at one point of the membrane 'triggers depolarization at the immediately adjacent patch.' This description explains how an action potential:",
    reasoning: "This local-to-adjacent triggering mechanism is exactly how an action potential propagates continuously down the length of an axon without weakening, since each newly depolarized patch regenerates a full-strength signal at the next patch.",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "Propagates down the axon without losing strength", correct: true },
      { text: "Is generated for the very first time at the cell body", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's described mechanism explains ongoing propagation along the axon, not the initial generation of the signal specifically at the cell body." },
      { text: "Is converted into a chemical signal at the axon terminal", errorType: "outside_knowledge_not_supported_by_passage", why: "That conversion (to neurotransmitter release) is a separate event at the synapse, not what this local-propagation description explains." },
      { text: "Becomes weaker each time it passes a new patch of membrane", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states propagation occurs 'without any loss of signal strength.'" },
    ],
  },
  {
    concept: "nervous_system_signaling",
    type: "passage",
    passage: "bb_action_potential",
    stem: "Based on the passage, if a drug specifically blocked voltage-gated K+ channels from opening, the most likely direct effect on the action potential would be:",
    reasoning: "Since the passage attributes repolarization to K+ efflux through voltage-gated K+ channels, blocking those channels would prevent or substantially delay repolarization, keeping the membrane depolarized for longer than normal.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Delayed or impaired repolarization, prolonging the depolarized state", correct: true },
      { text: "No change, since Na+ channels alone control the whole action potential", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage explicitly attributes repolarization to K+ channel activity, so blocking it should have a direct effect, not none at all." },
      { text: "Immediate failure of the initial depolarization to occur at all", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes initial depolarization to Na+ channels, not K+ channels, so blocking K+ channels wouldn't prevent that phase from starting." },
      { text: "A permanent shift of the resting potential to a more positive value even before any stimulus", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's mechanism suggests impaired repolarization following a stimulus, not a change to the baseline resting potential absent any signal." },
    ],
  },

  // --- passage: bb_immune_response (5) ---
  {
    concept: "immune_system_basics",
    type: "passage",
    passage: "bb_immune_response",
    stem: "According to the passage, the primary immune response typically takes how long to peak?",
    reasoning: "The passage states the primary response takes 'roughly one to two weeks before antibody levels peak.'",
    difficulty: 0.1,
    sirs: 1,
    options: [
      { text: "Roughly one to two weeks", correct: true },
      { text: "Just a few days", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns the few-days peak time to the secondary response, not the primary response." },
      { text: "Several months", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage specifies one to two weeks for the primary response, not a multi-month timeframe." },
      { text: "Immediately, within hours of exposure", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes a one-to-two-week delay before the primary response peaks, not an immediate response." },
    ],
  },
  {
    concept: "immune_system_basics",
    type: "passage",
    passage: "bb_immune_response",
    stem: "Based on the passage, the secondary immune response is faster and larger than the primary response because:",
    reasoning: "The passage attributes this directly to memory B cells generated during the primary response, which allow the immune system to skip the slow process of locating and activating naive lymphocytes from scratch.",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Memory B cells generated during the primary response are already available", correct: true },
      { text: "The pathogen itself becomes weaker upon a second exposure", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage attributes the faster response to the host's memory cells, not to any change in the pathogen itself." },
      { text: "The innate immune system permanently strengthens after any first exposure", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's explanation centers on adaptive immunity's memory B cells, not a permanent change to the innate immune system." },
      { text: "Antibody levels from the first exposure never actually decline", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage attributes the secondary response's speed to memory cells enabling rapid reactivation, not to persistently elevated antibody levels from the first exposure." },
    ],
  },
  {
    concept: "immune_system_basics",
    type: "passage",
    passage: "bb_immune_response",
    stem: "According to the passage, memory B cells differ from plasma cells in that memory B cells:",
    reasoning: "The passage distinguishes memory B cells (long-lived, available for future rapid response) from plasma cells (short-lived, actively secreting antibodies during the current response).",
    difficulty: 0.3,
    sirs: 1,
    options: [
      { text: "Are long-lived and available for a future response, rather than actively secreting antibodies now", correct: true },
      { text: "Actively secrete large quantities of antibody during the current infection", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns active antibody secretion specifically to plasma cells, not memory B cells." },
      { text: "Are part of the innate, not adaptive, immune system", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage discusses memory B cells within the context of the adaptive immune response, not the innate system." },
      { text: "Only form after a vaccine, never after a natural infection", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes memory B cells forming during the primary response generally, and vaccination as exploiting this natural mechanism, not creating a different one." },
    ],
  },
  {
    concept: "immune_system_basics",
    type: "passage",
    passage: "bb_immune_response",
    stem: "The passage states that vaccination 'exploits this mechanism.' Based on the passage, this means a vaccine works by:",
    reasoning: "The passage explains vaccination works by 'safely generating a primary response and a pool of memory cells in advance of any real exposure' — using the same primary-response/memory-cell mechanism the passage describes, just triggered safely ahead of time.",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "Safely triggering a primary response and generating memory cells before real exposure occurs", correct: true },
      { text: "Directly supplying pre-made antibodies rather than provoking the immune system", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes vaccination as generating the body's own primary response and memory cells, not supplying premade antibodies directly." },
      { text: "Preventing the primary response from ever needing to occur at all", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage says vaccination generates a primary response safely in advance, not that it eliminates the need for one." },
      { text: "Suppressing the secondary response to avoid overreaction", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage frames vaccination as intentionally enabling a strong secondary response upon real exposure, not suppressing it." },
    ],
  },
  {
    concept: "immune_system_basics",
    type: "passage",
    passage: "bb_immune_response",
    stem: "Based on the passage's logic, a person who has never been exposed to a particular pathogen or its vaccine would, upon first infection, be expected to show a response most similar to:",
    reasoning: "Without prior exposure (natural or via vaccine), there are no memory cells available, so the response would follow the passage's description of the primary response: activation from a naive lymphocyte pool, taking one to two weeks to peak.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "The primary response described in the passage, taking one to two weeks to peak", correct: true },
      { text: "The secondary response described in the passage, peaking within a few days", errorType: "outside_knowledge_not_supported_by_passage", why: "A secondary response specifically requires pre-existing memory cells from a prior exposure, which this person lacks by definition." },
      { text: "No immune response at all, since the pathogen is entirely novel", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes even a first-ever exposure as generating a genuine (if slower) primary response, not the complete absence of a response." },
      { text: "A response identical in speed to someone who was previously vaccinated", errorType: "outside_knowledge_not_supported_by_passage", why: "The entire point of vaccination, per the passage, is to make a subsequent real exposure trigger a faster secondary response — which this unvaccinated, unexposed person would not have." },
    ],
  },
];
