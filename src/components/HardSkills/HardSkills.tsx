'use client'

import { container } from "../Cover/Cover.animate";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { TitleSection } from "../TitleSection/TitleSection";
import {
  ColorBackground,
  Container,
  Content,
  ContentInfo
} from "./HardSkills.styles";

export const HardSkills = () => {
  return (
    <Container id="hard-skills">
      <ColorBackground>
      </ColorBackground>
      <Content>
        <TitleSection title="Habilidades" />
        <ContentInfo
          variants={container}
          initial="hidden"
          animate="show"
        >
          <SharedLayout />
        </ContentInfo>
      </Content>
    </Container>
  );
};
