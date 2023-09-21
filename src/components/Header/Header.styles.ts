'use client'

import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  height: 5rem;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  background: var(--gray-700);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10.6px);
  -webkit-backdrop-filter: blur(10.6px);
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

  @media (max-width: 768px){
    padding-left: 1rem;
    padding-right: 1.3rem;
  }
`;

export const ContentImage = styled.div`
  img{
    object-fit: cover;
    width: 100%;
    height: 4rem;
  }
`;

