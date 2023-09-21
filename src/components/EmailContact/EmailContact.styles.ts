'use client'

import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled(motion.div)`
  background: var(--black-700);
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

export const FormContent = styled.form`
  width: 100%;
  padding: 1rem 2rem 1rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.4rem;
  margin-top: 1rem;
`;

export const Label = styled.label`
  color: var(--green-500);
  text-align: start;
  font-weight: 500;
`;

export const Input = styled.input`
  background: var(--gray-400);
  font-size: 1.2rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  color: var(--white);
  border: 2px solid var(--black-700);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

  &:focus {
    border: 2px solid var(--green-500);
  }
`;

export const TextArea = styled.textarea`
  background: var(--gray-400);
  color: var(--white);
  font-size: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 8rem;
  padding: 1rem;
  border: 2px solid var(--black-700);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  resize: none;

  &:focus {
    border: 2px solid var(--green-500);
  }
`;

export const ContentButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: end;
  margin-top: 2rem;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--green-500);
  border-radius: 0.5rem;
  color: black;
  font-weight: bolder;
  padding: 0.5rem;
  border: 2px solid var(--green-500);
  transition: 0.5s all;
  width: 40%;

  svg {
    font-size: 1.2rem;
  }

  &:disabled {
    background: var(--gray-300);
    color: var(--gray-400);
    cursor: default;

    &:hover {
      background: var(--gray-300);
      color: var(--gray-400);
    }
  }

  &:hover {
    background: var(--black-600);
    border: 2px solid var(--green-500);
    color: white;
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
