import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  filled?: boolean;
};

const TableRow = styled.tr<Props>`
  background-color: ${props =>
    props.filled ? theme.palette.grayscale[4] : 'none'};
`;

export default TableRow;
