import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User, Layout, ChevronUp } from 'react-feather';
import * as S from './styled';
import useOutsideClick from '../../../shared/hooks/use-outside-click';

type Props = {
  signOut: () => void;
  isAdmin: boolean;
  displayName: string;
};

const AuthenticatedMenu: React.FunctionComponent<Props> = (props: Props) => {
  const { signOut, isAdmin, displayName } = props;
  const [isMenuToggled, toggleMenu] = useState<boolean>(false);
  const ref = useRef<HTMLUListElement>(null);

  useOutsideClick(ref, () => {
    if (isMenuToggled) toggleMenu(false);
  });

  return (
    <S.Wrapper>
      <S.Icons>
        {isAdmin && (
          <Link to="/administracja">
            <Layout />
          </Link>
        )}
        <S.ToogleMenuButton onClick={() => toggleMenu(!isMenuToggled)}>
          {window.innerWidth <= 320 ? (
            <User />
          ) : (
            <>
              <span>{displayName}</span>
              {isMenuToggled ? <ChevronUp /> : <ChevronDown />}
            </>
          )}
        </S.ToogleMenuButton>
      </S.Icons>

      {isMenuToggled && (
        <S.Menu ref={ref}>
          <S.MenuElement>
            <S.MenuLink to="/wystaw-przedmiot">Wystaw przedmiot</S.MenuLink>
          </S.MenuElement>
          <S.MenuElement>
            <S.MenuLink to="/" onClick={signOut}>
              Wyloguj się
            </S.MenuLink>
          </S.MenuElement>
        </S.Menu>
      )}
    </S.Wrapper>
  );
};

export default AuthenticatedMenu;
