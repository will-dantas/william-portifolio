'use client'

import { styled } from "styled-components";

interface BurguerMenuProps {
  open: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div<BurguerMenuProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  cursor: pointer;

  div {
    display: none;
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'var(--blue-700)' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    @media (max-width: 768px){
      display: flex;
    }

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
