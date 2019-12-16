import styled from 'styled-components';
import { screenSize } from '../../../../../../../shared/styles/vars';

const Parameter = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;
  }
`;

const Name = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
  }
`;

export { Parameter, Name };
