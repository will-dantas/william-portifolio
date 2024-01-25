'use client'

import { useMenu } from "@/hooks/useMenu";
import { BurguerMenu } from "../BurguerMenu/BurguerMenu";
import { AncorLogo, ContainerHeader, ImageWrapper, Li, Nav, NavMenu, Ul } from "./Header.styles";
import Logo from "../../../public/logo-william.png"
import { AnchorItem } from "../AnchorItem/AnchorItem";
import { useEffect, useState } from "react";

export const Header = () => {
  const { menuOpen } = useMenu();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); 
    } else { 
      setShow(true);  
    }

    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const headerHiddeen = show ? "visible" : "hidden";

  return (
    <ContainerHeader data-hide={headerHiddeen}>
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
    </ContainerHeader>
  );
};