import styled from 'styled-components';
import {
  screenSize,
  fontSize,
  colors,
  spacing
} from '../../../../../../../shared/styles/vars';

const Parameter = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;
  }
`;

const Name = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: ${fontSize.s};
    color: ${colors.font.normal};
  }
`;

export { Parameter, Name };
