'use client'

import Image from "next/image";
import { Container, Content } from "./InfiniteCarousel.styles";
import { allItems } from "../SharedLayout/SharedLayout.data";
import React from "../../../public/icons-tecs/react-svgrepo-com.svg"
import Html from "../../../public/icons-tecs/html-5-svgrepo-com.svg"
import Css from "../../../public/icons-tecs/css-3-svgrepo-com.svg"
import Next from "../../../public/icons-tecs/nextjs-fill-svgrepo-com.svg"
import Sass from "../../../public/icons-tecs/nodejs-icon-logo-svgrepo-com.svg"


export const InfiniteCarousel = () => {
  const someImages = [React, Html, Css, Next, Sass, React, Html, Css, Next, Sass, React, Html, Css, Next, Sass]
  const corousel = someImages.map((items) =>
    <Image key={items} src={items} alt="imagem" />
  );

  return (
    <Container>
      <Content>{corousel}</Content>
      <Content>{corousel}</Content>
    </Container>
  );
};
