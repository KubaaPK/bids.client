import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import { screenSize, colors } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
  }

  @media ${screenSize.TABLET} {
    order: 3;
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
    position: relative;
    top: 0.5rem;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    span {
      align-self: center;

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
    width: 30vw;
  }

  @media ${screenSize.DESKTOP} {
    width: 15vw;
  }
`;

const MenuElement = styled.li`
  @media ${screenSize.MOBILE} {
    width: 100%;
    /* margin: 1rem 0; */

    text-align: center;
    &:first-of-type {
      margin-bottom: 1rem;
      a {
        background-color: ${colors.ACCENT};

        color: #fff;
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    &:first-of-type {
      a {
        transition: 0.2s;
        &:hover {
          background-color: ${lighten(0.1, colors.ACCENT)};
        }
      }
    }
  }
`;

const MenuLink = styled(Link)`
  @media ${screenSize.MOBILE} {
    display: block;

    padding: 1rem 3rem;

    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.2rem;

    color: ${colors.SECONDARY_ACCENT};
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      color: ${lighten(0.1, colors.SECONDARY_ACCENT)};
    }
  }
`;

export { Wrapper, ToogleMenuButton, Menu, MenuElement, MenuLink };
