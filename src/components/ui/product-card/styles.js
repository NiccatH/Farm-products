import styled from "styled-components";
import { Img } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import Panel from "/src/components/ui/panel/panel";

export const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
  object-fit: cover;
`;

export const ProductPanel = styled(Panel)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

export const ContentWrapper = styled.div`
  width: 419px;
  min-height: 248px;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  position: absolute;
  bottom: 20px;
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
`;
