'use client'

import { motion } from "framer-motion";
import { styled } from "styled-components";
import Image from "next/image";

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

export const ContainerBlur = styled(motion.div)`
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
  padding: 2rem;

  @media (max-width: 768px){
    padding: 2rem;
    margin-bottom: 0rem;
    gap: 0.5rem;
  }
`;

export const InsideBlack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-image: url('data:image/svg+xml,<svg id="visual" viewBox="0 0 1200 300" width="1200" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1200" height="300" fill="%231E1F22"></rect><path d="M0 79L22.2 80.5C44.3 82 88.7 85 133.2 104.2C177.7 123.3 222.3 158.7 266.8 176.5C311.3 194.3 355.7 194.7 400 185.8C444.3 177 488.7 159 533.2 139.8C577.7 120.7 622.3 100.3 666.8 113C711.3 125.7 755.7 171.3 800 195.5C844.3 219.7 888.7 222.3 933.2 223C977.7 223.7 1022.3 222.3 1066.8 201.7C1111.3 181 1155.7 141 1177.8 121L1200 101" fill="none" stroke-linecap="round" stroke-linejoin="miter" stroke="%230051D6" stroke-width="40"></path></svg>');
  object-fit: cover;
  flex: 1;

  p {
    margin-bottom: 3rem;
  }

  @media (max-width: 768px){
    height: 45vh;
    flex: none;
  }
`;

export const InsideIntroduce = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px){
    gap: 0.5rem;
  }
`;

export const InsideWhite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 2rem 2rem 0 2rem;
  width: 60%;
  border-radius: 0.5rem;
  background: var(--shape);
  height: 30vh;

  p {
    color: var(--blue-700);
    font-weight: 700;
  }
`;

export const InsideRed = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  width: 40%;
  gap: 3rem;
  border-radius: 0.5rem;
  background: var(--blue-200);
  height: 30vh;

  h3 {
    color: var(--blue-700);
  }
`;

export const ContatLink = styled(motion.a)`
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--shape);
  color: var(--blue-700);
  border: 2px solid var(--shape);
  border-radius: 1rem;
  padding: 0.5rem;
  text-decoration: none;
  width: 12rem;

  &:hover {
    background: var(--blue-200);
    color: var(--black-600);
    border-radius: 1rem;
    font-weight: bolder;
    transition: linear .4s;
    transform: scale(1.05);
    border: 2px solid var(--black-800);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px){
    width: 100%;
  }
`;

export const ContatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardMotion = styled(motion.div)`
  font-size: 164px;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
`;

export const ImageCard = styled(Image)`
  object-fit: cover;
  width: 30%;
  height: auto;

  @media (max-width: 768px){
    width: 100%;
  }
`;

export const CardContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;