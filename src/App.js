import React from "react";
import { Navigation } from "components";
import { Home, About } from "pages";
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
    "team",
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
      </Main>
    </ThemeProvider>
  );
};

export default App;
