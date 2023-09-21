import { CardAboutContainer, CardText, CardTitle, HeaderCard, ImageAbout, ImageContent } from "./CardAbout.styles"
import { ICardAbout } from "./CardAbout.interface"

export const CardAbout = ({ title, image, text, type }: ICardAbout) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <CardAboutContainer variants={item}>
      <HeaderCard>
        <CardTitle>{title}</CardTitle>
        <ImageAbout data-type={type} src={image} alt="" />
      </HeaderCard>
      <CardText>{text}</CardText>
    </CardAboutContainer>
  )
}
