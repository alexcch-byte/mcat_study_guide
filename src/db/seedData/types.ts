/**
 * Shared shapes for the section data files under src/db/seedData/. Kept
 * separate from src/db/schema.ts because these are plain authoring-time
 * definitions (concept/passage referenced by name/key, not id) — seed.ts
 * resolves them to real ids at insert time.
 */
import type { Section } from "@/db/schema";

export interface ConceptDef {
  name: string;
  section: Section;
  aamcCategory: string;
  estLearnMinutes?: number;
  examWeight?: number;
}

/** prereqId/dependentId are concept names, resolved to ids in seed.ts */
export interface ConceptEdgeDef {
  prereq: string;
  dependent: string;
  strength?: number;
}

export interface PassageDef {
  key: string;
  section: Section;
  title: string;
  body: string;
  topic: string;
}

export interface ItemOptionDef {
  text: string;
  correct?: boolean;
  errorType?: string;
  why?: string;
}

export interface ItemDef {
  concept: string;
  type?: "discrete" | "passage";
  passage?: string;
  stem: string;
  reasoning: string;
  difficulty?: number;
  sirs?: number;
  options: ItemOptionDef[];
}
