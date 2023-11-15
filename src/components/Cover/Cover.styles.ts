'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.section`
  background-image: url('data:image/svg+xml,<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 87L16 88C32 89 64 91 96 97.3C128 103.7 160 114.3 192 111.7C224 109 256 93 288 91.2C320 89.3 352 101.7 384 107.8C416 114 448 114 480 110.5C512 107 544 100 576 92C608 84 640 75 672 75.8C704 76.7 736 87.3 768 86.3C800 85.3 832 72.7 864 67.3C896 62 928 64 944 65L960 66L960 0L944 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z" fill="%2300542c"></path><path d="M0 266L16 272.2C32 278.3 64 290.7 96 282.5C128 274.3 160 245.7 192 240.3C224 235 256 253 288 256.7C320 260.3 352 249.7 384 247C416 244.3 448 249.7 480 245.2C512 240.7 544 226.3 576 209.2C608 192 640 172 672 177.3C704 182.7 736 213.3 768 226.8C800 240.3 832 236.7 864 234C896 231.3 928 229.7 944 228.8L960 228L960 64L944 63C928 62 896 60 864 65.3C832 70.7 800 83.3 768 84.3C736 85.3 704 74.7 672 73.8C640 73 608 82 576 90C544 98 512 105 480 108.5C448 112 416 112 384 105.8C352 99.7 320 87.3 288 89.2C256 91 224 107 192 109.7C160 112.3 128 101.7 96 95.3C64 89 32 87 16 86L0 85Z" fill="%23006031"></path><path d="M0 303L16 310.3C32 317.7 64 332.3 96 329.7C128 327 160 307 192 302.5C224 298 256 309 288 311.7C320 314.3 352 308.7 384 303.2C416 297.7 448 292.3 480 287C512 281.7 544 276.3 576 260.2C608 244 640 217 672 221.5C704 226 736 262 768 278.2C800 294.3 832 290.7 864 288C896 285.3 928 283.7 944 282.8L960 282L960 226L944 226.8C928 227.7 896 229.3 864 232C832 234.7 800 238.3 768 224.8C736 211.3 704 180.7 672 175.3C640 170 608 190 576 207.2C544 224.3 512 238.7 480 243.2C448 247.7 416 242.3 384 245C352 247.7 320 258.3 288 254.7C256 251 224 233 192 238.3C160 243.7 128 272.3 96 280.5C64 288.7 32 276.3 16 270.2L0 264Z" fill="%23006c36"></path><path d="M0 384L16 383.2C32 382.3 64 380.7 96 370.8C128 361 160 343 192 340.3C224 337.7 256 350.3 288 354C320 357.7 352 352.3 384 351.3C416 350.3 448 353.7 480 351.8C512 350 544 343 576 326.8C608 310.7 640 285.3 672 291.7C704 298 736 336 768 350.5C800 365 832 356 864 350.5C896 345 928 343 944 342L960 341L960 280L944 280.8C928 281.7 896 283.3 864 286C832 288.7 800 292.3 768 276.2C736 260 704 224 672 219.5C640 215 608 242 576 258.2C544 274.3 512 279.7 480 285C448 290.3 416 295.7 384 301.2C352 306.7 320 312.3 288 309.7C256 307 224 296 192 300.5C160 305 128 325 96 327.7C64 330.3 32 315.7 16 308.3L0 301Z" fill="%23087b40"></path><path d="M0 498L16 495.3C32 492.7 64 487.3 96 486.3C128 485.3 160 488.7 192 485C224 481.3 256 470.7 288 469C320 467.3 352 474.7 384 480C416 485.3 448 488.7 480 486.8C512 485 544 478 576 470.8C608 463.7 640 456.3 672 457.2C704 458 736 467 768 468.8C800 470.7 832 465.3 864 463.5C896 461.7 928 463.3 944 464.2L960 465L960 339L944 340C928 341 896 343 864 348.5C832 354 800 363 768 348.5C736 334 704 296 672 289.7C640 283.3 608 308.7 576 324.8C544 341 512 348 480 349.8C448 351.7 416 348.3 384 349.3C352 350.3 320 355.7 288 352C256 348.3 224 335.7 192 338.3C160 341 128 359 96 368.8C64 378.7 32 380.3 16 381.2L0 382Z" fill="%23188d4e"></path><path d="M0 541L16 541C32 541 64 541 96 541C128 541 160 541 192 541C224 541 256 541 288 541C320 541 352 541 384 541C416 541 448 541 480 541C512 541 544 541 576 541C608 541 640 541 672 541C704 541 736 541 768 541C800 541 832 541 864 541C896 541 928 541 944 541L960 541L960 463L944 462.2C928 461.3 896 459.7 864 461.5C832 463.3 800 468.7 768 466.8C736 465 704 456 672 455.2C640 454.3 608 461.7 576 468.8C544 476 512 483 480 484.8C448 486.7 416 483.3 384 478C352 472.7 320 465.3 288 467C256 468.7 224 479.3 192 483C160 486.7 128 483.3 96 484.3C64 485.3 32 490.7 16 493.3L0 496Z" fill="%23249f5c"></path></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center, 50%, 50%;
  display: flex;
  justify-content: center;
  height: 6rem;
  align-items: center;
  height: 100vh;
`;

export const ContainerBlur = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(19.5px);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6rem;
  z-index: 999;

  @media (max-width: 768px){
    flex-direction: column-reverse;
    padding: 2rem;
    margin-bottom: 0rem;
  }
`;

export const CoverDescription = styled(motion.div)`
  height: 20rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Paragraph = styled.p`
  display: flex;

  @media (max-width: 768px){
    display: flex;
    text-align: center;
  }
`;

export const CoverLine = styled(motion.h1)`
  color: #fff;
  font-weight: 400;
  font-size: 3rem;
  opacity: 0.9;

  @media (max-width: 768px){
    font-size: 2rem;
    text-align: center;
  }
`;

export const CoverStrong = styled.strong`
  color: var(--green-500);
  font-size: 3rem;

  @media (max-width: 768px){
    font-size: 2.5rem;
    white-space: nowrap;
  }
`;

export const ContentImage = styled(motion.div)`

`;

export const ImageWrapper = styled(Image)`
  height: auto;

  @media (max-width: 768px){
    object-fit: cover;
    width: 100%;
  }
`;

export const ContatContainer = styled(motion.div)`
  box-sizing: border-box;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(10px);
  transition: all 0.5s;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--black-600);
  color: var(--shape);
  font-weight: 500;
  font-size: 1rem;
  margin-top: 4rem;
  width: 12rem;
  height: 2.5rem;
  border: 2px solid var(--green-500);
  border-radius: 0.5rem;
  cursor: pointer;

  div {
    margin-left: 0.5rem;
  }

  span {
    font-size: 3rem;
    font-weight: 300;
  }

  p {
    font-weight: 300;
  }

  &:hover {
    background: var(--green-500);
    width: 12rem;
    height: 2.5rem;
    color: var(--black-600);
    border-radius: 0.5rem;
    font-weight: bolder;
    border: 2px solid var(--green-500);
    transition: linear .4s;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }

  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
    height: 3rem;

    &:hover {
      background: var(--green-500);
      width: 100%;
      height: 3rem;
      color: var(--black-600);
      border-radius: 0.5rem;
      border: 2px solid var(--green-500);
      font-weight: bolder;
      transition: linear .4s;
      transform: scale(1.05);
    }

    &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
  }
`;

export const YearExperience = styled(motion.div)`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 4rem;

  div {
    margin-left: 0.5rem;
    margin-right: 1rem;
  }

  span {
    font-size: 3rem;
    font-weight: 300;
  }

  p {
    font-weight: 300;
    color: var(--black-800);
    font-weight: 500;
  }

  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;
