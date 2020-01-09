import styled from 'styled-components';
import theme from '../../theme';

const Navigation = styled.nav`
  @media screen and (min-width: ${theme.screenSizes.mobile}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    height: 5rem;
    width: 100%;
    padding: 0 ${theme.spacing.m};

    border-bottom: 1px solid ${theme.palette.grayscale[5]};

    background-color: ${theme.palette.grayscale[7]};

    span:first-of-type {
      margin-left: auto;
    }
  }

  @media screen and (min-width: ${theme.screenSizes.tablet}) {
    padding: 0 ${theme.spacing.l};
  }

  @media screen and (min-width: ${theme.screenSizes.desktop}) {
    padding: 0 ${theme.spacing.xl};
  }
`;

const Menu = styled.span`
  position: fixed;
  top: 5.5rem;

  @media screen and (min-width: ${theme.screenSizes.mobile}) {
    right: calc(${theme.spacing.m} + 1rem);
  }

  @media screen and (min-width: ${theme.screenSizes.tablet}) {
    right: calc(${theme.spacing.l} + 1rem);
  }

  @media screen and (min-width: ${theme.screenSizes.desktop}) {
    right: calc(${theme.spacing.xl} + 1rem);
  }
`;

export { Navigation, Menu };
