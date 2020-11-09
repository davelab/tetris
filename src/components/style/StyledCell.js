import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background-color: rgba(${(props) => props.color}, 0.8);
  border-width: 4px;
  border-style: solid;
  border-top-color: rgba(${(props) => props.color}, 1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-bottom-color: rgba(${(props) => props.color}, 0.3);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`;
