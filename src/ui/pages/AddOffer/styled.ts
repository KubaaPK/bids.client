import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    padding-bottom: ${theme.spacing.l};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
