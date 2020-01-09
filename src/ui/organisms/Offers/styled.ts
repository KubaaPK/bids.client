import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    ul {
      margin-top: 0;
      li {
        margin-top: ${theme.spacing.s};

        &:first-of-type {
          margin-top: 0;
        }
      }
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
