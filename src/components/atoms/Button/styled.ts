import styled from 'styled-components';
import { lighten } from 'polished';
import {
  screenSize,
  colors,
  boxShadows,
  fontSize
} from '../../../shared/styles/vars';

type Props = {
  variant: 'full' | 'bordered' | 'blank' | 'error';
};

function setBackgroundColor(variant: Props['variant']): string {
  switch (variant) {
    case 'blank':
    case 'bordered':
      return 'transparent';
    case 'full':
      return colors.accent;
    case 'error':
      return colors.error.text;
    default:
      return colors.accent;
  }
}

function setBorder(variant: Props['variant']): string {
  switch (variant) {
    case 'blank':
    case 'full':
      return 'none';
    case 'bordered':
      return `1px solid ${colors.accent}`;
    default:
      return 'none';
  }
}

function setFontColor(variant: Props['variant']): string {
  switch (variant) {
    case 'full':
    case 'error':
      return 'hsl(0, 0%, 100%)';
    default:
      return colors.accent;
  }
}

const Button = styled.button<Props>`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;

    background-color: ${props => setBackgroundColor(props.variant)};
    border: ${props => setBorder(props.variant)};
    border-radius: 5px;
    box-shadow: ${props => (props.variant === 'full' ? boxShadows.level2 : 0)};

    color: ${props => setFontColor(props.variant)};
    font-size: ${fontSize.m} !important;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;

    &:hover {
      background-color: ${props =>
        lighten(0.15, setBackgroundColor(props.variant))};

      cursor: pointer;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Button };
