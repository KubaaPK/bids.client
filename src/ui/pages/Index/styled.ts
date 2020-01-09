import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    > div:first-of-type {
      > div {
        > div {
          width: 100%;
        }
      }
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
