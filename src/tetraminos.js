export const TETRAMINOS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "216, 89, 119",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "82, 168, 29",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "233, 160, 18",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "233, 18, 18",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "99, 52, 159",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "52, 159, 134",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "58, 77, 245",
  },
};

export const getRandomTetramino = () => {
  const tetraminos = "IJLOSTZ";
  const randomTetramino =
    tetraminos[Math.floor(Math.random() * tetraminos.length)];
  return TETRAMINOS[randomTetramino];
};
