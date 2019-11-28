import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import { screenSize, colors, paddings } from '../../../shared/styles/vars';

const Offer = styled(Link)`
  @media ${screenSize.MOBILE} {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

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
    padding: 4rem 2rem;

    transition: 0.1s;
    &:hover {
      background-color: #eaeaea;
    }
  }
`;

const Thumbnail = styled.img`
  @media ${screenSize.MOBILE} {
    width: 10rem;
    height: 10rem;

    margin-right: 2rem;
  }
`;

const Text = styled.div`
  @media ${screenSize.MOBILE} {
    width: 55%;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: 0.5rem;

    font-size: 1.4rem;
    color: ${colors.FONT};
  }
`;

const Price = styled.p`
  @media ${screenSize.MOBILE} {
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
  }
`;

const SellingMode = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.1rem;
    color: ${colors.SECONDARY_ACCENT};
  }
`;

const WithDeliveryPrice = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1rem;
    color: ${lighten(0.3, colors.FONT)};

    span {
      margin-left: 0.5rem;

      color: ${lighten(0.3, colors.FONT)};
      font-size: 1rem;
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
