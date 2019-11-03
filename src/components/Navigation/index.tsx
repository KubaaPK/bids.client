import React from 'react';
import { Search } from 'react-feather';
import { connect } from 'react-redux';
import UnauthenticatedMenu from './UnauthenticatedMenu';
import AuthenticatedMenu from './AuthenticatedMenu';
import { State } from '../../redux/reducers';
import { signOut } from '../../redux/actions/auth/auth.actions';
import * as S from './styled';
import { deleteTokensFromLocalStorage } from '../../utils/auth';

type ReduxProps = {
  isAuthneticated: boolean;
  isAdmin: boolean;
  displayName: string;
};

type ReduxDispatch = {
  performSignOut(): void;
};

type NavigationProps = ReduxProps & ReduxDispatch;

const Navigation: React.FunctionComponent<NavigationProps> = (
  props: NavigationProps
) => {
  const { isAuthneticated, performSignOut, isAdmin, displayName } = props;

  const handleSignOut = (): void => {
    performSignOut();
    deleteTokensFromLocalStorage();
  };

  return (
    <S.Navbar>
      <S.Logo to="/">bids</S.Logo>
      {isAuthneticated ? (
        <AuthenticatedMenu
          signOut={handleSignOut}
          isAdmin={isAdmin}
          displayName={displayName}
        />
      ) : (
        <UnauthenticatedMenu />
      )}
      <S.SearchBox>
        <S.SearchInput type="text" />
        <S.SearchButton type="button">
          {window.innerWidth >= 1024 ? (
            <span>Szukaj</span>
          ) : (
            <Search size="2rem" />
          )}
        </S.SearchButton>
      </S.SearchBox>
    </S.Navbar>
  );
};

const mapStateToProps = (state: State): ReduxProps => {
  return {
    isAuthneticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin,
    displayName: state.auth.displayName
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performSignOut: signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
