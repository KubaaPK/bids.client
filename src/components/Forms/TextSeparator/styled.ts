import styled from 'styled-components';
import { screenSize } from '../../../shared/styles/vars';

const Text = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Text };
