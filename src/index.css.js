import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}
  *{
    margin-block-start:unset;
    margin-block-end: unset;
  }
  body
  {
    font-family:arial;
  }`;
