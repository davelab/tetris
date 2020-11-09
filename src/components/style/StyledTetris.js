import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;

  aside {
    width: 300px;
    padding: 0 20px;
    display: block;
  }
`;
