import styled from 'styled-components';
import { screenSize } from '../../../../../../../../shared/styles/vars';

const Text = styled.textarea`
  @media ${screenSize.MOBILE} {
    min-height: 10rem;
    padding: 1rem;

    font-size: 2rem;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Text };
