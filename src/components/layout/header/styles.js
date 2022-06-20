import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledHeader = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.headerHeight};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  background-color: ${(props) => props.theme.colorWhite};
`;
