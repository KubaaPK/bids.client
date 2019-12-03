import styled from 'styled-components';
import { colors, screenSize } from '../../../shared/styles';

const Main = styled.main`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    padding-top: 13rem;
    padding-bottom: 2rem;
    min-height: 100vh;

    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.TABLET} {
    flex-direction: row;
  }

  @media ${screenSize.DESKTOP} {
    padding-top: 10rem;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Main };
