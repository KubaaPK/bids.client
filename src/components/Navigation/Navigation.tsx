import React from 'react';
import { Search } from 'react-feather';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  InputText,
  Logo,
  Navbar,
  SearchBox,
  SearchButton,
  SearchWrapper,
  Top
} from './styled';
import UnauthenticatedMenu from './UnauthenticatedMenu';
import AuthenticatedMenu from './AuthenticatedMenu';
import { State } from '../../redux/reducers';
import { signOut } from '../../redux/actions/auth.actions';

type ReduxProps = {
  isAuthneticated: boolean;
};

type ReduxDispatch = {
  signOut(): void;
};

type NavigationProps = ReduxProps & ReduxDispatch;

const Navigation: React.FunctionComponent<NavigationProps> = (
  props: NavigationProps
) => {
  const { isAuthneticated, signOut: signOutAction } = props;

  return (
    <Navbar>
      <Top>
        <Link to="/">
          <Logo>.bids</Logo>
        </Link>
      </Top>
      {isAuthneticated ? (
        <AuthenticatedMenu signOut={signOutAction} />
      ) : (
        <UnauthenticatedMenu />
      )}

      <SearchWrapper>
        <SearchBox>
          <InputText type="text" placeholder="Czego szukasz?" />
          <SearchButton type="submit">
            <Search size={20} />
          </SearchButton>
        </SearchBox>
      </SearchWrapper>
    </Navbar>
  );
};

const mapStateToProps = (state: State): ReduxProps => {
  return {
    isAuthneticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps: ReduxDispatch = {
  signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
