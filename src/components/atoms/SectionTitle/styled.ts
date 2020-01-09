import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles';
import { getFontSizeInRems } from '../../../utils/fonts';

type Props = {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  weight?: 400 | 500 | 700;
  uppercase?: boolean;
  variant?: 'lighten';
};

const SectionTitle = styled.p<Props>`
  @media ${screenSize.MOBILE} {
    padding: 0;
    margin: 0;

    font-size: ${props => getFontSizeInRems(props.size)};
    font-weight: ${props => (props.weight ? props.weight : 400)};
    color: ${props =>
      props.variant === 'lighten' ? colors.font.lighten : colors.font.normal};
    text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { SectionTitle };
