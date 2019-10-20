import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, Settings } from 'react-feather';
import {
  Menu,
  AuthenticatedMenuButton,
  AuthenticatedMenuList,
  AuthenticatedMenuListElement,
  AuthenticatedUsername
} from './styled';
import { destroyTokens } from '../../utils/auth';
import { firebaseApp } from '../..';

type Props = {
  signOut: () => void;
};

const AuthenticatedMenu: React.FunctionComponent<Props> = (props: Props) => {
  const { signOut } = props;
  const getWindowWidth = (): number => {
    const { innerWidth: width } = window;
    return width;
  };

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [currentUser, setCurrentUser] = useState();
  const [claims, setClaims] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(async user => {
      if (user) {
        const userClaims: string[] = await user
          .getIdTokenResult()
          .then(res => res.claims.roles);
        setClaims(userClaims);
        setCurrentUser(user);
        localStorage.setItem(
          'is-admin',
          userClaims.includes('admin').toString()
        );
      }
    });
  }, []);

  const displayUsername = (): any => {
    return (
      <>
        {currentUser !== undefined ? (
          <AuthenticatedUsername>
            {currentUser.displayName}
          </AuthenticatedUsername>
        ) : null}
        <ChevronDown />
      </>
    );
  };

  const handleLogOut = (): void => {
    destroyTokens();
    signOut();
  };

  const isAdmin = (roles: string[]): boolean => {
    return roles.includes('admin');
  };

  return (
    <Menu>
      {isAdmin(claims) ? (
        <Link to="/administracja">
          <Settings />
        </Link>
      ) : null}

      <AuthenticatedMenuButton
        onClick={() => setMobileNavOpen(!isMobileNavOpen)}
      >
        {windowWidth < 1024 ? <User /> : displayUsername()}
      </AuthenticatedMenuButton>
      <AuthenticatedMenuList hidden={!isMobileNavOpen}>
        <AuthenticatedMenuListElement>
          <Link to="/wystaw-przedmiot">Wystaw przedmiot</Link>
        </AuthenticatedMenuListElement>
        <Link to="/">
          <AuthenticatedMenuListElement onClick={handleLogOut}>
            {' '}
            Wyloguj się
          </AuthenticatedMenuListElement>
        </Link>
      </AuthenticatedMenuList>
    </Menu>
  );
};

export default AuthenticatedMenu;
