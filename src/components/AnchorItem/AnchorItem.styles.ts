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

  > svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    margin: .8rem 0 0rem 0;
    padding: 1rem;
    width: 100%;
    background: var(--black-600);

    > svg {
      margin-right: 1rem;
    }

    &:hover {
      background: var(--blue-700);
      padding: 1rem;
      color: var(--black-600);

      p {
        margin-right: 2rem;
        color: var(--black-600);
        font-weight: 500;
        transition: 0.6s
      }

      &::after{
		    content: none;
	    }

      transition: 0.6s
    }
  }
`;
