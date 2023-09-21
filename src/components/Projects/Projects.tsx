'use client'

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { MdClose } from "react-icons/md";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { container, itemAnimation } from "./Projects.animations";
import { IoLogoJavascript } from "react-icons/io5";
import { projectData } from "./Projects.data";
import {
  ButtonClose,
  Container,
  ContainerCardProject,
  ContainerModalProject,
  Content,
  ContentCardProject,
  HeaderModalProject,
  TitleProject,
  ImageProjects,
  Overlay,
  DescriptionProject,
  TecsProject,
  Strong,
  ContainerDescriptionProject,
  Divider,
  TitleProjects,
  HeaderProject,
  ContentButtonMore,
  AncorButton
} from "./Projects.styles";


export const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
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
        <HeaderProject>
          <HiCode />
          <TitleProjects>
            Projetos
          </TitleProjects>
        </HeaderProject>
        <h1>Alguns dos meus projetos</h1>
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
              onClick={() => setSelectedId(item.id as any)}
            >
              <ImageProjects src={item.image} alt={item.title} />
              <TitleProject>
                <motion.h3>{item.title}</motion.h3>
                <div>
                  <IoLogoJavascript />
                  <TbBrandTypescript />
                  <FaReact />
                  <FaNodeJs />
                </div>
              </TitleProject>
            </ContentCardProject>
          ))}
        </ContainerCardProject>
        <AnimatePresence>
          {selectedId && (
            <Overlay>
              <ContainerModalProject layoutId={selectedId}>
                <HeaderModalProject>
                  <ButtonClose onClick={() => setSelectedId(null)}><MdClose /></ButtonClose>
                </HeaderModalProject>
                <ImageProjects src={projectData[parseInt(selectedId, 10)].image} alt={projectData[parseInt(selectedId, 10)].title} />
                <TitleProject>
                  <motion.h3>{projectData[parseInt(selectedId, 10)].title}</motion.h3>
                </TitleProject>
                <ContainerDescriptionProject>
                  <DescriptionProject>
                    {projectData[parseInt(selectedId, 10)].description}
                  </DescriptionProject>
                  <Divider />
                  <TecsProject>
                    <Strong>Tecnologias usadas:</Strong> {projectData[parseInt(selectedId, 10)].tecs}
                  </TecsProject>
                </ContainerDescriptionProject>
                <AncorButton href={projectData[parseInt(selectedId, 10)].link} target="_blank">
                    Acesse
                </AncorButton>
              </ContainerModalProject>
            </Overlay>
          )}
        </AnimatePresence>
        <ContentButtonMore>
          <AncorButton href='https://github.com/will-dantas?tab=repositories' target="_blank">
            <HiCode /> Mais projetos
          </AncorButton>
        </ContentButtonMore>
      </Content>
    </Container>
  )
}
