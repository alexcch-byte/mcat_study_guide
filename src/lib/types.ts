export type ErrorTag =
  | "no_content_knowledge"
  | "misread_question"
  | "missed_passage_detail"
  | "arithmetic_or_unit_error"
  | "eliminated_correct_answer"
  | "ran_out_of_time";

export const ERROR_TAG_LABELS: Record<ErrorTag, string> = {
  no_content_knowledge: "Didn't know the content",
  misread_question: "Misread the question",
  missed_passage_detail: "Missed it in the passage",
  arithmetic_or_unit_error: "Arithmetic or unit error",
  eliminated_correct_answer: "Eliminated the right answer",
  ran_out_of_time: "Ran out of time",
};

export const CONFIDENCE_LABELS = ["Guessed", "Unsure", "Fairly sure", "Certain"] as const;

export interface SessionOption {
  id: number;
  itemId: number;
  position: number;
  text: string;
}

export interface SessionPassage {
  id: number;
  title: string | null;
  body: string;
}

export interface SessionItem {
  id: number;
  type: "discrete" | "passage";
  stem: string;
  passageId: number | null;
  passage: SessionPassage | null;
  options: SessionOption[];
}

export interface RevealedOption {
  id: number;
  text: string;
  isCorrect: boolean;
  errorType: string | null;
  whyAStudentPicksThis: string | null;
}

export interface CheckResponse {
  correct: boolean;
  correctOptionId: number | null;
  correctReasoning: string | null;
  options: RevealedOption[];
}
