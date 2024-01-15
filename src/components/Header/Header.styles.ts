'use client'

import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  position: fixed;
  top: 0.9;
  z-index: 999;

  @media (max-width: 768px){
    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1.5rem 0.6rem 1.5rem;
  border-radius: 0.6rem;
  background: var(--gray-700);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10.6px);
  -webkit-backdrop-filter: blur(10.6px);

  @media (max-width: 768px){
    padding-left: 1rem;
    padding-right: 1.3rem;
  }
`;

export const ImageWrapper = styled(Image)`
  object-fit: cover;
  width: 4rem;
  height: auto;
  border-radius: 0.8rem;
`;

