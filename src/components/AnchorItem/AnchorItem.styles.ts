'use client'

import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--shape);
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: all 0.6s;
  width: auto;

  &::after{
		transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		content: '';
		height: 10%;
    top: 2rem;
		position: absolute;
	}

	&::after{
		width: 0%;
	}

  &:hover{
    color: var(--blue-200);
    transition: 0.6s;

		&::after{
		  background: var(--blue-700);
		  width: 83%;
		}
	}

  @media (max-width: 1150px) {
    margin: 0.4rem 0.8rem 0.4rem 0.8rem;
    padding: 1rem;
    border: 2px solid var(--blue-700);
    border-radius: 1rem;

    &:hover {
      background: var(--blue-700);
      padding: 1rem;

      &::after{
		    content: none;
	    }

      transition: 0.6s
    }
  }
`;
