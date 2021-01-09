import React from "react";
import { Section, Div, Wrapper, H1, Span, Button } from "./Home.css";
const Home = ({ id }) => {
  return (
    <Section id={id}>
      <Div>
        <Wrapper>
          <H1>
            Present your <Span>work in free style</Span>
          </H1>
          <Button>Our Works</Button>
        </Wrapper>
      </Div>
    </Section>
  );
};

export default Home;
