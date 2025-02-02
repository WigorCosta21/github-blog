import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { PostInfo } from "./components/PostInfo";
import { useGitHub } from "@hooks/useGitHub";
import { Container } from "@components/Container";

import * as S from "./styles";

const Post = () => {
  const { id } = useParams();
  const { issues } = useGitHub();

  const issue = issues.find((issue) => issue.id.toString() === id);

  return (
    <>
      <PostInfo />
      <Container>
        <S.Body>
          <Markdown>{issue?.body}</Markdown>
        </S.Body>
      </Container>
    </>
  );
};

export default Post;
