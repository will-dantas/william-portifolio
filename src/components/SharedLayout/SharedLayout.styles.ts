'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

interface ListPros {
  selected: boolean;
}

export const Window = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 0.5rem;
  background: var(--black-600);
  overflow: hidden;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

export const BarMac = styled.div`
  background-color: var(--black-600);
  height: 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
  margin-top: 0.4rem;

  button {
    width: .8rem;
    height: .8rem;
    border-radius: 16rem;
    border: none;
  }

  button:nth-child(1) {
    background: var(--red);
  }

  button:nth-child(2) {
    background: #EFB700;
  }

  button:nth-child(3) {
    background: #07DA63;
  }
`;

export const Nav = styled.nav`
  background: var(--black-600);
  padding: 5px 5px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid var(--gray-400);
  height: auto;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  font-size: 128px;
  flex-grow: 1;
  user-select: none;
  height: 100%;
  overflow: auto;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: var(--black-600);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-400);
    -webkit-border-radius: 1ex;
  }

  &::-webkit-scrollbar-corner {
    background: var(--black-600);
  }
`;


export const Ul = styled.ul`
  display: flex;
  width: 100%;
`;

export const Li = styled.ul<ListPros>`
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 10px 15px;
  position: relative;
  background: ${props => props.selected ? "var(--gray-400)" : "var(--black-600)"};
  cursor: pointer;
  height: 3rem;
  display: flex;
  justify-content: start;
  align-items: center;
  flex: 1;
  gap: 0.5rem;
  min-width: 0;
  position: relative;
  user-select: none;
  transition: 0.5s;

  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--green-500);
  }

  svg {
    font-size: 1.2rem;
    color: var(--green-500);
  }

  @media (max-width: 768px) {
    padding: 0;
    justify-content: center;
  }
`;

export const ContainerItems = styled(motion.div)`
`;

export const DivItems = styled(motion.div)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  background: var(--black-800);
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  margin: 1rem;
  border-radius: 0.5rem;
  border: 2px solid var(--black-800);
  padding: 0.8rem;
  transition: all 0.5s;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  &:hover {
    border: 2px solid var(--green-500);
    transition: 0.5s
  }
`;

export const ImageWrapper = styled(Image)`
  width: 3rem;
  height: auto;
  border-radius: 0.5rem;
  background: var(--gray-400);
  padding: 0.2rem;
`;