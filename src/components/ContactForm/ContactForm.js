import React from "react";
import {
  Form,
  StyledLabel,
  StyledInput,
  StyledErrorParagraph,
  StyledTextArea,
  BackgroundButton,
} from "./ContactForm.css";
import { useForm } from "utils/CustomHooks";
import validate from "utils/validation/ContactFormValidatonRules";
const ContactForm = () => {
  const login = () => {};
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <StyledLabel htmlFor="name">
        <StyledInput
          id="name"
          type="text"
          placeholder="Name *"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        {errors.name && (
          <StyledErrorParagraph>{errors.name}</StyledErrorParagraph>
        )}
      </StyledLabel>
      <StyledLabel htmlFor="email">
        <StyledInput
          id="email"
          type="email"
          placeholder="E-mail *"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <StyledErrorParagraph>{errors.email}</StyledErrorParagraph>
        )}
      </StyledLabel>
      <StyledInput
        type="text"
        placeholder="Subject"
        name="subject"
        value={values.subject || ""}
        onChange={handleChange}
      />
      <StyledTextArea
        placeholder="Message"
        name="message"
        value={values.message || ""}
        onChange={handleChange}
      />
      <BackgroundButton type="submit">Send Message</BackgroundButton>
    </Form>
  );
};

export default ContactForm;
