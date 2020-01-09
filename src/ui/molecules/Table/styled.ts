import styled from 'styled-components';
import theme from '../../theme';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  font-family: ${theme.font.primary};
  color: ${theme.palette.grayscale[1]};
`;

// eslint-disable-next-line import/prefer-default-export
export { Table };
