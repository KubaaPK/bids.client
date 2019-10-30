import styled from 'styled-components';
import { screenSize } from '../../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.TABLET} {
    width: 70%;

    margin: 0 auto;
  }

  @media ${screenSize.DESKTOP} {
    width: 30%;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
