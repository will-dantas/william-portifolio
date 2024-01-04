import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentCardDetail = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--black-700);
  border-radius: 1rem;
  padding: 0.3rem 0.3rem 0 0.3rem ;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
/* 
  @media (max-width: 768px){
    width: auto;
  } */
`;

export const ContentColor = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 18rem;
  height: 18rem;
  border-radius: 0.8rem;
  color: var(--black-800);
  padding: 1rem;

  &[data-color="third"] {
    background: var(--red-700);
  }

  &[data-color="second"] {
    background: var(--orange-700);
  }

  &[data-color="first"] {
    background: var(--blue-700);
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const TimeLine = styled.p`
    background-color: var(--shape);
    width: fit-content;
    font-weight: 700;
    padding: 0.4rem;
    font-size: 0.6rem;
    color: var(--black-900);
    border-radius: 0.8rem;
`;

export const Company = styled.h3`
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--black-900);
`;

export const Position = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
`;

export const Datails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: var(--gray-300);
  width: 100%;

  p {
    font-weight: 700;
    font-size: 0.8rem;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  p {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--shape);
    border-radius: 1rem;
    border: 1px solid var(--black-900);
    padding: 0.2rem 0.6rem 0.2rem 0.6rem;   
  }
`;

export const ButtonDetail = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
  border-radius: 1rem;
  border: none;
  background-color: var(--black-900);
  color: var(--shape);
  font-size: 1rem;
  transition: all 0.3s linear;

  &:hover {
    background-color: var(--black-600);
    transition: linear .4s;
    transform: scale(1.05);
  }
`;