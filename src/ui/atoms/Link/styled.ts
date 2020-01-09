import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import theme from '../../theme';

type Props = {
  colorized: boolean;
};

const Link = styled(RLink)`
  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.body};
  text-decoration: none;
`;

const Colorized = styled.span<Props>`
  a {
    color: ${props =>
      props.colorized === true
        ? theme.palette.secondary[0]
        : theme.palette.grayscale[2]};

    transition: 200ms;
    &:hover {
      color: ${props =>
        props.colorized === true
          ? theme.palette.secondary[2]
          : theme.palette.grayscale[0]};
    }
  }
`;

export { Link, Colorized };
