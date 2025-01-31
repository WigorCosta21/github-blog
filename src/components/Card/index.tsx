import { ReactNode } from "react";
import { Container } from "@components/Container";
import * as S from "./styles";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <Container>
      <S.CardContainer>{children}</S.CardContainer>
    </Container>
  );
};
