import { Container } from "@components/Container";
import * as S from "./styles";

export const Search = () => {
  return (
    <Container>
      <S.SearchContainer>
        <div>
          <h3>Publicações</h3>
          <span>6 Publicações</span>
        </div>

        <S.Input placeholder="Buscar conteúdo" />
      </S.SearchContainer>
    </Container>
  );
};
