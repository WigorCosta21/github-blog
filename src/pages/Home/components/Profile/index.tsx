import { Card } from "@components/Card";

import * as S from "./styles";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { Building, Users } from "@phosphor-icons/react/dist/ssr";

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

              <S.ProfileLink to="/">
                <span>GitHub </span>

                <ArrowSquareOut size={12} weight="fill" />
              </S.ProfileLink>
            </S.ProfileHeader>

            <S.Info>
              <div>
                <GithubLogo size={18} weight="fill" />
                <span>WigorCosta21</span>
              </div>

              <div>
                <Building size={18} weight="fill" />
                <span>Rocketseat</span>
              </div>

              <div>
                <Users size={18} weight="fill" />
                <span>32 seguidores</span>
              </div>
            </S.Info>
          </S.InfoContent>
        </S.ProfileInfo>
      </S.ProfileContainer>
    </Card>
  );
};
