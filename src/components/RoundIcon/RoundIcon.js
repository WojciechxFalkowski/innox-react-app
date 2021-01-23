import React from "react";
import { IconWrapper } from "./RoundIcon.css";
const RoundIcon = ({ url, icon }) => {
  return <IconWrapper href={url}>{icon}</IconWrapper>;
};

export default RoundIcon;
