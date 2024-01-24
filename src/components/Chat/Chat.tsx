import ImageWilliam from "../../../public/william_image.png"
import {
  Avatar,
  Balloons,
  ContainerAvatar,
  ContainerBalloons,
  ContainerChat,
  ContentBalloons,
  LastBalloons,
  OwnBalloon, 
  TextBalloon
} from "./Chat.styles"

export const Chat = () => {
  return (
    <ContainerChat>
      <ContainerAvatar>
        <Avatar
          src={ImageWilliam}
          alt="Imagem de William Dantas"
        />
      </ContainerAvatar>
      <ContainerBalloons>
        <ContentBalloons>
          <Balloons>
            <TextBalloon>Olá! Como vai? 😄</TextBalloon>
          </Balloons>
          <OwnBalloon>William Dantas</OwnBalloon>
        </ContentBalloons>
        <ContentBalloons>
          <Balloons>
            <TextBalloon>Gostou do meu portifólio?! Entre em contato comigo! </TextBalloon>
          </Balloons>
          <OwnBalloon>William Dantas</OwnBalloon>
        </ContentBalloons>
        <ContentBalloons>
          <Balloons>
            <TextBalloon>Envie um email ou fale por algumas das minhas redes sociais!</TextBalloon>
          </Balloons>
          <OwnBalloon>William Dantas</OwnBalloon>
        </ContentBalloons>
        <ContentBalloons>
          <LastBalloons>
            <TextBalloon>🚀🚀🚀</TextBalloon>
          </LastBalloons>
          <OwnBalloon>William Dantas</OwnBalloon>
        </ContentBalloons>
      </ContainerBalloons>
    </ContainerChat>
  )
}