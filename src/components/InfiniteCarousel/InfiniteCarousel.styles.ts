import styled from "styled-components";

export const Container = styled.section`
  overflow: hidden;
  padding: 60px 0;
  background: var(--black-800);
  white-space: nowrap;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 100%;
    background: linear-gradient(to left, transparent, var(--black-800));
    content: "";
    z-index: 2;
  }

  &:after{
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    height: 100%;
    background: linear-gradient(to right, transparent, var(--black-800));
    content: "";
    z-index: 2;
  }

  @media (max-width: 768px) {
    &:before {
      width: 150px;
    }

    &:after{
      width: 150px;
    }
  }
`;

export const Content = styled.div`
  margin: 0;
  padding: 0;

  @keyframes slide {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }

  animation: 60s slide infinite linear;
  display: inline-block;

  img {
    width: auto;
    height: 80px;
    margin: 0 40px;
    filter: grayscale(1);
    pointer-events: none;
    -webkit-user-select: none;
    -ms-user-select: none; 
    user-select: none;
  }
`;