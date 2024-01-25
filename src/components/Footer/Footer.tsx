'use client'

import { TiLocation } from "react-icons/ti";
import Logo from "../../../public/logo-william.png"
import { Conteiner, Content, ContentCopyright, ContentInfo, Intersection, Link, LinksCard, Location, LogoImage, Name } from "./Footer.styles";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <Conteiner>
      <Content>
        <ContentInfo>
          <Intersection>
            <LogoImage src={Logo} alt="Logo William Dantas" />
            <Name> William Dantas</Name>
          </Intersection>
          <Intersection>
            <TiLocation />
            <Location>Natal, RN | Brasil</Location>
          </Intersection>
        </ContentInfo>
        <LinksCard>
          <Link href="mailto:wmdantas2@gmail.com">
            <MdEmail />
          </Link>
          <Link href="https://www.linkedin.com/in/william-dantas/" target="_blank">
            <AiFillLinkedin />
          </Link>
          <Link href="https://github.com/will-dantas" target="_blank">
            <AiFillGithub />
          </Link>
          <Link href="https://www.instagram.com/willdnts/" target="_blank">
            <AiFillInstagram />
          </Link>
        </LinksCard>
      </Content>
      <ContentCopyright>
        <p>© William Dantas e todos os direitos reservados</p>
      </ContentCopyright>
    </Conteiner>
  );
}