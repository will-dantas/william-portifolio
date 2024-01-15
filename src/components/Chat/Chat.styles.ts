import Image from "next/image";
import styled from "styled-components";

export const ContainerChat = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  background: var(--blue-700);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 338px;
  padding: 3rem 1.6rem 3rem 1.6rem;
`;

export const ContainerBalloons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const ContentBalloons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Balloons = styled.div`
  display: flex;
  width: fit-content;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(22.5px);
  padding: 8px;
`;


export const LastBalloons = styled.div`
  display: flex;
  width: fit-content;
  border-radius: 7px;
  border-bottom-left-radius: 0;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(22.5px);
  padding: 8px;
`;


export const TextBalloon = styled.p`
  color: #EFEFEF;
  text-align: start;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const OwnBalloon = styled.small`
  font-size: 6px;
  font-style: normal;
  font-weight: 700;
  margin-top: 4px;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: end;
  padding-right: 0.4rem;
`;

export const Avatar = styled(Image)`
  object-fit: cover;
  width: 40%;
  height: auto;
  flex: 1;
  max-width: 65px;
  border-radius: 12rem;
  border: 1px solid white;
  background: var(--blue-200);
  margin-bottom: 8px;
`;