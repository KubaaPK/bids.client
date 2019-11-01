import styled from 'styled-components';
import { screenSize, paddings } from '../../../../../shared/styles/vars';

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

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media ${screenSize.TABLET} {
    top: 11vh;
  }

  @media ${screenSize.DESKTOP} {
    top: 8rem;
    left: ${paddings.DESKTOP};
    flex-direction: column;
    width: 20vw;
    padding: 0 2rem 2rem 2rem;

    border-radius: 3px;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    display: none;
  }

  @media ${screenSize.DESKTOP} {
    display: block;
    margin-bottom: 2rem;

    font-size: 2.2rem;
    font-weight: 500;
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
