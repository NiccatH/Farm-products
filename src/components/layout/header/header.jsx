import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledHeader } from "./styles";

function Header({ pageUrl }) {
  return (
    <StyledHeader as="header">
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledHeader>
  );
}

export default Header;
