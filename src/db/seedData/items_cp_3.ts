import type { ItemDef } from "./types";

export const itemsCp3: ItemDef[] = [
  // --- log_math_estimation (2) ---
  {
    concept: "log_math_estimation",
    stem: "A quantity increases from 10² to 10⁵. This represents an increase of:",
    reasoning: "The difference in exponents (5 − 2 = 3) gives the number of orders of magnitude, corresponding to a 10³ = 1000-fold increase.",
    difficulty: 0.1,
    options: [
      { text: "3 orders of magnitude (1000-fold)", correct: true },
      { text: "5 orders of magnitude (100,000-fold)", errorType: "prerequisite_misconception", why: "Uses the final exponent alone instead of the difference between final and initial exponents." },
      { text: "2 orders of magnitude (100-fold)", errorType: "prerequisite_misconception", why: "Uses the initial exponent alone instead of the difference between the two." },
      { text: "1000 orders of magnitude", errorType: "unit_or_order_of_magnitude_error", why: "Confuses the fold-change value itself with the count of orders of magnitude." },
    ],
  },
  {
    concept: "log_math_estimation",
    stem: "Given log(2) ≈ 0.3, the value of log(0.02) is closest to:",
    reasoning: "log(0.02) = log(2) + log(10⁻²) = 0.3 − 2 = −1.7.",
    difficulty: 0.4,
    options: [
      { text: "-1.7", correct: true },
      { text: "1.7", errorType: "sign_or_direction_reversal", why: "Drops the negative sign that results from the number being less than 1." },
      { text: "-0.3", errorType: "correct_concept_wrong_step_in_sequence", why: "Uses log(2) alone without accounting for the additional factor of 10⁻²." },
      { text: "-2.3", errorType: "unit_or_order_of_magnitude_error", why: "Subtracts log(2) from −2 instead of adding it." },
    ],
  },

  // --- acid_base_titration (2) ---
  {
    concept: "acid_base_titration",
    stem: "A titration curve for a weak base titrated with a strong acid reaches its equivalence point at a pH:",
    reasoning: "At the equivalence point of a weak base/strong acid titration, the solution contains the weak base's conjugate acid, which hydrolyzes water to produce excess H+, giving a pH below 7.",
    difficulty: 0.4,
    options: [
      { text: "Below 7", correct: true },
      { text: "Above 7", errorType: "sign_or_direction_reversal", why: "Describes a weak acid/strong base titration's equivalence point, not weak base/strong acid." },
      { text: "Exactly 7", errorType: "prerequisite_misconception", why: "pH 7 at equivalence only occurs for strong acid/strong base titrations." },
      { text: "Undefined without knowing the base's concentration", errorType: "prerequisite_misconception", why: "The direction (below 7) is determined by the hydrolysis chemistry, not by the specific concentration used." },
    ],
  },
  {
    concept: "acid_base_titration",
    stem: "An indicator used for a titration should be chosen so that its color-change range:",
    reasoning: "An appropriate indicator changes color at a pH close to the titration's equivalence point, ensuring the visible color change coincides with the true stoichiometric endpoint.",
    difficulty: 0.3,
    options: [
      { text: "Overlaps with the pH at the equivalence point", correct: true },
      { text: "Overlaps with pH 7 regardless of the titration type", errorType: "prerequisite_misconception", why: "The correct choice depends on the actual equivalence point pH, which is only 7 for strong acid/strong base titrations." },
      { text: "Is as far from the equivalence point as possible", errorType: "sign_or_direction_reversal", why: "Reverses the actual requirement; a useful indicator changes color near, not far from, the equivalence point." },
      { text: "Matches the initial pH of the analyte solution", errorType: "prerequisite_misconception", why: "The indicator should signal the equivalence point, not the starting pH before any titrant is added." },
    ],
  },

  // --- amino_acid_pKa_reasoning (2) ---
  {
    concept: "amino_acid_pKa_reasoning",
    stem: "Glutamate's side chain carboxyl group has a pKa near 4.3. At the stomach's highly acidic pH (~2), this side chain is predominantly:",
    reasoning: "At pH well below the side chain's pKa, the group remains protonated (uncharged, -COOH form) rather than deprotonated.",
    difficulty: 0.4,
    options: [
      { text: "Protonated and uncharged", correct: true },
      { text: "Deprotonated and negatively charged", errorType: "sign_or_direction_reversal", why: "Reverses which form predominates when pH is well below the pKa." },
      { text: "Positively charged", errorType: "prerequisite_misconception", why: "An acidic side chain does not become positively charged under any typical pH condition." },
      { text: "Unaffected by pH", errorType: "prerequisite_misconception", why: "Ignores that this is a titratable group whose protonation state depends directly on pH relative to its pKa." },
    ],
  },
  {
    concept: "amino_acid_pKa_reasoning",
    stem: "At a pH exactly equal to a side chain's pKa, the ratio of deprotonated to protonated forms of that group is:",
    reasoning: "By definition, pKa is the pH at which a group is 50% protonated and 50% deprotonated, giving a 1:1 ratio.",
    difficulty: 0.2,
    options: [
      { text: "1:1", correct: true },
      { text: "10:1", errorType: "prerequisite_misconception", why: "That ratio would apply one pH unit above the pKa, not exactly at it." },
      { text: "1:10", errorType: "prerequisite_misconception", why: "That ratio would apply one pH unit below the pKa, not exactly at it." },
      { text: "100% deprotonated", errorType: "prerequisite_misconception", why: "Full deprotonation occurs well above the pKa, not exactly at it." },
    ],
  },

  // --- buffers_and_henderson_hasselbalch (2) ---
  {
    concept: "buffers_and_henderson_hasselbalch",
    stem: "A buffer solution's capacity to resist pH change is exhausted when:",
    reasoning: "A buffer's capacity is exhausted once enough acid or base has been added to convert nearly all of one buffer component into the other, leaving little of the original species to continue neutralizing further additions.",
    difficulty: 0.4,
    options: [
      { text: "Nearly all of one buffer component has been converted into the other", correct: true },
      { text: "The pH reaches exactly 7", errorType: "prerequisite_misconception", why: "Buffer exhaustion is tied to depleting one of the conjugate components, not to reaching a fixed pH of 7." },
      { text: "The solution is diluted with more water", errorType: "prerequisite_misconception", why: "Dilution changes the buffer's absolute capacity somewhat but does not, by itself, mean the buffer's components have been consumed." },
      { text: "The temperature of the solution increases", errorType: "outside_knowledge_not_supported_by_passage", why: "Buffer capacity exhaustion is fundamentally about the relative amounts of acid/base components, not primarily about temperature." },
    ],
  },
  {
    concept: "buffers_and_henderson_hasselbalch",
    stem: "Given a weak acid with pKa = 4.76, a buffer at pH 5.76 would have an [A-]/[HA] ratio of approximately:",
    reasoning: "pH − pKa = 5.76 − 4.76 = 1, so [A-]/[HA] = 10¹ = 10.",
    difficulty: 0.4,
    options: [
      { text: "10", correct: true },
      { text: "0.1", errorType: "reciprocal_or_inverted_relationship", why: "Inverts the ratio, giving the reciprocal of the correct value." },
      { text: "1", errorType: "prerequisite_misconception", why: "That ratio would hold only if pH exactly equaled pKa, which it does not here." },
      { text: "100", errorType: "unit_or_order_of_magnitude_error", why: "Squares the base-10 exponent instead of simply raising 10 to the power of the pH-pKa difference." },
    ],
  },

  // --- equilibrium_and_le_chatelier (2) ---
  {
    concept: "equilibrium_and_le_chatelier",
    stem: "A reaction at equilibrium has reactants added to increase their concentration. According to Le Chatelier's principle, the equilibrium will shift:",
    reasoning: "Adding more reactant increases its concentration above the equilibrium value; the system responds by shifting forward (toward products) to partially consume the added reactant.",
    difficulty: 0.1,
    options: [
      { text: "Toward products", correct: true },
      { text: "Toward reactants", errorType: "sign_or_direction_reversal", why: "Reverses the direction the system shifts in response to added reactant." },
      { text: "It does not shift at all", errorType: "prerequisite_misconception", why: "Changing a species' concentration is exactly the kind of disturbance Le Chatelier's principle predicts a shift in response to." },
      { text: "Toward whichever side has fewer total moles of gas", errorType: "outside_knowledge_not_supported_by_passage", why: "That rule applies specifically to pressure/volume changes, not to simply adding more of one reactant." },
    ],
  },
  {
    concept: "equilibrium_and_le_chatelier",
    stem: "A very large equilibrium constant (Keq >> 1) for a reaction indicates that, at equilibrium, the reaction mixture:",
    reasoning: "A very large Keq means the ratio of products to reactants at equilibrium strongly favors products, i.e., the reaction proceeds nearly to completion.",
    difficulty: 0.3,
    options: [
      { text: "Strongly favors products", correct: true },
      { text: "Strongly favors reactants", errorType: "sign_or_direction_reversal", why: "Reverses what a large Keq value indicates about the equilibrium mixture's composition." },
      { text: "Contains equal amounts of reactants and products", errorType: "prerequisite_misconception", why: "Equal amounts would correspond to Keq ≈ 1, not a very large value." },
      { text: "Has already fully reacted, with no reactants remaining at all", errorType: "prerequisite_misconception", why: "Even a very large Keq implies some small amount of reactant remains at true equilibrium, not literally zero." },
    ],
  },

  // --- redox_and_electrochemistry (2) ---
  {
    concept: "redox_and_electrochemistry",
    stem: "In a redox reaction, the species that loses electrons is:",
    reasoning: "Oxidation is defined as the loss of electrons, so the species undergoing oxidation is the one losing electrons, and it functions as the reducing agent by donating electrons to another species.",
    difficulty: 0.1,
    options: [
      { text: "Oxidized, and it acts as the reducing agent", correct: true },
      { text: "Reduced, and it acts as the oxidizing agent", errorType: "sign_or_direction_reversal", why: "Reverses both the terminology and the electron-transfer direction." },
      { text: "Oxidized, and it acts as the oxidizing agent", errorType: "correct_concept_wrong_step_in_sequence", why: "Correctly identifies oxidation but mismatches it with the wrong agent label." },
      { text: "Neither oxidized nor reduced, since only gains of electrons count as redox changes", errorType: "prerequisite_misconception", why: "Losing electrons is itself a redox change (oxidation), just as gaining electrons is (reduction)." },
    ],
  },
  {
    concept: "redox_and_electrochemistry",
    stem: "In a concentration cell, where both half-cells contain the same electrode material but different ion concentrations, electron flow is driven by:",
    reasoning: "A concentration cell generates voltage purely from the concentration difference between the two half-cells (via the Nernst equation), without any difference in electrode material, driving the system toward equalizing concentrations.",
    difficulty: 0.5,
    options: [
      { text: "The difference in ion concentration between the two half-cells", correct: true },
      { text: "A difference in the standard reduction potentials of two different metals", errorType: "prerequisite_misconception", why: "A concentration cell specifically uses identical electrode materials in both half-cells; the driving force here is concentration, not differing standard potentials." },
      { text: "An external battery supplying the necessary voltage", errorType: "outside_knowledge_not_supported_by_passage", why: "A concentration cell is a galvanic cell generating its own voltage spontaneously, not one requiring an external power source." },
      { text: "The physical distance between the two electrodes", errorType: "outside_knowledge_not_supported_by_passage", why: "Electrode spacing is not what drives the cell's voltage; the concentration gradient between the half-cells is." },
    ],
  },

  // --- thermodynamics_and_enthalpy (2) ---
  {
    concept: "thermodynamics_and_enthalpy",
    stem: "The second law of thermodynamics states that for any spontaneous process, the total entropy of the universe (system plus surroundings):",
    reasoning: "The second law states the total entropy of an isolated system (or the universe, encompassing system and surroundings) increases for any spontaneous process.",
    difficulty: 0.2,
    options: [
      { text: "Increases", correct: true },
      { text: "Decreases", errorType: "sign_or_direction_reversal", why: "Reverses the second law's stated direction of total entropy change for spontaneous processes." },
      { text: "Remains exactly constant", errorType: "prerequisite_misconception", why: "A constant total entropy describes a reversible process at equilibrium, not a genuinely spontaneous one." },
      { text: "Depends entirely on whether the reaction is exothermic or endothermic", errorType: "prerequisite_misconception", why: "The second law's total-entropy-increase requirement holds for any spontaneous process, regardless of whether it releases or absorbs heat." },
    ],
  },
  {
    concept: "thermodynamics_and_enthalpy",
    stem: "An exothermic reaction releases heat to its surroundings. Regarding the surroundings' entropy, this release of heat tends to:",
    reasoning: "Heat flowing into the surroundings increases the surroundings' entropy, since entropy tends to increase when energy disperses into a larger reservoir at a given temperature.",
    difficulty: 0.4,
    options: [
      { text: "Increase the surroundings' entropy", correct: true },
      { text: "Decrease the surroundings' entropy", errorType: "sign_or_direction_reversal", why: "Reverses the actual effect of heat release into the surroundings on their entropy." },
      { text: "Have no effect on the surroundings' entropy at all", errorType: "prerequisite_misconception", why: "Heat transfer to the surroundings does affect their entropy; it's a standard part of total entropy accounting." },
      { text: "Only affect the system's entropy, never the surroundings'", errorType: "prerequisite_misconception", why: "Heat exchanged with the surroundings directly affects the surroundings' own entropy, not just the system's." },
    ],
  },

  // --- gas_laws_and_kinetic_theory (2) ---
  {
    concept: "gas_laws_and_kinetic_theory",
    stem: "According to the ideal gas law (PV = nRT), if the number of moles of gas is doubled while temperature and volume are held constant, the pressure:",
    reasoning: "With T and V fixed, PV = nRT shows pressure is directly proportional to the number of moles, so doubling n doubles P.",
    difficulty: 0.1,
    options: [
      { text: "Doubles", correct: true },
      { text: "Is halved", errorType: "reciprocal_or_inverted_relationship", why: "Inverts the direct proportionality between moles and pressure at fixed T and V." },
      { text: "Stays the same", errorType: "prerequisite_misconception", why: "Ignores that pressure depends directly on the number of moles present at fixed volume and temperature." },
      { text: "Quadruples", errorType: "unit_or_order_of_magnitude_error", why: "Incorrectly treats the relationship as quadratic rather than directly linear in moles." },
    ],
  },
  {
    concept: "gas_laws_and_kinetic_theory",
    stem: "Real gases deviate most from ideal gas behavior under conditions of:",
    reasoning: "Real gases deviate from ideal behavior most under high pressure and low temperature, where intermolecular attractions and the finite volume of gas molecules (both ignored by the ideal gas model) become significant.",
    difficulty: 0.4,
    options: [
      { text: "High pressure and low temperature", correct: true },
      { text: "Low pressure and high temperature", errorType: "sign_or_direction_reversal", why: "These are actually the conditions under which real gases behave most ideally, the opposite of maximal deviation." },
      { text: "Standard temperature and pressure only", errorType: "prerequisite_misconception", why: "Standard conditions are typically where the ideal gas approximation works reasonably well, not where deviation is greatest." },
      { text: "Any condition, since deviation from ideal behavior is constant", errorType: "prerequisite_misconception", why: "Deviation from ideal behavior varies systematically with pressure and temperature, not a fixed constant amount." },
    ],
  },

  // --- kinematics_and_forces (2) ---
  {
    concept: "kinematics_and_forces",
    stem: "An object undergoes uniformly accelerated motion starting from rest. The distance it travels is proportional to:",
    reasoning: "For constant acceleration starting from rest, d = ½at², so distance is proportional to the square of elapsed time.",
    difficulty: 0.3,
    options: [
      { text: "The square of the elapsed time", correct: true },
      { text: "The elapsed time itself, linearly", errorType: "correct_concept_wrong_step_in_sequence", why: "Describes distance under constant velocity, not constant acceleration from rest." },
      { text: "The square root of the elapsed time", errorType: "reciprocal_or_inverted_relationship", why: "Inverts the actual relationship; distance scales with time squared, not its square root." },
      { text: "The inverse of the elapsed time", errorType: "sign_or_direction_reversal", why: "Distance under constant acceleration increases with time, not decreases inversely with it." },
    ],
  },
  {
    concept: "kinematics_and_forces",
    stem: "Two objects of different mass collide and stick together (a perfectly inelastic collision). Which quantity is conserved in this collision?",
    reasoning: "Momentum is conserved in all collisions, including perfectly inelastic ones, even though kinetic energy is not conserved (some is lost to heat/deformation) in an inelastic collision.",
    difficulty: 0.4,
    options: [
      { text: "Total momentum", correct: true },
      { text: "Total kinetic energy", errorType: "prerequisite_misconception", why: "Kinetic energy is specifically not conserved in an inelastic collision, unlike momentum." },
      { text: "Neither momentum nor kinetic energy", errorType: "prerequisite_misconception", why: "Momentum remains conserved even though kinetic energy is not, in any type of collision." },
      { text: "Both momentum and kinetic energy", errorType: "prerequisite_misconception", why: "Only elastic collisions conserve both quantities; this collision is explicitly described as perfectly inelastic." },
    ],
  },

  // --- circuits_and_ohms_law (2) ---
  {
    concept: "circuits_and_ohms_law",
    stem: "A capacitor in a DC circuit, once fully charged, behaves like:",
    reasoning: "Once fully charged, a capacitor blocks further DC current flow, effectively acting like an open circuit (infinite resistance) in that branch.",
    difficulty: 0.4,
    options: [
      { text: "An open circuit, blocking further current flow", correct: true },
      { text: "A short circuit, allowing unlimited current flow", errorType: "sign_or_direction_reversal", why: "Reverses the actual behavior; a fully charged capacitor blocks, not permits unlimited, current." },
      { text: "A simple resistor with constant resistance", errorType: "prerequisite_misconception", why: "A capacitor's behavior changes dramatically as it charges, unlike a simple fixed resistor." },
      { text: "A battery, actively supplying current to the rest of the circuit", errorType: "prerequisite_misconception", why: "A fully charged capacitor in a DC circuit stops current flow rather than actively driving it, unlike a battery." },
    ],
  },
  {
    concept: "circuits_and_ohms_law",
    stem: "Kirchhoff's current law states that at any junction in a circuit, the total current flowing in must:",
    reasoning: "Kirchhoff's current law is a statement of charge conservation: the total current entering a junction must equal the total current leaving it.",
    difficulty: 0.2,
    options: [
      { text: "Equal the total current flowing out", correct: true },
      { text: "Always be greater than the current flowing out", errorType: "prerequisite_misconception", why: "Violates conservation of charge at a junction; current in must equal current out, not exceed it." },
      { text: "Always be less than the current flowing out", errorType: "prerequisite_misconception", why: "Also violates conservation of charge; charge cannot be created at a junction to produce more outflow than inflow." },
      { text: "Depend on the voltage source's polarity", errorType: "outside_knowledge_not_supported_by_passage", why: "Kirchhoff's current law is a general conservation principle independent of source polarity." },
    ],
  },

  // --- waves_sound_and_optics (2) ---
  {
    concept: "waves_sound_and_optics",
    stem: "Total internal reflection of light can occur only when light travels:",
    reasoning: "Total internal reflection requires light traveling from a medium of higher refractive index toward one of lower refractive index, and only when the angle of incidence exceeds the critical angle.",
    difficulty: 0.4,
    options: [
      { text: "From a medium of higher refractive index toward one of lower refractive index", correct: true },
      { text: "From a medium of lower refractive index toward one of higher refractive index", errorType: "sign_or_direction_reversal", why: "Reverses the required direction; total internal reflection cannot occur going into a denser medium." },
      { text: "Through a perfect vacuum only", errorType: "prerequisite_misconception", why: "Total internal reflection requires an interface between two media with different refractive indices, not travel through a vacuum alone." },
      { text: "At any angle of incidence, regardless of the media involved", errorType: "prerequisite_misconception", why: "Total internal reflection specifically requires the angle of incidence to exceed a critical angle, not any arbitrary angle." },
    ],
  },
  {
    concept: "waves_sound_and_optics",
    stem: "The loudness of a sound is most directly related to which property of the sound wave?",
    reasoning: "Loudness corresponds to a sound wave's amplitude (intensity), while pitch corresponds to frequency — two distinct perceptual qualities mapped to two distinct wave properties.",
    difficulty: 0.1,
    options: [
      { text: "Amplitude", correct: true },
      { text: "Frequency", errorType: "prerequisite_misconception", why: "Frequency determines pitch, not loudness." },
      { text: "Wavelength", errorType: "prerequisite_misconception", why: "Wavelength is inversely related to frequency and thus relates to pitch, not loudness." },
      { text: "Wave speed", errorType: "prerequisite_misconception", why: "Wave speed depends on the medium and is unrelated to the perceived loudness of a sound." },
    ],
  },

  // --- fluids_and_pressure (2) ---
  {
    concept: "fluids_and_pressure",
    stem: "According to the continuity equation, doubling the cross-sectional area of a pipe (with flow rate held constant) will cause the fluid's flow speed to:",
    reasoning: "Since A1v1 = A2v2 for an incompressible fluid, doubling area while keeping flow rate constant requires velocity to be halved.",
    difficulty: 0.3,
    options: [
      { text: "Be halved", correct: true },
      { text: "Double", errorType: "sign_or_direction_reversal", why: "Reverses the inverse relationship between cross-sectional area and flow speed at constant flow rate." },
      { text: "Stay the same", errorType: "prerequisite_misconception", why: "Ignores the continuity equation's requirement that area and speed trade off inversely." },
      { text: "Quadruple", errorType: "unit_or_order_of_magnitude_error", why: "Incorrectly squares the effect of doubling area instead of applying the direct inverse relationship." },
    ],
  },
  {
    concept: "fluids_and_pressure",
    stem: "The pressure at a depth h below the surface of a static fluid depends on:",
    reasoning: "Hydrostatic pressure at depth is given by P = P0 + ρgh, depending on the fluid's density, gravitational acceleration, and depth — not on the container's shape or cross-sectional area.",
    difficulty: 0.3,
    options: [
      { text: "The fluid's density and the depth below the surface", correct: true },
      { text: "The shape of the container holding the fluid", errorType: "prerequisite_misconception", why: "Hydrostatic pressure at a given depth is independent of container shape, depending only on density, gravity, and depth." },
      { text: "The total volume of fluid in the container", errorType: "prerequisite_misconception", why: "Total volume doesn't directly determine pressure at a specific depth; depth and density do." },
      { text: "The horizontal distance from the container's edge", errorType: "prerequisite_misconception", why: "Hydrostatic pressure at a given depth is uniform in all horizontal directions in a static fluid, not dependent on horizontal position." },
    ],
  },

  // --- stoichiometry_and_limiting_reagent (2) ---
  {
    concept: "stoichiometry_and_limiting_reagent",
    stem: "Once the theoretical yield of a reaction has been calculated from the limiting reagent, the actual yield obtained in the lab is typically:",
    reasoning: "Real reactions rarely proceed with perfect efficiency due to side reactions, incomplete reactions, or product loss during isolation, so actual yield is typically less than or equal to the theoretical maximum.",
    difficulty: 0.2,
    options: [
      { text: "Less than or equal to the theoretical yield", correct: true },
      { text: "Always exactly equal to the theoretical yield", errorType: "prerequisite_misconception", why: "Real-world inefficiencies almost always prevent achieving the exact theoretical maximum." },
      { text: "Always greater than the theoretical yield", errorType: "prerequisite_misconception", why: "The theoretical yield represents the maximum possible amount; exceeding it would violate stoichiometric limits (barring measurement error)." },
      { text: "Unrelated to the theoretical yield calculation", errorType: "prerequisite_misconception", why: "Percent yield calculations directly compare actual to theoretical yield, showing they are closely related, not unrelated." },
    ],
  },
  {
    concept: "stoichiometry_and_limiting_reagent",
    stem: "In the reaction 2H2 + O2 → 2H2O, if 4 moles of H2 react with 1 mole of O2, the limiting reagent is:",
    reasoning: "The stoichiometric ratio requires 2 moles H2 per mole O2, so 1 mole O2 would need only 2 moles H2; since 4 moles H2 are present (more than needed), O2 is the limiting reagent, fully consumed while H2 remains in excess.",
    difficulty: 0.4,
    options: [
      { text: "O2", correct: true },
      { text: "H2", errorType: "prerequisite_misconception", why: "H2 is actually in excess of what's needed to react with the available O2, not the limiting reagent." },
      { text: "Neither; both are fully consumed", errorType: "prerequisite_misconception", why: "The given quantities are not in the exact 2:1 ratio required, so one reagent (O2) is limiting while H2 remains in excess." },
      { text: "H2O, since it is the product", errorType: "prerequisite_misconception", why: "The limiting reagent must be one of the reactants, not the product being formed." },
    ],
  },

  // --- solutions_and_colligative_properties (2) ---
  {
    concept: "solutions_and_colligative_properties",
    stem: "Molality, used in colligative property calculations, is defined as:",
    reasoning: "Molality is defined as moles of solute per kilogram of solvent, distinct from molarity (moles of solute per liter of solution), and is preferred for colligative property calculations because it doesn't change with temperature-dependent volume changes.",
    difficulty: 0.2,
    options: [
      { text: "Moles of solute per kilogram of solvent", correct: true },
      { text: "Moles of solute per liter of solution", errorType: "prerequisite_misconception", why: "Describes molarity, a distinct concentration unit from molality." },
      { text: "Grams of solute per liter of solvent", errorType: "unit_or_order_of_magnitude_error", why: "Confuses the units; molality uses moles of solute, not grams, and kilograms of solvent, not liters." },
      { text: "Moles of solute per mole of solvent", errorType: "prerequisite_misconception", why: "Describes mole fraction, a different concentration measure from molality." },
    ],
  },
  {
    concept: "solutions_and_colligative_properties",
    stem: "A solution of a nonvolatile solute in a volatile solvent has a lower vapor pressure than the pure solvent alone. This phenomenon is explained by:",
    reasoning: "Adding a nonvolatile solute reduces the fraction of the solution's surface molecules that are solvent, reducing the rate of solvent evaporation and thus lowering the equilibrium vapor pressure compared to pure solvent (Raoult's law).",
    difficulty: 0.4,
    options: [
      { text: "Solute molecules occupying some of the surface, reducing the effective solvent concentration available to evaporate", correct: true },
      { text: "The solute molecules themselves evaporating faster than the solvent", errorType: "prerequisite_misconception", why: "The solute is specified as nonvolatile, meaning it does not evaporate at all." },
      { text: "The solute reacting chemically with the solvent to destroy it", errorType: "outside_knowledge_not_supported_by_passage", why: "Vapor pressure lowering is a physical colligative effect, not the result of a chemical reaction consuming the solvent." },
      { text: "An increase in the solution's overall temperature", errorType: "outside_knowledge_not_supported_by_passage", why: "Vapor pressure lowering occurs at constant temperature; it isn't caused by a temperature increase." },
    ],
  },

  // --- nuclear_decay_and_half_life (2) ---
  {
    concept: "nuclear_decay_and_half_life",
    stem: "Gamma decay differs from alpha and beta decay in that gamma decay:",
    reasoning: "Gamma decay involves the emission of high-energy photons from an excited nucleus, releasing energy without changing the atomic number or mass number of the nucleus, unlike alpha or beta decay.",
    difficulty: 0.3,
    options: [
      { text: "Does not change the atomic number or mass number of the nucleus", correct: true },
      { text: "Changes the atomic number but not the mass number", errorType: "prerequisite_misconception", why: "Describes beta decay, not gamma decay, which changes neither quantity." },
      { text: "Changes the mass number but not the atomic number", errorType: "prerequisite_misconception", why: "Describes a hypothetical decay type not typical of gamma emission, which changes neither number." },
      { text: "Always occurs before any other type of nuclear decay", errorType: "outside_knowledge_not_supported_by_passage", why: "Gamma decay commonly follows alpha or beta decay (as the nucleus relaxes from an excited state), not a fixed temporal rule about occurring 'before' other decay types." },
    ],
  },
  {
    concept: "nuclear_decay_and_half_life",
    stem: "A radioactive sample decays such that 75% of the original amount has decayed after 20 days. The half-life of this isotope is approximately:",
    reasoning: "If 75% has decayed, 25% (1/4) remains, which is (1/2)² — two half-lives have elapsed in 20 days, so the half-life is 10 days.",
    difficulty: 0.5,
    options: [
      { text: "10 days", correct: true },
      { text: "5 days", errorType: "unit_or_order_of_magnitude_error", why: "Incorrectly divides the elapsed time by 4 (the remaining fraction's denominator) instead of by the number of half-lives (2)." },
      { text: "15 days", errorType: "correct_concept_wrong_step_in_sequence", why: "Treats 75% decayed as three-quarters of one half-life rather than recognizing it corresponds to exactly two half-lives." },
      { text: "20 days", errorType: "prerequisite_misconception", why: "Assumes only one half-life elapsed, but 75% decayed (25% remaining) actually corresponds to two half-lives." },
    ],
  },

  // --- work_energy_and_power (2) ---
  {
    concept: "work_energy_and_power",
    stem: "A spring is compressed, storing elastic potential energy. If the amount of compression is doubled, the elastic potential energy stored (assuming an ideal spring) is:",
    reasoning: "Elastic potential energy for an ideal spring is given by ½kx², proportional to the square of displacement; doubling compression quadruples the stored energy.",
    difficulty: 0.4,
    options: [
      { text: "Quadrupled", correct: true },
      { text: "Doubled", errorType: "correct_concept_wrong_step_in_sequence", why: "Treats elastic potential energy as linearly proportional to displacement instead of proportional to displacement squared." },
      { text: "Unchanged", errorType: "prerequisite_misconception", why: "Ignores that elastic potential energy depends directly on the amount of compression." },
      { text: "Increased eightfold", errorType: "unit_or_order_of_magnitude_error", why: "Overapplies the scaling, e.g. by cubing rather than squaring the compression ratio." },
    ],
  },
  {
    concept: "work_energy_and_power",
    stem: "In the absence of friction or air resistance, a pendulum's total mechanical energy at any point in its swing equals the sum of its:",
    reasoning: "Conservation of mechanical energy for an idealized pendulum: total mechanical energy is the sum of kinetic energy and gravitational potential energy, constant throughout the swing (absent friction/air resistance).",
    difficulty: 0.2,
    options: [
      { text: "Kinetic energy and gravitational potential energy", correct: true },
      { text: "Kinetic energy alone, since potential energy is lost during the swing", errorType: "prerequisite_misconception", why: "In an idealized frictionless pendulum, potential energy is converted to kinetic energy and back, not lost." },
      { text: "Gravitational potential energy alone, since the pendulum eventually stops", errorType: "prerequisite_misconception", why: "An idealized pendulum without friction or air resistance would not stop; total mechanical energy remains constant and includes both energy forms." },
      { text: "Thermal energy generated by the swinging motion", errorType: "prerequisite_misconception", why: "In the idealized frictionless case specified, no thermal energy is generated at all." },
    ],
  },

  // --- intermolecular_forces (4, plus 5 via passage) ---
  {
    concept: "intermolecular_forces",
    stem: "Hydrogen bonding, one of the strongest types of intermolecular force, requires a hydrogen atom bonded directly to which elements?",
    reasoning: "Hydrogen bonding specifically requires hydrogen covalently bonded to a small, highly electronegative atom — nitrogen, oxygen, or fluorine — creating a strongly polarized bond that can interact with a lone pair on a nearby electronegative atom.",
    difficulty: 0.2,
    options: [
      { text: "Nitrogen, oxygen, or fluorine", correct: true },
      { text: "Carbon or sulfur", errorType: "prerequisite_misconception", why: "Carbon and sulfur are not electronegative enough to create the strongly polarized bonds required for classic hydrogen bonding." },
      { text: "Any element in the periodic table", errorType: "prerequisite_misconception", why: "Hydrogen bonding specifically requires a small set of highly electronegative atoms (N, O, F), not any element." },
      { text: "Only noble gases", errorType: "prerequisite_misconception", why: "Noble gases are generally unreactive and do not form the covalent bonds to hydrogen required for hydrogen bonding." },
    ],
  },
  {
    concept: "intermolecular_forces",
    stem: "London dispersion forces arise from:",
    reasoning: "London dispersion forces arise from temporary, instantaneous fluctuations in electron distribution that create brief, momentary dipoles, which in turn induce complementary dipoles in neighboring molecules.",
    difficulty: 0.3,
    options: [
      { text: "Temporary fluctuations in electron distribution creating momentary dipoles", correct: true },
      { text: "Permanent, fixed dipole moments present in every molecule", errorType: "prerequisite_misconception", why: "Dispersion forces occur even in completely nonpolar molecules with no permanent dipole; they arise from transient, not permanent, charge fluctuations." },
      { text: "Full transfer of electrons between two atoms", errorType: "prerequisite_misconception", why: "Describes ionic bonding, an entirely different (much stronger, non-intermolecular) type of interaction." },
      { text: "Shared electron pairs between covalently bonded atoms", errorType: "prerequisite_misconception", why: "Describes covalent bonding, a type of intramolecular bond, not the intermolecular force being asked about." },
    ],
  },
  {
    concept: "intermolecular_forces",
    stem: "Comparing two molecules of similar size, one polar and one completely nonpolar, the polar molecule generally has a higher boiling point because it experiences:",
    reasoning: "Polar molecules experience dipole-dipole interactions in addition to the London dispersion forces present in all molecules, adding extra intermolecular attraction that must be overcome to boil, raising the boiling point relative to a similarly sized nonpolar molecule.",
    difficulty: 0.3,
    options: [
      { text: "Additional dipole-dipole interactions on top of dispersion forces", correct: true },
      { text: "Weaker dispersion forces than the nonpolar molecule", errorType: "prerequisite_misconception", why: "Dispersion forces depend mainly on size/polarizability, not polarity, so similarly sized molecules have comparable dispersion forces regardless of polarity." },
      { text: "Covalent bonds between separate molecules", errorType: "prerequisite_misconception", why: "Covalent bonds are intramolecular, holding atoms together within a single molecule, not linking separate molecules to each other." },
      { text: "A larger overall molecular mass", errorType: "outside_knowledge_not_supported_by_passage", why: "The molecules are specified as similar in size, so mass difference isn't the relevant factor; polarity (and the resulting dipole-dipole force) is." },
    ],
  },
  {
    concept: "intermolecular_forces",
    stem: "Water's unusually high boiling point compared to other molecules of similar molar mass is primarily attributed to:",
    reasoning: "Water's extensive hydrogen bonding network, enabled by its O-H bonds and two lone pairs on oxygen, produces unusually strong intermolecular attraction compared to molecules of similar size lacking this capability.",
    difficulty: 0.3,
    options: [
      { text: "Extensive hydrogen bonding between water molecules", correct: true },
      { text: "Ionic bonds formed between separate water molecules", errorType: "prerequisite_misconception", why: "Water molecules are held together by hydrogen bonds, a type of intermolecular force, not by ionic bonds." },
      { text: "Water's unusually large molar mass", errorType: "outside_knowledge_not_supported_by_passage", why: "The comparison is explicitly to molecules of similar molar mass, ruling out mass as the explanation." },
      { text: "Water's inability to form any intermolecular forces at all", errorType: "prerequisite_misconception", why: "Water's high boiling point results from unusually strong (not absent) intermolecular forces." },
    ],
  },

  // --- spectroscopy_and_electromagnetic_radiation (4, plus 5 via passage) ---
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    stem: "Within the electromagnetic spectrum, as wavelength decreases, photon energy:",
    reasoning: "Photon energy E = hc/λ is inversely proportional to wavelength, so as wavelength decreases, photon energy increases.",
    difficulty: 0.2,
    options: [
      { text: "Increases", correct: true },
      { text: "Decreases", errorType: "sign_or_direction_reversal", why: "Reverses the inverse relationship between wavelength and photon energy." },
      { text: "Stays the same", errorType: "prerequisite_misconception", why: "Ignores the direct dependence of photon energy on wavelength." },
      { text: "Depends only on the medium, not the wavelength", errorType: "prerequisite_misconception", why: "Photon energy is fundamentally tied to wavelength (or frequency) itself, per E = hc/λ." },
    ],
  },
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    stem: "In UV-visible spectroscopy, a compound with extensive conjugated pi-bond systems tends to absorb light at:",
    reasoning: "Extended conjugation lowers the energy gap between molecular orbitals (HOMO-LUMO gap), allowing absorption of lower-energy, longer-wavelength light, often shifting absorption into or beyond the visible range.",
    difficulty: 0.5,
    options: [
      { text: "Longer wavelengths than a similar compound with less conjugation", correct: true },
      { text: "Shorter wavelengths than a similar compound with less conjugation", errorType: "sign_or_direction_reversal", why: "Reverses the actual effect; more conjugation shifts absorption to longer, not shorter, wavelengths." },
      { text: "Exactly the same wavelength regardless of the degree of conjugation", errorType: "prerequisite_misconception", why: "The degree of conjugation directly affects the HOMO-LUMO gap and thus the absorbed wavelength." },
      { text: "Only in the infrared region, never the visible or UV region", errorType: "prerequisite_misconception", why: "Conjugated systems commonly absorb in the UV or visible range, which is the basis of UV-visible spectroscopy itself." },
    ],
  },
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    stem: "Nuclear magnetic resonance (NMR) spectroscopy relies on:",
    reasoning: "NMR spectroscopy exploits the magnetic properties of certain nuclei (like ¹H), which resonate at characteristic frequencies when placed in a strong external magnetic field, depending on their local chemical/electronic environment.",
    difficulty: 0.4,
    options: [
      { text: "The magnetic behavior of certain nuclei in a strong external magnetic field", correct: true },
      { text: "The vibration of chemical bonds when exposed to infrared light", errorType: "prerequisite_misconception", why: "Describes IR spectroscopy, a distinct technique from NMR." },
      { text: "The excitation of electrons to higher energy orbitals by UV light", errorType: "prerequisite_misconception", why: "Describes UV-visible spectroscopy, a distinct technique from NMR." },
      { text: "The radioactive decay of unstable nuclei", errorType: "prerequisite_misconception", why: "NMR relies on stable nuclei's magnetic resonance behavior, not on radioactive decay processes." },
    ],
  },
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    stem: "Mass spectrometry is used to determine a compound's:",
    reasoning: "Mass spectrometry ionizes a sample and measures the mass-to-charge ratio of the resulting fragments, allowing determination of molecular weight and structural information from characteristic fragmentation patterns.",
    difficulty: 0.3,
    options: [
      { text: "Molecular weight and structural fragmentation pattern", correct: true },
      { text: "Optical rotation of polarized light", errorType: "prerequisite_misconception", why: "Optical rotation is measured by polarimetry, a distinct technique unrelated to mass spectrometry." },
      { text: "Melting and boiling points directly", errorType: "prerequisite_misconception", why: "Melting and boiling points are measured by direct physical methods, not by mass spectrometry." },
      { text: "The rate of a chemical reaction over time", errorType: "prerequisite_misconception", why: "Reaction kinetics are studied by separate kinetic methods, not by mass spectrometry, which analyzes composition rather than rate." },
    ],
  },

  // --- passage: cp_solubility_lab (5) ---
  {
    concept: "intermolecular_forces",
    type: "passage",
    passage: "cp_solubility_lab",
    stem: "According to the passage, the principle guiding the student's predictions is best summarized as:",
    reasoning: "The passage explicitly states the student reasons from the principle 'like dissolves like.'",
    difficulty: 0.1,
    sirs: 1,
    options: [
      { text: "\"Like dissolves like\"", correct: true },
      { text: "\"Opposites attract\"", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly names the 'like dissolves like' principle, not an opposites-attract framing." },
      { text: "\"Heavier molecules always dissolve better\"", errorType: "outside_knowledge_not_supported_by_passage", why: "Molecular weight is not the principle the passage attributes to the student's reasoning." },
      { text: "\"All solids dissolve equally in water\"", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly predicts different solubility outcomes for different compounds, not equal solubility for all." },
    ],
  },
  {
    concept: "intermolecular_forces",
    type: "passage",
    passage: "cp_solubility_lab",
    stem: "Based on the passage, the student predicts the ionic salt will dissolve well in water because water molecules can:",
    reasoning: "The passage states the student predicts this because 'the strong dipole of water molecules can surround and stabilize individual ions, overcoming the ionic lattice energy.'",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Surround and stabilize individual ions, overcoming the lattice energy", correct: true },
      { text: "Form covalent bonds directly with the ions", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes water's dipole stabilizing ions through electrostatic interaction, not through forming new covalent bonds." },
      { text: "Evaporate quickly around the salt crystal", errorType: "outside_knowledge_not_supported_by_passage", why: "Evaporation is not the mechanism the passage describes for dissolving the ionic salt." },
      { text: "React chemically to neutralize the salt's charge", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes a physical stabilization via water's dipole, not a chemical neutralization reaction." },
    ],
  },
  {
    concept: "intermolecular_forces",
    type: "passage",
    passage: "cp_solubility_lab",
    stem: "According to the passage, the student predicts the nonpolar wax will dissolve poorly because water would have to:",
    reasoning: "The passage states water molecules 'would have to sacrifice favorable hydrogen bonds with each other to accommodate a molecule that can offer no comparable interaction in return.'",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "Sacrifice favorable hydrogen bonds with other water molecules for no comparable benefit", correct: true },
      { text: "Form new hydrogen bonds directly with the nonpolar wax molecule", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states the wax offers 'no comparable interaction in return,' meaning no new hydrogen bonds form with it." },
      { text: "Increase in overall temperature to melt the wax first", errorType: "outside_knowledge_not_supported_by_passage", why: "Temperature change is not part of the mechanism the passage describes for poor solubility." },
      { text: "Undergo a chemical reaction with the wax's carbon atoms", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes a physical intermolecular-force mismatch, not a chemical reaction between water and wax." },
    ],
  },
  {
    concept: "intermolecular_forces",
    type: "passage",
    passage: "cp_solubility_lab",
    stem: "Based on the reasoning described in the passage, a compound that is moderately polar but incapable of hydrogen bonding would be predicted to:",
    reasoning: "Since the passage's framework ties solubility to matching the type of intermolecular force available, a moderately polar compound (capable of dipole-dipole interaction with water's polarity, but not full hydrogen bonding) would be predicted to have intermediate solubility — better than a fully nonpolar compound, but not as high as an ionic or hydrogen-bonding compound.",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Dissolve moderately — better than the nonpolar wax, but not as well as the ionic salt", correct: true },
      { text: "Dissolve exactly as well as the ionic salt", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's framework attributes the ionic salt's high solubility specifically to strong ion-dipole stabilization, a stronger interaction than simple dipole-dipole attraction." },
      { text: "Dissolve exactly as poorly as the nonpolar wax", errorType: "outside_knowledge_not_supported_by_passage", why: "Some polarity should allow at least some favorable interaction with water, unlike the fully nonpolar wax the passage describes." },
      { text: "Not dissolve at all under any circumstances", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage's framework predicts a spectrum of solubility based on matching force types, not an absolute all-or-nothing outcome." },
    ],
  },
  {
    concept: "intermolecular_forces",
    type: "passage",
    passage: "cp_solubility_lab",
    stem: "The passage's overall reasoning approach relies most fundamentally on the idea that dissolving a solute requires:",
    reasoning: "The passage's entire framework compares the favorable interactions solute and solvent would form against each other versus the interactions each would give up — dissolving is framed as energetically favorable when new solute-solvent interactions can compensate for broken solvent-solvent and solute-solute interactions.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "New solute-solvent interactions that can compensate for interactions broken during dissolving", correct: true },
      { text: "The solute and solvent having identical molecular structures", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "The passage doesn't require identical structures, only compatible types of intermolecular force." },
      { text: "The complete absence of any intermolecular forces between solvent molecules", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "The passage explicitly discusses water's own strong hydrogen bonding network, which is far from an absence of intermolecular forces." },
      { text: "A chemical reaction between the solute and solvent", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "The passage discusses physical dissolution via intermolecular forces, not a chemical reaction transforming the solute." },
    ],
  },

  // --- passage: cp_ir_spectrum (5) ---
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    type: "passage",
    passage: "cp_ir_spectrum",
    stem: "According to the passage, IR spectroscopy works by measuring:",
    reasoning: "The passage states IR spectroscopy works 'by exposing a sample to a range of infrared frequencies and measuring which frequencies are absorbed.'",
    difficulty: 0.1,
    sirs: 1,
    options: [
      { text: "Which infrared frequencies are absorbed by the sample", correct: true },
      { text: "The exact mass of the sample molecule", errorType: "outside_knowledge_not_supported_by_passage", why: "Molecular mass determination is associated with mass spectrometry, not the IR absorption process the passage describes." },
      { text: "The optical rotation of the sample", errorType: "outside_knowledge_not_supported_by_passage", why: "Optical rotation is unrelated to the IR absorption mechanism the passage describes." },
      { text: "The radioactive decay rate of the sample", errorType: "outside_knowledge_not_supported_by_passage", why: "Radioactivity is unrelated to IR spectroscopy, which concerns absorption of infrared light by chemical bonds." },
    ],
  },
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    type: "passage",
    passage: "cp_ir_spectrum",
    stem: "According to the passage, a given chemical bond's IR absorption frequency depends on:",
    reasoning: "The passage states this frequency 'depends on the bond's strength and the masses of the atoms it connects.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "The bond's strength and the masses of the connected atoms", correct: true },
      { text: "The overall color of the compound", errorType: "outside_knowledge_not_supported_by_passage", why: "Visible color relates to UV-visible absorption, not the bond-vibration mechanism the passage describes for IR." },
      { text: "The total number of atoms in the entire molecule", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage attributes the absorption frequency to the specific bond's properties, not the total atom count of the whole molecule." },
      { text: "The temperature of the room during measurement", errorType: "outside_knowledge_not_supported_by_passage", why: "Room temperature is not identified in the passage as a determinant of a bond's characteristic absorption frequency." },
    ],
  },
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    type: "passage",
    passage: "cp_ir_spectrum",
    stem: "Based on the passage, a broad peak around 3300 wavenumbers in an IR spectrum would most strongly suggest the presence of:",
    reasoning: "The passage explicitly states 'a broad peak around 3300 wavenumbers suggesting an O-H or N-H bond.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "An O-H or N-H bond", correct: true },
      { text: "A C=O bond", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns the C=O bond to a different peak location, near 1700 wavenumbers, not 3300." },
      { text: "A carbon-carbon single bond", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage doesn't discuss carbon-carbon single bonds at this specific wavenumber region." },
      { text: "No bond at all; this indicates measurement error", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes this peak as a meaningful, identifiable signal, not an error." },
    ],
  },
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    type: "passage",
    passage: "cp_ir_spectrum",
    stem: "According to the passage, the 'fingerprint region' at lower wavenumbers is useful because it is often:",
    reasoning: "The passage states this region 'is often unique enough to a specific molecule to allow comparison against a reference library.'",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Unique enough to a specific molecule to allow comparison to a reference library", correct: true },
      { text: "Identical across all organic molecules, simplifying analysis", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes this region as distinctively unique to specific molecules, the opposite of being identical across compounds." },
      { text: "The easiest region to interpret without any reference materials", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes this region as complex, requiring comparison against a reference library, not as simple to interpret alone." },
      { text: "Only useful for inorganic compounds, not organic ones", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage doesn't restrict the fingerprint region's usefulness to inorganic compounds specifically." },
    ],
  },
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    type: "passage",
    passage: "cp_ir_spectrum",
    stem: "Based on the passage's description of the analysis process, a chemist examining an unknown compound's IR spectrum should:",
    reasoning: "The passage describes the process as looking 'first at the broad, strong stretching regions characteristic of easily identified groups...before examining the more complex fingerprint region' — a sequence from easily-identified functional groups to the more detailed fingerprint comparison.",
    difficulty: 0.4,
    sirs: 2,
    options: [
      { text: "Examine the easily identified functional-group peaks first, then the more complex fingerprint region", correct: true },
      { text: "Examine only the fingerprint region and ignore all other peaks", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes examining the more easily identified peaks first, not focusing exclusively on the fingerprint region." },
      { text: "Examine the fingerprint region first, before looking at any other peaks", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes the opposite order — broad functional-group peaks are examined before the fingerprint region." },
      { text: "Ignore the spectrum entirely and rely only on the compound's melting point", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes a systematic process of analyzing the IR spectrum itself, not disregarding it in favor of melting point." },
    ],
  },
];
