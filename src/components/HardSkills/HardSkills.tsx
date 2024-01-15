'use client'

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
        <ContentInfo>
          <SharedLayout />
        </ContentInfo>
      </Content>
    </Container>
  );
};
