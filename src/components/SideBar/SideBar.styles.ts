'use client'

import { styled } from "styled-components";
import { SideBarProps } from "./SideBar.interface";


export const Ul = styled.ul<SideBarProps>`
   display: flex;
   justify-content: center;

  @media (max-width: 768px) {
    display: block;
    background: var(--black-700);
    padding-top: 1rem;
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    position: fixed;
    top: 5rem;
    left: 0;
    height: 100vh;
    width: 16rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }
`;
