import React from 'react';
import { Search } from 'react-feather';
import { connect } from 'react-redux';
import UnauthenticatedMenu from './components/UnauthenticatedMenu';
import AuthenticatedMenu from './components/AuthenticatedMenu';
import { State } from '../../redux/reducers';
import { signOut } from '../../redux/actions/auth.actions';
import * as S from './styled';

type ReduxProps = {
  isAuthneticated: boolean;
};

type ReduxDispatch = {
  performSignOut(): void;
};

type NavigationProps = ReduxProps & ReduxDispatch;

const Navigation: React.FunctionComponent<NavigationProps> = (
  props: NavigationProps
) => {
  const { isAuthneticated, performSignOut } = props;

  return (
    <S.Navbar>
      <S.Logo to="/">bids</S.Logo>
      {isAuthneticated ? (
        <AuthenticatedMenu signOut={performSignOut} />
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
    isAuthneticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performSignOut: signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
