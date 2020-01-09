import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    position: relative;

    padding: 0 ${theme.spacing.m};
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    padding: 0 ${theme.spacing.m};
    border-radius: ${theme.borderRadius};

    width: 50vw;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    padding: 0 ${theme.spacing.m} ${theme.spacing.s} ${theme.spacing.m};
    border-radius: ${theme.borderRadius};

    width: 40vw;
  }
`;

const Draft = styled.li`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    padding: ${theme.spacing.m};
    border-bottom: 1px solid ${theme.palette.grayscale[5]};

    &:first-of-type {
      margin-top: ${theme.spacing.l};
    }

    button {
      width: 30%;
      text-transform: uppercase;
    }

    transition: 200ms;
    &:hover {
      cursor: pointer;

      box-shadow: ${theme.shadows.base};
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    button {
      width: 10%;
    }
  }
`;

const Thumbnail = styled.img`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    width: 25%;
    height: 25%;
    margin-right: 5%;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 15%;
    height: 15%;
  }
`;

const Name = styled.p`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    width: 40%;

    font-size: ${theme.fontSizes.body};
    color: ${theme.palette.grayscale[1]};
    word-wrap: break-word;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 70%;
  }
`;

export { Wrapper, Draft, Thumbnail, Name };
