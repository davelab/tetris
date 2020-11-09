import React from "react";
import Cell from "./Cell";
import { StyledStage } from "./style/StyledStage";
import { STAGE_WIDTH, STAGE_HEIGHT } from "../gameHelpers";

const Stage = ({ stage }) => {
  return (
    <StyledStage height={STAGE_HEIGHT} width={STAGE_WIDTH}>
      {stage.map((row) =>
        row.map((cell, i) => <Cell key={i} type={cell[0]} />)
      )}
    </StyledStage>
  );
};

export default Stage;
