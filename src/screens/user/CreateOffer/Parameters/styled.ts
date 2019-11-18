import styled from 'styled-components';
import { screenSize } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.DESKTOP} {
    input {
      width: 40%;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
