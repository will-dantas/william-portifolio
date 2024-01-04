"use client"

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --green-500: #00EF77;
    --black-600: #2D2E32;
    --black-700: #25262a;
    --black-800: #1E1F22;
    --black-900: #000;
    /* --green-100: #D4F6ED;*/
    --orange-100: #FFE1CC; 
    --blue-200: #81BCF3; 

    --red-700: #EE004F;
    --orange-700: #FB5C59;
    --blue-700: #0051D6;

    --gray-300: #8E8E8E;
    --gray-400: #454546;
    --gray-700: #25262A;
    --red: #E62E4D;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #1E1F22;
    color: #f0f2f5;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }

  &::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
    background: var(--black-600);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-400);
    -webkit-border-radius: 1ex;
  }

  &::-webkit-scrollbar-corner {
    background: var(--black-600);
  }
`;
