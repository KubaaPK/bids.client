import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import { screenSize, colors, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }
`;

const Name = styled.p`
  @media ${screenSize.MOBILE} {
    margin-bottom: 1rem;

    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.FONT};
  }
`;

const Seller = styled.p`
  @media ${screenSize.MOBILE} {
    margin: 0;

    font-size: 1.3rem;
    color: ${lighten(0.5, colors.FONT)};
  }
`;

const SellerName = styled(Link)`
  @media ${screenSize.MOBILE} {
    font-size: 1.3rem;
    text-decoration: none;
    color: ${colors.SECONDARY_ACCENT};
  }
`;

export { Wrapper, Name, Seller, SellerName };
