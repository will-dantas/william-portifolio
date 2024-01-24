'use client'

import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.section`
  background: var(--blue-700);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center, 50%, 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Content = styled(motion.div)`
  width: 100%;
  max-width: 1216px;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 2rem 4rem 2rem;
  }
`;
