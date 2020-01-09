import styled, { css } from 'styled-components';
import theme from '../../theme';

const styles = () => css`
  margin: 1rem 0;
  padding-left: 0;
  line-height: 1.7;

  font-family: ${theme.font.primary};
  color: ${theme.palette.grayscale[2]};
`;

const Ol = styled.ol(styles);
const Ul = styled.ul(styles);

export { Ol, Ul };
