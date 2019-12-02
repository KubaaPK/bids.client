import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, paddings, colors } from '../../../shared/styles/vars';

const Main = styled.main`
  @media ${screenSize.MOBILE} {
    min-height: 100vh;
    padding-top: 13rem;

    background-color: ${colors.PRIMARY};

    h1 {
      margin-left: ${paddings.MOBILE};
    }
  }

  @media ${screenSize.TABLET} {
    padding-top: 8rem;

    h1 {
      margin-left: ${paddings.TABLET};
    }
  }

  @media ${screenSize.TABLET} {
    padding-top: 8rem;

    h1 {
      margin-left: ${paddings.DESKTOP};
    }
  }
`;

const OfferSummary = styled.div`
  @media ${screenSize.MOBILE} {
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.DESKTOP} {
    width: calc(100vw - ${paddings.DESKTOP} * 2);
    margin: 0 auto;
  }
`;

const Seller = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
    color: ${lighten(0.25, colors.FONT)};

    a {
      color: ${colors.SECONDARY_ACCENT};
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
`;

const Offer = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    div {
      margin-top: 2rem;
    }
  }

  @media ${screenSize.TABLET} {
    justify-content: space-between;

    div {
      margin-left: auto;
    }
  }
`;

const Thumbnail = styled.img`
  @media ${screenSize.MOBILE} {
    width: 18%;
    margin-right: 2%;
  }

  @media ${screenSize.DESKTOP} {
    width: 10%;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    width: 60%;

    font-size: 1.2rem;
  }
`;

const Price = styled.p`
  @media ${screenSize.MOBILE} {
    width: 20%;

    font-size: 1.4rem;
    font-weight: 700;
    text-align: right;
  }
`;

const PurchaseSummary = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    text-align: right;

    button {
      width: 30%;
    }
  }

  @media ${screenSize.DESKTOP} {
    width: calc(100vw - ${paddings.DESKTOP} * 2);
    margin: 2rem auto 0 auto;

    button {
      width: 15%;
    }
  }
`;

const ToPay = styled.p`
  @media ${screenSize.MOBILE} {
    color: ${lighten(0.3, colors.FONT)};
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

const TotalPurchasePrice = styled.span`
  @media ${screenSize.MOBILE} {
    display: block;

    color: ${colors.FONT};
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

export {
  Main,
  OfferSummary,
  Seller,
  Offer,
  Thumbnail,
  Title,
  Price,
  PurchaseSummary,
  ToPay,
  TotalPurchasePrice
};
