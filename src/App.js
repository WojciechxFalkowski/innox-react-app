import React from "react";
import { Navigation } from "components";
import { Home } from "pages";
import { ThemeProvider } from "styled-components";
import theme from "theme/theme";
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
      <div id="beggining">
        <Navigation navigationTitles={navigationTitles} />
        <main>
          <Home id={navigationTitles[0]} />

          <div id={navigationTitles[1]}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              distinctio consequatur? In repellat maiores earum aspernatur enim
              aliquid numquam tenetur? Eaque impedit tempore aliquid dolore iste
              illum harum labore ullam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Odio, distinctio consequatur? In repellat
              maiores earum aspernatur enim aliquid numquam tenetur? Eaque
              impedit tempore aliquid dolore iste illum harum labore ullam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              distinctio consequatur? In repellat maiores earum aspernatur enim
              aliquid numquam tenetur? Eaque impedit tempore aliquid dolore iste
              illum harum labore ullam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Odio, distinctio consequatur? In repellat
              maiores earum aspernatur enim aliquid numquam tenetur? Eaque
              impedit tempore aliquid dolore iste illum harum labore ullam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              distinctio consequatur? In repellat maiores earum aspernatur enim
              aliquid numquam tenetur? Eaque impedit tempore aliquid dolore iste
              illum harum labore ullam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Odio, distinctio consequatur? In repellat
              maiores earum aspernatur enim aliquid numquam tenetur? Eaque
              impedit tempore aliquid dolore iste illum harum labore ullam!
            </p>
          </div>
          <div id={navigationTitles[2]}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              distinctio consequatur? In repellat maiores earum aspernatur enim
              aliquid numquam tenetur? Eaque impedit tempore aliquid dolore iste
              illum harum labore ullam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Odio, distinctio consequatur? In repellat
              maiores earum aspernatur enim aliquid numquam tenetur? Eaque
              impedit tempore aliquid dolore iste illum harum labore ullam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              distinctio consequatur? In repellat maiores earum aspernatur enim
              aliquid numquam tenetur? Eaque impedit tempore aliquid dolore iste
              illum harum labore ullam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Odio, distinctio consequatur? In repellat
              maiores earum aspernatur enim aliquid numquam tenetur? Eaque
              impedit tempore aliquid dolore iste illum harum labore ullam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              distinctio consequatur? In repellat maiores earum aspernatur enim
              aliquid numquam tenetur? Eaque impedit tempore aliquid dolore iste
              illum harum labore ullam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Odio, distinctio consequatur? In repellat
              maiores earum aspernatur enim aliquid numquam tenetur? Eaque
              impedit tempore aliquid dolore iste illum harum labore ullam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              distinctio consequatur? In repellat maiores earum aspernatur enim
              aliquid numquam tenetur? Eaque impedit tempore aliquid dolore iste
              illum harum labore ullam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Odio, distinctio consequatur? In repellat
              maiores earum aspernatur enim aliquid numquam tenetur? Eaque
              impedit tempore aliquid dolore iste illum harum labore ullam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              distinctio consequatur? In repellat maiores earum aspernatur enim
              aliquid numquam tenetur? Eaque impedit tempore aliquid dolore iste
              illum harum labore ullam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Odio, distinctio consequatur? In repellat
              maiores earum aspernatur enim aliquid numquam tenetur? Eaque
              impedit tempore aliquid dolore iste illum harum labore ullam!
            </p>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
