import styled from 'styled-components';
import { screenSize, colors } from '../../shared/styles/vars';

const Main = styled.main`
  @media ${screenSize.MOBILE} {
    height: 100vh;
    padding: 1rem 0;

    background-color: ${colors.PRIMARY};
  }
`;
export default Main;
