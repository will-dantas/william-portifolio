import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerCardDetail = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 33px;
  grid-column-gap: 33px;
  position: relative;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 30px;
  }
`;

export const TitleProject = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 999;
`;