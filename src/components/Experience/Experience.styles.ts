'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 4rem 2rem 4rem 2rem;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 1216px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentCardsTimeLine = styled(motion.div)`
  padding: 2.5rem;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 3em;
  font-size: 19px;
  text-align: left;

  &[data-color="blue"] {
    background: var(--blue-700);
  }

  &[data-color="red"] {
    background: var(--red-700);
  }

  p {
    color: var(--black-900)
  }

  &:not(.img-as-jpg) img {
    top: -6%;
    right: -2%;
    width: 31%;
    height: 130%;
  }

  img {
    position: absolute;
    transform: rotate(-7deg);
    transition: all .3s;
    font-size: 10rem;
    border-radius: 1rem;
    fill: yellow;
    z-index: 0;

    &[data-color="blue"] {
      background: var(--blue-200);
    }

    &[data-color="red"] {
      background: var(--orange-100);
    }
  }

  @media screen and (min-width: 0px) and (max-width: 1010px) {
    margin-top: 2em;
    min-height: 20rem;
  }

  @media screen and (min-width: 0px) and (max-width: 1010px) {
    &:not(.img-as-jpg) img {
      width: 45%;
      height: 45%;
      right: -5%;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 1010px) {
    &:not(.img-as-jpg) img {
      top: initial;
      bottom: -4%;
    }
  }
`;

export const ConteinerTimeLine = styled(motion.div)`
  background: var(--black-600);
  display: flex;
  flex-direction: column;
  align-items: start;

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

export const ContentInformation = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageWrapper = styled(Image)`
  top: 14%;
  right: -37%;
  width: 6rem;
  height: auto;
  position: absolute;
  transform: rotate(-7deg);
  transition: all .3s;
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
