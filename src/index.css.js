import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}
  *{
    margin-block-start:unset;
    margin-block-end: unset;
    padding-inline-start: unset;
    box-sizing:border-box;
  }
  button
  {
    cursor:pointer;
    :focus {
      outline: -webkit-focus-ring-color auto 1px;
  }
  }
  body
  {
    font-family:arial;
  }`;
