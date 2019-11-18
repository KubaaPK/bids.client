import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import { screenSize, colors } from '../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
  }

  @media ${screenSize.TABLET} {
    order: 3;
  }
`;

const Icons = styled.div`
  @media ${screenSize.MOBILE} {
    svg {
      margin: 0 1rem;

      &:last-of-type {
        margin-right: 0;
      }
    }

    a {
      color: ${colors.FONT};
    }
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    svg {
      position: relative;
      top: 0.5rem;
    }
  }
`;

const ToogleMenuButton = styled.button`
  @media ${screenSize.MOBILE} {
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
    }
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    span {
      position: relative;
      top: 1rem;

      margin-right: 0.5rem;

      font-size: 1.2rem;
    }
  }

  @media ${screenSize.DESKTOP} {
    cursor: pointer;
  }
`;

const Menu = styled.ul`
  @media ${screenSize.MOBILE} {
    position: fixed;
    right: 2rem;
    z-index: 999;

    width: 80vw;
    padding: 2rem 1rem 1rem 1rem;

    background-color: #fff;
    border: 1px solid #ccc;

    list-style-type: none;
  }

  @media ${screenSize.TABLET} {
    width: 35vw;
  }

  @media ${screenSize.DESKTOP} {
    width: 18vw;
  }
`;

const MenuElement = styled.li`
  @media ${screenSize.MOBILE} {
    width: 100%;

    a {
      font-size: 1.4rem;
    }

    &:first-of-type {
      margin-bottom: 1rem;

      border-bottom: 1px solid #ccc;
      /* a {
        background-color: ${colors.ACCENT};

        color: #fff;
      } */
    }
  }

  @media ${screenSize.DESKTOP} {
   
  }
`;

const MenuLink = styled(Link)`
  @media ${screenSize.MOBILE} {
    display: block;

    padding: 1rem 3rem;

    font-size: 1.2rem;
    text-decoration: none;

    color: ${lighten(0.2, colors.FONT)};
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      color: ${lighten(0.1, colors.SECONDARY_ACCENT)};
    }
  }
`;

export { Wrapper, Icons, ToogleMenuButton, Menu, MenuElement, MenuLink };
