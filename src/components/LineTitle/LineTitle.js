import React from "react";
import { Wrapper, Line } from "./LineTitle.css";
const LineTitle = ({ lineTitle, button, children }) => {
  return (
    <Wrapper>
      <Line {...lineTitle} />
      {children}
      <Line {...lineTitle} />
    </Wrapper>
  );
};

export default LineTitle;
