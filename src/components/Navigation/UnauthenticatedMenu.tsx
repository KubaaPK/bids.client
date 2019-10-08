import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from 'react-feather';
import { Menu, MenuButton, MenuList, MenuListElement } from './styled';

const UnauthenticatedMenu: React.FunctionComponent<{}> = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Menu>
      <MenuButton onClick={() => setMobileNavOpen(!isMobileNavOpen)}>
        <MenuIcon size={32} color="#7f7f7f" />
      </MenuButton>
      <MenuList hidden={!isMobileNavOpen}>
        <Link to="/zaloguj-sie">
          <MenuListElement> Zaloguj się</MenuListElement>
        </Link>
        <MenuListElement>
          <Link to="/zaloz-konto">Załóż konto</Link>
        </MenuListElement>
      </MenuList>
    </Menu>
  );
};

export default UnauthenticatedMenu;
