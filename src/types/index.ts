export type Category = "all" | "ritmo" | "armonía" | "melodía";

export interface Flashcard {
  id: number;
  category: "ritmo" | "armonía" | "melodía";
  difficulty: "básico" | "intermedio" | "avanzado";
  question: string;
  answer: string;
}

export interface Answer {
  correct: number;
  incorrect: number;
}
