import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown } from 'react-feather';
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
  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayUsername = (): any => {
    return (
      <>
        <AuthenticatedUsername>user11</AuthenticatedUsername>
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
