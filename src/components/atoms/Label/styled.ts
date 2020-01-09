import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles';
import { getFontSizeInRems } from '../../../utils/fonts';

type Props = {
  font?: {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  };
};

const Label = styled.label<Props>`
  @media ${screenSize.MOBILE} {
    font-size: ${props => getFontSizeInRems(props.font && props.font.size)};
    color: ${colors.FONT};
  }
`;

export { Label };
