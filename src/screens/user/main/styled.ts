import styled from 'styled-components';
import { colors, screenSize } from '../../../shared/styles/vars';

const Wrapper = styled.main`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    min-height: 100vh;

    background-color: ${colors.PRIMARY};
  }
`;

export { Wrapper };
