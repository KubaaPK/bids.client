import styled from 'styled-components';
import theme from '../../theme';

const Label = styled.label`
  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.small};
  line-height: 2em;
  color: ${theme.palette.grayscale[0]};
`;

// eslint-disable-next-line import/prefer-default-export
export { Label };
