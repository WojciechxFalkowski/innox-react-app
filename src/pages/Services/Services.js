import React from "react";
import { Section, CardWrapper } from "./Services.css";
import { LineTitle, Button, Card } from "components";
import timing from "images/services/timing.png";
import presentation from "images/services/presentation.png";
import accurate from "images/services/accurate.png";
import design from "images/services/design.png";
import developer from "images/services/developer.png";
import production from "images/services/production.png";
const Services = ({ id }) => {
  const cardList = [
    {
      image: timing,
      title: "timing",
      text: "Our web design team will spend time with our digital marketing.",
    },
    {
      image: presentation,
      title: "presentation",
      text: "Our web design team will spend time with our digital marketing.",
    },
    {
      image: accurate,
      title: "accurate",
      text: "Our web design team will spend time with our digital marketing.",
    },
    {
      image: design,
      title: "design",
      text: "Our web design team will spend time with our digital marketing.",
    },
    {
      image: developer,
      title: "developer",
      text: "Our web design team will spend time with our digital marketing.",
    },
    {
      image: production,
      title: "production",
      text: "Our web design team will spend time with our digital marketing.",
    },
  ];
  return (
    <Section id={id}>
      <LineTitle>
        <Button>{id}</Button>
      </LineTitle>
      <CardWrapper>
        {cardList.map((cardItem) => (
          <Card key={cardItem.title} {...cardItem} />
        ))}
      </CardWrapper>
    </Section>
  );
};

export default Services;
