import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { screenSize, paddings } from '../../../shared/styles/vars';

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

export { Wrapper, ToogleMenuButton, Menu, MenuElement, MenuLink };
