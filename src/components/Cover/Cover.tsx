'use client'

import { HiOutlineMail } from 'react-icons/hi';
import { container, item, itemImage } from "./Cover.animate";
import {
  Container,
  Content,
  ContatContainer,
  ContainerBlur,
  Font3d,
  ContentFont,
  Paragraph,
  H2
} from "./Cover.styles";

export const Cover = () => {
  const windowScroll = () => {
    const element: any = document.querySelector('#contact');

    if (element !== null) {
      window.scrollTo({
        top: element?.offsetTop,
        behavior: "smooth",
      })
    }
  };

  return (
    <Container>
      <ContainerBlur
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Content>
          <H2 variants={item}>
            Prazer, sou o
          </H2>
          <ContentFont variants={item}>
            <Font3d>William</Font3d>
            <Font3d>Dantas</Font3d>
          </ContentFont>
          <Paragraph variants={item}>Desenvolvedor FullStack, busco contribuir como Densenvolvedor de Software <br /> em empresas que valorizam a inovação e organização.</Paragraph>
          <ContatContainer variants={item} onClick={() => windowScroll()}>
            <HiOutlineMail style={{ marginRight: "0.8rem", fontSize: "1.2rem" }} /> Contate-me
          </ContatContainer>
        </Content>
      </ContainerBlur>
    </Container>
  );
};
