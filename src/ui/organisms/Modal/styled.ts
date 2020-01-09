import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  darken: boolean;
};

const Outline = styled.div<Props>`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    background-color: ${props =>
      props.darken ? 'hsla(0, 0%, 0%, 0.5)' : 'transparent'};
    align-content: center;
  }
`;

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    position: relative;
    width: auto;
    box-shadow: ${theme.shadows.extraLarge};

    background-color: ${theme.palette.grayscale[7]};
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    margin: 0 auto;
    padding: 0 ${theme.spacing.s};
    border-radius: ${theme.borderRadius};
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    > span {
      transition: 200ms;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Top = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    position: relative;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding: 0 ${theme.spacing.m};

    p {
      font-family: ${theme.font.primary};
      font-size: ${theme.fontSizes.heading6};
    }

    > span {
      position: absolute;
      top: calc(${theme.spacing.m} + 0.5rem);
      right: ${theme.spacing.m};
      z-index: 2;
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    top: 1rem;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    > span {
      transition: 200ms;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export { Outline, Wrapper, Top };
