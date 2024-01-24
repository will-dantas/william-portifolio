'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(19.5px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  padding: 3rem;
  height: auto;
  border: 3px solid var(--black-600);
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const ImageCard = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: auto;
  max-width: 250px;
`;

export const TitleCard = styled.h2`
`;

export const LocationContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const Location = styled.p`
`;

export const LinksCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  background: var(--black-800);
  padding: 0.7rem;
  text-decoration: none;
  font-size: 1.6rem;
  border-radius: 1.5rem;

  svg {
    color: var(--text-body);
    transition: all 0.5s;

    &:hover {
      color: white;
      transition: 0.5s;
    }
  }
`;


