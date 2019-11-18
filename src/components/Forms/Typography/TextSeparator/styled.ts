import styled from 'styled-components';
import { screenSize } from '../../../../shared/styles/vars';

type Props = {
  fontSize?: string;
  fontWeight?: number;
  topBottomMargin?: string;
};

const TextSeparator = styled.p<Props>`
  @media ${screenSize.MOBILE} {
    margin: ${props =>
      props.topBottomMargin ? `${props.topBottomMargin} 0` : '0rem'};

    font-size: ${props => (props.fontSize ? props.fontSize : '1.5rem')};
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 400)};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { TextSeparator };
