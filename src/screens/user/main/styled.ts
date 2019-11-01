import styled from 'styled-components';
import { colors, screenSize } from '../../../shared/styles/vars';

const Wrapper = styled.main`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    min-height: 100vh;
    width: 100%;

    background-color: ${colors.PRIMARY};
  }
`;

export { Wrapper };
