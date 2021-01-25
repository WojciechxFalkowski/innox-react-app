import React from "react";
import { Section } from "./Contact.css";
import { LineTitle, Button, LocationMap } from "components";
const Contact = ({ id }) => {
  return (
    <Section id={id}>
      <LineTitle>
        <Button>{id}</Button>
      </LineTitle>
      <LocationMap />
    </Section>
  );
};

export default Contact;
