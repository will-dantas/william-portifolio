'use client'
import { HiCode } from "react-icons/hi";
import { CardDetailSummary } from "../CardDetailSummary/CardDetailSummary";
import { experienceCompaniesData } from "./ExperienceCompanies.data";
import { Container, Content, HeaderExperienceCompanies, TitleExperienceCompanies } from "./ExperienceCompanies.styles";

export const ExperienceCompanies = () => {
  return (
    <Container id="experience">
      <Content>
        <HeaderExperienceCompanies>
          <HiCode />
          <TitleExperienceCompanies>
            Experiência
          </TitleExperienceCompanies>
        </HeaderExperienceCompanies>
        <h1>Empresas onde atuei</h1>
        <CardDetailSummary data={experienceCompaniesData}/>
      </Content>
    </Container>
  )
}
