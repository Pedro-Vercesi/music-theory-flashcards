interface Props {
  isFirst: boolean;
  isLast: boolean;
  currentIndex: number;
  total: number;
  onBack: () => void;
  onNext: () => void;
}

export const NavControls = ({
  isFirst,
  isLast,
  currentIndex,
  total,
  onBack,
  onNext,
}: Props) => {
  return (
    <div className="btns-container">
      <button className="btn-nav" disabled={isFirst} onClick={onBack}>
        ←
      </button>
      <p>
        {currentIndex + 1}/{total}
      </p>
      <button className="btn-nav" disabled={isLast} onClick={onNext}>
        →
      </button>
    </div>
  );
};
