import { Container } from "@components/Container";
import * as S from "./styles";
import { getDescription } from "@utils/formatter";

export const PostCard = () => {
  const text =
    "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.";

  return (
    <Container>
      <S.PostContainer>
        <S.Item to="/post">
          <div>
            <S.Title>JavaScript data types and data structures</S.Title>

            <S.Time>Há 1 dia</S.Time>
          </div>

          <S.Paragraph>{getDescription(text, 181)}</S.Paragraph>
        </S.Item>

        <S.Item to="/post">
          <div>
            <S.Title>JavaScript data types and data structures</S.Title>

            <S.Time>Há 1 dia</S.Time>
          </div>

          <S.Paragraph>{getDescription(text, 181)}</S.Paragraph>
        </S.Item>

        <S.Item to="/post">
          <div>
            <S.Title>JavaScript data types and data structures</S.Title>

            <S.Time>Há 1 dia</S.Time>
          </div>

          <S.Paragraph>{getDescription(text, 181)}</S.Paragraph>
        </S.Item>

        <S.Item to="/post">
          <div>
            <S.Title>JavaScript data types and data structures</S.Title>

            <S.Time>Há 1 dia</S.Time>
          </div>

          <S.Paragraph>{getDescription(text, 181)}</S.Paragraph>
        </S.Item>
      </S.PostContainer>
    </Container>
  );
};
