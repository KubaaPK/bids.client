import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import { screenSize, colors, paddings } from '../../../shared/styles/vars';

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

    width: 50vw;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);

    background-color: #fff;

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
      border-top: 2px solid hsl(210, 25%, 95%);
    }
  }
`;

const MenuLink = styled(Link)`
  @media ${screenSize.MOBILE} {
    display: block;

    padding: 1rem;

    font-size: 1.3rem;
    text-decoration: none;
    text-align: left;

    color: hsla(0, 0%, 15%, 0.65);
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      color: hsla(0, 0%, 15%, 1);
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
