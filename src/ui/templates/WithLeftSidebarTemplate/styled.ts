import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-top: 6rem;

    background-color: ${theme.palette.background};
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-left: ${theme.spacing.l};
    padding-right: ${theme.spacing.l};

    > div:nth-of-type(1) {
      width: 30%;

      div {
        padding-top: 0;
      }
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding-left: ${theme.spacing.xl};
    padding-right: ${theme.spacing.xl};

    > div:nth-of-type(1) {
      width: 20%;
    }
  }
`;

const Content = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    margin-top: ${theme.spacing.m};
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    width: 67.5%;
    height: 100%;
    margin-left: 2.5%;
    margin-top: 0;
    border-radius: ${theme.borderRadius};
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 77.5%;
    margin-left: 2.5%;
  }
`;

export { Wrapper, Content };
