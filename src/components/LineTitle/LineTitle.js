import React from "react";
import { Wrapper, Line } from "./LineTitle.css";
import { Button } from "components";
const LineTitle = ({ title }) => {
  return (
    <Wrapper>
      <Line />
      <Button>{title}</Button>
      <Line />
    </Wrapper>
  );
};

export default LineTitle;
