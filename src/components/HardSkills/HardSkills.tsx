'use client'

import { SharedLayout } from "../SharedLayout/SharedLayout";
import { TitleSection } from "../TitleSection/TitleSection";
import {
  Container,
  Content,
  ContentInfo
} from "./HardSkills.styles";

export const HardSkills = () => {
  return (
    <Container id="hard-skills">
      <Content>
        <TitleSection title="Hard Skills" />
        <ContentInfo>
          <SharedLayout />
        </ContentInfo>
      </Content>
    </Container>
  );
};
