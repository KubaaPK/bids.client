import React, { useState } from 'react';
import { Search, Menu as MenuIcon } from 'react-feather';
import {
  InputText,
  Logo,
  Menu,
  Navbar,
  SearchBox,
  SearchButton,
  Bottom,
  Top,
  MenuButton,
  MenuList,
  MenuListElement
} from './styled';
import { Link } from 'react-router-dom';

const Navigation: React.FunctionComponent<{}> = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Navbar>
      <Top>
        <Link to={'/'}>
          <Logo>.bids</Logo>
        </Link>
      </Top>
      <Menu>
        <MenuButton onClick={() => setMobileNavOpen(!isMobileNavOpen)}>
          <MenuIcon size={32} color={'#7f7f7f'} />
        </MenuButton>
        <MenuList hidden={!isMobileNavOpen}>
          <Link to={'/zaloguj-sie'}>
            <MenuListElement> Zaloguj się</MenuListElement>
          </Link>
          <MenuListElement>
            <Link to={'/zaloz-konto'}>Załóż konto</Link>
          </MenuListElement>
        </MenuList>
      </Menu>
      <Bottom>
        <SearchBox>
          <InputText type="text" placeholder="Czego szukasz?" />
          <SearchButton type="submit">
            <Search size={20} />
          </SearchButton>
        </SearchBox>
      </Bottom>
    </Navbar>
  );
};

export default Navigation;
