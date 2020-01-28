import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import { List, Link } from '../../atoms';

type Props = {
  isUserAuthenticated: boolean;
  isUserAdmin: boolean;
};

export default function UnauthenticatedNavigation(props: Props): ReactElement {
  const { isUserAuthenticated, isUserAdmin } = props;
  const history = useHistory();

  function logOut() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    history.push('/');
  }

  return (
    <S.Wrapper>
      {!isUserAuthenticated && (
        <List type="unordered">
          <S.Element>
            <Link to="/zaloguj-sie">Zaloguj się</Link>
          </S.Element>
          <S.Element>
            <Link to="/zaloz-konto">Załóż konto</Link>
          </S.Element>
        </List>
      )}
      {isUserAuthenticated && (
        <List type="unordered">
          <S.Element>
            <Link to="/dodaj-oferte">Dodaj ofertę</Link>
          </S.Element>
          <S.Element>
            <Link to="/moje-konto">Moje konto</Link>
          </S.Element>
          {isUserAdmin && (
            <S.Element>
              <Link to="/administracja">Administracja</Link>
            </S.Element>
          )}
          <S.Element>
            <S.SignOut tabIndex={0} onClick={logOut}>
              Wyloguj się
            </S.SignOut>
          </S.Element>
        </List>
      )}
    </S.Wrapper>
  );
}
