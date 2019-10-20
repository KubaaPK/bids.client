import styled from 'styled-components';
import { screenSize, paddings } from '../../../../../shared/styles/vars';

export const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;
    padding: 0.5rem ${paddings.MOBILE};

    background-color: #ffffff;
  }
`;

export const Items = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media ${screenSize.TABLET} {
    flex-direction: row;
  }
`;

export const Element = styled.span`
  @media ${screenSize.MOBILE} {
    h1 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.3rem;
    }
  }

  @media ${screenSize.TABLET} {
    width: 50%;
  }
`;
