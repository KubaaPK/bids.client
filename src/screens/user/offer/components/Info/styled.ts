import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, colors } from '../../../../../shared/styles/vars';

export const Wrapper = styled.div`
  @media ${screenSize.TABLET} {
    width: 100%;
  }
`;

export const Title = styled.p`
  @media ${screenSize.MOBILE} {
    margin-bottom: 0;

    color: ${colors.FONT};
    font-size: 1.6rem;
    font-weight: 700;
  }

  @media ${screenSize.TABLET} {
  }
`;
export const Seller = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: 0.5rem;

    font-size: 1.3rem;
    color: ${lighten(0.25, colors.FONT)};

    a {
      margin-left: 1rem;

      font-size: 1.3rem;
      text-decoration: none;
      color: ${colors.SECONDARY_ACCENT};
    }
  }
`;

export const Price = styled.p`
  @media ${screenSize.MOBILE} {
    font-weight: 700;
    span {
      font-size: 3rem;

      :last-of-type {
        font-size: 2rem;
      }
    }
  }
`;
