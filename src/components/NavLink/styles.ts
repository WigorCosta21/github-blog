import styled from "styled-components";
import { Link } from "react-router-dom";
import { mixins } from "styles/mixins";

interface LinkContainerProps {
  variant?: "reverse";
}

export const LinkContainer = styled(Link)<LinkContainerProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.variant === "reverse" ? "row-reverse" : "row"};
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  ${mixins.fonts.link}
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;
`;
