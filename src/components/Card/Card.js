import React from "react";
import { Wrapper, ImageWrapper, Img, Title, Paragraph } from "./Card.css";
import theme from "theme/theme";
import { LineTitle } from "components";
const Card = ({ image, title, text }) => {
  return (
    <Wrapper>
      <LineTitle
        wrapperTitle={{ maxHeight: "100px" }}
        lineTitle={{ width: "calc(40% - 70px / 2)" }}
        button={{
          border: `2px solid ${theme.colors.brown}`,
          width: "70px",
          height: "70px",
          borderRadius: "50%",
        }}
      >
        <ImageWrapper>
          <Img src={image} alt={title} />
        </ImageWrapper>
      </LineTitle>
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
    </Wrapper>
  );
};

export default Card;
