import * as S from "./styles";

interface NavLinkProps {
  to: string;
  text: string;
  icon: JSX.Element;
  newTab?: boolean;
  variant?: "reverse";
}

export const NavLink = ({ to, text, icon, newTab, variant }: NavLinkProps) => {
  return (
    <S.LinkContainer
      to={to}
      variant={variant}
      target={newTab ? "_blank" : undefined}
    >
      {text}
      {icon}
    </S.LinkContainer>
  );
};
