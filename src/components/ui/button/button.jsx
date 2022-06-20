import React from "react";
import { StyledButton } from "./styles";

function Button({ children, link, maxWidth, onClick, ...props }) {
  return (
    <StyledButton
      {...props}
      $maxWidth={maxWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
