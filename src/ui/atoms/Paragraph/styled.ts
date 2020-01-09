import styled from 'styled-components';
import theme from '../../theme';

const Paragraph = styled.p`
  margin: ${theme.spacing.s};

  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.body};
  color: ${theme.palette.grayscale[0]};
  line-height: 1.3;
`;

// eslint-disable-next-line import/prefer-default-export
export { Paragraph };
