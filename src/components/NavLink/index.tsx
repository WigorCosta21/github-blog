import * as S from "./styles";

interface NavLinkProps {
  to: string;
  text: string;
  icon: JSX.Element;
  variant?: "reverse";
}

export const NavLink = ({ to, text, icon, variant }: NavLinkProps) => {
  return (
    <S.LinkContainer to={to} variant={variant}>
      {text}
      {icon}
    </S.LinkContainer>
  );
};
