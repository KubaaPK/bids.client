import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles/vars';

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    color: ${colors.FONT};
    font-size: 2rem;
    font-weight: 400;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Title };
