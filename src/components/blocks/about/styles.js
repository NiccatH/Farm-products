import styled from "styled-components";
import { P, Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

export const StyledAbout = styled(Section)`
  position: relative;
  min-height: 550px;
  padding-top: 183px;
  padding-bottom: 183px;
  padding-right: 671px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
  align-items: center;
  flex-direction: column;

  &::after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    content: "";
    width: 446px;
    height: 563px;
    background-image: url(${aboutImage});
  }
`;

export const Text = styled(P)`
  margin-top: 24px;
`;
