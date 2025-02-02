import styled from "styled-components";
import { mixins } from "./../../styles/mixins";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
  ${mixins.fonts.textM}

  h1,
  h2,
  h3 {
    ${mixins.fonts.titleM}
    color: ${(props) => props.theme["base-title"]};
  }

  ul {
    padding-left: 1.5rem;
  }
`;
