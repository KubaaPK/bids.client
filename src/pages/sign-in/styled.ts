import styled from 'styled-components';
import { screenSize, colors } from '../../shared/styles/vars';

const Main = styled.main`
  @media ${screenSize.MOBILE} {
    height: 100vh;
    padding-top: 20vh;

    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.TABLET} {
    padding-top: 15vh;
  }
`;
export default Main;
