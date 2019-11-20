import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles/vars';

const Main = styled.div`
  @media ${screenSize.MOBILE} {
    min-height: 100vh;
    padding-top: 13rem;

    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.DESKTOP} {
    padding-top: 10rem;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Main };
