'use client'

import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.section`
  background: var(--black-800);
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
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem;
    flex-direction: column;
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(16.5px);
  }
`;

export const ContainerImage = styled.div`
  width: 60%;
  flex-direction: column;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: start;
    margin-right: 0;
  }
`;

export const ContentImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
`;

export const HeaderHardSkills = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2rem;

  svg {
    color: var(--green-500);
  }
`;

export const TitleHardSkills = styled.h1`
  color: var(--text-body);
  font-size: 1rem;
  font-weight: 400;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
  perspective-origin: 10% 35%;
`;

export const Inner = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 5px gray;
  transition: .3s;
  transform: rotateY(30deg);
  padding: 10px;
  box-shadow: -20px 20px 10px rgba(0,0,0,0.3), -20px -20px 10px rgba(0,0,0,0.3);
`;

export const ImageWrapper = styled(Image)`
    border-radius: 0.2rem;
    background: var(--black-600);
    width: 120%;
    height: auto;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.3);
`;
