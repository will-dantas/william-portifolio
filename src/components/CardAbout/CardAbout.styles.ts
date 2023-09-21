'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

export const CardAboutContainer = styled(motion.div)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  background: var(--black-600);
  transition: all 0.6s;
  color: var(--green-500);
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  &:hover {
    transition: 0.6s;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const HeaderCard = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  svg {
    font-size: 1.5rem;
    color: var(--green-500);
  }
`;

export const CardText = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: var(--text-body);
  min-width: 18rem;
`;

export const ImageContent = styled.div`
  position: absolute;
  top: -5rem;
  right: -1rem;

  &[data-type="frontend"] {
    top: -4.2rem;
  }

  &[data-type="mobile"] {
    top: -4.2rem;
  }


  &[data-type="backend"] {
    top: -4.2rem;
  }
`;

export const ImageAbout = styled(Image)`
  &[data-type="frontend"] {
    width: 100%;
    height: 6.3rem;
  }

  &[data-type="mobile"] {
    width: 100%;
    height: 5.7rem;
  }

  &[data-type="backend"] {
    width: 100%;
    height: 7rem;
  }

  filter: drop-shadow(0.35rem 0.35rem 0.8rem rgba(0, 0, 0, 0.5));
`;
