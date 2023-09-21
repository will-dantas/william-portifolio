'use client'

import { Timeline } from "../../components/TimeLine/TimeLine";
import { HiCode } from "react-icons/hi";
import Formation from "../../../public/capelo.svg";
import Dev from "../../../public/dev_logo.svg";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { container, item } from "./Experience.animations";
import {
  Container,
  ConteinerTimeLine,
  Content,
  ContentCardsTimeLine,
  ContentImage,
  Ctimeline,
  HeaderExperience,
  ImageWrapper
} from "./Experience.styles";

export const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container id="experience">
      <Content>
        <HeaderExperience>
          <HiCode />
          <h1>
            Formação & Experiência
          </h1>
        </HeaderExperience>
        <ContentCardsTimeLine
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={container}
        >
          <ConteinerTimeLine variants={item}>
            <ContentImage>
              <ImageWrapper src={Formation} alt="Imagem de um chapeu de formatura" />
              <h2>Formação</h2>
            </ContentImage>
            <Ctimeline>
              <Timeline
                title="Bacharelado em Ciências e Tecnologia"
                description="Universidade Federal do Rio Grande do Norte"
                monthInitial="Jul"
                yearInitial="2016"
                monthFinal="dez"
                yearFinal="2019"
              />
              <Timeline
                title="Bacharelado em Engenharia Biomédica"
                description="Universidade Federal do Rio Grande do Norte"
                monthInitial="Jan"
                monthFinal="Dez"
                yearInitial="2020"
                yearFinal="2022"
              />
            </Ctimeline>
          </ConteinerTimeLine>
          <ConteinerTimeLine variants={item}>
            <ContentImage>
              <ImageWrapper src={Dev} alt="Imagem com a palavra abreviada dev nela" />
              <h2>Experiência</h2>
            </ContentImage>
            <Ctimeline>
              <Timeline
                title="SulAmerica"
                description="Desenvolvedor Full Stack"
                monthInitial="Ago"
                yearInitial="2022"
              />
              <Timeline
                title="Laboratorio de Inovação Tecnologica em Saúde"
                description="Desenvolvedor Full Stack"
                monthInitial="Dez"
                monthFinal="Dez"
                yearInitial="2019"
                yearFinal="2022"
              />
              <Timeline
                title="Montenegro Labs"
                description="Desenvolvedor Full Stack"
                monthInitial="Fev"
                monthFinal="Ago"
                yearInitial="2022"
                yearFinal="2022"
              />
            </Ctimeline>
          </ConteinerTimeLine>
        </ContentCardsTimeLine>
      </Content>
    </Container>
  );
}
