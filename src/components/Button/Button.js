import React from "react";
import { StyledButton } from "./Button.css";
const Button = ({ style, children }) => {
  return <StyledButton style={{ ...style }}>{children}</StyledButton>;
};

export default Button;
