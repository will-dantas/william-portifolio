'use client'

import { styled } from "styled-components";
import { SideBarProps } from "./SideBar.interface";

export const Ul = styled.ul<SideBarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  li:last-child {
    background: var(--blue-700);
    font-weight: 600;
    padding: 1rem;

    &:hover {
      background: var(--blue-200);
      color: var(--blue-700);
      transform: scale(0.2rem);
    }

    &::after{
		  background: none;
		}
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--black-700);
    border-radius: 0.5rem;
    padding: .7rem 1.2rem 1.2rem 1.2rem;
    position: fixed;
    width: 100%;
    top: 110px;
    left: ${({ open }) => open ? '20px' : '-20px'};
    width: 16rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }
`;
