import { Container } from "@components/Container";
import * as S from "./styles";
import { useGitHub } from "@hooks/useGitHub";

export const Search = () => {
  const { issues } = useGitHub();

  return (
    <Container>
      <S.SearchContainer>
        <div>
          <h3>Publicações</h3>
          <span>{issues.length} Publicações</span>
        </div>

        <S.Input placeholder="Buscar conteúdo" />
      </S.SearchContainer>
    </Container>
  );
};
