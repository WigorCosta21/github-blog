import styled from "styled-components";
import { mixins } from "styles/mixins";

export const SearchContainer = styled.div`
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  h3 {
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  border-radius: 6px;
  padding: 1rem 0.75rem;
  ${mixins.fonts.textM}

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border-color: ${(props) => props.theme.blue};
  }
`;
