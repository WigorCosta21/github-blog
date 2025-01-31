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

export const PostInfo = () => {
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

          <NavLink to="/" text="GitHub" icon={<ArrowSquareOut size={12} />} />
        </S.LinksContent>

        <h1>JavaScript data types and data structures</h1>

        <S.PostResume>
          <S.PostResume>
            <div>
              <GithubLogo size={18} weight="fill" />

              <span>WigorCosta21</span>
            </div>
          </S.PostResume>

          <S.PostResume>
            <div>
              <CalendarDot size={18} weight="fill" />

              <span>Há 1 dia</span>
            </div>
          </S.PostResume>

          <S.PostResume>
            <div>
              <ChatCircle size={18} weight="fill" />

              <span>5 comentários</span>
            </div>
          </S.PostResume>
        </S.PostResume>
      </S.PostInfoContainer>
    </Card>
  );
};
