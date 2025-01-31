import styled from "styled-components";
import { mixins } from "styles/mixins";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  margin-top: 0.5rem;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const InfoContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["base-title"]};
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      ${mixins.fonts.titleM}
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const ProfileResume = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-span"]};
  }

  svg {
    color: ${(props) => props.theme["base-label"]};
  }

  @media screen and (max-width: 600px) {
    span {
      ${mixins.fonts.textS}
    }
  }
`;
