import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  screenSize,
  paddings,
  colors,
  spacing,
  fontSize,
  boxShadows
} from '../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    * {
      color: ${colors.font.normal};
    }
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
    top: ${spacing.s};

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    span {
      align-self: center;

      margin-right: ${spacing.s};

      font-size: ${fontSize.s};
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

    width: 50vw;
    padding: ${spacing.m};
    border-radius: 5px;
    border: 1px solid ${colors.border.grey};

    background-color: hsl(0, 0%, 100%);

    list-style-type: none;
  }

  @media ${screenSize.TABLET} {
    top: 6rem;
    width: 30vw;
  }

  @media ${screenSize.DESKTOP} {
    right: ${paddings.DESKTOP};
    width: 15vw;
  }
`;

const MenuElement = styled.li`
  @media ${screenSize.MOBILE} {
    width: 100%;
    /* margin: 1rem 0; */

    text-align: center;
  }
`;

const MenuLink = styled(Link)`
  @media ${screenSize.MOBILE} {
    display: block;

    padding: ${spacing.m};

    font-size: ${fontSize.s};
    text-decoration: none;
    text-align: left;

    color: ${colors.font.lighten};
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      color: ${colors.font.normal};
    }
  }
`;

export { Wrapper, ToogleMenuButton, Menu, MenuElement, MenuLink };
