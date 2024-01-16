'use client'

import { useMenu } from "@/hooks/useMenu";
import { BurguerMenu } from "../BurguerMenu/BurguerMenu";
import { AncorLogo, Header, ImageWrapper, Li, Nav, NavMenu, Ul } from "./Header2.styles";
import Logo from "../../../public/logo-wd.png"
import { AnchorItem } from "../AnchorItem/AnchorItem";

export const Header2 = () => {
  const { menuOpen } = useMenu();

  return (
    <Header>
      <Nav>
        <AncorLogo><ImageWrapper src={Logo} alt="Logo William Dantas" /></AncorLogo>
        <NavMenu open={menuOpen}>
          <Ul>
            <AnchorItem text="Sobre" windowLocation="about" />
            <AnchorItem text="Formação" windowLocation="education" />
            <AnchorItem text="Habilidades" windowLocation="hard-skills" />
            <AnchorItem text="Projetos" windowLocation="projects" />
            <AnchorItem text="Experiência" windowLocation="experience" />
            <AnchorItem text="Contato" windowLocation="contact" />
          </Ul>
        </NavMenu>
        <BurguerMenu />
      </Nav>
    </Header>
  );
};