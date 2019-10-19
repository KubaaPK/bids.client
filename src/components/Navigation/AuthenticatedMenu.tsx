import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'react-feather';
import * as firebase from 'firebase';
import {
  Menu,
  AuthenticatedMenuButton,
  AuthenticatedMenuList,
  AuthenticatedMenuListElement,
  AuthenticatedUsername
} from './styled';
import { destroyTokens } from '../../utils/auth';

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
  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      }
    });
  });

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

  return (
    <Menu>
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
