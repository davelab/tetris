import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  border: 2px solid #444;
  min-height: 30px;
  border-radius: 10px;
  width: 100%;
  color: ${(props) => (props.gameOver ? "red" : "#ddd")};
  background: black;
  font-size: 1.2rem;
`;
