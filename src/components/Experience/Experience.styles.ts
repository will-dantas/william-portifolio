'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.section`
  background: var(--black-800);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 4rem 2rem 4rem 2rem;

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
  }
`;

export const ContentCardsTimeLine = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ConteinerTimeLine = styled(motion.div)`
  background: var(--black-600);
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;

export const Ctimeline = styled.ul`
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

export const ImageWrapper = styled(Image)`
  width: 3rem;
  height: 3rem;
  padding: 5px;
  background: var(--green-500);
  border-radius: 0.5rem;
`;

export const HeaderExperience = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  svg {
    margin-right: 1rem;
    color: var(--green-500);
  }

  h1 {
    color: var(--text-body);
    font-size: 1rem;
    font-weight: 400;
  }
`;
