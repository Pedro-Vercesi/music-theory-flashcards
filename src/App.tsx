import { Deck } from "./components/Deck";
import { flashcards } from "./data/flashcards";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "48px 16px",
      }}
    >
      <h1 className="app-title">Flashcards de Teoría Musical</h1>
      <Deck cards={flashcards} />
    </div>
  );
}

export default App;
