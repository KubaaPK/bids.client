import styled from 'styled-components';
import { screenSize, colors, paddings } from '../../../shared/styles/vars';

type Props = {
  font?: {
    size?: string;
  };
  marginFromLeft?: boolean;
};

const Title = styled.h1<Props>`
  @media ${screenSize.MOBILE} {
    margin-left: ${props => (props.marginFromLeft ? paddings.MOBILE : '0')};

    color: ${colors.FONT};
    font-size: ${props =>
      props.font && props.font.size ? props.font.size : '1.6rem'};
    font-weight: 400;
  }

  @media ${screenSize.TABLET} {
    margin-left: ${props => (props.marginFromLeft ? paddings.TABLET : '0')};
  }

  @media ${screenSize.DESKTOP} {
    margin-left: ${props => (props.marginFromLeft ? paddings.DESKTOP : '0')};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Title };
