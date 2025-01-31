import { Card } from "@components/Card";

import * as S from "./styles";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { Building, Users } from "@phosphor-icons/react/dist/ssr";
import { NavLink } from "@components/NavLink";

export const Profile = () => {
  return (
    <Card>
      <S.ProfileContainer>
        <div>
          <S.Img src="https://placehold.co/148x148" alt="" />
        </div>

        <S.ProfileInfo>
          <S.InfoContent>
            <S.ProfileHeader>
              <h1>Wigor Ribeiro Da Costa</h1>

              <NavLink
                to="/"
                text="GitHub"
                icon={<ArrowSquareOut size={12} />}
              />
            </S.ProfileHeader>

            <S.Info>
              <S.ProfileResume>
                <GithubLogo size={18} weight="fill" />
                <span>WigorCosta21</span>
              </S.ProfileResume>

              <S.ProfileResume>
                <Building size={18} weight="fill" />
                <span>Rocketseat</span>
              </S.ProfileResume>

              <S.ProfileResume>
                <Users size={18} weight="fill" />
                <span>32 seguidores</span>
              </S.ProfileResume>
            </S.Info>
          </S.InfoContent>
        </S.ProfileInfo>
      </S.ProfileContainer>
    </Card>
  );
};
