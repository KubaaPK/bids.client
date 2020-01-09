import styled from 'styled-components';
import theme from '../../theme';

const Content = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 6rem;

  background-color: ${theme.palette.background};

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    padding-left: ${theme.spacing.l};
    padding-right: ${theme.spacing.l};
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    padding-left: ${theme.spacing.xl};
    padding-right: ${theme.spacing.xl};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Content };
