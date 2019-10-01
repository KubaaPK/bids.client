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

const Navigation: React.FunctionComponent<{}> = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Navbar>
      <Top>
        <a href={'/'}>
          <Logo>.bids</Logo>
        </a>
      </Top>
      <Menu>
        <MenuButton onClick={() => setMobileNavOpen(!isMobileNavOpen)}>
          <MenuIcon size={32} color={'#7f7f7f'} />
        </MenuButton>
        <MenuList hidden={!isMobileNavOpen}>
          <a href={'#'}>
            <MenuListElement> Zaloguj się</MenuListElement>
          </a>
          <MenuListElement>
            <a href={'#'}>Załóż konto</a>
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
