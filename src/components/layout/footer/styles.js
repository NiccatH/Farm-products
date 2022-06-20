import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledFooter = styled(Section)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  height: ${(props) => props.theme.footerHeight};
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorWhite};
`;

export const Copyright = styled.span`
  font-size: ${(props) => props.theme.fontSizeDefault};
`;
