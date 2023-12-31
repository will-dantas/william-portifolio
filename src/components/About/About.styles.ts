'use client'

import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.section`
  background: var(--black-700);
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
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 4rem 2rem 4rem 2rem;
  }
`;

export const CardsContainer = styled(motion.div)`

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
  color: white;
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const DescriptionAbout = styled(motion.p)`
  font-size: 1.2rem;
  text-align: justify;
  line-height: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
