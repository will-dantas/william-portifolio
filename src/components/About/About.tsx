'use client'

import { HiCode } from "react-icons/hi";
import { CardAbout } from "../../components/CardAbout/CardAbout";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { characterAnimation, container } from "./About.animations";
import ImageMacbook from "../../../public/frontend.png"
import ImageIphone from "../../../public/mobile.png"
import Backend from "../../../public/backend.png"
import {
  CardsContainer,
  Container,
  ContainerAbout,
  Content,
  DescriptionAbout,
  HeaderAbout,
  SalutationAbout,
  TitleAbout
} from "./About.styles";

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
          <CardAbout
            type="frontend"
            title="Front End"
            image={ImageMacbook}
            text="React, Next.JS, TypeScript, Jest, Redux, Contexct API..."
          />
          <CardAbout
            type="mobile"
            title="Mobile"
            image={ImageIphone}
            text="React Native, Expo, TypeScript, Responsividade, kotlin..."
          />
          <CardAbout
            type="backend"
            title="Back End"
            image={Backend}
            text="Node.Js, SQL, NoSQL, Express, Nest.Js, CI/CD.."
          />
        </CardsContainer>
        <ContainerAbout
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={characterAnimation}
        >
          <HeaderAbout>
            <HiCode />
            <TitleAbout>
              Sobre
            </TitleAbout>
          </HeaderAbout>
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
