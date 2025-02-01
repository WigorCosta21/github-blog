import { NavLink } from "@components/NavLink";
import { Card } from "@components/Card";
import {
  ArrowSquareOut,
  Folder,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import * as S from "./styles";
import { useGitHub } from "@hooks/useGitHub";

export const Profile = () => {
  const { userProfile } = useGitHub();

  return (
    <Card>
      <S.ProfileContainer>
        <div>
          <S.Img src={userProfile?.avatar_url} alt="" />
        </div>

        <S.ProfileInfo>
          <S.InfoContent>
            <S.ProfileHeader>
              <h1>{userProfile?.name}</h1>

              <NavLink
                to={`${userProfile?.html_url}`}
                text="GitHub"
                icon={<ArrowSquareOut size={12} />}
                newTab
              />
            </S.ProfileHeader>

            <S.Info>
              <S.ProfileResume>
                <GithubLogo size={18} weight="fill" />
                <span>{userProfile?.login}</span>
              </S.ProfileResume>

              <S.ProfileResume>
                <Folder size={18} weight="fill" />
                <span>{userProfile?.public_repos} repositórios</span>
              </S.ProfileResume>

              <S.ProfileResume>
                <Users size={18} weight="fill" />
                <span>{userProfile?.followers} seguidores</span>
              </S.ProfileResume>
            </S.Info>
          </S.InfoContent>
        </S.ProfileInfo>
      </S.ProfileContainer>
    </Card>
  );
};
