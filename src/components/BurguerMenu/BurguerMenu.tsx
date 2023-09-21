'use client'

import { Container, Content } from "./BurguerMenu.styles";
import { SideBar } from "../SideBar/SideBar";
import { useMenu } from "../../hooks/useMenu";

export const BurguerMenu = () => {
  const { menuOpen, handleMenu } = useMenu();

  const ExpandSideBar = () => {
    handleMenu();
  }

  return (
    <Container>
      <Content open={menuOpen} onClick={ExpandSideBar}>
        <div />
        <div />
        <div />
      </Content>
      <SideBar open={menuOpen} />
    </Container>
  );
};
