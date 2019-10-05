import styled from 'styled-components';
import { screenSize, colors } from '../../shared/styles/vars';

const Main = styled.main`
  @media ${screenSize.MOBILE} {
    min-height: 105vh;
    padding-top: 20vh;

    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.TABLET} {
    padding-top: 15vh;
  }

  @media ${screenSize.DESKTOP} {
    min-height: 110vh;
  }
`;
export default Main;
