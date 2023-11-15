'use client'

import { styled } from "styled-components";
import { SideBarProps } from "./SideBar.interface";

export const Ul = styled.ul<SideBarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    display: block;
    background: var(--black-700);
    padding-top: 1rem;
    padding-bottom: 0.6rem;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    position: fixed;
    margin-top: 8rem;
    top: ${({ open }) => open ? '-56px' : '-56px'};
    left: 0;
    height: auto;
    width: 100%;
    opacity: ${({ open }) => open ? '1' : '0'};
    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    z-index: -1;
  }
`;
