"use client"

import { useMenu } from "../../hooks/useMenu";
import { IAnchorItem } from "./AnchorItem.interface"
import { Container } from "./AnchorItem.styles"

export const AnchorItem = ({ text, windowLocation }: IAnchorItem) => {
  const { handleMenu } = useMenu();

  const windowScroll = () => {
    handleMenu();

    const element: any = document.querySelector(`#${windowLocation}`);

    if (element !== null) {
      const screenSize =  screen.width <= 768 ? 60 : 0;
    
      window.scrollTo({
        top: element?.offsetTop - screenSize,
        behavior: "smooth",
      })
    }
  };

  return (
    <Container onClick={() => windowScroll()}>
      {<p>
        {text}
      </p>}
    </Container>
  )
}
