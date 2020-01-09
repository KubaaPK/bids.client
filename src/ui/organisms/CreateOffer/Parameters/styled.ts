import styled from 'styled-components';
import theme from '../../../theme';

const Wrapper = styled.div`
  padding: ${theme.spacing.m};
  margin-top: ${theme.spacing.l};
  border-radius: ${theme.borderRadius};

  background-color: ${theme.palette.grayscale[7]};

  h2 {
    font-size: ${theme.fontSizes.heading6};
    font-weight: 400;
  }

  div {
    margin-top: ${theme.spacing.m};

    @media only screen and (min-width: ${theme.screenSizes.tablet}) {
      width: 50%;
    }

    @media only screen and (min-width: ${theme.screenSizes.tablet}) {
      width: 30%;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
