import { BurguerMenu } from '../BurguerMenu/BurguerMenu';
import { Container, Content, ImageWrapper } from './Header.styles';
import Logo from "../../../public/logo-wd.png"
import Image from 'next/image';

export const Header = () => {
  return (
    <Container>
      <Content>
        <ImageWrapper src={Logo} alt="Logo William Dantas"/>
        <BurguerMenu />
      </Content>
    </Container>
  );
};
