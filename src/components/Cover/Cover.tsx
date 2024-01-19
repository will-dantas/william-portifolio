'use client'

import { HiOutlineMail } from 'react-icons/hi';
import ImageWilliam from "../../../public/image-william-dantas.png"
import { container, item, itemImage } from "./Cover.animate";
import {
  Container,
  Content,
  CoverDescription,
  CoverLine,
  ImageWrapper,
  CoverStrong,
  YearExperience,
  ContatContainer,
  ContainerBlur,
  ContentImage,
  Font3d,
  Div,
  ContentFont
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
      <ContainerBlur>
        <Content>
          {/* <CoverDescription
            variants={container}
            initial="hidden"
            animate="show"
          > */}
          {/* <CoverLine variants={item}>
              Prazer! Sou <CoverStrong>William Dantas,</CoverStrong>
            </CoverLine>
            <CoverLine variants={item}>
              <CoverStrong>Desenvolvedor</CoverStrong> de Software
            </CoverLine>
            <ContatContainer variants={item} onClick={() => windowScroll()}>
              <HiOutlineMail style={{ marginRight: "0.8rem", fontSize: "1.2rem" }} /> Contate-me
            </ContatContainer>
            <YearExperience variants={item}>
              <span>+3</span>
              <div>
                <p>anos de</p>
                <p>experiência</p>
              </div>
              <span>Full</span>
              <div>
                <p>Stack</p>
                <p>JavaScript</p>
              </div>
            </YearExperience> */}
          <Div>
            <h2>Prazer, sou o</h2>
          </Div>
          <ContentFont>
            <Font3d>William</Font3d>
            <Font3d>Dantas</Font3d>
          </ContentFont>
          <p>Desenvolvedor FullStack, busco contribuir como Densenvolvedor de Software <br/> em empresas que valorizam a inovação e organização.</p>
          <ContatContainer variants={item} onClick={() => windowScroll()}>
            <HiOutlineMail style={{ marginRight: "0.8rem", fontSize: "1.2rem" }} /> Contate-me
          </ContatContainer>
          {/* </CoverDescription> */}
          {/* <ContentImage
            variants={itemImage}
            initial="hidden"
            animate="show"
          >
            <ImageWrapper
              src={ImageWilliam} 
              alt="imagem de william dantas com suas principais tecnologias" 
            />
          </ContentImage> */}
        </Content>
      </ContainerBlur>
    </Container>
  );
};
