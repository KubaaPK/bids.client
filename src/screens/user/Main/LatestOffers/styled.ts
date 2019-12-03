import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    height: 100%;
    padding: 0 2rem;

    background-color: #fff;
    > p:first-child {
      padding: 0 ${paddings.MOBILE};
    }
  }

  @media ${screenSize.TABLET} {
  }

  @media ${screenSize.DESKTOP} {
    margin-right: ${paddings.DESKTOP};
    margin-left: 9.3rem;
    width: calc(79vw - 14rem);

    text-align: center;
    > * {
      text-align: initial;
    }
  }
`;

const LatestOffers = styled.ul`
  @media ${screenSize.MOBILE} {
    position: relative;
    top: 0vh;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    -webkit-overflow-scrolling: auto;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    width: 100%;
    height: 100%;
    padding-left: 0;

    background-color: #ffffff;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media ${screenSize.TABLET} {
    width: 100vw;
  }

  @media ${screenSize.DESKTOP} {
    flex-wrap: wrap;

    width: 100%;

    &::-webkit-scrollbar {
      display: initial;
    }
  }
`;

export { Wrapper, LatestOffers };
