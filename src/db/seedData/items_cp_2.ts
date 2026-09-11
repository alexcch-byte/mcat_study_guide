import type { ItemDef } from "./types";

export const itemsCp2: ItemDef[] = [
  // --- log_math_estimation (2) ---
  {
    concept: "log_math_estimation",
    stem: "A solution's [H+] increases by a factor of 100. The pH of the solution:",
    reasoning: "pH = -log[H+]. A 100-fold increase in [H+] is 10², so log increases by 2, meaning pH decreases by exactly 2 units.",
    difficulty: 0.0,
    options: [
      { text: "Decreases by 2 units", correct: true },
      { text: "Increases by 2 units", errorType: "sign_or_direction_reversal", why: "Reverses the inverse relationship between [H+] and pH." },
      { text: "Decreases by 100 units", errorType: "unit_or_order_of_magnitude_error", why: "Uses the fold-change directly instead of its base-10 logarithm." },
      { text: "Decreases by 10 units", errorType: "correct_concept_wrong_step_in_sequence", why: "Confuses the exponent's base (10) with the actual power of ten (100 = 10²)." },
    ],
  },
  {
    concept: "log_math_estimation",
    stem: "Using log(3) ≈ 0.48, log(300) is closest to:",
    reasoning: "log(300) = log(3) + log(100) = 0.48 + 2 = 2.48.",
    difficulty: 0.2,
    options: [
      { text: "2.48", correct: true },
      { text: "0.48", errorType: "correct_concept_wrong_step_in_sequence", why: "Omits adding log(100) = 2 for the order-of-magnitude component." },
      { text: "4.8", errorType: "unit_or_order_of_magnitude_error", why: "Multiplies log(3) by 10 instead of adding log(100)." },
      { text: "300.48", errorType: "prerequisite_misconception", why: "Treats the logarithm as if it should retain the original number's magnitude." },
    ],
  },

  // --- acid_base_titration (2) ---
  {
    concept: "acid_base_titration",
    stem: "Titrating a strong acid with a strong base, the equivalence point occurs at a pH of approximately:",
    reasoning: "Neither the strong acid nor the strong base has a conjugate species that hydrolyzes water, so at the equivalence point the solution contains only a neutral salt and water, giving pH ≈ 7.",
    difficulty: 0.0,
    options: [
      { text: "7", correct: true },
      { text: "Above 7, due to excess base", errorType: "prerequisite_misconception", why: "Describes a weak acid/strong base titration outcome, not strong acid/strong base." },
      { text: "Below 7, due to excess acid", errorType: "prerequisite_misconception", why: "Describes a weak base/strong acid titration outcome, not strong acid/strong base." },
      { text: "Exactly equal to the strong acid's initial concentration", errorType: "unit_or_order_of_magnitude_error", why: "Confuses a concentration value with a pH value." },
    ],
  },
  {
    concept: "acid_base_titration",
    stem: "During a titration, the point at which the rate of pH change with respect to volume added is maximal is called the:",
    reasoning: "The equivalence point is where the titration curve is steepest — the pH changes most rapidly per unit volume of titrant added there.",
    difficulty: 0.3,
    options: [
      { text: "Equivalence point", correct: true },
      { text: "Half-equivalence point", errorType: "correct_concept_wrong_step_in_sequence", why: "The half-equivalence point is where the curve is flattest (maximum buffering), the opposite of steepest." },
      { text: "Starting point of the titration", errorType: "prerequisite_misconception", why: "The initial point isn't generally where the curve is steepest." },
      { text: "Point of maximum buffering capacity", errorType: "sign_or_direction_reversal", why: "Maximum buffering capacity corresponds to the flattest region, not the steepest." },
    ],
  },

  // --- amino_acid_pKa_reasoning (2) ---
  {
    concept: "amino_acid_pKa_reasoning",
    stem: "Lysine's side chain has a pKa near 10.5. At a pH of 8, this side chain is predominantly:",
    reasoning: "Physiological/test pH (8) is below the side chain's pKa (10.5), so the protonated, positively charged form predominates.",
    difficulty: 0.3,
    options: [
      { text: "Protonated and positively charged", correct: true },
      { text: "Deprotonated and neutral", errorType: "sign_or_direction_reversal", why: "Reverses which form predominates when pH is below the pKa." },
      { text: "Negatively charged", errorType: "prerequisite_misconception", why: "A basic side chain like lysine's amine does not become negatively charged under any typical physiological condition." },
      { text: "Uncharged regardless of pH", errorType: "prerequisite_misconception", why: "Ignores that lysine's side chain is a titratable, ionizable group whose charge depends on pH." },
    ],
  },
  {
    concept: "amino_acid_pKa_reasoning",
    stem: "An amino acid side chain's pKa value reflects:",
    reasoning: "The pKa of a titratable group is the pH at which it is 50% protonated and 50% deprotonated — a measure of how readily that group gives up a proton.",
    difficulty: 0.2,
    options: [
      { text: "The pH at which the group is 50% protonated and 50% deprotonated", correct: true },
      { text: "The pH at which the group is always fully protonated", errorType: "prerequisite_misconception", why: "Full protonation occurs well below the pKa, not at it." },
      { text: "The total number of ionizable groups in the molecule", errorType: "prerequisite_misconception", why: "pKa is a property of a single titratable group's equilibrium, not a count of groups." },
      { text: "The molecule's overall net charge at any pH", errorType: "outside_knowledge_not_supported_by_passage", why: "Net charge depends on pH relative to pKa; pKa alone is a fixed reference point, not the charge itself." },
    ],
  },

  // --- buffers_and_henderson_hasselbalch (2) ---
  {
    concept: "buffers_and_henderson_hasselbalch",
    stem: "A buffer's pH is measured to be 1 unit below the pKa of its weak acid component. The ratio [A-]/[HA] in this buffer is closest to:",
    reasoning: "By Henderson-Hasselbalch, pH − pKa = log([A-]/[HA]). Here pH − pKa = −1, so [A-]/[HA] = 10⁻¹ = 0.1.",
    difficulty: 0.4,
    options: [
      { text: "0.1", correct: true },
      { text: "10", errorType: "reciprocal_or_inverted_relationship", why: "Inverts the ratio, giving the reciprocal of the correct value." },
      { text: "-1", errorType: "unit_or_order_of_magnitude_error", why: "Reports the exponent itself rather than 10 raised to that exponent." },
      { text: "1", errorType: "prerequisite_misconception", why: "That ratio would hold only when pH equals pKa exactly, not 1 unit below it." },
    ],
  },
  {
    concept: "buffers_and_henderson_hasselbalch",
    stem: "Which of the following would be the most effective buffer for maintaining a solution at pH 9?",
    reasoning: "An effective buffer's pKa should be close to the target pH; among typical choices, a weak acid with pKa near 9 buffers most effectively there, since [HA] and [A-] are then comparable at that pH.",
    difficulty: 0.4,
    options: [
      { text: "A weak acid with pKa ≈ 9 and its conjugate base", correct: true },
      { text: "A weak acid with pKa ≈ 3 and its conjugate base", errorType: "prerequisite_misconception", why: "A pKa far from the target pH provides much weaker buffering there." },
      { text: "A strong acid and a strong base mixed together", errorType: "prerequisite_misconception", why: "Strong acid/base pairs do not function as buffers; they fully dissociate and provide no meaningful resistance to pH change." },
      { text: "Pure water with no added solutes", errorType: "prerequisite_misconception", why: "Pure water has essentially no buffering capacity at all." },
    ],
  },

  // --- equilibrium_and_le_chatelier (2) ---
  {
    concept: "equilibrium_and_le_chatelier",
    stem: "For a reaction at equilibrium, adding an inert gas to the container at constant volume will:",
    reasoning: "Adding an inert gas at constant volume increases total pressure but does not change the partial pressures or concentrations of the reacting species, so the equilibrium position is unaffected.",
    difficulty: 0.4,
    options: [
      { text: "Have no effect on the equilibrium position", correct: true },
      { text: "Shift the equilibrium toward the side with fewer moles of gas", errorType: "prerequisite_misconception", why: "That shift occurs only when volume itself changes, not merely from adding an unreactive gas at constant volume." },
      { text: "Shift the equilibrium toward the side with more moles of gas", errorType: "prerequisite_misconception", why: "An inert gas addition at constant volume does not change any reacting species' concentration or partial pressure." },
      { text: "Stop the reaction from proceeding further in either direction", errorType: "prerequisite_misconception", why: "The system remains dynamically at equilibrium; nothing about adding an inert gas halts the underlying reaction." },
    ],
  },
  {
    concept: "equilibrium_and_le_chatelier",
    stem: "The equilibrium constant Keq for a given reaction changes only when:",
    reasoning: "Keq is a function of temperature alone; concentration, pressure, and catalysts can shift the equilibrium position but do not change the actual value of Keq.",
    difficulty: 0.3,
    options: [
      { text: "The temperature changes", correct: true },
      { text: "A catalyst is added", errorType: "prerequisite_misconception", why: "Catalysts change the rate at which equilibrium is reached, not the equilibrium constant's value." },
      { text: "The concentration of a reactant is increased", errorType: "prerequisite_misconception", why: "Concentration changes shift the position of equilibrium but leave Keq itself unchanged." },
      { text: "The volume of the container is decreased", errorType: "prerequisite_misconception", why: "Volume changes shift equilibrium position for reactions with unequal gas moles on each side but do not alter Keq." },
    ],
  },

  // --- redox_and_electrochemistry (2) ---
  {
    concept: "redox_and_electrochemistry",
    stem: "In any electrochemical cell, reduction always occurs at the:",
    reasoning: "By definition and convention, reduction (gain of electrons) occurs at the cathode in both galvanic and electrolytic cells, regardless of which terminal is positive or negative in each case.",
    difficulty: 0.2,
    options: [
      { text: "Cathode", correct: true },
      { text: "Anode", errorType: "sign_or_direction_reversal", why: "Oxidation, not reduction, occurs at the anode." },
      { text: "Salt bridge", errorType: "prerequisite_misconception", why: "The salt bridge maintains ionic charge balance; no redox reaction occurs there." },
      { text: "External circuit wire", errorType: "prerequisite_misconception", why: "Electrons travel through the wire, but the reduction reaction itself occurs at an electrode surface." },
    ],
  },
  {
    concept: "redox_and_electrochemistry",
    stem: "A metal with a very negative standard reduction potential, compared to one with a less negative value, is:",
    reasoning: "A more negative reduction potential means the metal is less likely to be reduced (gain electrons) and more likely to be oxidized (lose electrons), making it a stronger reducing agent.",
    difficulty: 0.4,
    options: [
      { text: "A stronger reducing agent, more easily oxidized", correct: true },
      { text: "A stronger oxidizing agent, more easily reduced", errorType: "sign_or_direction_reversal", why: "Reverses the relationship between reduction potential sign and oxidizing/reducing strength." },
      { text: "Chemically inert and unreactive", errorType: "prerequisite_misconception", why: "A strongly negative reduction potential indicates high reactivity as a reducing agent, not inertness." },
      { text: "Equally likely to be oxidized or reduced", errorType: "prerequisite_misconception", why: "A strongly negative potential indicates a clear preference for oxidation over reduction." },
    ],
  },

  // --- thermodynamics_and_enthalpy (2, plus 5 via passage) ---
  {
    concept: "thermodynamics_and_enthalpy",
    stem: "A reaction has ΔH > 0 and ΔS > 0. This reaction is spontaneous:",
    reasoning: "ΔG = ΔH − TΔS. With ΔH positive and ΔS positive, −TΔS is negative, so ΔG becomes negative (spontaneous) at sufficiently high temperature, where the entropy term dominates.",
    difficulty: 0.4,
    options: [
      { text: "Only at high temperature", correct: true },
      { text: "Only at low temperature", errorType: "sign_or_direction_reversal", why: "Reverses the temperature dependence for this combination of signs." },
      { text: "At all temperatures", errorType: "prerequisite_misconception", why: "That holds only when ΔH is negative and ΔS is positive." },
      { text: "At no temperature", errorType: "prerequisite_misconception", why: "That holds only when ΔH is positive and ΔS is negative." },
    ],
  },
  {
    concept: "thermodynamics_and_enthalpy",
    stem: "The standard enthalpy of formation of an element in its most stable standard state (e.g., O2 gas) is defined as:",
    reasoning: "By convention, the standard enthalpy of formation of any element in its most stable form under standard conditions is defined to be exactly zero, serving as the reference point for all other formation enthalpies.",
    difficulty: 0.2,
    options: [
      { text: "Zero, by definition", correct: true },
      { text: "Always positive", errorType: "prerequisite_misconception", why: "The reference-state value is defined as exactly zero, not merely positive." },
      { text: "Always negative", errorType: "prerequisite_misconception", why: "The reference-state value is defined as exactly zero, not negative." },
      { text: "Equal to its bond dissociation energy", errorType: "outside_knowledge_not_supported_by_passage", why: "Confuses the standard reference-state convention with a distinct thermodynamic quantity." },
    ],
  },

  // --- gas_laws_and_kinetic_theory (2) ---
  {
    concept: "gas_laws_and_kinetic_theory",
    stem: "A fixed amount of gas is held at constant pressure while its temperature increases. According to the combined/ideal gas law, its volume:",
    reasoning: "Charles's law (a special case of the ideal gas law at constant P and n): V/T = constant, so volume increases proportionally with absolute temperature.",
    difficulty: 0.0,
    options: [
      { text: "Increases", correct: true },
      { text: "Decreases", errorType: "sign_or_direction_reversal", why: "Reverses the direct relationship between volume and temperature at constant pressure." },
      { text: "Stays constant", errorType: "prerequisite_misconception", why: "Ignores Charles's law's direct dependence of volume on temperature." },
      { text: "Becomes unpredictable without knowing pressure", errorType: "prerequisite_misconception", why: "Pressure is explicitly held constant in this scenario, so the relationship is fully determined." },
    ],
  },
  {
    concept: "gas_laws_and_kinetic_theory",
    stem: "According to Dalton's law of partial pressures, the total pressure of a gas mixture is:",
    reasoning: "Dalton's law states the total pressure of a gas mixture equals the sum of the partial pressures each individual gas would exert if it alone occupied the container.",
    difficulty: 0.1,
    options: [
      { text: "The sum of the partial pressures of each gas present", correct: true },
      { text: "The average of the partial pressures of each gas present", errorType: "correct_concept_wrong_step_in_sequence", why: "Dalton's law specifies a sum, not an average, of the individual partial pressures." },
      { text: "Equal to the partial pressure of only the most abundant gas", errorType: "prerequisite_misconception", why: "Ignores the contributions of the other gases present in the mixture." },
      { text: "Independent of how many different gases are present", errorType: "prerequisite_misconception", why: "Total pressure explicitly depends on summing the contributions of every gas present." },
    ],
  },

  // --- kinematics_and_forces (2, plus 5 via passage) ---
  {
    concept: "kinematics_and_forces",
    stem: "An object experiences zero net force. According to Newton's first law, the object:",
    reasoning: "Newton's first law (inertia): an object with zero net force continues at constant velocity — either remaining at rest or moving in a straight line at constant speed.",
    difficulty: -0.1,
    options: [
      { text: "Continues at constant velocity (or remains at rest)", correct: true },
      { text: "Must be at rest", errorType: "prerequisite_misconception", why: "Zero net force is also consistent with constant nonzero velocity, not only rest." },
      { text: "Must decelerate to a stop", errorType: "prerequisite_misconception", why: "Deceleration requires a net force opposing motion, which contradicts the zero-net-force condition." },
      { text: "Accelerates at a constant rate", errorType: "prerequisite_misconception", why: "Constant acceleration requires a nonzero net force, contradicting the premise." },
    ],
  },
  {
    concept: "kinematics_and_forces",
    stem: "A car doubles its speed while braking with the same constant deceleration. Compared to the original stopping distance, the new stopping distance is:",
    reasoning: "Using v² = v0² − 2ad, stopping distance is proportional to the square of initial speed at constant deceleration; doubling speed quadruples the stopping distance.",
    difficulty: 0.5,
    options: [
      { text: "Four times as long", correct: true },
      { text: "Twice as long", errorType: "correct_concept_wrong_step_in_sequence", why: "Treats stopping distance as linearly proportional to speed instead of proportional to speed squared." },
      { text: "The same, since deceleration is unchanged", errorType: "prerequisite_misconception", why: "Ignores that a higher initial speed requires a longer distance to dissipate at the same deceleration rate." },
      { text: "Eight times as long", errorType: "unit_or_order_of_magnitude_error", why: "Overapplies the doubling, e.g. by cubing rather than squaring the speed ratio." },
    ],
  },

  // --- circuits_and_ohms_law (2) ---
  {
    concept: "circuits_and_ohms_law",
    stem: "The power dissipated by a resistor can be calculated as P = I²R. If the current through a fixed resistor is tripled, the power dissipated:",
    reasoning: "Since P is proportional to I², tripling I multiplies P by 3² = 9.",
    difficulty: 0.4,
    options: [
      { text: "Increases ninefold", correct: true },
      { text: "Triples", errorType: "correct_concept_wrong_step_in_sequence", why: "Treats power as directly (linearly) proportional to current instead of proportional to current squared." },
      { text: "Increases sixfold", errorType: "unit_or_order_of_magnitude_error", why: "Multiplies the current factor by 2 instead of squaring it." },
      { text: "Stays the same", errorType: "prerequisite_misconception", why: "Ignores that power depends on current at all in this formula." },
    ],
  },
  {
    concept: "circuits_and_ohms_law",
    stem: "In a parallel circuit with two branches, the voltage across each branch is:",
    reasoning: "In a parallel arrangement, both branches connect across the same two nodes, so by definition they experience the same voltage, even though the current through each branch may differ.",
    difficulty: 0.2,
    options: [
      { text: "The same across both branches", correct: true },
      { text: "Different, proportional to each branch's resistance", errorType: "prerequisite_misconception", why: "That describes a series circuit's voltage division, not a parallel circuit, where voltage is shared equally." },
      { text: "Always zero across the branch with higher resistance", errorType: "prerequisite_misconception", why: "A higher-resistance parallel branch carries less current, not zero voltage." },
      { text: "Undefined without knowing the current in each branch", errorType: "prerequisite_misconception", why: "Voltage across parallel branches is set by the shared nodes regardless of individual branch currents." },
    ],
  },

  // --- waves_sound_and_optics (2) ---
  {
    concept: "waves_sound_and_optics",
    stem: "A converging lens forms a real, inverted image of an object placed beyond its focal point. As the object is moved closer to the focal point (but still beyond it), the image distance:",
    reasoning: "For a converging lens, as object distance approaches the focal length from beyond it, the image distance increases (approaching infinity as the object nears the focal point), per the thin lens equation.",
    difficulty: 0.5,
    options: [
      { text: "Increases", correct: true },
      { text: "Decreases", errorType: "sign_or_direction_reversal", why: "Reverses the relationship between decreasing object distance (toward the focal point) and image distance for a converging lens." },
      { text: "Stays constant", errorType: "prerequisite_misconception", why: "The thin lens equation shows image distance changes as object distance changes." },
      { text: "Becomes negative, indicating a virtual image", errorType: "prerequisite_misconception", why: "The image remains real as long as the object stays beyond the focal point; a virtual image only occurs once the object moves inside the focal length." },
    ],
  },
  {
    concept: "waves_sound_and_optics",
    stem: "The frequency of a wave is inversely related to its:",
    reasoning: "For a wave with fixed speed, v = fλ, so frequency and wavelength are inversely proportional to one another.",
    difficulty: -0.1,
    options: [
      { text: "Wavelength", correct: true },
      { text: "Amplitude", errorType: "prerequisite_misconception", why: "Amplitude relates to a wave's energy/intensity, not to its frequency-wavelength relationship." },
      { text: "Speed, for any wave in any medium", errorType: "prerequisite_misconception", why: "Frequency and speed are not inherently inversely related; for a fixed speed, frequency and wavelength trade off instead." },
      { text: "Period, since both increase together", errorType: "sign_or_direction_reversal", why: "Frequency and period are also inversely related (f = 1/T), not directly related." },
    ],
  },

  // --- fluids_and_pressure (2) ---
  {
    concept: "fluids_and_pressure",
    stem: "According to the continuity equation for an incompressible fluid, as a pipe narrows, the fluid's flow speed:",
    reasoning: "The continuity equation (A1v1 = A2v2) requires that a smaller cross-sectional area be compensated by a higher flow speed to keep the volumetric flow rate constant.",
    difficulty: 0.3,
    options: [
      { text: "Increases", correct: true },
      { text: "Decreases", errorType: "sign_or_direction_reversal", why: "Reverses the inverse relationship between pipe cross-sectional area and flow speed." },
      { text: "Stays the same", errorType: "prerequisite_misconception", why: "Ignores the continuity equation's requirement that area and speed trade off to conserve flow rate." },
      { text: "Depends only on the fluid's viscosity", errorType: "outside_knowledge_not_supported_by_passage", why: "The continuity relationship for an idealized incompressible fluid depends on area, not primarily on viscosity." },
    ],
  },
  {
    concept: "fluids_and_pressure",
    stem: "According to Bernoulli's principle, as a fluid's flow speed increases (at the same height), its pressure:",
    reasoning: "Bernoulli's equation shows an inverse trade-off between a fluid's flow speed and its pressure at constant height: faster flow corresponds to lower pressure.",
    difficulty: 0.3,
    options: [
      { text: "Decreases", correct: true },
      { text: "Increases", errorType: "sign_or_direction_reversal", why: "Reverses Bernoulli's principle's inverse relationship between speed and pressure at constant height." },
      { text: "Stays the same, since pressure and speed are independent", errorType: "prerequisite_misconception", why: "Bernoulli's principle specifically links pressure and speed for a flowing fluid; they are not independent." },
      { text: "Depends only on the fluid's temperature", errorType: "outside_knowledge_not_supported_by_passage", why: "In the idealized Bernoulli framework, the pressure-speed relationship at constant height doesn't depend on temperature." },
    ],
  },

  // --- stoichiometry_and_limiting_reagent (4) ---
  {
    concept: "stoichiometry_and_limiting_reagent",
    stem: "In the reaction N2 + 3H2 → 2NH3, if 1 mole of N2 is reacted with 3 moles of H2, the limiting reagent is:",
    reasoning: "The stoichiometric ratio requires 3 moles of H2 per mole of N2, and exactly that ratio is supplied, so neither reagent is in excess — both are fully consumed together, with no single limiting reagent.",
    difficulty: 0.4,
    options: [
      { text: "Neither; they are supplied in the exact stoichiometric ratio", correct: true },
      { text: "N2, because it has the smaller number of moles", errorType: "prerequisite_misconception", why: "Fewer moles alone doesn't determine the limiting reagent; the mole ratio required by the balanced equation must be considered." },
      { text: "H2, because it has the larger coefficient in the equation", errorType: "prerequisite_misconception", why: "A larger coefficient doesn't automatically make a reagent limiting if it's supplied in matching proportion." },
      { text: "It cannot be determined without knowing the molar masses", errorType: "outside_knowledge_not_supported_by_passage", why: "Since quantities are already given in moles, molar mass isn't needed to compare them to the stoichiometric ratio." },
    ],
  },
  {
    concept: "stoichiometry_and_limiting_reagent",
    stem: "A reaction has a theoretical yield of 10 g of product, but only 7.5 g is actually recovered. The percent yield is:",
    reasoning: "Percent yield = (actual yield / theoretical yield) × 100 = (7.5/10) × 100 = 75%.",
    difficulty: 0.1,
    options: [
      { text: "75%", correct: true },
      { text: "133%", errorType: "reciprocal_or_inverted_relationship", why: "Inverts the ratio, dividing theoretical by actual instead of actual by theoretical." },
      { text: "2.5%", errorType: "prerequisite_misconception", why: "Uses the difference between the two yields directly as a percentage instead of forming the correct ratio." },
      { text: "17.5%", errorType: "unit_or_order_of_magnitude_error", why: "Incorrectly combines the two values (e.g., by adding a decimal shift) rather than dividing them." },
    ],
  },
  {
    concept: "stoichiometry_and_limiting_reagent",
    stem: "Once the limiting reagent in a reaction is fully consumed, the reaction:",
    reasoning: "The limiting reagent sets the maximum amount of product that can form; once it is used up, the reaction cannot proceed further regardless of how much excess reagent remains.",
    difficulty: 0.1,
    options: [
      { text: "Stops, regardless of how much excess reagent remains", correct: true },
      { text: "Continues until all reagents, including the excess one, are consumed", errorType: "prerequisite_misconception", why: "This is exactly what the limiting reagent concept rules out; the reaction cannot proceed once it's gone." },
      { text: "Reverses direction and begins consuming the products", errorType: "prerequisite_misconception", why: "Running out of a reagent doesn't drive the reaction backward; it simply halts forward progress." },
      { text: "Speeds up as it approaches completion", errorType: "prerequisite_misconception", why: "Reaction rate is unrelated to which reagent runs out first; running out of the limiting reagent stops the reaction rather than speeding it up." },
    ],
  },
  {
    concept: "stoichiometry_and_limiting_reagent",
    stem: "A chemist wants to determine which of two reactants is limiting. The most direct method is to:",
    reasoning: "Converting each reactant's given amount to moles of a common product (using the balanced equation's mole ratios) and comparing which yields less product directly identifies the limiting reagent — whichever produces the smaller predicted amount of product is limiting.",
    difficulty: 0.4,
    options: [
      { text: "Calculate the moles of product each reactant could theoretically produce, and compare", correct: true },
      { text: "Compare the total mass of each reactant used", errorType: "prerequisite_misconception", why: "Mass alone doesn't account for differing molar masses and stoichiometric coefficients between reactants." },
      { text: "Compare the boiling points of each reactant", errorType: "outside_knowledge_not_supported_by_passage", why: "Boiling point has no bearing on which reactant is stoichiometrically limiting." },
      { text: "Always assume the reactant added in smaller volume is limiting", errorType: "prerequisite_misconception", why: "Volume alone, without concentration and stoichiometry, cannot reliably determine the limiting reagent." },
    ],
  },

  // --- solutions_and_colligative_properties (4) ---
  {
    concept: "solutions_and_colligative_properties",
    stem: "Adding a nonvolatile solute to a pure solvent will:",
    reasoning: "Colligative properties depend on the number of dissolved particles: adding solute lowers vapor pressure, raises boiling point, and lowers freezing point relative to the pure solvent.",
    difficulty: 0.1,
    options: [
      { text: "Raise the boiling point and lower the freezing point", correct: true },
      { text: "Lower the boiling point and raise the freezing point", errorType: "sign_or_direction_reversal", why: "Reverses both colligative-property shifts caused by adding a nonvolatile solute." },
      { text: "Leave both the boiling and freezing points unchanged", errorType: "prerequisite_misconception", why: "Ignores that colligative properties by definition change with added solute particles." },
      { text: "Raise both the boiling and freezing points", errorType: "sign_or_direction_reversal", why: "Freezing point is lowered, not raised, by a dissolved solute." },
    ],
  },
  {
    concept: "solutions_and_colligative_properties",
    stem: "Colligative properties of a solution depend primarily on:",
    reasoning: "Colligative properties (boiling point elevation, freezing point depression, osmotic pressure, vapor pressure lowering) depend on the total number (or molality) of dissolved particles, not on their specific chemical identity.",
    difficulty: 0.2,
    options: [
      { text: "The number of dissolved solute particles, not their identity", correct: true },
      { text: "The specific chemical identity of the solute", errorType: "prerequisite_misconception", why: "By definition, colligative properties depend on particle count, not on which specific solute is present." },
      { text: "The color of the solute", errorType: "outside_knowledge_not_supported_by_passage", why: "Color is an unrelated physical property with no bearing on colligative effects." },
      { text: "The solvent's boiling point alone, independent of any solute", errorType: "prerequisite_misconception", why: "Colligative properties are specifically about the change caused by adding solute, not the solvent's baseline property alone." },
    ],
  },
  {
    concept: "solutions_and_colligative_properties",
    stem: "A 1 M solution of NaCl produces a greater freezing point depression than a 1 M solution of glucose in water because:",
    reasoning: "NaCl dissociates into two ions (Na+ and Cl-) per formula unit in solution, roughly doubling the effective particle concentration compared to glucose, which does not dissociate — and freezing point depression depends on total particle concentration.",
    difficulty: 0.4,
    options: [
      { text: "NaCl dissociates into two ions per formula unit, doubling the effective particle concentration", correct: true },
      { text: "NaCl has a much higher molar mass than glucose", errorType: "outside_knowledge_not_supported_by_passage", why: "Molar mass is irrelevant once concentration is already given in molarity; the key difference is dissociation into ions." },
      { text: "Glucose is a stronger acid than NaCl", errorType: "outside_knowledge_not_supported_by_passage", why: "Acidity is not a relevant property for this colligative comparison; dissociation into particles is." },
      { text: "NaCl solutions are always colder than glucose solutions to begin with", errorType: "outside_knowledge_not_supported_by_passage", why: "Nothing about initial temperature is specified or relevant; the comparison concerns freezing point depression magnitude." },
    ],
  },
  {
    concept: "solutions_and_colligative_properties",
    stem: "Osmotic pressure is best described as:",
    reasoning: "Osmotic pressure is the pressure that must be applied to a solution to prevent the net inward flow of solvent across a semipermeable membrane from a region of lower solute concentration.",
    difficulty: 0.3,
    options: [
      { text: "The pressure needed to stop net solvent flow across a semipermeable membrane", correct: true },
      { text: "The total pressure exerted by a gas dissolved in solution", errorType: "prerequisite_misconception", why: "Confuses osmotic pressure with a gas's partial pressure, an unrelated quantity." },
      { text: "The vapor pressure of the pure solvent alone", errorType: "prerequisite_misconception", why: "Vapor pressure is a related but distinct colligative property, not the definition of osmotic pressure." },
      { text: "The atmospheric pressure acting on the solution's surface", errorType: "outside_knowledge_not_supported_by_passage", why: "Atmospheric pressure is an external, unrelated quantity, not what osmotic pressure measures." },
    ],
  },

  // --- nuclear_decay_and_half_life (4) ---
  {
    concept: "nuclear_decay_and_half_life",
    stem: "A radioactive sample has a half-life of 10 days. After 30 days, the fraction of the original sample remaining is:",
    reasoning: "30 days is 3 half-lives, so the remaining fraction is (1/2)³ = 1/8.",
    difficulty: 0.1,
    options: [
      { text: "1/8", correct: true },
      { text: "1/3", errorType: "correct_concept_wrong_step_in_sequence", why: "Treats the number of half-lives as a simple fraction rather than raising 1/2 to that power." },
      { text: "1/6", errorType: "unit_or_order_of_magnitude_error", why: "Multiplies the number of half-lives by 2 instead of using it as an exponent." },
      { text: "1/30", errorType: "unit_or_order_of_magnitude_error", why: "Uses the total elapsed days directly as the denominator instead of computing half-life cycles." },
    ],
  },
  {
    concept: "nuclear_decay_and_half_life",
    stem: "In alpha decay, a nucleus emits an alpha particle. As a result, the resulting nucleus's mass number and atomic number:",
    reasoning: "An alpha particle is a helium nucleus (2 protons, 2 neutrons), so alpha decay decreases mass number by 4 and atomic number by 2.",
    difficulty: 0.3,
    options: [
      { text: "Mass number decreases by 4; atomic number decreases by 2", correct: true },
      { text: "Mass number decreases by 2; atomic number decreases by 4", errorType: "sign_or_direction_reversal", why: "Swaps which quantity decreases by which amount." },
      { text: "Mass number stays the same; atomic number decreases by 2", errorType: "prerequisite_misconception", why: "Ignores that the emitted alpha particle also carries away mass (nucleons), not just charge." },
      { text: "Both mass number and atomic number increase", errorType: "sign_or_direction_reversal", why: "Alpha decay reduces both mass number and atomic number, not increases them." },
    ],
  },
  {
    concept: "nuclear_decay_and_half_life",
    stem: "In beta-minus decay, a neutron converts into a proton, an electron, and an antineutrino. As a result, the atomic number of the nucleus:",
    reasoning: "Converting a neutron to a proton increases the number of protons by one, so atomic number increases by 1, while mass number (total nucleons) stays the same since a neutron was simply converted to a proton.",
    difficulty: 0.4,
    options: [
      { text: "Increases by 1, while mass number stays the same", correct: true },
      { text: "Decreases by 1, while mass number stays the same", errorType: "sign_or_direction_reversal", why: "Beta-minus decay increases, not decreases, the proton count." },
      { text: "Stays the same, while mass number decreases by 1", errorType: "prerequisite_misconception", why: "Mass number (total nucleons) is unchanged in beta decay since a neutron converts to a proton, not disappears." },
      { text: "Increases by 1, and mass number also increases by 1", errorType: "prerequisite_misconception", why: "No new nucleon is added; a neutron is converted into a proton, keeping total nucleon count constant." },
    ],
  },
  {
    concept: "nuclear_decay_and_half_life",
    stem: "Radioactive decay follows first-order kinetics, meaning the half-life of a given isotope:",
    reasoning: "In first-order kinetics, the half-life is a constant, independent of the amount of substance present — unlike zero- or second-order kinetics, where half-life would depend on initial concentration or amount.",
    difficulty: 0.4,
    options: [
      { text: "Is constant, regardless of how much of the isotope is present", correct: true },
      { text: "Gets shorter as more of the isotope decays away", errorType: "prerequisite_misconception", why: "First-order half-life doesn't shrink over successive half-lives; it remains constant regardless of remaining quantity." },
      { text: "Gets longer as more of the isotope decays away", errorType: "prerequisite_misconception", why: "First-order half-life doesn't grow over time; it stays constant." },
      { text: "Depends on the initial mass of the sample", errorType: "prerequisite_misconception", why: "A defining feature of first-order kinetics is that half-life is independent of the starting amount." },
    ],
  },

  // --- work_energy_and_power (4) ---
  {
    concept: "work_energy_and_power",
    stem: "A person pushes a box across a floor with a constant horizontal force, but the box does not move. The work done on the box by this force is:",
    reasoning: "Work is defined as force times displacement in the direction of the force; with zero displacement, no work is done regardless of how much force is applied.",
    difficulty: 0.1,
    options: [
      { text: "Zero", correct: true },
      { text: "Positive but small", errorType: "prerequisite_misconception", why: "Work strictly requires displacement; without any displacement, the work done is exactly zero, not merely small." },
      { text: "Equal to the applied force alone", errorType: "unit_or_order_of_magnitude_error", why: "Confuses force (a distinct quantity) with work, which requires multiplying by displacement." },
      { text: "Negative, since energy is being expended by the person", errorType: "prerequisite_misconception", why: "The person may expend metabolic energy, but the work done on the box specifically is zero without displacement." },
    ],
  },
  {
    concept: "work_energy_and_power",
    stem: "By the work-energy theorem, the net work done on an object equals:",
    reasoning: "The work-energy theorem states that the net work done on an object equals its change in kinetic energy.",
    difficulty: 0.2,
    options: [
      { text: "Its change in kinetic energy", correct: true },
      { text: "Its change in potential energy only", errorType: "prerequisite_misconception", why: "The theorem specifically relates net work to kinetic, not potential, energy change." },
      { text: "Its total mechanical energy", errorType: "prerequisite_misconception", why: "Net work relates to the change in kinetic energy, not the object's total mechanical energy value." },
      { text: "Zero, for any object in motion", errorType: "prerequisite_misconception", why: "Net work is zero only when kinetic energy doesn't change, not for motion in general." },
    ],
  },
  {
    concept: "work_energy_and_power",
    stem: "Two machines lift identical loads to the same height, but Machine A takes half as long as Machine B. Compared to Machine B, Machine A:",
    reasoning: "Power = work/time. Since both machines do the same work (same load, same height) but Machine A takes half the time, Machine A's power output is twice that of Machine B.",
    difficulty: 0.3,
    options: [
      { text: "Has twice the power output", correct: true },
      { text: "Does twice as much work", errorType: "prerequisite_misconception", why: "The work done (force times height) is identical for both machines; only the time, and thus power, differs." },
      { text: "Has half the power output", errorType: "sign_or_direction_reversal", why: "Reverses the inverse relationship between time and power for equal work done." },
      { text: "Uses half as much energy overall", errorType: "prerequisite_misconception", why: "Both machines expend the same energy (equal to the work done); only the rate of energy transfer (power) differs." },
    ],
  },
  {
    concept: "work_energy_and_power",
    stem: "A ball rolls without friction down a frictionless ramp from height h. According to conservation of energy, its speed at the bottom depends on:",
    reasoning: "With no friction, all gravitational potential energy (mgh) converts to kinetic energy (½mv²); mass cancels out of this equation, so final speed depends only on the height h (and g), not on the ball's mass.",
    difficulty: 0.4,
    options: [
      { text: "The height h alone, not the ball's mass", correct: true },
      { text: "Both the height h and the ball's mass", errorType: "correct_concept_wrong_step_in_sequence", why: "Mass appears in both the potential and kinetic energy terms and cancels out algebraically, so it doesn't affect final speed." },
      { text: "The ball's mass alone, not the height", errorType: "prerequisite_misconception", why: "Height directly sets the initial potential energy available to convert to speed; mass cancels out, but height does not." },
      { text: "The ramp's angle alone, regardless of height", errorType: "prerequisite_misconception", why: "For a frictionless ramp, final speed depends on the height dropped, not the specific angle of descent." },
    ],
  },

  // --- passage: cp_calorimetry (5) ---
  {
    concept: "thermodynamics_and_enthalpy",
    type: "passage",
    passage: "cp_calorimetry",
    stem: "According to the passage, the fundamental assumption underlying the student's calculation is that:",
    reasoning: "The passage explicitly states the calculation assumes no heat is lost to the surroundings or the calorimeter, meaning all heat lost by the metal is gained by the water.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "No heat is lost to the surroundings or the calorimeter itself", correct: true },
      { text: "The metal and water reach the same final mass", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "Mass equality between metal and water is never assumed or relevant to the calculation described." },
      { text: "The metal's specific heat is already known in advance", correct: false, errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states the metal's specific heat is unknown and is what the student is solving for." },
      { text: "The water's temperature does not change during the experiment", correct: false, errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes the water warming from 22°C to 26°C, a temperature change." },
    ],
  },
  {
    concept: "thermodynamics_and_enthalpy",
    type: "passage",
    passage: "cp_calorimetry",
    stem: "Based on the passage, the heat gained by the water can be calculated using:",
    reasoning: "The passage indicates the student uses water's known specific heat (4.18 J/g·°C) along with the measured mass and temperature change of the water, i.e., q = mcΔT applied to the water.",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "The water's mass, its known specific heat, and its measured temperature change", correct: true },
      { text: "The metal's mass and its unknown specific heat", errorType: "passage_detail_misread_or_over_extrapolated", why: "The metal's specific heat is exactly the unknown quantity being solved for, not an input for calculating heat gained by water." },
      { text: "Only the final equilibrium temperature, with no other measurements", errorType: "passage_detail_misread_or_over_extrapolated", why: "The calculation requires the water's initial temperature and mass as well, not the final temperature alone." },
      { text: "The calorimeter's own heat capacity", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage explicitly assumes no heat is absorbed by the calorimeter itself, so its heat capacity isn't part of the calculation." },
    ],
  },
  {
    concept: "thermodynamics_and_enthalpy",
    type: "passage",
    passage: "cp_calorimetry",
    stem: "If, contrary to the passage's assumption, some heat actually escaped to the surroundings during the experiment, the calculated specific heat of the metal would most likely be:",
    reasoning: "If heat escapes to the surroundings, the water receives less heat than the metal actually lost, but the calculation (assuming all heat lost by the metal went to the water) would attribute the full heat loss to the metal's specific heat calculation based on the water's smaller-than-true temperature rise, leading to an underestimated specific heat for the metal.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Underestimated, since some of the metal's true heat loss wouldn't show up as measured water heating", correct: true },
      { text: "Overestimated, since the water would appear to gain more heat than it actually did", errorType: "outside_knowledge_not_supported_by_passage", why: "Heat escaping to the surroundings reduces, not increases, the water's measured temperature rise relative to the true heat lost by the metal." },
      { text: "Unaffected, since specific heat is an intrinsic property independent of experimental losses", errorType: "prerequisite_misconception", why: "While the true specific heat is intrinsic, the calculated (measured) value in this experiment would be affected by unaccounted heat loss." },
      { text: "Impossible to estimate without knowing the calorimeter's material", errorType: "outside_knowledge_not_supported_by_passage", why: "The direction of the error (under- vs over-estimate) can be reasoned out from the heat-loss scenario without needing calorimeter material details." },
    ],
  },
  {
    concept: "thermodynamics_and_enthalpy",
    type: "passage",
    passage: "cp_calorimetry",
    stem: "Suppose the student repeated the experiment with a metal sample of the same mass but a much higher specific heat than the original. Compared to the original trial, the final equilibrium temperature would most likely be:",
    reasoning: "A higher specific heat means the metal releases more heat per degree it cools; for the same mass and starting temperature, this larger heat release would warm the water more, producing a higher final equilibrium temperature than in the original trial.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Higher than in the original trial", correct: true },
      { text: "Lower than in the original trial", errorType: "sign_or_direction_reversal", why: "A metal with higher specific heat releases more heat as it cools by a given amount, which would raise, not lower, the final water temperature." },
      { text: "Exactly the same as in the original trial", errorType: "outside_knowledge_not_supported_by_passage", why: "Specific heat directly determines how much heat is released per degree of cooling, so changing it changes the heat transferred and thus the final temperature." },
      { text: "Impossible to predict without knowing the metal's mass", errorType: "passage_detail_misread_or_over_extrapolated", why: "The scenario specifies the mass is unchanged from the original trial, so mass is not the uncertain variable here." },
    ],
  },
  {
    concept: "thermodynamics_and_enthalpy",
    type: "passage",
    passage: "cp_calorimetry",
    stem: "The method described in the passage for identifying the unknown metal relies most directly on the principle that:",
    reasoning: "The entire method depends on specific heat being a characteristic, identifiable property of a substance — comparing the calculated value to a reference table only makes sense if specific heat reliably distinguishes one metal from another.",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "Specific heat is a characteristic property that can help identify a substance", correct: true },
      { text: "All metals have identical specific heat values", errorType: "outside_knowledge_not_supported_by_passage", why: "If all metals shared the same specific heat, comparing to a reference table could never distinguish between them, undermining the entire method." },
      { text: "Water's specific heat changes depending on which metal is added", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage treats water's specific heat as a fixed, known constant (4.18 J/g·°C), not something that varies with the metal used." },
      { text: "Heat capacity and specific heat are unrelated quantities", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's calculation directly relies on the relationship between heat, mass, specific heat, and temperature change, not on treating these as unrelated." },
    ],
  },

  // --- passage: cp_projectile_lab (5) ---
  {
    concept: "kinematics_and_forces",
    type: "passage",
    passage: "cp_projectile_lab",
    stem: "According to the passage, the lab group's method for predicting the landing distance relies on treating the ball's motion as:",
    reasoning: "The passage explicitly states the group analyzes horizontal and vertical motion independently, using the horizontal speed and a separately calculated fall time.",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Two independent components: constant horizontal velocity and free-fall vertical motion", correct: true },
      { text: "A single combined motion that cannot be separated into components", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes analyzing the two directions of motion independently, the opposite of this claim." },
      { text: "Uniformly accelerated motion in both the horizontal and vertical directions", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes constant (unaccelerated) horizontal motion, only the vertical motion is accelerated." },
      { text: "Motion identical to an object thrown straight downward with the same initial speed", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes the ball launched horizontally, with vertical motion equivalent to being dropped, not thrown downward with initial speed." },
    ],
  },
  {
    concept: "kinematics_and_forces",
    type: "passage",
    passage: "cp_projectile_lab",
    stem: "The passage states the ball's vertical motion is 'exactly as if it had simply been dropped from the same height.' This implies that the ball's time to reach the floor:",
    reasoning: "If the vertical motion is equivalent to being dropped (same initial vertical velocity of zero, same acceleration g), the time to fall a given height is identical regardless of horizontal speed — this is the classic independence of horizontal and vertical motion in projectile problems.",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "Does not depend on the ball's horizontal launch speed", correct: true },
      { text: "Would be shorter than if the ball were simply dropped", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly equates the vertical motion with simply being dropped, implying identical, not shorter, fall time." },
      { text: "Would be longer than if the ball were simply dropped", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly equates the fall time to that of an object simply being dropped, not a longer time." },
      { text: "Depends on both the horizontal speed and the table height together", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage isolates vertical fall time as dependent only on height (like a dropped object), independent of horizontal speed." },
    ],
  },
  {
    concept: "kinematics_and_forces",
    type: "passage",
    passage: "cp_projectile_lab",
    stem: "If the lab group doubled the ball's initial horizontal launch speed to 6.0 m/s while keeping the same table height, the predicted landing distance from the table's edge would:",
    reasoning: "Since fall time depends only on height (unchanged), and landing distance = horizontal speed × fall time, doubling horizontal speed while keeping fall time constant doubles the predicted landing distance.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "Double", correct: true },
      { text: "Quadruple", errorType: "unit_or_order_of_magnitude_error", why: "Incorrectly squares the effect of doubling speed, when landing distance scales linearly with horizontal speed at fixed fall time." },
      { text: "Stay the same, since fall time is unaffected by horizontal speed", errorType: "correct_concept_wrong_step_in_sequence", why: "Correctly notes fall time is unaffected, but landing distance is the product of horizontal speed and (unchanged) fall time, so it still changes proportionally with speed." },
      { text: "Be cut in half", errorType: "sign_or_direction_reversal", why: "Reverses the direct proportionality between horizontal speed and landing distance at fixed fall time." },
    ],
  },
  {
    concept: "kinematics_and_forces",
    type: "passage",
    passage: "cp_projectile_lab",
    stem: "Suppose the table height were increased substantially while horizontal launch speed stayed at 3.0 m/s. Based on the method described in the passage, the predicted landing distance would:",
    reasoning: "A greater height increases the vertical fall time (per the free-fall equations), and since landing distance = horizontal speed × fall time, a longer fall time at the same horizontal speed produces a longer predicted landing distance.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "Increase, because fall time would increase and horizontal speed is unchanged", correct: true },
      { text: "Decrease, because the ball would spend less time in the air", errorType: "sign_or_direction_reversal", why: "A greater height increases, rather than decreases, the fall time based on the free-fall relationship the passage relies on." },
      { text: "Stay exactly the same, since horizontal speed is the only relevant variable", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage's method explicitly calculates fall time from the table height, meaning height change does affect the predicted landing distance." },
      { text: "Become impossible to calculate using the method described", errorType: "outside_knowledge_not_supported_by_passage", why: "The same method (calculate fall time from height, multiply by horizontal speed) still applies straightforwardly at a different height." },
    ],
  },
  {
    concept: "kinematics_and_forces",
    type: "passage",
    passage: "cp_projectile_lab",
    stem: "The passage's approach of analyzing horizontal and vertical motion 'independently' depends most fundamentally on the fact that, for this projectile, gravity:",
    reasoning: "The independence of horizontal and vertical motion in projectile analysis relies on gravity acting purely vertically (with no horizontal component), so it affects only the vertical velocity while leaving horizontal velocity unaffected throughout the flight.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Acts only in the vertical direction, with no horizontal component", correct: true },
      { text: "Acts equally in both the horizontal and vertical directions", errorType: "outside_knowledge_not_supported_by_passage", why: "If gravity had a horizontal component, horizontal velocity would not remain constant, undermining the independent-components method the passage describes." },
      { text: "Only affects the ball after it leaves the table's edge", errorType: "outside_knowledge_not_supported_by_passage", why: "Gravity acts on the ball continuously; nothing in the passage suggests gravity is absent before launch and only begins afterward." },
      { text: "Is stronger on the vertical component than on the horizontal component of velocity", errorType: "outside_knowledge_not_supported_by_passage", why: "Gravity doesn't act on 'components of velocity' with different strengths; it exerts a single downward force, which is why it has no horizontal effect at all." },
    ],
  },
];
