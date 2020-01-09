import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../theme';

const Logo = styled.span`
  color: ${theme.palette.primary[0]};
  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.heading4};
  font-style: italic;
  font-weight: 700;
`;

const LogoLink = styled(Link)`
  color: ${theme.palette.primary[0]};
  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.heading4};
  font-style: italic;
  font-weight: 700;
  text-decoration: none;
`;

export { Logo, LogoLink };
