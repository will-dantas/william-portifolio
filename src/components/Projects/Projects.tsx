'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { container, itemAnimation } from "./Projects.animations";
import { IoLogoJavascript } from "react-icons/io5";
import { projectData } from "./Projects.data";
import {
  Container,
  ContainerCardProject,
  Content,
  ContentCardProject,
  ImageProjects,
  TitleProjects,
  HeaderProject,
  ContentButtonMore,
  AncorButton,
  DatailsProject,
  ContentDetails,
  Title
} from "./Projects.styles";
import { TitleSection } from "../TitleSection/TitleSection";

export const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container id="projects">
      <Content>
        <TitleSection title="Projetos" />
        <Title>Alguns dos meus projetos</Title>
        <ContainerCardProject
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={container}
        >
          {projectData.map((item, index) => (
            <ContentCardProject
              key={item.id}
              variants={itemAnimation}
              layoutId={index.toString()}
            >
              <ImageProjects src={item.image} alt={item.title} />
              <DatailsProject>
                <ContentDetails>
                  <motion.h3>{item.title}</motion.h3>
                  <div>
                    <IoLogoJavascript />
                    <TbBrandTypescript />
                    <FaReact />
                    <FaNodeJs />
                  </div>
                </ContentDetails>
                <AncorButton href={item.link} target="_blank">
                  Acesse
                </AncorButton>
              </DatailsProject>
            </ContentCardProject>
          ))}
        </ContainerCardProject>
        <ContentButtonMore>
          <AncorButton href='https://github.com/will-dantas?tab=repositories' target="_blank">
            <HiCode /> Mais projetos
          </AncorButton>
        </ContentButtonMore>
      </Content>
    </Container>
  )
}
