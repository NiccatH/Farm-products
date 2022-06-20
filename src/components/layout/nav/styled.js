import Button from "/src/components/ui/button/button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  display: inline-block;
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.fontColorBlack};
  padding: 0;
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};
    box-shadow: none;
    text-decoration: underline;
  }
`;
