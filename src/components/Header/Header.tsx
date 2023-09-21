import { BurguerMenu } from '../BurguerMenu/BurguerMenu';
import { Container, Content, ContentImage } from './Header.styles';
import logo from "../../../public/logo-wd.png"
import Image from 'next/image';

export const Header = () => {
  return (
    <Container>
      <Content>
        <ContentImage>
          <Image src={logo} alt="Logo William Dantas" />
        </ContentImage>
        <BurguerMenu />
      </Content>
    </Container>
  );
};
