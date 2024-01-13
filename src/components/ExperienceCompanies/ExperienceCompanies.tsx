'use client'

import { CardDetailSummary } from "../CardDetailSummary/CardDetailSummary";
import { experienceCompaniesData } from "./ExperienceCompanies.data";
import { Container, Content, TitleExperienceCompanies } from "./ExperienceCompanies.styles";
import { TitleSection } from "../TitleSection/TitleSection";

export const ExperienceCompanies = () => {
  return (
    <Container id="experience">
      <Content>
        <TitleSection title="Experiências" />
        <TitleExperienceCompanies>Alguns dos meus projetos</TitleExperienceCompanies>
        <CardDetailSummary data={experienceCompaniesData} />
      </Content>
    </Container>
  )
}
