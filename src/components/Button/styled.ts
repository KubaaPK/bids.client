import styled from 'styled-components';
import { lighten } from 'polished';
import { colors, screenSize } from '../../shared/styles/vars';

export enum ButtonVariant {
  CTA = 'CTA',
  BORDERED = 'BORDERED',
  BLANK = 'BLANK'
}

type ButtonProps = {
  variant: ButtonVariant;
  uppercase?: boolean;
  pending: boolean;
};

const determineBackgroundColor = (variant: ButtonVariant): string => {
  switch (variant) {
    case ButtonVariant.CTA:
      return colors.ACCENT;
    case ButtonVariant.BLANK:
      return 'transparent';
    case ButtonVariant.BORDERED:
      return 'transparent';
    default:
      return 'transparent';
  }
};

const determineBorder = (variant: ButtonVariant): string => {
  switch (variant) {
    case ButtonVariant.CTA:
      return 'none';
    case ButtonVariant.BLANK:
      return 'none';
    case ButtonVariant.BORDERED:
      return `1px solid ${colors.ACCENT}`;
    default:
      return 'none';
  }
};

const determineFontColor = (variant: ButtonVariant): string => {
  switch (variant) {
    case ButtonVariant.CTA:
      return '#ffffff';
    case ButtonVariant.BLANK:
      return colors.ACCENT;
    case ButtonVariant.BORDERED:
      return colors.ACCENT;
    default:
      return '#ffffff';
  }
};

// noinspection CssInvalidPropertyValue
const Button = styled.button<ButtonProps>`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 4rem;
    border: 0;

    background-color: ${props => determineBackgroundColor(props.variant)};

    border: ${props => determineBorder(props.variant)};
    border-radius: 3px;

    font-size: 1.3rem;
    color: ${props => determineFontColor(props.variant)};

    text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
    letter-spacing: 0.1rem;

    &:disabled {
      background-color: ${lighten(0.2, colors.ACCENT)};
      &:hover {
        cursor: not-allowed;
        background-color: ${lighten(0.2, colors.ACCENT)};
      }
    }
  }

  @media ${screenSize.TABLET} {
    display: block;
    margin-left: 60%;
    width: 40%;
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;

    &:hover {
      cursor: pointer;

      background-color: ${props =>
        // eslint-disable-next-line no-nested-ternary
        props.variant === ButtonVariant.CTA
          ? lighten(0.1, colors.ACCENT)
          : props.variant === ButtonVariant.BORDERED
          ? 'transparent'
          : 'transparent'};
    }
  }
`;

export default Button;
