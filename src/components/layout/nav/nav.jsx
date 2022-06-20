import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styled";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton link={AppRoute.MAIN} key={AppRoute.MAIN} maxWidth>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button link={AppRoute.BUY} key={AppRoute.BUY}>
        Купить
      </Button>
    )
  }
];

function Nav({ pageUrl }) {
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;
