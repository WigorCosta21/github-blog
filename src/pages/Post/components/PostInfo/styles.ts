import styled from "styled-components";
import { mixins } from "styles/mixins";

export const PostInfoContainer = styled.div`
  h1 {
    ${mixins.fonts.titleL}
    ${(props) => props.theme["base-title"]};
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    h1 {
      ${mixins.fonts.titleM}
    }
  }
`;

export const LinksContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const PostResume = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

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

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;
