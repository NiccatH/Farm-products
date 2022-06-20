import styled, { css } from "styled-components";

const gridList = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 64px 0 64px 0;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
