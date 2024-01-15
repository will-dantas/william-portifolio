'use client'

import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 6rem;
  align-items: center;
  height: 100vh;
  position: relative;
`;

export const ColorBackground = styled.div`
  background: var(--purple-700);
  position: absolute;
  z-index: -1;
  top: 50%;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 95%;
    height: 125%;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  padding: 2rem;
`;

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(16.5px);
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