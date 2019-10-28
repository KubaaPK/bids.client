import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, User, Layout, ChevronUp } from 'react-feather';
import * as S from './AuthenticatedMenu.styled';
import useOutsideClick from '../../../shared/hooks/use-outside-click';
import { firebaseApp } from '../../..';

type Props = {
  signOut: () => void;
};

const AuthenticatedMenu: React.FunctionComponent<Props> = (props: Props) => {
  const { signOut } = props;
  const [isMenuToggled, toggleMenu] = useState<boolean>(false);
  const [displayName, setDisplayName] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(async (user: firebase.User | any) => {
      if (user) {
        const currentUserDetails: firebase.auth.IdTokenResult = await firebaseApp
          .auth()
          .currentUser!.getIdTokenResult();

        setDisplayName(currentUserDetails.claims.name);
        setIsAdmin(currentUserDetails.claims.roles.includes('admin'));
      }
    });
  });

  useOutsideClick(ref, () => {
    if (isMenuToggled) toggleMenu(false);
  });

  return (
    <S.Wrapper>
      <S.Icons>
        {isAdmin && <Layout />}
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
