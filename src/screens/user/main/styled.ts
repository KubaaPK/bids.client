import styled from 'styled-components';
import { colors, screenSize } from '../../../shared/styles/vars';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.main`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    min-height: 100vh;

    background-color: ${colors.PRIMARY};
  }
`;
