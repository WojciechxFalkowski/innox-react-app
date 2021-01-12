import React, { useState } from "react";
import {
  Section,
  Ul,
  Li,
  ListButton,
  ImagesWrapper,
  Img,
  BackgroundButton,
} from "./Works.css";
import { LineTitle, Button } from "components";
import image1 from "images/works/image1.png";
import image2 from "images/works/image2.png";
import image3 from "images/works/image3.png";
import image4 from "images/works/image4.png";
import image5 from "images/works/image5.png";
import image6 from "images/works/image6.png";
import image7 from "images/works/image7.png";
import image8 from "images/works/image8.png";
import image9 from "images/works/image9.png";
import image10 from "images/works/image10.png";
import image11 from "images/works/image11.png";
const listItems = [
  "all",
  "branding",
  "marketing",
  "media",
  "photography",
  "web design",
];
const dummyData = [
  {
    image: image1,
    text: "Aparat fotograficzny, słuchawki i laptop",
    category: "all photography",
  },
  { image: image2, text: "pudełka", category: "all branding web design" },
  {
    image: image3,
    text: "karty z informacjami",
    category: " all  web design ",
  },
  { image: image4, text: "Realistiyczna książka", category: "all branding" },
  { image: image5, text: "Logo firmy Londoner", category: "all media" },
  {
    image: image6,
    text: "Papierowa torba na zakupy",
    category: "all marketing",
  },
  {
    image: image7,
    text: "Dwie białe butelki",
    category: "branding all marketing",
  },
  {
    image: image8,
    text: "Biała i czarna koszulka",
    category: "all marketing",
  },
];
const dummyDataLoaded = [
  {
    image: image9,
    text: "Dwie butelki wypełnione cieczą",
    category: "all photography",
  },
  {
    image: image10,
    text: "Stolik z butelkami",
    category: "all branding,photography",
  },
  {
    image: image11,
    text: "Telefon, kwiaty, długopis i zeszyt",
    category: "all media web design photography branding",
  },
];
const Works = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [images, setImages] = useState(dummyData);
  const [isLoadedData, setIsLoadedData] = useState(false);

  const filteredImages = images.filter(
    (item) => item.category.indexOf(activeCategory) !== -1
  );

  const handleLoadImages = () => {
    setImages((items) => [...items, ...dummyDataLoaded]);
    setIsLoadedData(true);
  };
  return (
    <Section id={id}>
      <LineTitle>
        <Button>{id}</Button>
      </LineTitle>
      <Ul>
        {listItems.map((item) => (
          <Li key={item} onClick={() => setActiveCategory(item)}>
            <ListButton>{item}</ListButton>
          </Li>
        ))}
      </Ul>
      <ImagesWrapper>
        {filteredImages.map((item) => (
          <Img key={item.text} src={item.image} alt={item.text} />
        ))}
      </ImagesWrapper>
      {!isLoadedData && (
        <BackgroundButton onClick={handleLoadImages}>
          Load more
        </BackgroundButton>
      )}
    </Section>
  );
};

export default Works;
