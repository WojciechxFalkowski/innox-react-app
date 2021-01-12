import React from "react";
import {
  Wrapper,
  Image,
  TextWrapper,
  Title,
  Paragraph,
  ImagesWrapper,
  ImageWrapper,
  SmallImage,
  P,
  Line,
  ButtonsWrapper,
} from "./About.css";
import { LineTitle } from "components";
import timingImage from "images/about/timing.png";
import presentationImage from "images/about/presentation.png";
import accurateImage from "images/about/accurate.png";
import { Button } from "components";
const About = ({ id }) => {
  return (
    <section id={id}>
      <LineTitle>
        <Button>{id}</Button>
      </LineTitle>
      <Wrapper>
        <Image />
        <TextWrapper>
          <Title>Less is more - innox</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            tempora accusantium, nobis excepturi molestiae fugit? Temporibus,
            quas? Necessitatibus alias quos pariatur. Voluptas provident dolore
            fugit placeat magni optio eos ex? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eius tempora accusantium, nobis
            excepturi molestiae fugit? Temporibus, quas? Necessitatibus alias
            quos pariatur. Voluptas provident dolore fugit placeat magni optio
            eos ex?
          </Paragraph>
          <ImagesWrapper>
            <ImageWrapper>
              <SmallImage img={timingImage} />
              <P>Timing</P>
            </ImageWrapper>

            <Line />
            <ImageWrapper>
              <SmallImage img={presentationImage} />
              <P>Presentation</P>
            </ImageWrapper>

            <Line />
            <ImageWrapper>
              <SmallImage img={accurateImage} />
              <P>Accurate</P>
            </ImageWrapper>
          </ImagesWrapper>
          <ButtonsWrapper>
            <Button
              button={{
                fontSize: "12px",
              }}
            >
              About Detail
            </Button>
            <Button
              button={{
                fontSize: "12px",
              }}
            >
              More services
            </Button>
          </ButtonsWrapper>
        </TextWrapper>
      </Wrapper>
    </section>
  );
};

export default About;
