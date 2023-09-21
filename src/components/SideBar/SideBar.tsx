"use client"

import { AnchorItem } from "../AnchorItem/AnchorItem";
import { Ul } from "./SideBar.styles";
import { SideBarProps } from "./SideBar.interface";

export const SideBar = ({ open }: SideBarProps) => {
  return (
    <Ul open={open}>
      <AnchorItem text="Sobre" windowLocation="about" />
      <AnchorItem text="Experiência" windowLocation="experience" />
      <AnchorItem text="Hard Skills" windowLocation="hard-skills" />
      <AnchorItem text="Projetos" windowLocation="projects" />
      <AnchorItem text="Contato" windowLocation="contact" />
    </Ul>
  );
};
