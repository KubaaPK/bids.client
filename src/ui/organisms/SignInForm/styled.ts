import styled from 'styled-components';
import theme from '../../theme';

const Form = styled.form`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    position: relative;
    top: 4rem;

    padding: ${theme.spacing.m};

    background-color: ${theme.palette.grayscale[7]};

    h2 {
      margin: 0;
      margin-bottom: 1.5rem;

      font-size: ${theme.fontSizes.heading5};
      font-weight: 500;
    }

    div {
      margin-bottom: ${theme.spacing.m};
    }

    button {
      width: 100%;
      margin-top: ${theme.spacing.m};
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    width: 50%;
    margin: 0 auto;
    border-radius: ${theme.borderRadius};
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 40%;
    padding: ${theme.spacing.l};
  }
`;

const RedirectWrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    position: relative;
    top: 7.5rem;

    padding: ${theme.spacing.m};

    background-color: ${theme.palette.grayscale[7]};

    text-align: center;

    a {
      span {
        margin-left: ${theme.spacing.xs};

        font-size: ${theme.fontSizes.body};
        font-weight: 500;
        color: ${theme.palette.grayscale[1]};
      }
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 40%;
  }
`;

export { Form, RedirectWrapper };
