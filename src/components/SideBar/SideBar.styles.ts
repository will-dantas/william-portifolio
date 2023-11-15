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
    padding-left: 1rem;
    padding-right: 1rem;
    position: fixed;
    top: 5rem;
    left: 2rem;
    height: auto;
    width: 16rem;
    transform: ${({ open }) => open ? 'translateY(-100%)' : 'translateY(0)'};
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }
`;
