import React from "react";
import { StyledBurger } from "./Burger.css";
import { bool, func } from "prop-types";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
