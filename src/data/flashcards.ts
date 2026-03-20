import type { Flashcard } from "../types";

export const flashcards: Flashcard[] = [
  // ── RITMO ──────────────────────────────────────────────
  {
    id: 1,
    category: "ritmo",
    difficulty: "básico",
    question: "¿Qué es el BPM?",
    answer:
      "Beats Per Minute. Indica cuántos pulsos por minuto tiene una pieza. A 60 BPM, cada pulso dura exactamente 1 segundo.",
  },
  {
    id: 2,
    category: "ritmo",
    difficulty: "básico",
    question: "¿Qué diferencia hay entre pulso y ritmo?",
    answer:
      "El pulso es la base constante e isocrona — el 'latido' de la música. El ritmo es el patrón de duraciones que se superpone sobre ese pulso. Podés tener el mismo pulso con infinitos ritmos diferentes.",
  },
  {
    id: 3,
    category: "ritmo",
    difficulty: "intermedio",
    question: "¿Qué indica el numerador de un compás?",
    answer:
      "Cuántos tiempos (pulsos) hay en cada compás. En 3/4 hay 3 tiempos; en 6/8 hay 6. No dice nada sobre la velocidad — eso lo define el tempo.",
  },
  {
    id: 4,
    category: "ritmo",
    difficulty: "intermedio",
    question: "¿Qué indica el denominador de un compás?",
    answer:
      "Qué figura recibe el valor de un tiempo. El 4 representa la negra, el 8 representa la corchea, el 2 representa la blanca.",
  },

  // ── ARMONÍA ────────────────────────────────────────────
  {
    id: 5,
    category: "armonía",
    difficulty: "básico",
    question: "¿Qué es un intervalo?",
    answer:
      "La distancia entre dos notas, medida en semitonos o por su nombre (tercera, quinta, etc.). Es el bloque fundamental de la armonía.",
  },
  {
    id: 6,
    category: "armonía",
    difficulty: "básico",
    question: "¿Cuántos semitonos tiene una octava?",
    answer:
      "12 semitonos. La octava es el intervalo donde la frecuencia se duplica exactamente. Es el intervalo de mayor consonancia después del unísono.",
  },
  {
    id: 7,
    category: "armonía",
    difficulty: "intermedio",
    question: "¿Qué es un acorde mayor?",
    answer:
      "Tres notas: la tónica, una tercera mayor (4 semitonos) y una quinta justa (7 semitonos). Su carácter sonoro suele percibirse como estable o brillante.",
  },
  {
    id: 8,
    category: "armonía",
    difficulty: "intermedio",
    question: "¿En qué se diferencia un acorde menor del mayor?",
    answer:
      "Solo cambia la tercera: en el acorde menor es una tercera menor (3 semitonos en lugar de 4). La quinta sigue siendo justa. Ese semitono de diferencia cambia completamente el carácter.",
  },

  // ── MELODÍA ────────────────────────────────────────────
  {
    id: 9,
    category: "melodía",
    difficulty: "básico",
    question: "¿Qué es una escala?",
    answer:
      "Una secuencia ordenada de notas dentro de una octava, definida por un patrón de intervalos. La escala mayor usa el patrón: T-T-ST-T-T-T-ST (tono y semitono).",
  },
  {
    id: 10,
    category: "melodía",
    difficulty: "básico",
    question: "¿Qué es la tónica?",
    answer:
      "La nota central de una tonalidad — el punto de reposo y referencia. Todas las demás notas de la escala se perciben en relación a ella. Una melodía 'resuelve' cuando llega a la tónica.",
  },
  {
    id: 11,
    category: "melodía",
    difficulty: "intermedio",
    question: "¿Qué es el contorno melódico?",
    answer:
      "La forma general que describe una melodía al subir y bajar. Puede ser ascendente, descendente, ondulante o estático. Es uno de los elementos que le da carácter e identidad a una frase musical.",
  },
  {
    id: 12,
    category: "melodía",
    difficulty: "avanzado",
    question: "¿Qué es una nota de paso?",
    answer:
      "Una nota que no pertenece al acorde pero conecta por grado conjunto dos notas que sí pertenecen. Aparece en tiempo débil y su función es melódica, no armónica.",
  },
];
