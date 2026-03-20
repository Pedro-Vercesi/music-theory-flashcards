import type { Flashcard } from "../types";
import FlashCard from "./FlashCard";
import { useDeck } from "../hooks/useDeck";
import { NavControls } from "./NavControls";
import { CategoryFilter } from "./CategoryFilter";
import { Summary } from "./Summary";

interface Props {
  cards: Flashcard[];
}

export const Deck = ({ cards }: Props) => {
  const {
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
  } = useDeck(cards);

  if (deckComplete) {
    return (
      <div className="main-container">
        <Summary answers={answers} onReset={handleReset} />
      </div>
    );
  } else {
    return (
      <div className="main-container">
        <div className="deck-main-container">
          <CategoryFilter
            activeCategory={category}
            onChangeCategory={handleChangeCategory}
          />

          <FlashCard
            key={currentIndex}
            card={filterCards[currentIndex]}
            onAnswer={handleAnswer}
          />

          <NavControls
            isFirst={isFirst}
            isLast={isLast}
            currentIndex={currentIndex}
            total={filterCards.length}
            onBack={handleBack}
            onNext={handleNext}
          />
        </div>
      </div>
    );
  }
};
