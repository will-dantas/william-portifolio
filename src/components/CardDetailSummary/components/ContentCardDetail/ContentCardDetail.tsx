import { IExperienceCompaniesData } from "@/components/ExperienceCompanies/ExperienceCompanies.interface";
import { ButtonDetail, Company, ContentCardDetail, ContentColor, Datails, Position, Skills, TimeLine } from "./ContentCardDetail.styles";
import { itemAnimationExperence } from "../../CardDetailSummary.animations";

interface ICardDetailComponent {
  item: IExperienceCompaniesData;
  selectedId: (id: string) => void;
}

export const CardDetailComponent = ({ item, selectedId }: ICardDetailComponent) => {
  const lastFiveSkills = item.skills.slice(0, 6);

  return (
    <ContentCardDetail
      key={item.id}
      variants={itemAnimationExperence}
      layoutId={item.id}
    >
      <ContentColor data-color={item.ordinalNumber}>
        <TimeLine>{item.timeLine}</TimeLine>
        <div>
          <Position>{item.position}</Position>
          <Company>{item.company}</Company>
        </div>
        <Skills data-color={item.ordinalNumber}>
          {lastFiveSkills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </Skills>
      </ContentColor>
      <Datails>
        <p>{item.location}</p>
        <ButtonDetail onClick={() => selectedId(item.id as any)}>Detalhes</ButtonDetail>
      </Datails>
    </ContentCardDetail>
  );
}
