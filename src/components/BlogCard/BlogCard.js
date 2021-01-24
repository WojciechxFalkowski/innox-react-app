import React from "react";
import {
  ImageWrapper,
  HoverWrapper,
  Title,
  Paragraph,
  LineWrapper,
  StyledA,
} from "./BlogCard.css";
import { LineTitle } from "components";
const BlogCard = ({ id, title, text, url, image }) => {
  return (
    <ImageWrapper image={image}>
      <HoverWrapper>
        <Title>{title}</Title>
        <Paragraph>{text.substring(0, 200)}</Paragraph>
        <LineWrapper>
          <LineTitle
            wrapperTitle={{ maxHeight: "20px" }}
            lineTitle={{ width: "calc(40% - 80px / 2)", lineColor: "white" }}
          >
            <StyledA href={url}>Read more</StyledA>
          </LineTitle>
        </LineWrapper>
      </HoverWrapper>
    </ImageWrapper>
  );
};

export default BlogCard;
