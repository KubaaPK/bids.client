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

  > label {
    margin-top: ${theme.spacing.l};
    margin-bottom: ${theme.spacing.l};
  }
`;

const InnerWrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    div {
      &:first-of-type {
        width: 100%;
      }
      &:nth-of-type(2) {
        width: 60%;
        margin-right: 5%;
      }

      &:nth-of-type(3) {
        width: 35%;

        margin-top: 2.3rem;
      }

      &:nth-of-type(4) {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    width: 50%;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 30%;
  }
`;

export { Wrapper, InnerWrapper };
