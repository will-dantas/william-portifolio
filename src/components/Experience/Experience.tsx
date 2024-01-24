'use client'

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { container, item } from "./Experience.animations";
import {
  Container,
  Content,
  ContentCardsTimeLine
} from "./Experience.styles";
import logoUFRN from '../../../public/brasao_ufrn.svg';
import logoUFRNRed from '../../../public/brasao_ufrn_red.svg';
import Image from "next/image";
import { TitleSection } from "../TitleSection/TitleSection";

export const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container id="education">
      <Content           
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={container}
      >
        <TitleSection title="Formação"/>
        <ContentCardsTimeLine variants={item} data-color="red">
          <div>
            <h2>Bacharelado em Ciências & Tecnologia</h2>
            <p>Universidade Federal do Rio Grande do Norte</p>
          </div>
          <Image data-color="red" src={logoUFRNRed} alt="Imagem de um chapeu de formatura" />
        </ContentCardsTimeLine>
        <ContentCardsTimeLine data-color="blue" variants={item}>
          <div>
            <h2>Bacharelado em Engenharia Biomédica</h2>
            <p>Universidade Federal do Rio Grande do Norte</p>
          </div>
          <Image data-color="blue" src={logoUFRN} alt="Imagem de um chapeu de formatura" />
        </ContentCardsTimeLine>
      </Content>
    </Container>
  );
}
