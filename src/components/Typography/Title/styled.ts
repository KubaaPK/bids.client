import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles/vars';

type Props = {
  font?: {
    size?: string;
  };
};

const Title = styled.h1<Props>`
  @media ${screenSize.MOBILE} {
    color: ${colors.FONT};
    font-size: ${props =>
      props.font && props.font.size ? props.font.size : '1.6rem'};
    font-weight: 400;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Title };
