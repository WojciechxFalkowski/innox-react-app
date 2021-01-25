import React from "react";
import {
  Section,
  Container,
  ContactFormWrapper,
  H4,
  Paragraph,
} from "./Contact.css";
import {
  LineTitle,
  Button,
  LocationMap,
  ContactForm,
  AdressInfo,
} from "components";
const Contact = ({ id }) => {
  return (
    <Section id={id}>
      <LineTitle>
        <Button>{id}</Button>
      </LineTitle>
      <LocationMap />
      <Container>
        <ContactFormWrapper>
          <H4>Please contact us</H4>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quo accusamus veniam recusandae.
          </Paragraph>
          <ContactForm />
        </ContactFormWrapper>
        <AdressInfo />
      </Container>
    </Section>
  );
};

export default Contact;
