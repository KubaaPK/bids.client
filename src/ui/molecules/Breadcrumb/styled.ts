import styled from 'styled-components';
import theme from '../../theme';

const Breadcrumbs = styled.div`
  margin-top: ${theme.spacing.l};
`;

const Label = styled.p`
  margin-bottom: ${theme.spacing.xs};

  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.small};
  color: ${theme.palette.grayscale[1]};
`;

const Breadcrumb = styled.span`
  position: relative;

  margin: 0 ${theme.spacing.s};

  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.body};
  color: ${theme.palette.grayscale[1]};

  &::after {
    content: '/';
    position: absolute;
    right: -12px;
  }

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    font-weight: 500;

    &::after {
      content: '';
    }
  }
`;

export { Breadcrumbs, Breadcrumb, Label };
