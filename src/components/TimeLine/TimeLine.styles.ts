'use client'

import { styled } from "styled-components";

export const TimelineItem = styled.li`
  position: relative;
  display: flex;
  gap: 1.5rem;

  &:last-child {
    div {
      &:before {
        display: none;
      }
    }
  }
`;

export const TimelineContent = styled.div`
  flex: 1;
  position: relative;
  order: 1;
  padding: 1.5rem 0 1.5rem 1.5rem;

  small {
    margin-top: -1rem;
    color: var(--green-500);
  }

  &:before {
    content: "";
    position: absolute;
    right: 100%;
    top: 2rem;
    height: 100%;
    width: 1.5px;
    background-color: lightgrey;
  }

  &:after {
    content: "";
    position: absolute;
    left: calc(0px - 7px);
    top: 2rem;
    width: 0.6rem;
    height: 0.6rem;
    background-color: var(--green-500);
    z-index: 1;
    border: 2px solid var(--green-500);
    border-radius: 50%;
  }
`;
