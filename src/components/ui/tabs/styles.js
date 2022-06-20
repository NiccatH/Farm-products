import styled, { css } from "styled-components";
import { Button, Ul, Li } from "/src/components/styled";

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const TabListItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled(Button)`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: ${(props) => props.theme.lineHeightDefault};
  font-weight: ${(props) => props.theme.fontWeightDefault};
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.panelBackgroundColor};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
          cursor: auto;
        `
      : css`
          background-color: ${props.theme.backgroundColorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.fontColorBlack};
        `}
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeight || "none"};
  overflow-y: overlay;
`;
