import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles';

type Props = {
  size: 'small' | 'medium' | 'large';
  bold?: boolean;
};

const determineFontSize = (size: Props['size']): string => {
  switch (size) {
    case 'small':
      return '1.5rem';
    case 'medium':
      return '2rem';
    case 'large':
      return '2.5rem';
    default:
      return '2rem';
  }
};

const SectionTitle = styled.h2<Props>`
  @media ${screenSize.MOBILE} {
    color: ${colors.FONT};
    font-weight: ${props => (props.bold ? '600' : '400')};
    font-size: ${props => determineFontSize(props.size)};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { SectionTitle };
