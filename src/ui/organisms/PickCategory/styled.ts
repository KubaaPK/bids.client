import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    min-height: 100vh;
    width: 100vw;
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    width: 40vw;
    min-height: 100vh;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 25vw;
  }
`;

const Category = styled.li`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    height: 4rem;
    padding: 0 ${theme.spacing.s};

    list-style-type: none;

    &:first-of-type {
      margin-top: -${theme.spacing.l};
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    &:first-of-type {
      margin-top: -${theme.spacing.m};
    }
  }
`;

const SecondLevelCategory = styled.li`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    height: 4rem;

    list-style-type: none;
    &:first-of-type {
      position: absolute;
      top: ${theme.spacing.s};
      left: 0;

      font-size: ${theme.fontSizes.heading6};

      span {
        right: initial;
        top: initial;

        * {
          color: ${theme.palette.grayscale[1]};
        }
      }
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper, Category, SecondLevelCategory };
