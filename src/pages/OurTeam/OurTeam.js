import React from "react";
import {
  Section,
  ImagesWrapper,
  ImageWrapper,
  ImageTextWrapper,
  ImageTextInfoWrapper,
  ImageNameText,
  ImagePositionText,
  IconsWrapper,
  Img,
  Card,
  CoffeeImg,
  Paragraph,
  BackgroundButton,
  StyledWrapper,
  StyledLine,
} from "./OurTeam.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { LineTitle, Button, RoundIcon } from "components";
import img1 from "images/ourTeam/img1.png";
import img2 from "images/ourTeam/img2.png";
import img3 from "images/ourTeam/img3.png";
import img4 from "images/ourTeam/img4.png";
import img5 from "images/ourTeam/img5.png";
import img6 from "images/ourTeam/img6.png";
import img7 from "images/ourTeam/img7.png";
import img8 from "images/ourTeam/img8.png";
import coffee from "images/ourTeam/coffee.svg";
const OurTeam = ({ id }) => {
  const profilesImages = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaLinkedinIn />,
    <AiOutlineMail />,
  ];
  const images = [
    {
      image: img1,
      name: "Ania Nowak",
      position: "CTO",
      text: "Uśmiechnięta kobieta",
      profile: [
        { name: "facebook", url: "https://www.facebook.com/" },
        { name: "twitter", url: "https://twitter.com/" },
        { name: "linkedin", url: "https://www.linkedin.com/" },
        { name: "gmail", url: "https://www.gmail.com/" },
      ],
    },
    {
      image: img7,
      name: "Piotr Bąk",
      position: "Designer",
      text: "Piszący mężczyzna w okularach",
      profile: [
        { name: "facebook", url: "https://www.facebook.com/" },
        { name: "twitter", url: "https://twitter.com/" },
        { name: "linkedin", url: "https://www.linkedin.com/" },
        { name: "gmail", url: "https://www.gmail.com/" },
      ],
    },
    {
      image: img3,
      name: "Victoria Natalio",
      position: "Founder",
      text: "Kobieta w kapeluszu",
      profile: [
        { name: "facebook", url: "https://www.facebook.com/" },
        { name: "twitter", url: "https://twitter.com/" },
        { name: "linkedin", url: "https://www.linkedin.com/" },
        { name: "gmail", url: "https://www.gmail.com/" },
      ],
    },
    {
      image: img4,
      name: "Tomasz Jaki",
      position: "Frontend Developer",
      text: "Mężczyzna w okularach",
      profile: [
        { name: "facebook", url: "https://www.facebook.com/" },
        { name: "twitter", url: "https://twitter.com/" },
        { name: "linkedin", url: "https://www.linkedin.com/" },
        { name: "gmail", url: "https://www.gmail.com/" },
      ],
    },
    {
      image: img5,
      name: "Arek Houang",
      position: "Frontend Developer",
      text: "Mężczyczna w przeciwsłonecznych okularach",
      profile: [
        { name: "facebook", url: "https://www.facebook.com/" },
        { name: "twitter", url: "https://twitter.com/" },
        { name: "linkedin", url: "https://www.linkedin.com/" },
        { name: "gmail", url: "https://www.gmail.com/" },
      ],
    },
    {
      image: img6,
      name: "Asia Nguyen",
      position: "Java Developer",
      text: "Azjatka",
      profile: [
        { name: "facebook", url: "https://www.facebook.com/" },
        { name: "twitter", url: "https://twitter.com/" },
        { name: "linkedin", url: "https://www.linkedin.com/" },
        { name: "gmail", url: "https://www.gmail.com/" },
      ],
    },
    {
      image: img7,
      name: "Jasiek Roztropny",
      position: "Architect",
      text: "Mężczyzna w koszuli z muchą",
      profile: [
        { name: "facebook", url: "https://www.facebook.com/" },
        { name: "twitter", url: "https://twitter.com/" },
        { name: "linkedin", url: "https://www.linkedin.com/" },
        { name: "gmail", url: "https://www.gmail.com/" },
      ],
    },
  ];
  return (
    <Section id={id}>
      <LineTitle>
        <Button>{id}</Button>
      </LineTitle>
      <ImagesWrapper>
        {images.map((item) => (
          <ImageWrapper key={item.name} img={item.image}>
            <ImageTextWrapper>
              <ImageTextInfoWrapper>
                <ImageNameText>{item.name}</ImageNameText>
                <ImagePositionText>{item.position}</ImagePositionText>
              </ImageTextInfoWrapper>
              <IconsWrapper>
                {item.profile.map((profile, index) => (
                  <RoundIcon
                    key={profile.name}
                    url={profile.url}
                    icon={profilesImages[index]}
                  />
                ))}
              </IconsWrapper>
            </ImageTextWrapper>
          </ImageWrapper>
        ))}
        <Card>
          <CoffeeImg src={coffee} alt="filiżanka" />
          <Paragraph>Join our team</Paragraph>
          <StyledWrapper>
            <StyledLine />
            <BackgroundButton>contact</BackgroundButton>
            <StyledLine />
          </StyledWrapper>
        </Card>
      </ImagesWrapper>
    </Section>
  );
};

export default OurTeam;
