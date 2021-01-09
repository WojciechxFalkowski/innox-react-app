import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Nav, Img, StyledLink, Ul, Li } from "./Navigation.css";
import { Burger } from "components";
import logo from "images/logo.png";
const Navigation = ({ navigationTitles }) => {
  const [open, setOpen] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav>
      <Link to="beggining" spy={true} smooth={true} href="#">
        <Img src={logo} alt="Logo" onClick={scrollToTop} />
      </Link>
      <Burger open={open} setOpen={setOpen} />
      <Ul open={open}>
        {navigationTitles.map((title) => (
          <Li key={title}>
            <StyledLink
              activeClass="active"
              to={title}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href={"#" + title}
              onClick={() => setOpen(false)}
            >
              {title}
            </StyledLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default Navigation;
