import styled from 'styled-components';
import { lighten } from 'polished';
import { colors, screenSize } from '../../shared/styles/vars';

export const Navbar = styled.nav`
  @media ${screenSize.MOBILE} {
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 1rem 2rem;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);

    background-color: #ffffff;

    z-index: 999;
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 1.5rem 4rem;
  }

  @media ${screenSize.TABLET} {
    padding: 2rem 6rem;
  }
`;

export const Top = styled.div`
  @media ${screenSize.MOBILE} {
    flex: 3 0 0;

    a {
      text-decoration: none;
    }
  }

  @media ${screenSize.TABLET} {
    flex: 2 0 0;
  }
`;

export const Logo = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 2.25rem;
    font-weight: bold;
    font-style: italic;

    color: ${colors.ACCENT};
  }

  @media ${screenSize.DESKTOP} {
    font-size: 3rem;
  }
`;

export const Menu = styled.div`
  @media ${screenSize.MOBILE} {
    flex: 0 0 0;

    z-index: 99;
  }
  @media ${screenSize.TABLET} {
    flex: 2 0 0;
    order: 1;

    text-align: right;
  }
`;
export const MenuButton = styled.button`
  @media ${screenSize.MOBILE} {
    align-self: flex-end;
    justify-self: flex-end;

    border: 0;

    background-color: transparent;
  }

  @media ${screenSize.DESKTOP} {
    cursor: pointer;
  }
`;

export const MenuList = styled.ul`
  @media ${screenSize.MOBILE} {
    position: absolute;
    left: 0;
    right: 0;
    width: 75%;
    margin: 0 auto;
    padding: 1rem;

    border: 1px solid #b0b0b0;
    background-color: #fff;

    text-align: center;
    list-style-type: none;

    a {
      font-size: 2.25rem;

      text-decoration: none;
      color: #fff;
    }
  }

  @media ${screenSize.TABLET} {
    width: 20%;
    left: auto;
    right: 7rem;

    padding: 0 1rem;
  }
`;
export const MenuListElement = styled.li`
  @media ${screenSize.MOBILE} {
    margin: 2rem 0;
    a {
      font-size: 1.5rem;

      text-decoration: none;
    }
    &:nth-child(1) {
      padding: 1rem;

      background-color: ${colors.ACCENT};
      a {
        color: #ffffff;
      }
    }
    &:nth-child(2) {
      padding: 1rem 1rem 0 1rem;
      border-top: 1px solid #b0b0b0;
      a {
        color: ${colors.SECONDARY_ACCENT};
      }
    }

    @media ${screenSize.DESKTOP} {
      &:nth-child(1) {
        transition: 0.2s;
        &:hover {
          background-color: ${lighten(0.1, colors.ACCENT)};
          cursor: pointer;
        }
      }
    }
  }

  @media ${screenSize.TABLET} {
    margin: 1rem 0;
  }
`;

export const SearchWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
    margin-top: 1rem;
  }

  @media ${screenSize.TABLET} {
    flex: 3 0 0;
    margin-top: 0;
  }
`;

export const SearchBox = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-direction: row;
  }
`;
export const InputText = styled.input`
  @media ${screenSize.MOBILE} {
    width: 80%;
    height: 3.5rem;
    padding-left: 1rem;

    border: 1px solid #c9c9c9;

    font-size: 1.5rem;
    &:focus {
      outline: none;
      border-color: ${colors.ACCENT};
    }
  }
`;
export const SearchButton = styled.button`
  @media ${screenSize.MOBILE} {
    width: 20%;
    height: 3.5rem;

    border: 0;

    color: #fff;
    font-size: 1.2rem;

    background-color: ${colors.ACCENT};
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      background-color: ${lighten(0.1, colors.ACCENT)};
      cursor: pointer;
    }
  }
`;

export const AuthenticatedMenuButton = styled.button`
  @media ${screenSize.MOBILE} {
    align-self: flex-end;
    justify-self: flex-end;

    border: 0;

    background-color: transparent;

    font-size: 1.5rem;
  }

  @media ${screenSize.DESKTOP} {
    cursor: pointer;
  }
`;

export const AuthenticatedMenuList = styled.ul`
  @media ${screenSize.MOBILE} {
    position: absolute;
    left: 0;
    right: 0;
    width: 75%;
    margin: 0 auto;
    padding: 1rem;

    border: 1px solid #b0b0b0;
    background-color: #fff;

    text-align: center;
    list-style-type: none;

    a {
      font-size: 2.25rem;

      text-decoration: none;
      color: #fff;
    }
  }

  @media ${screenSize.TABLET} {
    width: 20%;
    left: auto;
    right: 7rem;

    padding: 0 1rem;
  }
`;

export const AuthenticatedMenuListElement = styled.li`
  @media ${screenSize.MOBILE} {
    margin: 2rem 0;
    a {
      font-size: 1.5rem;

      text-decoration: none;
    }
    &:nth-last-child(2) {
      padding: 1rem;
      border-top: 1px solid #b0b0b0;

      background-color: ${colors.ACCENT};
      a {
        color: #ffffff;
      }
    }
    &:nth-last-child(1) {
      padding: 1rem;
      color: ${colors.SECONDARY_ACCENT};
    }
  }

  @media ${screenSize.TABLET} {
    margin: 1rem 0;
  }

  @media ${screenSize.DESKTOP} {
    &:nth-last-child(2) {
      transition: 0.2s;
      &:hover {
        background-color: ${lighten(0.2, colors.ACCENT)};
        cursor: pointer;
      }
    }
  }
`;

export const AuthenticatedUsername = styled.span`
  @media ${screenSize.DESKTOP} {
    position: relative;
    bottom: 0.7rem;
    margin-right: 0.5rem;

    font-size: 1.5rem;
  }
`;
