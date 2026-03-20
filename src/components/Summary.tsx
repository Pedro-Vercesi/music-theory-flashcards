import type { Answer } from "../types";

interface Props {
  answers: Answer;
  onReset: () => void;
}

export const Summary = ({ answers, onReset }: Props) => {
  return (
    <div className="summary-container">
      <h2>Resultado</h2>
      <div className="summary-scores">
        <div className="score-item">
          <span className="score-number">{answers.correct}</span>
          <span className="score-label">Correctas</span>
        </div>
        <div className="score-item">
          <span className="score-number incorrect">{answers.incorrect}</span>
          <span className="score-label">Incorrectas</span>
        </div>
      </div>
      <button className="btn-reset" onClick={onReset}>
        Reiniciar
      </button>
    </div>
  );
};
