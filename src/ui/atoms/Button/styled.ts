import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  kind: 'full' | 'bordered' | 'blank';
  variant: 'default' | 'warning' | 'danger';
};

const fontColor = (kind: Props['kind']): string => {
  if (kind === 'full') {
    return 'hsl(0, 0%, 100%)';
  }
  return theme.palette.primary[0];
};

const backgroundColor = (
  kind: Props['kind'],
  variant: Props['variant']
): string => {
  if (kind === 'full') {
    switch (variant) {
      case 'default':
        return theme.palette.primary[0];
      case 'danger':
        return theme.palette.danger[0];
      case 'warning':
        return theme.palette.alert[0];
      default:
        return theme.palette.primary[0];
    }
  }
  return 'transparent';
};

const hoverBackgroundColor = (
  kind: Props['kind'],
  variant: Props['variant']
): string => {
  if (kind === 'full') {
    switch (variant) {
      case 'default':
        return theme.palette.primary[1];
      case 'danger':
        return theme.palette.danger[1];
      case 'warning':
        return theme.palette.alert[1];
      default:
        return theme.palette.primary[1];
    }
  }
  return 'transparent';
};

const border = (kind: Props['kind'], variant: Props['variant']): string => {
  switch (kind) {
    case 'blank':
    case 'full':
      return 'none';
    case 'bordered':
      switch (variant) {
        case 'default':
          return `1px solid ${theme.palette.primary[0]}`;
        case 'danger':
          return `1px solid ${theme.palette.danger[0]}`;
        case 'warning':
          return `1px solid ${theme.palette.alert[0]}`;
        default:
          return `1px solid ${theme.palette.primary[0]}`;
      }
    default:
      return 'none';
  }
};

const hoverFontColor = (
  kind: Props['kind'],
  variant: Props['variant']
): string => {
  if (kind === 'full') {
    return 'hsl(0, 0%, 100%)';
  }
  switch (variant) {
    case 'default':
      return theme.palette.primary[1];
    case 'danger':
      return theme.palette.danger[1];
    case 'warning':
      return theme.palette.alert[1];
    default:
      return theme.palette.primary[1];
  }
};

const Button = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  height: 4rem;
  padding: 0 1rem;
  box-sizing: border-box;
  box-shadow: ${props =>
    props.kind === 'full' ? theme.shadows.medium : 'none'};
  border-radius: 0.5rem;
  border: ${props => border(props.kind, props.variant)};

  font-family: ${theme.font.primary};
  font-size: ${theme.fontSizes.body};
  color: ${props => fontColor(props.kind)};
  * {
    color: ${props => fontColor(props.kind)};
  }

  background-color: ${props => backgroundColor(props.kind, props.variant)};

  transition: background-color 250ms ease-out, color 250ms ease-out;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;

    background-color: ${props =>
      hoverBackgroundColor(props.kind, props.variant)};
    color: ${props => hoverFontColor(props.kind, props.variant)};
  }

  &:focus {
    outline: ${theme.shadows.outline};
  }

  &:disabled {
    &:hover {
      cursor: default;
      background-color: ${props => backgroundColor(props.kind, props.variant)};
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Button };
