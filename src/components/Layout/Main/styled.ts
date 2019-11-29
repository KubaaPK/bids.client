import styled from 'styled-components';
import { colors, screenSize } from '../../../shared/styles';

const Main = styled.main`
  @media ${screenSize.MOBILE} {
    min-height: 100vh;
    padding: 12rem 0 2rem 0;

    background-color: ${colors.BACKGROUND};
  }

  @media ${screenSize.TABLET} {
    padding-top: 8rem;
  }

  @media ${screenSize.DESKTOP} {
    padding-top: 10rem;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Main };
