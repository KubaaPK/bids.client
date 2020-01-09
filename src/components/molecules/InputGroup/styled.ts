import styled from 'styled-components';
import { screenSize } from '../../../shared/styles';

type Props = {
  spacing?: string;
};

const InputGroup = styled.div<Props>`
  @media ${screenSize.MOBILE} {
    margin: ${props => (props.spacing ? `${props.spacing} 0` : 0)};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { InputGroup };
