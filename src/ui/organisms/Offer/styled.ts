import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../theme';

const Offer = styled.li`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    padding: ${theme.spacing.m};

    background-color: ${theme.palette.grayscale[7]};
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    padding: ${theme.spacing.m} ${theme.spacing.l};
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    padding: ${theme.spacing.s} ${theme.spacing.m};

    transition: 200ms;
    &:hover {
      cursor: pointer;

      box-shadow: ${theme.shadows.medium};
    }
  }
`;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  text-decoration: none;
`;

const Thumbnail = styled.img`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    width: 10rem;
    min-height: 10rem;
    max-height: 10rem;
    max-width: 20rem;
  }
`;

const Text = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    width: calc(95% - 10rem);
    margin-left: 5%;

    div:first-of-type {
      font-size: ${theme.fontSizes.small};
    }
  }
`;

const Title = styled.p`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    width: 100%;
    margin-bottom: 0;

    color: ${theme.palette.grayscale[0]};
    font-size: ${theme.fontSizes.body};
  }
`;

const OfferProperties = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    width: 100%;
    margin-top: -3rem;

    * {
      color: ${theme.palette.grayscale[2]};
    }

    div {
      margin-left: 2.5%;

      &:first-of-type,
      &:last-of-type {
        margin-left: 0;
      }
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    margin-top: -4rem;

    div {
      margin-left: 1%;
      &:last-of-type {
        margin-left: 1%;
      }
    }
  }
`;

export { Offer, LinkWrapper, Thumbnail, Text, Title, OfferProperties };
