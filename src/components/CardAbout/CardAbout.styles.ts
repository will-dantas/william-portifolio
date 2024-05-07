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
  border-radius: 1rem;
  background: var(--blue-200);
  transition: all 0.6s;
  color: var(--green-500);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  
  &:hover {
    transition: 0.6s;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--blue-700);
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
  color: var(--black-900);
  min-width: 18rem;
`;

export const ImageContent = styled.div`


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
  position: absolute;
  right: -1rem;
  height: auto;

  &[data-type="frontend"] {
    width: 6rem;
    top: -4.2rem;
  }

  &[data-type="mobile"] {
    width:5rem;
    top: -4.2rem;
  }

  &[data-type="backend"] {
    width: 4.5rem;
    top: -4.2rem;
  }

  filter: drop-shadow(0.35rem 0.35rem 0.8rem rgba(0, 0, 0, 0.5));
`;