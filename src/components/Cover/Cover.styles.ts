'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.section`
  background: var(--blue-700);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center, 50%, 50%;
  display: flex;
  justify-content: center;
  height: 6rem;
  align-items: center;
  height: 100vh;
`;

export const ContainerBlur = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(19.5px);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  flex-direction: column;
  gap: 1rem;

  p {
    text-align: center;
    font-size: 1.1rem;
    letter-spacing: .1rem;
  }

  @media (max-width: 768px){
    padding: 2rem;
    margin-bottom: 0rem;

    p {
      margin-top: 1rem;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  letter-spacing: .3rem;
`;

export const CoverDescription = styled(motion.div)`
  height: 20rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Paragraph = styled.p`
  display: flex;

  @media (max-width: 768px){
    display: flex;
    text-align: center;
  }
`;

export const CoverLine = styled(motion.h1)`
  font-family: 'Inter', sans-serif;
  color: #fff;
  font-weight: 900;
  font-size: 3rem;
  opacity: 0.9;

  @media (max-width: 768px){
    font-size: 2rem;
    text-align: center;
  }
`;

export const CoverStrong = styled.strong`
  color: var(--green-500);
  font-size: 3rem;

  @media (max-width: 768px){
    font-size: 2.5rem;
    white-space: nowrap;
  }
`;

export const ContentImage = styled(motion.div)`

`;

export const ImageWrapper = styled(Image)`
  height: auto;

  @media (max-width: 768px){
    object-fit: cover;
    width: 100%;
  }
`;

export const ContatContainer = styled(motion.button)`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  transition: all 0.5s;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--black-800);
  color: var(--shape);
  font-weight: 500;
  font-size: 1rem;
  width: 12rem;
  height: 2.5rem;
  border: 2px solid var(--black-800);
  border-radius: 0.5rem;
  margin-top: 2rem;

  &:hover {
    background: var(--blue-200);
    width: 12rem;
    height: 2.5rem;
    color: var(--black-600);
    border-radius: 0.5rem;
    font-weight: bolder;
    transition: linear .4s;
    transform: scale(1.05);
    border: 2px solid var(--blue-200);

    @media (max-width: 768px){
      width: 100%;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px){
    justify-content: center;
    width: 100%;
    height: 3rem;
  }
`;

export const YearExperience = styled(motion.div)`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 4rem;

  div {
    margin-left: 0.5rem;
    margin-right: 1rem;
  }

  span {
    font-size: 3rem;
    font-weight: 300;
  }

  p {
    font-weight: 300;
    color: var(--black-800);
    font-weight: 500;
  }

  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const ContentFont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 2rem;
  text-transform: uppercase;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;

export const Font3d = styled.span`
    font-family: "Inter var", Inter, "Helvetica Neue", Arial, sans-serif;
    font-size: 6rem;
    font-weight: 900;
    color: #f5f5f5;
    text-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #919191,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);

  @media (max-width: 768px){
    font-size: 4rem;
  }
`;