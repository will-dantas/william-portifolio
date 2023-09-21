import { BurguerMenu } from '../BurguerMenu/BurguerMenu';
import { Container, Content, ContentImage, ImageWrapper } from './Header.styles';
import Logo from "../../../public/logo-wd.png"
import Image from 'next/image';

export const Header = () => {
  return (
    <Container>
      <Content>
        <ContentImage>
          <ImageWrapper height={35} width={500} src={Logo} alt="Logo William Dantas" />
        </ContentImage>
        <BurguerMenu />
      </Content>
    </Container>
  );
};
