import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import {
  paddings,
  screenSize,
  colors,
  spacing,
  fontSize
} from '../../../shared/styles/vars';

const Navbar = styled.nav`
  @media ${screenSize.MOBILE} {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    z-index: 9999;

    width: 100%;

    padding: ${spacing.xl} ${paddings.MOBILE};
    border-bottom: 1px solid ${colors.border.grey};

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    padding: ${spacing.m} ${paddings.TABLET};
  }

  @media ${screenSize.DESKTOP} {
    padding: ${spacing.m} ${paddings.DESKTOP};
  }
`;

const Logo = styled(Link)`
  @media ${screenSize.MOBILE} {
    align-self: center;

    margin: 0;

    color: ${colors.ACCENT};
    font-size: 2.5rem;
    font-weight: 500;
    text-decoration: none;
  }
`;

const SearchBox = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-self: center;

    width: 100%;

    margin-top: 1rem;
  }

  @media ${screenSize.TABLET} {
    margin-top: 0;

    width: 60%;
  }
`;

const SearchInput = styled.input`
  @media ${screenSize.MOBILE} {
    width: 80%;
    height: 35px;

    padding-left: 1rem;

    border-top: 1px solid ${colors.border.darkerGrey};
    border-right: 0;
    border-bottom: 1px solid ${colors.border.darkerGrey};
    border-left: 1px solid ${colors.border.darkerGrey};
    border-radius: 5px 0 0 5px;

    font-size: ${fontSize.m};

    transition: 0.2s;
    &:focus {
      outline: none;
      border-color: ${colors.ACCENT};
    }
  }
`;

const SearchButton = styled.button`
  @media ${screenSize.MOBILE} {
    width: 20%;

    padding: 1px 0 1px 0;

    border: 0;
    border-radius: 0 5px 5px 0;

    background-color: ${colors.ACCENT};

    color: hsl(0, 0%, 100%);
  }

  @media ${screenSize.DESKTOP} {
    width: 15%;

    span {
      font-size: ${fontSize.s};
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }

    transition: 0.2s;
    &:hover {
      cursor: pointer;

      background-color: ${lighten(0.1, colors.ACCENT)};
    }
  }
`;

export { Navbar, Logo, SearchBox, SearchInput, SearchButton };
