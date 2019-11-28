import styled from 'styled-components';
import { screenSize, paddings } from '../../shared/styles/vars';

const Wrapper = styled.ul`
  @media ${screenSize.MOBILE} {
    height: 100%;
    width: 100%;
    padding-left: 0;
  }

  @media ${screenSize.DESKTOP} {
    margin-left: calc(100vw - calc(79vw - 8rem));
    width: calc(79vw - 14rem);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
