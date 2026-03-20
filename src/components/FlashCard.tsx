import { useState } from "react";
import type { Flashcard } from "../types";

interface Props {
  card: Flashcard;
  onAnswer: (answer: boolean) => void;
}

function FlashCard({ card, onAnswer }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const isLong = card.answer.length > 150;

  return (
    <div className="scene" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card ${isFlipped ? "card--flipped" : ""}`}>
        <div className="card__face card__face--front">
          <span className="card__category">{card.category}</span>
          <p className="card__text">{card.question}</p>
          <span className="card__hint">click para ver respuesta</span>
        </div>

        <div className="card__face card__face--back">
          <span className="card__difficulty">{card.difficulty}</span>
          <p className={`card__text ${isLong ? "card__text--small" : ""}`}>
            {card.answer}
          </p>
          <div className="answer-btns">
            <button
              className="btn-correct"
              onClick={(e) => {
                e.stopPropagation();
                onAnswer(true);
              }}
            >
              Lo supe!
            </button>
            <button
              className="btn-incorrect"
              onClick={(e) => {
                e.stopPropagation();
                onAnswer(false);
              }}
            >
              No lo supe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
