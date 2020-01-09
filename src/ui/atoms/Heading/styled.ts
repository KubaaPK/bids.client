import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  level: 1 | 2 | 3 | 4 | 5;
};

const Heading = styled.h1<Props>`
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;

  font-family: ${theme.font.primary};
  // @ts-ignore
  font-size: ${props => theme.fontSizes[`heading${props.level}`]};
  font-weight: 500;
  color: ${theme.palette.grayscale[0]};
`;

// eslint-disable-next-line import/prefer-default-export
export { Heading };
