import { Container, ContainerImage, Content, ContentImage, HeaderHardSkills, ImageWrapper, Inner, TitleHardSkills, Wrapper } from "./HardSkills.styles";

import { HiCode } from "react-icons/hi";
import WilliamDev from "../../../public/vscode.png"
import { SharedLayout } from "../SharedLayout/SharedLayout";

export const HardSkills = () => {
  return (
    <Container id="hard-skills">
      <Content>
        <ContainerImage>
          <HeaderHardSkills>
            <HiCode />
            <TitleHardSkills>
              Hard Skills
            </TitleHardSkills>
          </HeaderHardSkills>
          <ContentImage>
            <Wrapper>
              <Inner>
                  <ImageWrapper src={WilliamDev} alt="" />
              </Inner>
            </Wrapper>
          </ContentImage>
        </ContainerImage>
        <SharedLayout />
      </Content>
    </Container>
  );
};
