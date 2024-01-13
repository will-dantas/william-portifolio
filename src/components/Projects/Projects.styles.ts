'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.section`
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
  max-width: 1216px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 2rem 4rem 2rem;
  }
`;

export const Title = styled.h3`
  margin-bottom: 2rem;
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
  background: var(--black-700);
  border-radius: 1rem;
  padding: 0.3rem 0.3rem 0 0.3rem ;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ImageProjects = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.8rem;
`;

export const Datails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: var(--gray-300);
  width: 100%;

  p {
    font-weight: 700;
    font-size: 0.8rem;
  }
`;

export const DatailsProject = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 1rem 1rem;
  color: var(--shape);
  width: 100%;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const ContentDetails = styled(motion.div)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
`;

export const AncorButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
  border-radius: 1rem;
  border: none;
  background-color: var(--black-900);
  color: var(--shape);
  font-size: 1rem;
  transition: all 0.3s linear;
  text-decoration: none;

  &:hover {
    background-color: var(--black-600);
    transition: linear .4s;
    transform: scale(1.05);
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
