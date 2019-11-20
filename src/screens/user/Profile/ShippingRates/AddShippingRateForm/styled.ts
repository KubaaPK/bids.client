import styled from 'styled-components';
import { lighten } from 'polished';
import {
  screenSize,
  paddings,
  colors
} from '../../../../../shared/styles/vars';

const Outline = styled.div`
  @media ${screenSize.TABLET} {
    position: fixed;
    top: 0;
    z-index: 999;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    overflow: scroll;

    height: 100vh;
    width: 100%;
    padding: 2rem ${paddings.MOBILE} 4rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    left: 0;
    right: 0;

    width: 60%;
    margin: 0 auto;
  }

  @media ${screenSize.DESKTOP} {
    ::-webkit-scrollbar {
      display: none;
    }

    form {
      button {
        width: 30%;
        float: right;
      }
    }
  }
`;

const SubTitle = styled.p`
  @media ${screenSize.MOBILE} {
    margin: -1rem 0 3rem 0;

    font-size: 1.2rem;
    color: ${lighten(0.5, colors.FONT)};
  }
`;

const DeliveryMethods = styled.ul`
  @media ${screenSize.MOBILE} {
    padding-left: 0;

    list-style-type: none;
  }
`;

const Close = styled.button`
  @media ${screenSize.MOBILE} {
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    padding: 1rem 0;
    border: 0;
    border-top: 1px solid #ccc;

    background-color: #fff;

    color: ${colors.SECONDARY_ACCENT};
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  @media ${screenSize.TABLET} {
    left: 0;
    right: 0;

    width: 60%;
    margin: 0 auto;
  }

  @media ${screenSize.DESKTOP} {
    display: none;
  }
`;

const DesktopClose = styled.button`
  @media ${screenSize.MOBILE} {
    display: none;
  }

  @media ${screenSize.DESKTOP} {
    position: absolute;
    top: 2rem;
    right: 1rem;

    display: block;

    background-color: transparent;
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

export { Outline, Wrapper, SubTitle, DeliveryMethods, Close, DesktopClose };
