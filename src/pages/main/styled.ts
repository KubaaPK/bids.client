import styled from 'styled-components';
import { colors, screenSize } from '../../shared/styles/vars';

export const Wrapper = styled.main`
  @media ${screenSize.MOBILE} {
    min-height: 100vh;

    background-color: ${colors.PRIMARY};
  }
`;
