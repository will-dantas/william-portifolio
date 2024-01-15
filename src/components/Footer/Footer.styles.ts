import Image from "next/image";
import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1216px;
  width: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }
`;

export const ContentCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 2px solid var(--gray-300);
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: var(--gray-300);
`;

export const ContentInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  color: var(--gray-300);

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Intersection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const LogoImage = styled(Image)`
  object-fit: cover;
  width: 4.5rem;
  height: auto;
  filter: grayscale(1);
  margin-right: 0.8rem;
  border-radius: 1rem;
`;

export const Name = styled.h3`
`;

export const Location = styled.p`
  font-weight: 200;
`;

export const LinksCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  background: var(--black-800);
  padding: 0.7rem;
  text-decoration: none;
  font-size: 1.6rem;
  border-radius: 1rem;
  border: 2px solid var(--gray-300);

  svg {
    color: var(--gray-300);
    transition: all 0.5s;

    &:hover {
      color: white;
      transition: 0.5s;
    }
  }
`;