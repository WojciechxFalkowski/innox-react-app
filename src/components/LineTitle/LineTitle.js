import React from "react";
import { Wrapper, Line } from "./LineTitle.css";
const LineTitle = ({ wrapperTitle, lineTitle, children }) => {
  return (
    <Wrapper {...wrapperTitle}>
      <Line {...lineTitle} />
      {children}
      <Line {...lineTitle} />
    </Wrapper>
  );
};

export default LineTitle;
