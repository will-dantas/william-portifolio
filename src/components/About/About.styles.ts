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
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  height: 100%;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageCard = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: auto;
  max-width: 220px;
  border-radius: 12rem;
  border: 4px solid white;
  background: var(--blue-700);
`;


export const CardResumeInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;
`;

export const TitleResumeInfo = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  gap: 1rem;
  flex: 1;

  p {
    margin-top: 0.6rem;
    font-weight: 900;
  }

  small {
    font-size: 0.6rem;
  }
`;

export const CardColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.8rem 0.8rem 1.8rem;
  border-radius: 0.5rem;
  width: 3rem;

  &[data-color="one"] {
    background: var(--blue-700);
  }

  &[data-color="two"] {
    background: var(--purple-700);
  }

  &[data-color="three"] {
    background: var(--red-700);
  }
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

export const SalutationAbout = styled.h2`
  font-size: 2.4rem;
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
