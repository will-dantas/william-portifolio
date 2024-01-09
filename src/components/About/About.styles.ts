'use client'

import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 6rem;
  align-items: center;
  height: 100vh;
  background: var(--blue-700);

  @media (max-width: 768px) {
    height: auto;
    padding: 0.8rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardsContainer = styled(motion.div)`
  border-radius: 1rem;
  background: var(--blue-200);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 4rem;
  position: relative;
`;

export const CardResumeInfo = styled(motion.div)`
  background: var(--black-800);
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  position: absolute;
  bottom: -1rem;
  left: -1rem;
`;

export const titleResumeInfo = styled.h3`
  background: var(--black-800);
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  position: absolute;
  bottom: -1rem;
  left: -1rem;
`;

export const ContainerAbout = styled(motion.div)`
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const HeaderAbout = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    margin-right: 1rem;
    color: var(--green-500);
  }
`;

export const TitleAbout = styled.h1`
  color: var(--text-body);
  font-size: 1rem;
  font-weight: 400;
`;

export const SalutationAbout = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const DescriptionAbout = styled(motion.p)`
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
