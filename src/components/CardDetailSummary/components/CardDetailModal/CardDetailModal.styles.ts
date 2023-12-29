import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerModalDetail = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: space-between;
  background: var(--gray-700);
  border-radius: 1rem;
  padding: 0.3rem 0.3rem 0 0.3rem ;
`;

export const HeaderModalDetail = styled.div`
  display: flex;
  justify-content: space-between;
  top: 2rem;
  right: 2rem;
`;

export const ButtonClose = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-radius: 2rem;
  border: none;
  background-color: var(--shape);

  svg {
    color: var(--black-800);
    font-size: 1.2rem;
  }
`;

export const ContentColor = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 18rem;
  height: auto;
  gap: 2rem;
  background: #0051D6;
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
`;

export const TimeLine = styled.p`
    background-color: var(--shape);
    width: fit-content;
    font-weight: 700;
    padding: 0.4rem;
    font-size: 0.6rem;
    color: var(--black-800);
    border-radius: 0.8rem;
`;

export const Company = styled.h3`
  font-weight: 700;
  font-size: 1.4rem;
`;

export const Position = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
`;

export const Datails = styled.ul`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  color: var(--gray-400);
  width: 100%;
  gap: 0.4rem;

  p {
    color: var(--gray-300);
  }

  li {
    font-size: 0.8rem;
    list-style: inside;
    color: var(--shape);
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  p {
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--shape);
    border-radius: 1rem;
    border: 1px solid var(--black-900);
    padding: 0.2rem 0.6rem 0.2rem 0.6rem; 
  }
`;