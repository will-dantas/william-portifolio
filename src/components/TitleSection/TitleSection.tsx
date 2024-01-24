import { HiCode } from "react-icons/hi";
import { Header, Title } from "./TitleSection.styles";

interface TitleSectionProps {
  title: string;
}

export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <Header>
      <HiCode />
      <Title>{title}</Title>
    </Header>
  );
};