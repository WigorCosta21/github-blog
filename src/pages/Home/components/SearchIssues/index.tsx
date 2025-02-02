import { Container } from "@components/Container";
import { useGitHub } from "@hooks/useGitHub";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as S from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchIssues = () => {
  const { issues, fetchSearchIssues } = useGitHub();

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchIssues = async (data: SearchFormInputs) => {
    await fetchSearchIssues(data.query);
  };

  return (
    <Container>
      <S.SearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
        <div>
          <h3>Publicações</h3>
          <span>{issues.length} Publicações</span>
        </div>

        <S.Input placeholder="Buscar conteúdo" {...register("query")} />
      </S.SearchContainer>
    </Container>
  );
};
