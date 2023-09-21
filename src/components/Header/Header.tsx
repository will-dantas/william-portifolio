import { BurguerMenu } from '../BurguerMenu/BurguerMenu';
import { Container, Content, ContentImage, ImageWrapper } from './Header.styles';
import logo from "../../../public/logo-wd.png"

export const Header = () => {
  return (
    <Container>
      <Content>
        <ContentImage>
          <ImageWrapper src={logo} alt="Logo William Dantas" />
        </ContentImage>
        <BurguerMenu />
      </Content>
    </Container>
  );
};
