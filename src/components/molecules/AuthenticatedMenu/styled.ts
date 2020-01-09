import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  screenSize,
  colors,
  paddings,
  spacing,
  fontSize
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

const Icons = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: baseline;

    svg {
      margin: 0 ${spacing.m};

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
      top: ${spacing.s};
    }
  }
`;

const ToogleMenuButton = styled.button`
  @media ${screenSize.MOBILE} {
    position: relative;
    display: block;

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
    align-items: center;

    span {
      margin-right: ${spacing.s};

      font-size: ${fontSize.s};
    }
  }

  @media ${screenSize.DESKTOP} {
    cursor: pointer;
    top: -0.25rem;

    align-items: center;

    margin-left: ${spacing.l};

    svg {
      top: 0;

      margin-left: 0;
    }
  }
`;

const Menu = styled.ul`
  @media ${screenSize.MOBILE} {
    position: fixed;
    right: 2rem;
    z-index: 999;

    width: 50vw;
    padding: 1rem;
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

    &:nth-of-type(2) {
      border-top: 1px solid ${colors.border.grey};
    }
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

const NotificationBubble = styled.span`
  @media ${screenSize.MOBILE} {
    position: absolute !important;
    top: -0.5rem !important;
    right: 0rem;

    height: 20px;
    width: 20px;
    margin: 0 !important;
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

    background-color: ${colors.ACCENT};

    font-size: 1.2rem;
    color: #fff;
  }

  @media ${screenSize.TABLET} {
    top: -1rem !important;
    right: -1rem;
  }
`;

export {
  Wrapper,
  Icons,
  ToogleMenuButton,
  Menu,
  MenuElement,
  MenuLink,
  NotificationBubble
};
