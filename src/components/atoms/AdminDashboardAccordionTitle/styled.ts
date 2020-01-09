import styled from 'styled-components';
import { screenSize, fontSize } from '../../../shared/styles';

const Text = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: ${fontSize.m};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Text };
