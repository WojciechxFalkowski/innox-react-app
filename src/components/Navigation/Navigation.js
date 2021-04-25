import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Nav, Img, StyledLink, Ul, Li } from "./Navigation.css";
import { Burger } from "components";
import logo from "images/logo.png";
const Navigation = ({ navigationTitles }) => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const [isSticky, setSticky] = useState(false);
  const [isLower, setIsLower] = useState(true);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const navClass = "active-header";
  const handleScroll = () => {
    const sticky = navRef.current.offsetTop;
    if (window.pageYOffset > 50) {
      if (!navRef.current.classList.contains(navClass)) {
        navRef.current.classList.add(navClass);
        setIsLower(false);
      }
    } else {
      if (navRef.current.classList.contains(navClass)) {
        navRef.current.classList.remove(navClass);
        setIsLower(true);
      }
    }

    if (navRef.current) {
      setSticky(window.pageYOffset > sticky);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Nav ref={navRef} isSticky={isSticky}>
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
              offset={-10}
              duration={500}
              href={"#" + title}
              onClick={() => setOpen(false)}
              islower={isLower.toString()}
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
