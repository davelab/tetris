import React from "react";
import { TETRAMINOS } from "../tetraminos";
import { StyledCell } from "./style/StyledCell";

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETRAMINOS[type].color} />;
};

export default React.memo(Cell);
