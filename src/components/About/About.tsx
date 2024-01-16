'use client'

import { HiCode } from "react-icons/hi";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { container } from "./About.animations";
import ImageWilliam from "../../../public/william_image.png"
import {
  CardColor,
  CardResumeInfo,
  CardsContainer,
  Container,
  ContainerAbout,
  ContainerCards,
  Content,
  DescriptionAbout,
  ImageCard,
  SalutationAbout
} from "./About.styles";
import { TitleSection } from "../TitleSection/TitleSection";

export const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container id="about">
      <Content>
        <CardsContainer
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={container}
        >
          <ImageCard
            src={ImageWilliam}
            alt="imagem de william dantas com suas principais tecnologias"
          />
          <CardResumeInfo
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={container}
          >
            <ContainerCards>
              <CardColor data-color="one">
                <HiCode />
                <p>+3</p>
                <small>anos</small>
              </CardColor>
              <CardColor data-color="two">
                <HiCode />
                <p>Full</p>
                <small>Stack</small>
              </CardColor>
              <CardColor data-color="three">
                <HiCode />
                <p>+15</p>
                <small>projetos</small>
              </CardColor>
            </ContainerCards>
          </CardResumeInfo>
        </CardsContainer>
        <ContainerAbout
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={container}
        >
          <TitleSection title="Sobre"/>
          <SalutationAbout>
            Olá! Sou William Dantas
          </SalutationAbout>
          <DescriptionAbout>
            Com mais de 3 anos anos de experiência como Desenvolvedor de Software FullStack,
            trago uma trajetória diversificada e repleta de realizações. Durante minha carreira,
            tive o privilégio de trabalhar em diferentes contextos e projetos desafiadores,
            o que me permitiu aprimorar minhas habilidades e contribuir significativamente
            para o sucesso das equipes e organizações com as quais colaborei.
          </DescriptionAbout>
        </ContainerAbout>
      </Content>
    </Container>
  );
};
