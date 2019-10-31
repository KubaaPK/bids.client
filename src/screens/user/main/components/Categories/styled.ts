import styled from 'styled-components';
import { screenSize, shadows } from '../../../../../shared/styles/vars';

const List = styled.ul`
  @media ${screenSize.MOBILE} {
    position: relative;
    top: 22vh;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    width: 100%;
    height: 100%;
    padding-left: 0;

    background-color: #ffffff;
    box-shadow: ${shadows.LEVEL_1};

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media ${screenSize.TABLET} {
    top: 11vh;
  }

  @media ${screenSize.DESKTOP} {
    top: 13vh;
    left: 0rem;
    flex-direction: column;
    width: 13%;
    padding-left: 4rem;

    border-radius: 3px;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    display: none;
  }

  @media ${screenSize.DESKTOP} {
    display: block;

    font-size: 1.3rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const Spinner = styled.span`
  @media ${screenSize.MOBILE} {
    margin: 0 auto;
    padding: 2rem 0;
  }

  @media ${screenSize.DESKTOP} {
    margin: initial;
  }
`;

export { List, Title, Spinner };
