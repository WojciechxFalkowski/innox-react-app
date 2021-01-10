import React from "react";
import Carousel from "styled-components-carousel";
import theme from "theme/theme";
import { Section, ImageWrapper } from "./Clients.css";
import { LineTitle } from "components";
import apple from "images/clients/apple.png";
import starbucks from "images/clients/starbucks.png";
import intel from "images/clients/intel.png";
import adidas from "images/clients/adidas.png";

const Clients = ({ id }) => {
  const images = [
    { image: apple, text: "logo apple" },
    { image: starbucks, text: "logo sturbacks" },
    { image: intel, text: "logo intel" },
    { image: adidas, text: "logo adidas" },
  ];
  return (
    <Section id={id}>
      <LineTitle title="clients" />
      <Carousel
        breakpoints={[
          {
            size: theme.breakpoints.phone,
            settings: {
              slidesToShow: 1,
              infinite: true,
              showArrows: true,
              showIndicator: true,
              swipeable: true,
            },
          },
          {
            size: theme.breakpoints.landscapePhone - 1,
            settings: {
              slidesToShow: 2,
              infinite: true,
              showArrows: true,
              showIndicator: true,
              swipeable: true,
            },
          },
          {
            size: 1000,
            settings: {
              slidesToShow: 4,
              infinite: true,
              showArrows: true,
              showIndicator: true,
              swipeable: true,
            },
          },
        ]}
      >
        {images.map((item) => (
          <ImageWrapper key={item.text}>
            <img src={item.image} alt={item.text} />
          </ImageWrapper>
        ))}
      </Carousel>
    </Section>
  );
};

export default Clients;
