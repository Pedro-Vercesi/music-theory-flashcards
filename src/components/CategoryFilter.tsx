import type { Category } from "../types";

interface Props {
  onChangeCategory: (selectedCateogry: Category) => void;
  activeCategory: Category;
}

export const CategoryFilter = ({ onChangeCategory, activeCategory }: Props) => {
  return (
    <div className="categories-container">
      <button
        className={activeCategory === "all" ? "active" : ""}
        onClick={() => onChangeCategory("all")}
      >
        Todas
      </button>
      <button
        className={activeCategory === "ritmo" ? "active" : ""}
        onClick={() => onChangeCategory("ritmo")}
      >
        Ritmo
      </button>
      <button
        className={activeCategory === "armonía" ? "active" : ""}
        onClick={() => onChangeCategory("armonía")}
      >
        Armonía
      </button>
      <button
        className={activeCategory === "melodía" ? "active" : ""}
        onClick={() => onChangeCategory("melodía")}
      >
        Melodía
      </button>
    </div>
  );
};
