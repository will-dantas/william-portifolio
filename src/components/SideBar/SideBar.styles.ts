'use client'

import { styled } from "styled-components";
import { SideBarProps } from "./SideBar.interface";

export const Ul = styled.ul<SideBarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--black-700);
    border-radius: 0.5rem;
    padding: 1.5rem;
    position: fixed;
    top: 110px;
    left: 20px;
    width: 16rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }
`;
