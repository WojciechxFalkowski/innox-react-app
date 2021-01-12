import React from "react";
import { StyledButton } from "./Button.css";
const Button = ({ button, children }) => {
  return <StyledButton {...button}>{children}</StyledButton>;
};

export default Button;
