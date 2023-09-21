import ImageWilliam from "../../../public/image-william-dantas.png"
import { Container, Content, ImageCard, Link, LinksCard, Location, LocationContent, TitleCard } from "./CardContact.styles"
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

export const CardContact = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Container variants={item} >
      <Content>
        <ImageCard
          src={ImageWilliam}
          alt="imagem de william dantas com suas principais tecnologias"
        />
        <TitleCard> William Dantas</TitleCard>
        <LocationContent>
          <TiLocation />
          <Location>Natal, RN | Brasil</Location>
        </LocationContent>
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
    </Container>
  );
};
