import styled from 'styled-components';
import theme from '../../theme';

const Th = styled.th`
  font-size: ${theme.fontSizes.body};
  font-weight: 500;
  text-align: left;
`;

type Props = {
  numeric: boolean;
};

const Td = styled.td<Props>`
  font-size: ${theme.fontSizes.body};
  text-align: ${props => (props.numeric ? 'right' : 'left')};
`;

export { Th, Td };
