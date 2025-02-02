import { Card } from "@components/Card";
import * as S from "./styles";
import { NavLink } from "@components/NavLink";
import {
  ArrowSquareOut,
  CalendarDot,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";
import Markdown from "react-markdown";
import { useGitHub } from "@hooks/useGitHub";
import { useParams } from "react-router-dom";
import { calculateDaysSinceCreated } from "@utils/calculateDaysSinceCreated";

export const PostInfo = () => {
  const { id } = useParams();
  const { issues } = useGitHub();

  const issue = issues.find((issue) => issue.id.toString() === id);

  if (!issue) {
    return <div>Issue não encontrada.</div>;
  }

  return (
    <Card>
      <S.PostInfoContainer>
        <S.LinksContent>
          <NavLink
            to="/"
            text="Voltar"
            icon={<CaretLeft size={12} />}
            variant="reverse"
          />

          <NavLink
            to={issue?.html_url as string}
            text="GitHub"
            icon={<ArrowSquareOut size={12} />}
            newTab
          />
        </S.LinksContent>

        <h1>
          <Markdown>{issue?.title}</Markdown>
        </h1>

        <S.PostResume>
          <S.PostResume>
            <div>
              <GithubLogo size={18} weight="fill" />

              <span>{issue?.user.login}</span>
            </div>
          </S.PostResume>

          <S.PostResume>
            <div>
              <CalendarDot size={18} weight="fill" />

              <span>Há {calculateDaysSinceCreated(issue?.created_at)} dia</span>
            </div>
          </S.PostResume>

          <S.PostResume>
            <div>
              <ChatCircle size={18} weight="fill" />

              <span>{issue?.comments} comentários</span>
            </div>
          </S.PostResume>
        </S.PostResume>
      </S.PostInfoContainer>
    </Card>
  );
};
