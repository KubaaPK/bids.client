import React, { useState, useRef } from 'react';
import { User, ChevronDown, ChevronUp } from 'react-feather';
import * as S from './UnauthenticatedMenu.styled';
import useOutsideClick from '../../../shared/hooks/use-outside-click';

const UnauthenticatedMenu: React.FunctionComponent<{}> = () => {
  const [isMenuToggled, toggleMenu] = useState<boolean>(false);
  const ref = useRef<HTMLUListElement>(null);

  useOutsideClick(ref, () => {
    if (isMenuToggled) toggleMenu(false);
  });

  return (
    <S.Wrapper>
      <S.ToogleMenuButton onClick={() => toggleMenu(!isMenuToggled)}>
        {window.innerWidth <= 320 ? (
          <User />
        ) : (
          <>
            <span>Moje konto</span>
            {isMenuToggled ? <ChevronUp /> : <ChevronDown />}
          </>
        )}
      </S.ToogleMenuButton>
      {isMenuToggled && (
        <S.Menu ref={ref}>
          <S.MenuElement>
            <S.MenuLink to="/zaloz-konto">Załóż konto</S.MenuLink>
          </S.MenuElement>
          <S.MenuElement>
            <S.MenuLink to="/zaloguj-sie">Zaloguj</S.MenuLink>
          </S.MenuElement>
        </S.Menu>
      )}
    </S.Wrapper>
  );
};

export default UnauthenticatedMenu;
