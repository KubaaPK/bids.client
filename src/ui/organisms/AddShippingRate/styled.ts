import styled from 'styled-components';
import theme from '../../theme';

const Form = styled.form`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    overflow-y: scroll;

    width: 100vw;
    height: 100vh;

    padding: 0 ${theme.spacing.m};

    button {
      width: 100%;
      margin-top: ${theme.spacing.l};
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    width: 40vw;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 35vw;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Form };
