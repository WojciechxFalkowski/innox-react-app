import React from "react";
import {
  StyledAdress,
  StyledParagraph,
  StyledSpan,
  StyledInfoWrapper,
  StyledRoundIcon,
} from "./AdressInfo.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdLocalPostOffice } from "react-icons/md";
const AdressInfo = () => {
  return (
    <StyledAdress>
      <StyledParagraph>
        Get in Touch <StyledSpan>Mon-Fri: 09:00 - 17:00</StyledSpan>
      </StyledParagraph>
      <StyledParagraph>
        Breakfast <StyledSpan>Mon-Fri: 09:30 - 10:30</StyledSpan>
      </StyledParagraph>
      <StyledInfoWrapper>
        <StyledRoundIcon href="#location">
          <HiOutlineLocationMarker />
        </StyledRoundIcon>

        <StyledParagraph>
          Adress
          <StyledSpan>
            1835 16th St. Petesburg FL 33705 Moscow, Russian
          </StyledSpan>
        </StyledParagraph>
      </StyledInfoWrapper>
      <StyledInfoWrapper>
        <StyledRoundIcon href="#callus">
          <IoMdPhonePortrait />
        </StyledRoundIcon>

        <StyledParagraph>
          Call us <StyledSpan>+70 499 303 11 01</StyledSpan>
          <StyledSpan>+70 499 312 41 01</StyledSpan>
        </StyledParagraph>
      </StyledInfoWrapper>
      <StyledInfoWrapper>
        <StyledRoundIcon href="#email">
          <MdLocalPostOffice />
        </StyledRoundIcon>
        <StyledParagraph>
          E-mail <StyledSpan>info@suberbro.net</StyledSpan>
          <StyledSpan>support@superbro.net</StyledSpan>
        </StyledParagraph>
      </StyledInfoWrapper>
    </StyledAdress>
  );
};

export default AdressInfo;
