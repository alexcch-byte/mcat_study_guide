import type { ItemDef } from "./types";

export const itemsCp4: ItemDef[] = [
  // --- log_math_estimation (2) ---
  {
    concept: "log_math_estimation",
    stem: "Using log(5) ≈ 0.7, the value of log(500) is closest to:",
    reasoning: "log(500) = log(5) + log(100) = 0.7 + 2 = 2.7.",
    difficulty: 0.2,
    options: [
      { text: "2.7", correct: true },
      { text: "0.7", errorType: "correct_concept_wrong_step_in_sequence", why: "Omits adding log(100) = 2 for the order-of-magnitude component." },
      { text: "1.4", errorType: "unit_or_order_of_magnitude_error", why: "Doubles log(5) instead of adding log(100)." },
      { text: "5.7", errorType: "unit_or_order_of_magnitude_error", why: "Adds the wrong magnitude term (5 instead of 2) to log(5)." },
    ],
  },
  {
    concept: "log_math_estimation",
    stem: "A drug's concentration in the blood decreases from 80 mg/L to 10 mg/L. This represents a decrease of approximately how many half-lives' worth of exponential decay, if the decay is exponential?",
    reasoning: "80 → 40 → 20 → 10 is three successive halvings, i.e., (1/2)³ = 1/8 of the original, so three half-lives have elapsed.",
    difficulty: 0.4,
    options: [
      { text: "3 half-lives", correct: true },
      { text: "8 half-lives", errorType: "unit_or_order_of_magnitude_error", why: "Uses the fold-change denominator (8) directly instead of recognizing it as 2³, meaning 3 half-lives." },
      { text: "1 half-life", errorType: "prerequisite_misconception", why: "Treats the change as a single halving, ignoring that the concentration dropped by a factor of 8, not 2." },
      { text: "80 half-lives", errorType: "unit_or_order_of_magnitude_error", why: "Uses the initial concentration value directly instead of computing the number of halvings." },
    ],
  },

  // --- acid_base_titration (2) ---
  {
    concept: "acid_base_titration",
    stem: "A polyprotic acid such as H3PO4 has multiple equivalence points on its titration curve because it:",
    reasoning: "A polyprotic acid can donate more than one proton, with each dissociation step having its own pKa and requiring its own equivalent amount of base to neutralize, producing a separate equivalence point for each ionizable proton.",
    difficulty: 0.4,
    options: [
      { text: "Has multiple ionizable protons, each with a distinct dissociation step", correct: true },
      { text: "Reacts with multiple different bases simultaneously", errorType: "prerequisite_misconception", why: "The multiple equivalence points arise from the acid's own structure (multiple protons), not from reacting with several different bases." },
      { text: "Has an unusually high molecular weight", errorType: "outside_knowledge_not_supported_by_passage", why: "Molecular weight is unrelated to the number of equivalence points; the number of ionizable protons is what matters." },
      { text: "Is always a strong acid rather than a weak acid", errorType: "prerequisite_misconception", why: "Polyprotic behavior with multiple equivalence points is a structural property independent of whether the acid is strong or weak." },
    ],
  },
  {
    concept: "acid_base_titration",
    stem: "On a titration curve, the 'buffering region' before the equivalence point corresponds to the region where the curve's slope is:",
    reasoning: "The buffering region is characterized by a relatively flat (low-slope) portion of the curve, where pH changes slowly per unit of titrant added, in contrast to the steep slope near the equivalence point.",
    difficulty: 0.3,
    options: [
      { text: "Relatively flat (low slope)", correct: true },
      { text: "At its steepest", errorType: "sign_or_direction_reversal", why: "The steepest slope corresponds to the equivalence point region, not the flatter buffering region." },
      { text: "Exactly zero, meaning pH never changes at all", errorType: "prerequisite_misconception", why: "The buffering region resists large changes but the slope is not literally zero; some gradual pH change still occurs." },
      { text: "Undefined, since no titrant has been added yet in this region", errorType: "prerequisite_misconception", why: "The buffering region occurs partway through the titration, after some titrant has already been added, not before any addition." },
    ],
  },

  // --- amino_acid_pKa_reasoning (2) ---
  {
    concept: "amino_acid_pKa_reasoning",
    stem: "An amino acid side chain with a very low pKa (around 2) would, at physiological pH (~7.4), be almost entirely:",
    reasoning: "Since physiological pH is far above a pKa of 2, the group would be almost entirely deprotonated at that pH.",
    difficulty: 0.3,
    options: [
      { text: "Deprotonated", correct: true },
      { text: "Protonated", errorType: "sign_or_direction_reversal", why: "Reverses which form predominates when pH is far above the pKa." },
      { text: "Exactly 50% protonated and 50% deprotonated", errorType: "prerequisite_misconception", why: "That 1:1 ratio only holds when pH equals the pKa, not when pH is far above it." },
      { text: "Unaffected by the surrounding pH", errorType: "prerequisite_misconception", why: "Ignores that this is a titratable group whose protonation state is directly determined by pH relative to its pKa." },
    ],
  },
  {
    concept: "amino_acid_pKa_reasoning",
    stem: "Two amino acid side chains have pKa values of 4.0 and 10.5, respectively. At pH 7, which side chain is closer to being fully in one single protonation state (fully protonated or fully deprotonated), rather than a mixture?",
    reasoning: "Both side chains are more than 2 pH units from pH 7 (7−4=3, and 10.5−7=3.5), so both are nearly fully in one state; the side chain with pKa 4.0 is fractionally closer to pH 7's midpoint in log units among the two, but both are essentially fully resolved — pKa 10.5 is very slightly further from pH 7 (3.5 units vs. 3 units), making it marginally more fully protonated than the pKa 4.0 group is deprotonated.",
    difficulty: 0.6,
    options: [
      { text: "The side chain with pKa 10.5, since it is slightly further from pH 7 in log units", correct: true },
      { text: "The side chain with pKa 4.0, since lower pKa values are always more fully resolved", errorType: "prerequisite_misconception", why: "It's the distance from the solution pH (in log units), not the absolute pKa value, that determines how fully resolved a group's protonation state is." },
      { text: "Both are equally far from a single resolved state", errorType: "prerequisite_misconception", why: "Comparing distances (3 vs. 3.5 pH units), the two groups are not exactly equally far from pH 7." },
      { text: "Neither; at pH 7 both groups are exactly 50/50 mixtures", errorType: "prerequisite_misconception", why: "A 50/50 mixture would only occur if pH equaled the pKa, which is not the case for either group here." },
    ],
  },

  // --- buffers_and_henderson_hasselbalch (2) ---
  {
    concept: "buffers_and_henderson_hasselbalch",
    stem: "A buffer is made by mixing a weak acid with its conjugate base in a 3:1 ratio of conjugate base to acid ([A-]/[HA] = 3). If the acid's pKa is 5.0, the buffer's pH is closest to:",
    reasoning: "pH = pKa + log([A-]/[HA]) = 5.0 + log(3) ≈ 5.0 + 0.48 ≈ 5.5.",
    difficulty: 0.5,
    options: [
      { text: "5.5", correct: true },
      { text: "5.0", errorType: "correct_concept_wrong_step_in_sequence", why: "Ignores the log term entirely, treating pH as simply equal to pKa regardless of the actual ratio." },
      { text: "15", errorType: "unit_or_order_of_magnitude_error", why: "Multiplies pKa by the ratio (3) instead of adding the logarithm of the ratio." },
      { text: "1.67", errorType: "prerequisite_misconception", why: "Divides pKa by the ratio instead of adding the log of the ratio to pKa." },
    ],
  },
  {
    concept: "buffers_and_henderson_hasselbalch",
    stem: "Adding a small amount of strong acid to a buffer primarily converts some of the buffer's:",
    reasoning: "Added strong acid (H+) reacts with and is neutralized by the buffer's conjugate base component, converting some A- into HA, while the H+ added is consumed rather than freely raising [H+] substantially.",
    difficulty: 0.3,
    options: [
      { text: "Conjugate base into the weak acid form", correct: true },
      { text: "Weak acid into the conjugate base form", errorType: "sign_or_direction_reversal", why: "Reverses the direction; added strong acid converts base into acid form, not the other way around." },
      { text: "Water into hydronium ions only, with no effect on the buffer components", errorType: "prerequisite_misconception", why: "The added acid reacts specifically with the buffer's conjugate base component, not merely with water." },
      { text: "Weak acid directly into water and salt", errorType: "outside_knowledge_not_supported_by_passage", why: "This describes a full neutralization reaction, not the partial conversion between conjugate forms that defines buffering behavior." },
    ],
  },

  // --- equilibrium_and_le_chatelier (2) ---
  {
    concept: "equilibrium_and_le_chatelier",
    stem: "For the endothermic reaction A + B + heat ⇌ C, decreasing the temperature will shift the equilibrium:",
    reasoning: "Treating heat as a reactant in an endothermic reaction, decreasing temperature (removing heat) shifts equilibrium toward reactants, per Le Chatelier's principle.",
    difficulty: 0.3,
    options: [
      { text: "Toward reactants, decreasing [C]", correct: true },
      { text: "Toward products, increasing [C]", errorType: "sign_or_direction_reversal", why: "Reverses the effect of decreasing temperature on an endothermic reaction's equilibrium." },
      { text: "Not at all, since only pressure changes affect equilibrium", errorType: "prerequisite_misconception", why: "Temperature is one of the variables that does shift equilibrium position (and changes Keq itself), not just pressure." },
      { text: "Toward products only if a catalyst is also added", errorType: "prerequisite_misconception", why: "Catalysts don't affect equilibrium position; the temperature change alone determines the shift here." },
    ],
  },
  {
    concept: "equilibrium_and_le_chatelier",
    stem: "The reaction quotient Q is compared to Keq to predict the direction a reaction will shift to reach equilibrium. If Q < Keq, the reaction will proceed:",
    reasoning: "If Q is less than Keq, the ratio of products to reactants is currently below the equilibrium value, so the reaction proceeds forward (toward products) to increase Q until it equals Keq.",
    difficulty: 0.4,
    options: [
      { text: "Forward, toward products", correct: true },
      { text: "In reverse, toward reactants", errorType: "sign_or_direction_reversal", why: "Reverses the direction the reaction shifts when Q is less than Keq." },
      { text: "Not at all; the reaction is already at equilibrium", errorType: "prerequisite_misconception", why: "Q equal to Keq indicates equilibrium; Q less than Keq indicates the system is not yet at equilibrium and will shift." },
      { text: "In a direction that depends only on temperature, not on Q and Keq", errorType: "prerequisite_misconception", why: "The Q versus Keq comparison itself directly predicts the shift direction, independent of a separate temperature consideration." },
    ],
  },

  // --- redox_and_electrochemistry (2) ---
  {
    concept: "redox_and_electrochemistry",
    stem: "Balancing a redox reaction in acidic solution often requires adding H2O and H+ to balance oxygen and hydrogen atoms, respectively, in each half-reaction. This step is necessary because:",
    reasoning: "Redox half-reactions often involve species that gain or lose oxygen atoms; in aqueous acidic solution, water and protons are available to balance these atoms and charges without altering the actual redox chemistry, since they are naturally present in the solution.",
    difficulty: 0.4,
    options: [
      { text: "Water and protons are available in aqueous acidic solution to balance oxygen, hydrogen, and charge", correct: true },
      { text: "Oxygen atoms are never conserved in any chemical reaction", errorType: "prerequisite_misconception", why: "Oxygen atoms, like all atoms, must be conserved; H2O and H+ are added specifically to achieve this balance, not because oxygen conservation is abandoned." },
      { text: "All redox reactions produce water as their only product", errorType: "prerequisite_misconception", why: "Not all redox reactions produce water as a product; H2O and H+ are balancing tools reflecting the aqueous acidic environment, not a universal product." },
      { text: "This step is only used for reactions that do not involve any electron transfer", errorType: "prerequisite_misconception", why: "This balancing technique is specifically used for redox reactions, which by definition involve electron transfer." },
    ],
  },
  {
    concept: "redox_and_electrochemistry",
    stem: "A galvanic cell with E°cell = +0.5 V is allowed to run until it reaches equilibrium. At that point, E°cell (the standard potential) and the actual cell potential (E) are related such that:",
    reasoning: "At equilibrium, the actual cell potential E becomes zero (no further net electron flow), even though E°cell remains a fixed thermodynamic reference value describing the reaction under standard conditions — the two are distinct quantities describing different states.",
    difficulty: 0.6,
    options: [
      { text: "The actual cell potential E drops to zero, while E°cell remains a fixed reference value", correct: true },
      { text: "Both E and E°cell drop to zero simultaneously", errorType: "prerequisite_misconception", why: "E°cell is a fixed standard-state reference value and does not change as the cell operates; only the actual potential E changes as the reaction proceeds." },
      { text: "E°cell increases as the cell approaches equilibrium", errorType: "prerequisite_misconception", why: "E°cell is a constant reference value under standard conditions and does not increase as a running cell approaches equilibrium." },
      { text: "E and E°cell are always numerically identical at every point during operation", errorType: "prerequisite_misconception", why: "E and E°cell are only equal at the very start under standard conditions; as concentrations change during operation, actual E diverges from the fixed E°cell." },
    ],
  },

  // --- thermodynamics_and_enthalpy (2) ---
  {
    concept: "thermodynamics_and_enthalpy",
    stem: "Bond dissociation energy is defined as the energy required to break a specific chemical bond. Breaking bonds is always:",
    reasoning: "Breaking a chemical bond always requires energy input, making it an endothermic process; forming a bond, conversely, always releases energy (exothermic).",
    difficulty: 0.2,
    options: [
      { text: "Endothermic, requiring energy input", correct: true },
      { text: "Exothermic, releasing energy", errorType: "sign_or_direction_reversal", why: "Bond breaking requires energy input (endothermic); bond formation is what releases energy." },
      { text: "Thermally neutral, with no energy change involved", errorType: "prerequisite_misconception", why: "Breaking a bond always involves an energy cost, not zero net energy change." },
      { text: "Sometimes endothermic and sometimes exothermic, depending on the specific bond", errorType: "prerequisite_misconception", why: "Bond breaking is always endothermic by definition; the varying quantity is how much energy is required, not its sign." },
    ],
  },
  {
    concept: "thermodynamics_and_enthalpy",
    stem: "Using bond dissociation energies, the overall enthalpy change of a reaction can be estimated as:",
    reasoning: "This estimate is calculated as the energy required to break all bonds in the reactants (endothermic, positive) minus the energy released forming all bonds in the products (exothermic, so subtracted), i.e., ΔH ≈ (bonds broken) − (bonds formed).",
    difficulty: 0.4,
    options: [
      { text: "The energy to break reactant bonds minus the energy released forming product bonds", correct: true },
      { text: "The energy released forming product bonds minus the energy to break reactant bonds", errorType: "sign_or_direction_reversal", why: "Reverses the order of subtraction, flipping the sign of the resulting ΔH estimate." },
      { text: "The sum of all bond energies in both reactants and products added together", errorType: "prerequisite_misconception", why: "Simply summing (rather than subtracting) bond energies would not yield a meaningful net enthalpy change." },
      { text: "Always exactly zero, since bonds broken always equal bonds formed", errorType: "prerequisite_misconception", why: "The number of bonds may balance in some reactions, but the energies of those bonds generally differ, producing a nonzero net ΔH." },
    ],
  },

  // --- gas_laws_and_kinetic_theory (2) ---
  {
    concept: "gas_laws_and_kinetic_theory",
    stem: "According to Graham's law of effusion, a lighter gas will effuse through a small opening compared to a heavier gas:",
    reasoning: "Graham's law states effusion rate is inversely proportional to the square root of molar mass, so lighter gases effuse faster than heavier gases at the same temperature.",
    difficulty: 0.3,
    options: [
      { text: "Faster than the heavier gas", correct: true },
      { text: "Slower than the heavier gas", errorType: "sign_or_direction_reversal", why: "Reverses Graham's law's actual relationship between molar mass and effusion rate." },
      { text: "At exactly the same rate as the heavier gas", errorType: "prerequisite_misconception", why: "Graham's law specifically predicts a rate difference based on molar mass, not equal rates." },
      { text: "At a rate unrelated to its molar mass", errorType: "prerequisite_misconception", why: "Molar mass is precisely the variable Graham's law relates to effusion rate." },
    ],
  },
  {
    concept: "gas_laws_and_kinetic_theory",
    stem: "A sealed, rigid container holds a fixed amount of ideal gas. If the gas is heated, causing both temperature and pressure to increase while volume remains constant, this scenario is best described by:",
    reasoning: "With volume and moles fixed, this is Gay-Lussac's law: pressure is directly proportional to temperature (in Kelvin) at constant volume and amount of gas.",
    difficulty: 0.2,
    options: [
      { text: "Gay-Lussac's law", correct: true },
      { text: "Boyle's law", errorType: "prerequisite_misconception", why: "Boyle's law relates pressure and volume at constant temperature, not this scenario's pressure-temperature relationship at constant volume." },
      { text: "Charles's law", errorType: "prerequisite_misconception", why: "Charles's law relates volume and temperature at constant pressure, not pressure and temperature at constant volume." },
      { text: "Avogadro's law", errorType: "prerequisite_misconception", why: "Avogadro's law relates volume and moles at constant temperature and pressure, unrelated to this fixed-volume, fixed-mole scenario." },
    ],
  },

  // --- kinematics_and_forces (2) ---
  {
    concept: "kinematics_and_forces",
    stem: "A block on a frictionless inclined plane experiences a component of gravity acting parallel to the incline's surface. As the incline's angle increases (becomes steeper), this parallel component of gravitational force:",
    reasoning: "The component of gravity parallel to an incline is mg·sin(θ), which increases as the angle θ increases, up to a maximum of mg at a 90° (vertical) incline.",
    difficulty: 0.3,
    options: [
      { text: "Increases", correct: true },
      { text: "Decreases", errorType: "sign_or_direction_reversal", why: "Reverses the relationship between incline angle and the parallel component of gravity, which increases (not decreases) with steeper angles." },
      { text: "Stays the same regardless of angle", errorType: "prerequisite_misconception", why: "The parallel component explicitly depends on the sine of the incline angle, which changes as angle changes." },
      { text: "Becomes zero at any nonzero angle", errorType: "prerequisite_misconception", why: "The parallel component is zero only at a flat, 0° incline; it becomes nonzero and increases as soon as the incline has any angle." },
    ],
  },
  {
    concept: "kinematics_and_forces",
    stem: "Angular momentum of a rotating object is conserved in the absence of external torque. A figure skater who pulls their arms in during a spin (reducing their moment of inertia) will, as a result, spin:",
    reasoning: "Since angular momentum (L = Iω) is conserved, decreasing moment of inertia I must be compensated by an increase in angular velocity ω to keep L constant, so the skater spins faster.",
    difficulty: 0.4,
    options: [
      { text: "Faster", correct: true },
      { text: "Slower", errorType: "sign_or_direction_reversal", why: "Reverses the inverse relationship between moment of inertia and angular velocity when angular momentum is conserved." },
      { text: "At the same rate as before", errorType: "prerequisite_misconception", why: "Ignores that a decrease in moment of inertia, with angular momentum conserved, requires angular velocity to change." },
      { text: "Not at all, since angular momentum prevents any change in rotation", errorType: "prerequisite_misconception", why: "Conservation of angular momentum permits (and in this case requires) a change in angular velocity when moment of inertia changes." },
    ],
  },

  // --- circuits_and_ohms_law (2) ---
  {
    concept: "circuits_and_ohms_law",
    stem: "The equivalent resistance of two resistors R1 and R2 connected in parallel is given by 1/Req = 1/R1 + 1/R2. If R1 = R2 = 10 ohms, the equivalent resistance is:",
    reasoning: "1/Req = 1/10 + 1/10 = 2/10, so Req = 10/2 = 5 ohms.",
    difficulty: 0.3,
    options: [
      { text: "5 ohms", correct: true },
      { text: "20 ohms", errorType: "prerequisite_misconception", why: "Simply adds the two resistances as if they were in series, rather than combining them using the parallel formula." },
      { text: "10 ohms", errorType: "prerequisite_misconception", why: "Assumes the parallel combination equals a single resistor's value, ignoring that parallel resistance must be lower than either individual resistor." },
      { text: "0.2 ohms", errorType: "correct_concept_wrong_step_in_sequence", why: "Correctly computes 1/Req = 0.2 but forgets to take the reciprocal to find Req itself." },
    ],
  },
  {
    concept: "circuits_and_ohms_law",
    stem: "Electrical power dissipated by a resistor can also be calculated as P = V²/R. If the voltage across a fixed resistor is halved, the power dissipated:",
    reasoning: "Since P is proportional to V², halving V multiplies P by (1/2)² = 1/4, so power is reduced to one-fourth of its original value.",
    difficulty: 0.4,
    options: [
      { text: "Is reduced to one-fourth of its original value", correct: true },
      { text: "Is halved", errorType: "correct_concept_wrong_step_in_sequence", why: "Treats power as linearly proportional to voltage instead of proportional to voltage squared." },
      { text: "Stays the same", errorType: "prerequisite_misconception", why: "Ignores that power depends directly on voltage in this formula." },
      { text: "Is reduced to one-half squared, or doubled", errorType: "sign_or_direction_reversal", why: "Confuses the direction of the effect; reducing voltage reduces power, it does not double it." },
    ],
  },

  // --- waves_sound_and_optics (2) ---
  {
    concept: "waves_sound_and_optics",
    stem: "A concave mirror forms a real image of an object placed beyond its focal point. As the object moves farther from the mirror (still beyond the focal point), the image formed:",
    reasoning: "For a concave mirror with the object beyond the focal point, as object distance increases, image distance decreases and approaches the focal point, and the image becomes smaller — following the mirror equation's inverse relationship in this configuration.",
    difficulty: 0.5,
    options: [
      { text: "Moves closer to the focal point and becomes smaller", correct: true },
      { text: "Moves farther from the mirror and becomes larger", errorType: "sign_or_direction_reversal", why: "Reverses the actual trend; as the object moves away (beyond the focal point), the real image moves closer to the focal point and shrinks." },
      { text: "Stays in exactly the same position regardless of object distance", errorType: "prerequisite_misconception", why: "The mirror equation shows image position depends directly on object distance; it does not stay fixed as the object moves." },
      { text: "Becomes virtual once the object passes a certain distance", errorType: "prerequisite_misconception", why: "For a concave mirror, the image remains real as long as the object is beyond the focal point, regardless of how far away it is." },
    ],
  },
  {
    concept: "waves_sound_and_optics",
    stem: "Two coherent light sources produce an interference pattern on a screen. The bright fringes (constructive interference) occur where the path length difference between the two sources is:",
    reasoning: "Constructive interference occurs where the path difference is a whole-number multiple of the wavelength (0, λ, 2λ, ...), so the waves arrive in phase and reinforce each other.",
    difficulty: 0.4,
    options: [
      { text: "A whole-number multiple of the wavelength", correct: true },
      { text: "A half-integer multiple of the wavelength", errorType: "prerequisite_misconception", why: "A half-integer multiple of the wavelength corresponds to destructive interference (dark fringes), not constructive interference." },
      { text: "Exactly zero in every case", errorType: "prerequisite_misconception", why: "A zero path difference is one case of constructive interference, but any whole-number multiple of the wavelength also produces bright fringes, not only zero." },
      { text: "Unrelated to the wavelength of the light used", errorType: "prerequisite_misconception", why: "The interference pattern's fringe locations are directly determined by the wavelength, contrary to this claim." },
    ],
  },

  // --- fluids_and_pressure (1) ---
  {
    concept: "fluids_and_pressure",
    stem: "An object with density greater than the fluid it is placed in will:",
    reasoning: "If an object's density exceeds the surrounding fluid's density, its weight exceeds the maximum buoyant force the fluid can exert (equal to the weight of fluid displaced at full submersion), so the object sinks.",
    difficulty: 0.1,
    options: [
      { text: "Sink", correct: true },
      { text: "Float partially submerged", errorType: "prerequisite_misconception", why: "Partial floating occurs when the object's density is less than the fluid's, not greater." },
      { text: "Remain suspended at any depth with no net force", errorType: "prerequisite_misconception", why: "Neutral buoyancy (suspension) requires equal densities; greater object density produces a net downward force instead." },
      { text: "Float completely on the surface with no part submerged", errorType: "prerequisite_misconception", why: "An object denser than the fluid cannot be buoyed up at all; it sinks rather than floating fully above the surface." },
    ],
  },

  // --- stoichiometry_and_limiting_reagent (1) ---
  {
    concept: "stoichiometry_and_limiting_reagent",
    stem: "A chemist calculates the theoretical yield of a product using the balanced equation and the moles of limiting reagent available. This calculation assumes:",
    reasoning: "Theoretical yield calculations assume the reaction proceeds to 100% completion with perfect conversion of the limiting reagent into product, an idealized maximum rarely achieved exactly in practice.",
    difficulty: 0.3,
    options: [
      { text: "The reaction proceeds to 100% completion with perfect conversion", correct: true },
      { text: "Only 50% of the limiting reagent reacts", errorType: "prerequisite_misconception", why: "Theoretical yield specifically assumes full (100%), not partial, conversion of the limiting reagent." },
      { text: "The excess reagent is entirely consumed as well", errorType: "prerequisite_misconception", why: "By definition, the excess reagent is not fully consumed; some remains unreacted once the limiting reagent runs out." },
      { text: "No limiting reagent exists in the reaction", errorType: "prerequisite_misconception", why: "The theoretical yield calculation is specifically based on the amount of the limiting reagent present, not an absence of one." },
    ],
  },

  // --- solutions_and_colligative_properties (2) ---
  {
    concept: "solutions_and_colligative_properties",
    stem: "The van't Hoff factor (i) in colligative property calculations accounts for:",
    reasoning: "The van't Hoff factor accounts for the number of particles a solute actually dissociates into in solution (e.g., i ≈ 2 for NaCl, which dissociates into two ions), correcting simple colligative property formulas for ionic dissociation.",
    difficulty: 0.4,
    options: [
      { text: "The number of particles a solute dissociates into in solution", correct: true },
      { text: "The molar mass of the solvent", errorType: "prerequisite_misconception", why: "Solvent molar mass is a separate quantity from the van't Hoff factor, which specifically addresses solute dissociation." },
      { text: "The temperature at which the solution was prepared", errorType: "prerequisite_misconception", why: "Temperature is a separate variable in colligative property equations; the van't Hoff factor specifically corrects for particle dissociation." },
      { text: "The color of the resulting solution", errorType: "outside_knowledge_not_supported_by_passage", why: "Solution color is unrelated to colligative properties or the van't Hoff factor." },
    ],
  },
  {
    concept: "solutions_and_colligative_properties",
    stem: "Freezing point depression is calculated as ΔTf = i·Kf·m, where m is molality. A solution of 1 molal NaCl (i ≈ 2) would be expected to show a freezing point depression that is approximately how many times that of a 1 molal glucose solution (i = 1)?",
    reasoning: "Since ΔTf is directly proportional to i, and NaCl's i (≈2) is twice glucose's i (1) at the same molality, the NaCl solution's freezing point depression should be approximately twice as large.",
    difficulty: 0.4,
    options: [
      { text: "About twice as large", correct: true },
      { text: "About half as large", errorType: "reciprocal_or_inverted_relationship", why: "Inverts the relationship; a higher van't Hoff factor produces a larger, not smaller, freezing point depression." },
      { text: "Exactly the same", errorType: "prerequisite_misconception", why: "Ignores the van't Hoff factor's role in scaling the colligative property; equal molality does not mean equal effective particle concentration." },
      { text: "About four times as large", errorType: "unit_or_order_of_magnitude_error", why: "Squares the van't Hoff factor's effect instead of applying it directly and linearly, as the ΔTf formula specifies." },
    ],
  },

  // --- nuclear_decay_and_half_life (2) ---
  {
    concept: "nuclear_decay_and_half_life",
    stem: "Carbon-14 dating relies on the assumption that living organisms maintain a roughly constant ratio of carbon-14 to carbon-12 while alive, primarily because:",
    reasoning: "While alive, organisms continuously exchange carbon with their environment (via respiration, feeding, or photosynthesis), maintaining the same C-14/C-12 ratio as the atmosphere; only after death does this exchange stop and the C-14 begin to decay without replenishment.",
    difficulty: 0.4,
    options: [
      { text: "They continuously exchange carbon with the environment while alive, maintaining the atmospheric ratio", correct: true },
      { text: "Carbon-14 does not decay at all while an organism is alive", errorType: "prerequisite_misconception", why: "Carbon-14 decays continuously regardless of whether the organism is alive; what changes after death is the loss of ongoing replenishment, not decay stopping while alive." },
      { text: "Living organisms convert all their carbon-12 into carbon-14 while alive", errorType: "prerequisite_misconception", why: "Organisms don't convert one isotope into another; they simply exchange carbon with the environment, maintaining the natural isotope ratio." },
      { text: "Carbon-14 is created exclusively inside living organisms", errorType: "outside_knowledge_not_supported_by_passage", why: "Carbon-14 is primarily created in the upper atmosphere from cosmic ray interactions, not inside living organisms." },
    ],
  },
  {
    concept: "nuclear_decay_and_half_life",
    stem: "A sample initially contains 100 g of a radioactive isotope with a half-life of 5 years. After 15 years, approximately how much of the isotope remains?",
    reasoning: "15 years is 3 half-lives, so remaining amount = 100 × (1/2)³ = 100/8 = 12.5 g.",
    difficulty: 0.3,
    options: [
      { text: "12.5 g", correct: true },
      { text: "25 g", errorType: "unit_or_order_of_magnitude_error", why: "Treats 15 years as only 2 half-lives instead of correctly calculating 3 half-lives (15/5=3)." },
      { text: "33.3 g", errorType: "correct_concept_wrong_step_in_sequence", why: "Divides the initial amount by the number of half-lives (3) instead of by 2 raised to that power (2³=8)." },
      { text: "50 g", errorType: "unit_or_order_of_magnitude_error", why: "Treats 15 years as only 1 half-life instead of correctly calculating 3 half-lives." },
    ],
  },

  // --- work_energy_and_power (2) ---
  {
    concept: "work_energy_and_power",
    stem: "A crane lifts a 100 kg object 10 meters straight up in 20 seconds. The average power output of the crane, ignoring efficiency losses, is closest to (using g ≈ 10 m/s²):",
    reasoning: "Work = mgh = 100 × 10 × 10 = 10,000 J. Power = Work/time = 10,000/20 = 500 W.",
    difficulty: 0.4,
    options: [
      { text: "500 W", correct: true },
      { text: "1000 W", errorType: "unit_or_order_of_magnitude_error", why: "Forgets to divide the total work by the elapsed time, or divides by 10 instead of 20 seconds." },
      { text: "10,000 W", errorType: "correct_concept_wrong_step_in_sequence", why: "Reports the total work done (in joules) as if it were the power (in watts), without dividing by time." },
      { text: "50 W", errorType: "unit_or_order_of_magnitude_error", why: "Divides work by an incorrect time value (200 seconds instead of 20)." },
    ],
  },
  {
    concept: "work_energy_and_power",
    stem: "A roller coaster car at the top of a hill has maximum gravitational potential energy and minimal kinetic energy (assuming it started from rest). As it descends the hill (ignoring friction), the total mechanical energy of the car:",
    reasoning: "In the absence of friction or other energy losses, total mechanical energy (kinetic + potential) is conserved throughout the descent, even as it converts from potential to kinetic form.",
    difficulty: 0.2,
    options: [
      { text: "Remains constant", correct: true },
      { text: "Increases as the car speeds up", errorType: "prerequisite_misconception", why: "Kinetic energy increases, but this is offset by an equal decrease in potential energy, keeping total mechanical energy constant, not increasing it." },
      { text: "Decreases as potential energy is lost", errorType: "prerequisite_misconception", why: "The potential energy lost is converted into kinetic energy, not simply lost from the system, so total mechanical energy doesn't decrease." },
      { text: "Becomes zero at the bottom of the hill", errorType: "prerequisite_misconception", why: "At the bottom, potential energy is at a minimum but kinetic energy is at a maximum; the total remains the same nonzero value as at the top." },
    ],
  },

  // --- intermolecular_forces (1) ---
  {
    concept: "intermolecular_forces",
    stem: "Two nonpolar molecules of similar shape but different molecular weight are compared for boiling point. The heavier molecule generally has a higher boiling point primarily because it has:",
    reasoning: "Larger, heavier nonpolar molecules generally have more electrons and greater polarizability, leading to stronger London dispersion forces and thus higher boiling points, even without any permanent dipole.",
    difficulty: 0.4,
    options: [
      { text: "Stronger London dispersion forces due to greater polarizability", correct: true },
      { text: "A permanent dipole moment that the lighter molecule lacks", errorType: "prerequisite_misconception", why: "Both molecules are specified as nonpolar, so neither has a permanent dipole; the difference lies in dispersion forces, which scale with size and polarizability." },
      { text: "Stronger covalent bonds within the molecule itself", errorType: "prerequisite_misconception", why: "Intramolecular covalent bond strength is a separate property from the intermolecular forces that determine boiling point." },
      { text: "The ability to form hydrogen bonds, unlike the lighter molecule", errorType: "prerequisite_misconception", why: "Both molecules are nonpolar, meaning neither is described as forming hydrogen bonds; the size-driven dispersion force difference explains the boiling point gap." },
    ],
  },

  // --- spectroscopy_and_electromagnetic_radiation (1) ---
  {
    concept: "spectroscopy_and_electromagnetic_radiation",
    stem: "Comparing visible light to X-rays, X-rays have:",
    reasoning: "X-rays have much shorter wavelengths and correspondingly much higher frequencies and photon energies than visible light, placing them further along the electromagnetic spectrum toward higher energy.",
    difficulty: 0.2,
    options: [
      { text: "Shorter wavelength and higher photon energy", correct: true },
      { text: "Longer wavelength and lower photon energy", errorType: "sign_or_direction_reversal", why: "Reverses the actual relationship; X-rays have shorter wavelengths and higher energy than visible light, not longer wavelength and lower energy." },
      { text: "The same wavelength as visible light but different energy", errorType: "prerequisite_misconception", why: "Wavelength and photon energy are directly linked (E = hc/λ); X-rays differ from visible light in both together, not just one." },
      { text: "No defined wavelength at all", errorType: "prerequisite_misconception", why: "X-rays, like all electromagnetic radiation, have a well-defined wavelength range." },
    ],
  },

  // --- reaction_kinetics_and_rate_laws (4, plus 5 via passage) ---
  {
    concept: "reaction_kinetics_and_rate_laws",
    stem: "For a reaction with rate law rate = k[A]², the reaction is said to be:",
    reasoning: "The exponent on [A] in the rate law is the reaction order with respect to A; an exponent of 2 means the reaction is second order in A (and overall, since no other reactant appears).",
    difficulty: 0.2,
    options: [
      { text: "Second order in A", correct: true },
      { text: "First order in A", errorType: "prerequisite_misconception", why: "First order would correspond to an exponent of 1 on [A], not 2." },
      { text: "Zero order in A", errorType: "prerequisite_misconception", why: "Zero order would mean [A] doesn't appear in the rate law at all (exponent of 0), not an exponent of 2." },
      { text: "Order cannot be determined from the rate law alone", errorType: "prerequisite_misconception", why: "The reaction order with respect to a given species is read directly from its exponent in the experimentally determined rate law." },
    ],
  },
  {
    concept: "reaction_kinetics_and_rate_laws",
    stem: "The rate law for a chemical reaction must be determined by:",
    reasoning: "Rate laws must be determined experimentally (e.g., by measuring how rate changes with concentration); they cannot generally be inferred just from the balanced equation's stoichiometric coefficients, since a reaction may proceed through a multi-step mechanism.",
    difficulty: 0.3,
    options: [
      { text: "Experimental measurement", correct: true },
      { text: "Reading the coefficients directly from the balanced overall equation", errorType: "prerequisite_misconception", why: "Rate law exponents often differ from the stoichiometric coefficients in the overall balanced equation, especially for multi-step reactions." },
      { text: "Calculating the reaction's ΔH value", errorType: "prerequisite_misconception", why: "Enthalpy change is a thermodynamic quantity unrelated to the kinetic rate law, which concerns reaction speed, not energy change." },
      { text: "Measuring the color of the reaction mixture only", errorType: "outside_knowledge_not_supported_by_passage", why: "Color alone isn't a general method for determining rate laws; systematic concentration-versus-rate experiments are needed." },
    ],
  },
  {
    concept: "reaction_kinetics_and_rate_laws",
    stem: "The rate-determining step in a multi-step reaction mechanism is:",
    reasoning: "The rate-determining step is the slowest step in a reaction mechanism, and it controls the overall observed rate of the reaction, since the overall process cannot proceed faster than its slowest step.",
    difficulty: 0.3,
    options: [
      { text: "The slowest step, which controls the overall reaction rate", correct: true },
      { text: "The fastest step, which controls the overall reaction rate", errorType: "sign_or_direction_reversal", why: "It is specifically the slowest step, not the fastest, that limits and determines the overall reaction rate." },
      { text: "Always the very first step in the mechanism", errorType: "prerequisite_misconception", why: "The rate-determining step can occur at any point in the mechanism; it is defined by being the slowest step, not by its position in the sequence." },
      { text: "The step that produces the final product directly", errorType: "prerequisite_misconception", why: "The rate-determining step is defined by its relative slowness, not necessarily by being the step that directly forms the final product." },
    ],
  },
  {
    concept: "reaction_kinetics_and_rate_laws",
    stem: "Increasing the temperature of a reaction generally increases its rate primarily because more molecules:",
    reasoning: "Higher temperature increases the fraction of molecular collisions with kinetic energy exceeding the activation energy, per the Arrhenius relationship, increasing the frequency of successful, reaction-producing collisions.",
    difficulty: 0.3,
    options: [
      { text: "Have kinetic energy exceeding the activation energy during collisions", correct: true },
      { text: "Become permanently converted into products without colliding", errorType: "prerequisite_misconception", why: "Reactions still require collisions between reactant molecules; higher temperature increases the fraction of effective collisions, not conversion without any collision." },
      { text: "Decrease in overall concentration", errorType: "prerequisite_misconception", why: "Temperature changes don't directly change concentration; the rate increase comes from more energetic collisions, not lower concentration." },
      { text: "Change their fundamental chemical identity", errorType: "prerequisite_misconception", why: "Temperature affects molecular kinetic energy and collision frequency, not the fundamental chemical identity of the reactant molecules." },
    ],
  },

  // --- electromagnetic_induction (4, plus 5 via passage) ---
  {
    concept: "electromagnetic_induction",
    stem: "Lenz's law states that an induced current's direction is such that it:",
    reasoning: "Lenz's law states the induced current flows in a direction that opposes the change in magnetic flux that produced it, consistent with conservation of energy.",
    difficulty: 0.2,
    options: [
      { text: "Opposes the change in magnetic flux that produced it", correct: true },
      { text: "Reinforces and amplifies the change in magnetic flux that produced it", errorType: "sign_or_direction_reversal", why: "Reverses Lenz's law's actual statement; the induced current opposes, not reinforces, the flux change." },
      { text: "Has no relationship to the change in magnetic flux", errorType: "prerequisite_misconception", why: "Lenz's law specifically describes the relationship between induced current direction and the flux change, not an absence of relationship." },
      { text: "Always flows in the same direction regardless of the flux change", errorType: "prerequisite_misconception", why: "The induced current's direction specifically depends on (and opposes) the direction of the flux change, not a fixed direction." },
    ],
  },
  {
    concept: "electromagnetic_induction",
    stem: "According to Faraday's law, the magnitude of an induced EMF in a loop of wire depends on:",
    reasoning: "Faraday's law states induced EMF is proportional to the rate of change of magnetic flux through the loop — a faster-changing flux produces a larger EMF.",
    difficulty: 0.2,
    options: [
      { text: "The rate of change of magnetic flux through the loop", correct: true },
      { text: "The total, unchanging magnetic flux through the loop at a single instant", errorType: "prerequisite_misconception", why: "A constant, unchanging flux (even if large) produces zero induced EMF; it is specifically the rate of change that matters." },
      { text: "The electrical resistance of the wire loop alone", errorType: "prerequisite_misconception", why: "Resistance affects the resulting induced current, but the induced EMF itself is determined by the rate of flux change, per Faraday's law." },
      { text: "The color of the wire used in the loop", errorType: "outside_knowledge_not_supported_by_passage", why: "Wire color has no physical relevance to electromagnetic induction." },
    ],
  },
  {
    concept: "electromagnetic_induction",
    stem: "A bar magnet is pushed into a stationary wire coil, inducing a current. If the magnet is instead held stationary and the coil is moved toward it at the same relative speed, the induced current will be:",
    reasoning: "Electromagnetic induction depends on the relative motion between the magnet and coil (i.e., the changing flux through the coil), so moving either one at the same relative speed produces the same induced current, regardless of which object is considered to be 'moving.'",
    difficulty: 0.4,
    options: [
      { text: "The same as before, since only relative motion matters", correct: true },
      { text: "Reversed in direction only", errorType: "prerequisite_misconception", why: "Since the relative motion (magnet approaching coil) is unchanged, the induced current's direction should not simply reverse." },
      { text: "Zero, since only a moving magnet (not a moving coil) can induce current", errorType: "prerequisite_misconception", why: "What matters is the changing flux from relative motion; a moving coil relative to a stationary magnet produces the same effect as a moving magnet relative to a stationary coil." },
      { text: "Impossible to determine without knowing the coil's exact resistance", errorType: "outside_knowledge_not_supported_by_passage", why: "The relative-motion principle alone determines that the induced EMF should be equivalent; resistance would affect resulting current magnitude in both cases equally, not the comparison itself." },
    ],
  },
  {
    concept: "electromagnetic_induction",
    stem: "A transformer uses electromagnetic induction to change the voltage of an alternating current by:",
    reasoning: "A transformer uses a changing (AC) current in a primary coil to create a changing magnetic flux, which induces an EMF in a secondary coil; the ratio of turns between the two coils determines how the voltage is stepped up or down.",
    difficulty: 0.4,
    options: [
      { text: "Using a changing magnetic flux from one coil to induce an EMF in a second coil with a different number of turns", correct: true },
      { text: "Directly connecting the two coils with a conducting wire", errorType: "prerequisite_misconception", why: "Transformers work through electromagnetic induction across coils that are not directly, electrically connected to each other; connection is magnetic, not a direct wire link between the coils." },
      { text: "Physically converting AC current into DC current first", errorType: "prerequisite_misconception", why: "A transformer works specifically because the current is alternating (changing), producing a continuously changing flux; it does not require converting to DC first." },
      { text: "Using a chemical reaction to generate the voltage change", errorType: "prerequisite_misconception", why: "Transformers operate through electromagnetic induction, a physical/magnetic process, not a chemical reaction." },
    ],
  },

  // --- passage: cp_reaction_rate_lab (5) ---
  {
    concept: "reaction_kinetics_and_rate_laws",
    type: "passage",
    passage: "cp_reaction_rate_lab",
    stem: "Based on the passage, doubling [NO] while holding [O2] constant quadruples the initial rate. This indicates the reaction is:",
    reasoning: "A doubling of concentration causing a quadrupling (2²) of rate indicates second order behavior with respect to that reactant, consistent with the passage's stated rate law exponent of 2 for [NO].",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Second order with respect to NO", correct: true },
      { text: "First order with respect to NO", errorType: "passage_detail_misread_or_over_extrapolated", why: "A doubling-to-quadrupling relationship (2² = 4) indicates second order, not first order (which would only double the rate)." },
      { text: "Zero order with respect to NO", errorType: "passage_detail_misread_or_over_extrapolated", why: "Zero order would mean rate is unaffected by [NO] at all, contradicting the passage's description of rate quadrupling." },
      { text: "Third order with respect to NO", errorType: "unit_or_order_of_magnitude_error", why: "Third order would require an eightfold (2³) rate increase upon doubling concentration, not the fourfold increase described." },
    ],
  },
  {
    concept: "reaction_kinetics_and_rate_laws",
    type: "passage",
    passage: "cp_reaction_rate_lab",
    stem: "Based on the passage, doubling [O2] while holding [NO] constant only doubles the initial rate. This indicates the reaction is:",
    reasoning: "A doubling of concentration causing a doubling (2¹) of rate indicates first order behavior with respect to that reactant, consistent with the passage's stated rate law exponent of 1 for [O2].",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "First order with respect to O2", correct: true },
      { text: "Second order with respect to O2", errorType: "passage_detail_misread_or_over_extrapolated", why: "Second order would require a fourfold rate increase upon doubling concentration, not the doubling described in the passage." },
      { text: "Zero order with respect to O2", errorType: "passage_detail_misread_or_over_extrapolated", why: "Zero order would mean no change in rate at all when [O2] changes, contradicting the passage's description of the rate doubling." },
      { text: "Order cannot be determined from this information", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage's described doubling-to-doubling relationship directly indicates first order, which can be determined from the given information." },
    ],
  },
  {
    concept: "reaction_kinetics_and_rate_laws",
    type: "passage",
    passage: "cp_reaction_rate_lab",
    stem: "According to the passage, the experimentally determined rate law's exponents:",
    reasoning: "The passage explicitly notes the exponents 'do not simply match the stoichiometric coefficients in the balanced equation,' differing specifically for O2 (stoichiometric coefficient 1, matching the observed order 1 — actually matching here) — but the passage specifies the mismatch is for O2 specifically relative to some expectation, so the key takeaway is that rate law exponents are determined experimentally, not assumed from stoichiometry.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "Were determined entirely from experimental data, not assumed from the balanced equation", correct: true },
      { text: "Always exactly match the stoichiometric coefficients for every reactant", correct: false, errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states the exponents do not simply match the stoichiometric coefficients." },
      { text: "Were calculated theoretically without needing any experiments", correct: false, errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage describes the student running experiments and measuring rates directly, not calculating exponents theoretically." },
      { text: "Apply only to the reverse reaction, not the forward reaction described", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes the rate law for the forward reaction as written, not a separate reverse-reaction rate law." },
    ],
  },
  {
    concept: "reaction_kinetics_and_rate_laws",
    type: "passage",
    passage: "cp_reaction_rate_lab",
    stem: "Based on the rate law given in the passage (rate = k[NO]²[O2]), if both [NO] and [O2] were simultaneously doubled, the rate would be expected to increase by a factor of:",
    reasoning: "Doubling [NO] contributes a factor of 2² = 4, and doubling [O2] contributes a factor of 2¹ = 2; combined, the rate increases by 4 × 2 = 8.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "8", correct: true },
      { text: "6", errorType: "correct_concept_wrong_step_in_sequence", why: "Adds the individual factors (4 + 2) instead of multiplying them together." },
      { text: "4", errorType: "prerequisite_misconception", why: "Accounts for the effect of doubling [NO] alone but ignores the additional contribution from doubling [O2]." },
      { text: "16", errorType: "unit_or_order_of_magnitude_error", why: "Incorrectly treats [O2] as also second order (2² instead of 2¹), overestimating its contribution." },
    ],
  },
  {
    concept: "reaction_kinetics_and_rate_laws",
    type: "passage",
    passage: "cp_reaction_rate_lab",
    stem: "According to the passage, the overall reaction order (the sum of all individual reactant orders) for this reaction is:",
    reasoning: "The passage's rate law is rate = k[NO]²[O2]¹, so overall order = 2 + 1 = 3, making this a third-order reaction overall.",
    difficulty: 0.3,
    sirs: 2,
    options: [
      { text: "Third order overall", correct: true },
      { text: "Second order overall", errorType: "passage_detail_misread_or_over_extrapolated", why: "This would only account for the order with respect to NO, ignoring the additional first-order contribution from O2." },
      { text: "First order overall", errorType: "passage_detail_misread_or_over_extrapolated", why: "This would only account for the order with respect to O2 alone, ignoring the second-order contribution from NO." },
      { text: "Zero order overall", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly describes rate changing substantially with both reactant concentrations, ruling out zero overall order." },
    ],
  },

  // --- passage: cp_induction_generator (5) ---
  {
    concept: "electromagnetic_induction",
    type: "passage",
    passage: "cp_induction_generator",
    stem: "According to the passage, what induces the EMF in the rotating loop of the generator?",
    reasoning: "The passage states the changing magnetic flux through the loop, per Faraday's law, 'induces an electromotive force (EMF) in the loop.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "The continuously changing magnetic flux through the rotating loop", correct: true },
      { text: "A direct electrical connection between the loop and the external circuit's power source", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes induction via changing magnetic flux, not a direct electrical connection to an external power source." },
      { text: "Friction between the loop and the magnetic field", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "Friction is not the mechanism the passage describes; changing magnetic flux via Faraday's law is." },
      { text: "The loop's own electrical resistance", correct: false, errorType: "outside_knowledge_not_supported_by_passage", why: "Resistance affects resulting current but is not what induces the EMF in the first place, per the passage's description." },
    ],
  },
  {
    concept: "electromagnetic_induction",
    type: "passage",
    passage: "cp_induction_generator",
    stem: "According to the passage, the induced EMF is greatest when the loop's plane is:",
    reasoning: "The passage states the EMF is greatest 'when the loop is oriented so its plane is parallel to the magnetic field lines (flux changing most rapidly at that instant).'",
    difficulty: 0.3,
    sirs: 1,
    options: [
      { text: "Parallel to the magnetic field lines", correct: true },
      { text: "Perpendicular to the magnetic field lines", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage assigns the momentarily zero EMF, not the greatest EMF, to the perpendicular orientation." },
      { text: "At a 45-degree angle to the magnetic field lines", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage identifies the parallel orientation specifically, not a 45-degree angle, as producing maximum EMF." },
      { text: "Irrelevant to the magnitude of the induced EMF", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly ties the loop's orientation to the magnitude of the induced EMF at different points in the rotation." },
    ],
  },
  {
    concept: "electromagnetic_induction",
    type: "passage",
    passage: "cp_induction_generator",
    stem: "According to the passage, the induced EMF is momentarily zero when the loop's plane is perpendicular to the field, even though the flux is at a maximum at that instant, because:",
    reasoning: "The passage explains that at this orientation, flux is 'at a momentary maximum, but instantaneously not changing' — since induced EMF depends on the rate of change of flux, not the flux magnitude itself, a momentarily unchanging (even if maximal) flux produces zero EMF at that instant.",
    difficulty: 0.5,
    sirs: 3,
    options: [
      { text: "Flux is momentarily not changing at that instant, even though its magnitude is at a maximum", correct: true },
      { text: "The magnetic field itself disappears at that instant", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes the field as constant throughout; it's the loop's orientation relative to the field that changes, not the field's existence." },
      { text: "The loop physically stops rotating at that instant", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage describes continuous rotation; the zero EMF occurs momentarily due to the flux's rate of change, not because rotation halts." },
      { text: "The wire loop has zero electrical resistance at that orientation", errorType: "outside_knowledge_not_supported_by_passage", why: "Resistance is a separate property from the induced EMF mechanism the passage describes, which depends on the rate of flux change." },
    ],
  },
  {
    concept: "electromagnetic_induction",
    type: "passage",
    passage: "cp_induction_generator",
    stem: "According to the passage, which three factors does the engineer consider for increasing the generator's peak output voltage?",
    reasoning: "The passage lists 'increasing the number of turns in the wire loop, increasing the strength of the magnetic field, or increasing the area of the loop.'",
    difficulty: 0.2,
    sirs: 1,
    options: [
      { text: "Number of turns, magnetic field strength, and loop area", correct: true },
      { text: "Wire color, loop shape, and ambient temperature", errorType: "outside_knowledge_not_supported_by_passage", why: "The passage lists number of turns, field strength, and loop area, not these unrelated factors." },
      { text: "Only the rotation speed of the loop", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage specifically states the engineer wants to increase voltage 'without changing the rotation speed,' considering other factors instead." },
      { text: "The type of metal used for the external circuit's wiring", errorType: "outside_knowledge_not_supported_by_passage", why: "External circuit wiring material is not among the three factors the passage lists for increasing peak EMF." },
    ],
  },
  {
    concept: "electromagnetic_induction",
    type: "passage",
    passage: "cp_induction_generator",
    stem: "Based on the passage's description of Faraday's law, if the engineer doubles both the number of turns and the loop's area simultaneously (keeping field strength and rotation speed constant), the peak induced EMF would be expected to:",
    reasoning: "Since the passage states all three factors (turns, field strength, area) 'should proportionally increase the induced EMF,' doubling two of these factors simultaneously should multiply their individual effects together, quadrupling the peak EMF (2 × 2 = 4).",
    difficulty: 0.6,
    sirs: 3,
    options: [
      { text: "Quadruple", correct: true },
      { text: "Double", errorType: "correct_concept_wrong_step_in_sequence", why: "Accounts for only one of the two doubled factors rather than multiplying both proportional effects together." },
      { text: "Stay the same", errorType: "passage_detail_misread_or_over_extrapolated", why: "The passage explicitly states these factors proportionally increase EMF, so changing them should have an effect, not none at all." },
      { text: "Increase by a factor of 8", errorType: "unit_or_order_of_magnitude_error", why: "Incorrectly includes a third doubled factor (e.g., field strength) that was specified to remain constant in this scenario." },
    ],
  },
];
