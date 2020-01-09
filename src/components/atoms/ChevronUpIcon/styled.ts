import styled from 'styled-components';
import { ChevronUp } from 'react-feather';
import { screenSize, colors } from '../../../shared/styles';

const Icon = styled(ChevronUp)`
  @media ${screenSize.MOBILE} {
    height: 24px;
    width: 24px;

    color: ${colors.font.normal};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Icon };
