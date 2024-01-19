import Image from "next/image";
import styled from "styled-components";

interface MenuProps {
  open: boolean;
}

export const ContainerHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--black-800);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  z-index: 999;
  transition: background-color .4s, box-shadow 4s;
`;

export const Nav = styled.nav`
  position: relative;
  height: 4rem;
  width: 100%;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1216px;

  @media screen and (min-width: 1150px) {
    div:last-child {
      display: none;
    }
  }
`;

export const NavMenu = styled.div<MenuProps>`
  @media screen and (max-width: 1150px) {
    position: fixed;
    top: ${({ open }) => open ? '85px' : '-120%'};;
    left: 0;
    background-color: var(--black-800);
    width: 100%;
    transition: top .8s;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export const ImageWrapper = styled(Image)`
  object-fit: cover;
  width: 4rem;
  height: auto;
  border-radius: 0.8rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;

  @media screen and (min-width: 1150px) {
    flex-direction: row;
    align-items: center;
    column-gap: 2rem;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: all 0.6s;
  width: auto;

  @media (min-width: 1150px) {
    &::after{
		  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		  content: '';
		  height: 10%;
      top: 1.6rem;
		  position: absolute;
	  }

	  &::after{
		  width: 0%;
	  }

    &:hover{
      color: var(--blue-200);
      transition: 0.6s;

		  &::after{
		    background: var(--blue-700);
		    width: 83%;
		  }
	  }
  } 
`;

export const AncorLogo = styled.a`
  color: var(--shape);
  font-weight: bolder;
  transition: color .4s;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 1.15rem;
  right: 1.5rem;
`;