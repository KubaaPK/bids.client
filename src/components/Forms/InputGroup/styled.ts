import styled from 'styled-components';
import { screenSize } from '../../../shared/styles/vars';

const InputGroup = styled.div`
  @media ${screenSize.MOBILE} {
    margin: 3rem 0;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { InputGroup };
