/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useRef, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User, Layout, ChevronUp } from 'react-feather';
import * as S from './styled';
import useOutsideClick from '../../../shared/hooks/use-outside-click';

type Props = {
  signOut: () => void;
  isAdmin: boolean;
  displayName: string;
  notificationCount: number;
};

export default function AuthenticatedMenu(props: Props): ReactElement {
  const { signOut, isAdmin, displayName, notificationCount } = props;
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
          {window.innerWidth <= 768 ? (
            <>
              <User />
              {notificationCount > 0 && (
                <S.NotificationBubble>{notificationCount}</S.NotificationBubble>
              )}
            </>
          ) : (
            <>
              <span>
                {displayName}
                {notificationCount > 0 && (
                  <S.NotificationBubble>
                    {notificationCount}
                  </S.NotificationBubble>
                )}
              </span>
              {isMenuToggled ? <ChevronUp /> : <ChevronDown />}
            </>
          )}
        </S.ToogleMenuButton>
      </S.Icons>

      {isMenuToggled && (
        <S.Menu ref={ref}>
          <S.MenuElement>
            <S.MenuLink to="/dodaj-oferte">Dodaj ofertę</S.MenuLink>
          </S.MenuElement>
          <S.MenuElement>
            <S.MenuLink to="/moje-konto">Moje konto</S.MenuLink>
            {notificationCount > 0 && (
              <S.NotificationBubble>{notificationCount}</S.NotificationBubble>
            )}
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
}
