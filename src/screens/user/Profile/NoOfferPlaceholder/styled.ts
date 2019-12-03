import styled from 'styled-components';
import { screenSize } from '../../../../shared/styles';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 3rem;

    text-align: center;
  }
`;

const Text = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.6rem;
    font-weight: 700;

    opacity: 0.25;
  }
`;

export { Wrapper, Text };
