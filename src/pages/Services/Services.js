import React from "react";
import {
  Section,
  CardWrapper,
  TextWrapper,
  Title,
  Text,
  TextButton,
  SubSection,
  LaptopWrapper,
  Img,
  MacbookImage,
} from "./Services.css";
import { LineTitle, Button, Card } from "components";
import timing from "images/services/timing.png";
import presentation from "images/services/presentation.png";
import accurate from "images/services/accurate.png";
import design from "images/services/design.png";
import developer from "images/services/developer.png";
import production from "images/services/production.png";
import macbook from "images/services/macbook.png";
import macbookImage from "images/services/macbookImage.png";
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
      <SubSection>
        <TextWrapper>
          <Title>best theme responsive psd</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            d.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d.
          </Text>
          <TextButton>purchase now</TextButton>
        </TextWrapper>
        <LaptopWrapper>
          <Img src={macbook} alt="macbook"></Img>
          <MacbookImage src={macbookImage} alt="macbook image"></MacbookImage>
        </LaptopWrapper>
      </SubSection>
    </Section>
  );
};

export default Services;
