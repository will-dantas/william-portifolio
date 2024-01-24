import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 6rem;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1216px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 2rem 4rem 2rem;
  }
`;

export const HeaderExperienceCompanies = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;

  svg {
    color: var(--green-500);
  }
`;

export const TitleExperienceCompanies = styled.h1`
  font-size: 1rem;
  margin-bottom: 2rem;
`;