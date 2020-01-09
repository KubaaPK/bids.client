import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    padding: ${theme.spacing.m};

    background-color: ${theme.palette.grayscale[7]};
    h1 {
      margin: 0 0 ${theme.spacing.m} 0;

      font-size: ${theme.fontSizes.heading6};
      font-weight: 400;
    }

    input {
      margin-bottom: ${theme.spacing.m};
    }

    > button {
      width: 100%;
      margin-top: ${theme.spacing.m};
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    > button {
      width: initial;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
