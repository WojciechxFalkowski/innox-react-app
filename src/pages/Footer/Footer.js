import React from "react";
import { StyledFooter, IconsWrapper, A, H5 } from "./Footer.css";
import logo from "images/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  const socialProfiles = [
    {
      name: "facebook",
      url: "https://www.facebook.com/",
      icon: <FaFacebookF />,
    },
    { name: "twitter", url: "https://twitter.com/", icon: <FaTwitter /> },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/",
      icon: <FaLinkedinIn />,
    },
    { name: "gmail", url: "https://www.gmail.com/", icon: <AiOutlineMail /> },
  ];
  return (
    <StyledFooter>
      <a href="">
        <img src={logo} alt="innox" />
      </a>
      <IconsWrapper>
        {socialProfiles.map((profile) => (
          <A key={profile.name} href={profile.url}>
            {profile.icon}
          </A>
        ))}
      </IconsWrapper>
      <H5>©2015 INNOX | DESINGNED BY CEMIL BAYRAM</H5>
    </StyledFooter>
  );
};

export default Footer;
