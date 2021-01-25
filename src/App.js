import React from "react";
import { Navigation } from "components";
import {
  Home,
  About,
  Works,
  Clients,
  Services,
  OurTeam,
  Blog,
  Contact,
} from "pages";
import { ThemeProvider } from "styled-components";
import theme from "theme/theme";
import { Main } from "./App.css";
const App = () => {
  const navigationTitles = [
    "home",
    "about",
    "works",
    "clients",
    "services",
    "our team",
    "blog",
    "contact",
  ];
  return (
    <ThemeProvider theme={theme}>
      <header id="beggining">
        <Navigation navigationTitles={navigationTitles} />
        <Home id={navigationTitles[0]} />
      </header>
      <Main>
        <About id={navigationTitles[1]} />
        <Works id={navigationTitles[2]} />
        <Clients id={navigationTitles[3]} />
        <Services id={navigationTitles[4]} />
        <OurTeam id={navigationTitles[5]} />
        <Blog id={navigationTitles[6]} />
        <Contact id={navigationTitles[7]} />
      </Main>
    </ThemeProvider>
  );
};

export default App;
