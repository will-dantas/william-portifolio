import { MdClose } from "react-icons/md";
import { ButtonClose, Company, ContainerModalDetail, ContentColor, Datails, HeaderModalDetail, Position, Skills, TimeLine } from "./CardDetailModal.styles";
import { experienceCompaniesData } from "@/components/ExperienceCompanies/ExperienceCompanies.data";
import { IExperienceCompaniesData } from "@/components/ExperienceCompanies/ExperienceCompanies.interface";

interface ICardDetailModal {
  selectId: string
  closeModal: () => void;
}

export const CardDetailModal = ({ selectId, closeModal }: ICardDetailModal) => {
  const data: IExperienceCompaniesData = experienceCompaniesData[Number(selectId)];

  return (
    <ContainerModalDetail layoutId={selectId}>
      <ContentColor data-color={data.ordinalNumber}>
        <HeaderModalDetail>
          <TimeLine>Skills</TimeLine>
          <ButtonClose onClick={closeModal}><MdClose /></ButtonClose>
        </HeaderModalDetail>
        <Skills data-color={data.ordinalNumber}>
          {data.skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </Skills>
      </ContentColor>
      <Datails>
        <p>Desafios</p>
        <li>Aumento de cobertura de testes</li>
        <li>Configurações de novas APIs</li>
      </Datails>
    </ContainerModalDetail>
  );
}