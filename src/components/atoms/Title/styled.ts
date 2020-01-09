import styled from 'styled-components';
import { getFontSizeInRems } from '../../../utils/fonts';
import { screenSize, colors } from '../../../shared/styles';

type Props = {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | undefined;
  weight: 400 | 500 | 700 | undefined;
};

const Title = styled.h1<Props>`
  @media ${screenSize.MOBILE} {
    margin: 0;
    padding: 0;

    font-size: ${props => getFontSizeInRems(props.size)};
    font-weight: ${props => (props.weight ? props.weight : 400)};
    color: ${colors.FONT};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Title };
