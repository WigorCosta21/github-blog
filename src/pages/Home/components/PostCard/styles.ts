import styled from "styled-components";
import { mixins } from "styles/mixins";

export const PostContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media screen and (max-width: 864px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    height: 64px;

    @media screen and (max-width: 864px) {
      flex-direction: column;
      gap: 0.5rem;
      height: auto;
    }
  }
`;

export const Title = styled.h3`
  max-width: 283px;
  ${mixins.fonts.titleM}
  color: ${(props) => props.theme["base-title"]};
`;

export const Time = styled.span`
  ${mixins.fonts.textS}
  color: ${(props) => props.theme["base-span"]};
`;

export const Paragraph = styled.p`
  ${mixins.fonts.textM}
  color: ${(props) => props.theme["base-text"]};
  height: 112px;

  @media screen and (max-width: 864px) {
    height: auto;
  }
`;
