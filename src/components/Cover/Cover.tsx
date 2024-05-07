'use client'

import { container } from "./Cover.animate";
import {
  Container,
  Content,
  ContatContainer,
  ContainerBlur,
  InsideBlack,
  InsideIntroduce,
  InsideRed,
  InsideWhite,
  ContatLink,
} from "./Cover.styles";
import Node from "../../../public/icons-tecs/nodejs-icon-logo-svgrepo-com.svg"
import TypeScript from "../../../public/icons-tecs/typescript-official-svgrepo-com.svg"
import ReactIcon from "../../../public/icons-tecs/react-svgrepo-com.svg"
import Javascript from "../../../public/icons-tecs/javascript-svgrepo-com.svg"
import GoogleGPC from "../../../public/icons-tecs/gcp-svgrepo-com.svg"
import { ArrayLooper } from "./components/ArrayLooper";


export const Cover = () => {
  const food = [Node, TypeScript, ReactIcon, Javascript, GoogleGPC];
    
  return (
    <Container>
      <ContainerBlur
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Content>
          <InsideBlack>
            <h2>Ei! Bem Vindo!</h2>
            <p>Sou William e Desenvolvedor de Software</p>
          </InsideBlack>
          <InsideIntroduce>
          <InsideWhite>
            <p>Conheça minhas habilidades</p>
            <ArrayLooper elements={food} />
          </InsideWhite>
          <InsideRed>
            <h3>Contato</h3>
            <ContatContainer>
              <ContatLink href="mailto:wmdantas2@gmail.com">
                Email
              </ContatLink>
              <ContatLink href="https://www.linkedin.com/in/william-dantas/" target="_blank">
                Linkedin
              </ContatLink>
            </ContatContainer>
          </InsideRed>
          </InsideIntroduce>
        </Content>
      </ContainerBlur>
    </Container>
  );
};