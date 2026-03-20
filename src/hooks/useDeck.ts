import { useState } from "react";
import type { Answer, Category, Flashcard } from "../types";

export const useDeck = (cards: Flashcard[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [category, setCategory] = useState<Category>("all");
  const [answers, setAnswers] = useState<Answer>({
    correct: 0,
    incorrect: 0,
  });
  const [deckComplete, setDeckComplete] = useState<boolean>(false);

  const filterCards = cards.filter((card) =>
    category === "all" ? true : card.category === category,
  );

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === filterCards.length - 1;

  const handleBack = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleChangeCategory = (selectedCateogry: Category) => {
    setCategory(selectedCateogry);
    setCurrentIndex(0);
  };

  const handleAnswer = (answer: boolean) => {
    if (answer) {
      setAnswers((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setAnswers((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    if (isLast) {
      setDeckComplete(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setDeckComplete(false);
    setCurrentIndex(0);
    setCategory("all");
    setAnswers({
      correct: 0,
      incorrect: 0,
    });
  };

  return {
    handleBack,
    handleAnswer,
    handleNext,
    handleReset,
    handleChangeCategory,
    isFirst,
    isLast,
    deckComplete,
    answers,
    currentIndex,
    filterCards,
    category,
  };
};
