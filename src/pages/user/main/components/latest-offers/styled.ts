import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import {
  screenSize,
  paddings,
  colors
} from '../../../../../shared/styles/vars';

export const LatestOffersWrapper = styled.ul`
  @media ${screenSize.MOBILE} {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem ${paddings.MOBILE};

    background-color: #ffffff;
  }

  @media ${screenSize.TABLET} {
  }

  @media ${screenSize.DESKTOP} {
    top: 4vh;
    width: calc(72% - 6rem);
    margin-left: 6%;

    border-radius: 3px;
  }
`;

export const Title = styled.p`
  @media ${screenSize.MOBILE} {
    margin: 0rem 0 3rem 0;

    font-size: 1.6rem;
    font-weight: 500;
  }
  @media ${screenSize.TABLET} {
    width: 100%;
    margin-bottom: 0;
  }

  @media ${screenSize.DESKTOP} {
  }
`;

export const LatestOfferWrapper = styled(Link)`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding: 3rem 0;
    border-bottom: 1px solid ${lighten(0.2, colors.GREYISH)};

    list-style-type: none;
    text-decoration: none;

    &:first-of-type {
      padding-top: 0;
    }
    &:last-of-type {
      border: 0;
      padding-bottom: 0;
    }
  }

  @media ${screenSize.TABLET} {
    width: 50%;
    margin: 4rem 0;

    &:nth-of-type(2n) {
      padding-top: 0;
    }
    &:nth-of-type(1n) {
      border: 0;
      padding-bottom: 0;
    }
  }

  @media ${screenSize.DESKTOP} {
    margin: 2rem 0;
    padding: 0;

    transition: 0.2s ease-in;
    &:hover {
      cursor: pointer;
      background-color: #eeeeee;
    }
  }
`;

export const Thumbnail = styled.img`
  @media ${screenSize.MOBILE} {
    width: 50%;
    margin-right: 2rem;
  }
`;

export const Text = styled.div`
  @media ${screenSize.MOBILE} {
  }
`;

export const Name = styled.p`
  @media ${screenSize.MOBILE} {
    margin-bottom: 0.75rem;

    color: ${colors.FONT};
    font-size: 1.2rem;
  }
`;

export const Price = styled.p`
  @media ${screenSize.MOBILE} {
    margin: 0;
    margin-bottom: 0.75rem;

    font-size: 2rem;
    font-weight: 500;
    color: ${colors.FONT};

    span {
      font-size: 1.5rem;
    }
  }
`;

export const Currency = styled.span`
  @media ${screenSize.MOBILE} {
    margin-left: 0.5rem;

    font-size: 1.5rem;
  }
`;

export const SellingFormat = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: 0;

    font-size: 1.2rem;
    color: ${colors.ACCENT};
  }
`;

export const PriceWithDelivery = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
    color: ${lighten(0.25, colors.FONT)};
  }
`;

export const InStock = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
    color: ${lighten(0.5, colors.FONT)};
  }
`;
