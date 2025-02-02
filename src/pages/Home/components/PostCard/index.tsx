import { Container } from "@components/Container";
import * as S from "./styles";
import { limitTextLength } from "@utils/formatter";
import { useGitHub } from "@hooks/useGitHub";
import Markdown from "react-markdown";

export const PostCard = () => {
  const { issues } = useGitHub();

  return (
    <Container>
      <S.PostContainer>
        {issues.map((issue) => (
          <S.Item to={`/post/${issue.id}`} key={issue.id}>
            <div>
              <S.Title>{limitTextLength(issue.title, 55)}</S.Title>

              <S.Time>Há 1 dia</S.Time>
            </div>

            <S.Paragraph>
              <Markdown>{limitTextLength(issue.body, 181)}</Markdown>
            </S.Paragraph>
          </S.Item>
        ))}
      </S.PostContainer>
    </Container>
  );
};
