'use client'

import Image from "next/image";
import { Container, Content } from "./InfiniteCarousel.styles";
import { icons } from "./InfiniteCarousel.data";

export const InfiniteCarousel = () => {
  const someImages = icons;
  const corousel = someImages.map((items) =>
    <Image key={items.nameItem} src={items.iconItem} alt="imagem" />
  );

  return (
    <Container>
      <Content>{corousel}</Content>
      <Content>{corousel}</Content>
    </Container>
  );
};
