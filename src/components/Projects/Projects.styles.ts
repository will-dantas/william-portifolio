'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.section`
  background: var(--black-800);
  display: flex;
  justify-content: center;
  height: 6rem;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1216px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 2rem 4rem 2rem;
  }
`;

export const ContainerCardProject = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 33px;
  grid-column-gap: 33px;
  position: relative;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 30px;
  }
`;

export const ContentCardProject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--black-600);
  border-radius: 0.5rem;
  padding: 1.2rem;
  cursor: pointer;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;


export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 999;
`;

export const ContainerModalProject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 470px;
  background: var(--black-800);
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 1.2rem;
  position: relative;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

export const HeaderModalProject = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export const ButtonClose = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-radius: 2rem;
  border: none;
  background-color: var(--gray-400);

  svg {
    color: var(--green-500);
    font-size: 1.2rem;
  }
`;

export const ImageProjects = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const TitleProject = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const ContainerDescriptionProject = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: var(--black-600);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-400);
    -webkit-border-radius: 1ex;
  }

  &::-webkit-scrollbar-corner {
    background: var(--black-600);
  }
`;

export const DescriptionProject = styled(motion.p)`
  display: flex;
  text-align: justify;
  font-size: 1rem;
  color: var(--text-body);
`;

export const TecsProject = styled(motion.p)`
  text-align: start;
  font-size: 0.8rem;
  color: var(--text-body);
  margin-top: 0.3rem;
`;

export const Strong = styled.strong`
  color: white;
  margin-right: 0.3rem;
`;

export const Divider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-top: 1px solid var(--gray-300);
`;
export const AncorButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--green-500);
  border-radius: 0.5rem;
  color: black;
  font-weight: bolder;
  padding: 0.5rem;
  border: 2px solid var(--green-500);
  transition: 0.5s all;
  text-decoration: none;

  &:hover {
    background: var(--black-600);
    border: 2px solid var(--green-500);
    color: white;
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderProject = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;

  svg {
    color: var(--green-500);
  }
`;

export const TitleProjects = styled.h1`
  color: var(--text-body);
  font-size: 1rem;
  font-weight: 400;
`;

export const ContentButtonMore = styled.div`
  display: flex;
  justify-content: end;
`;
