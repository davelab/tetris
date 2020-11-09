import { useState, useCallback } from "react";
import { checkCollision, STAGE_WIDTH } from "../gameHelpers";

import { getRandomTetramino, TETRAMINOS } from "../tetraminos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetramino: TETRAMINOS[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const rotate = (matrix, dir) => {
    const rotatedTetra = matrix.map((_, i) => matrix.map((col) => col[i]));
    // revers each row to get a rotated matrix
    if (dir > 0) return rotatedTetra.map((row) => row.reverse());
    return rotatedTetra.reverse();
  };

  const playerRotate = (stage, dir) => {
    const clonePlayer = JSON.parse(JSON.stringify(player));
    clonePlayer.tetramino = rotate(clonePlayer.tetramino, dir);

    const pos = clonePlayer.pos.x;
    let offset = 1;

    while (checkCollision(clonePlayer, stage, { x: 0, y: 0 })) {
      clonePlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonePlayer.tetramino[0].length) {
        rotate(clonePlayer.tetramino, -dir);
        clonePlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonePlayer);
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetramino: getRandomTetramino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
