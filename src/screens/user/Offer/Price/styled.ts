import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    padding: 0 ${paddings.MOBILE};

    background-color: #fff;
  }
`;

const Price = styled.p`
  @media ${screenSize.MOBILE} {
    margin: 0;

    font-weight: 500;
  }
`;

const MainPrice = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 3rem;
  }
`;

const CommaSeparator = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 3rem;
  }
`;

const Pennies = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 2.1rem;
  }
`;

export { Wrapper, Price, MainPrice, CommaSeparator, Pennies };
