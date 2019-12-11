import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import { screenSize, colors, paddings } from '../../../shared/styles/vars';

const Offer = styled(Link)`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    height: 100%;
    width: 100%;
    margin: 1.5rem 0;
    padding: ${paddings.MOBILE};

    background-color: #fff;

    list-style-type: none;
    text-decoration: none;
  }

  @media ${screenSize.TABLET} {
    top: 0;

    width: 100%;
  }

  @media ${screenSize.DESKTOP} {
    width: 100%;
    padding: 1rem 2rem;

    transition: 0.1s;
    &:hover {
      background-color: #eaeaea;
    }
  }
`;

const Thumbnail = styled.img`
  @media ${screenSize.MOBILE} {
    height: 8rem;
  }
`;

const Text = styled.div`
  @media ${screenSize.MOBILE} {
    padding-left: 1.5rem;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: 0.5rem;

    font-size: 1.2rem;
    color: ${colors.FONT};
  }

  @media ${screenSize.TABLET} {
    font-weight: 1.4rem;
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      color: ${colors.SECONDARY_ACCENT};
    }
  }
`;

const Price = styled.p`
  @media ${screenSize.MOBILE} {
    margin: 0;

    line-height: 1rem;

    color: ${colors.FONT};
  }
`;

const MainPart = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const CommaSeparator = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const Pennies = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 1.5rem;
    font-weight: 500;

    span {
      margin-right: 0.5rem;

      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;

const SellingMode = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: 0;

    font-size: 1.2rem;
    color: ${colors.SECONDARY_ACCENT};
  }

  @media ${screenSize.TABLET} {
    font-size: 1.3rem;
  }
`;

const WithDeliveryPrice = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
    color: ${lighten(0.3, colors.FONT)};

    span {
      margin-left: 0.5rem;

      color: ${lighten(0.3, colors.FONT)};
      font-size: 1.2rem;
    }
  }

  @media ${screenSize.TABLET} {
    font-size: 1.3rem;

    span {
      font-size: 1.3rem;
    }
  }
`;

export {
  Offer,
  Thumbnail,
  Text,
  Title,
  Price,
  Pennies,
  CommaSeparator,
  WithDeliveryPrice,
  SellingMode,
  MainPart
};
