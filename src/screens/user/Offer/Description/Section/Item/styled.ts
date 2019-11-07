import styled from 'styled-components';
import { screenSize } from '../../../../../../shared/styles/vars';

const Item = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
  }

  @media ${screenSize.DESKTOP} {
    width: 50%;
  }
`;

const Text = styled.span`
  @media ${screenSize.MOBILE} {
    h1 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

export { Item, Text };
