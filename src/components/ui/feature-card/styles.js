import styled from "styled-components";
import { Img } from "/src/components/styled";

export const Feature = styled.article`
  width: 540px;
  padding: 20px;
  min-height: 197px;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.itemBackgroundColorDanger
      : props.theme.itemBackgroundColor};
  box-sizing: border-box;
`;

export const Image = styled(Img)`
  width: 56px;
  height: 56px;
  grid-row: 1/ -1;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 56px auto;
  grid-template-rows: auto auto;
  column-gap: ${(props) => props.theme.indent};
  row-gap: 4px;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const Owner = styled.span`
  box-sizing: border-box;
  max-width: 176px;
  min-height: 25px;
  padding: 0 5px;
  text-align: center;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.panelBackgroundColorDanger
      : props.theme.panelBackgroundColor};
`;
