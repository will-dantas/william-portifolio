'use client'

import { useAnimation } from "framer-motion";
import { CardContact } from "../../components/CardContact/CardContact"
import { EmailContact } from "../../components/EmailContact/EmailContact"
import { Container, Content } from "./Contact.styles"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { container } from "./Contact.animations";
import { Chat } from "../Chat/Chat";

export const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container id="contact">
      <Content
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={container}
      >
        <Chat />
        <EmailContact />
      </Content>
    </Container>
  )
}
