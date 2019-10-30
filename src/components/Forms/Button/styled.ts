import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, colors, shadows } from '../../../shared/styles/vars';

type Props = {
  variant: 'full' | 'blank' | 'bordered';
};

const setBackgroundColor = (variant: Props['variant']): string => {
  switch (variant) {
    case 'full':
      return colors.ACCENT;
    case 'blank':
      return 'transparent';
    case 'bordered':
      return 'transparent';
    default:
      return 'transparent';
  }
};

const setHoverBackgroundColor = (variant: Props['variant']): string => {
  switch (variant) {
    case 'full':
      return lighten(0.1, colors.ACCENT);
    case 'blank':
      return 'transparent';
    case 'bordered':
      return 'transparent';
    default:
      return 'transparent';
  }
};

const setFontColor = (variant: Props['variant']): string => {
  switch (variant) {
    case 'full':
      return '#fff';
    case 'blank':
      return colors.FONT;
    case 'bordered':
      return colors.FONT;
    default:
      return colors.FONT;
  }
};

const Button = styled.button<Props>`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;
    padding: 1rem 1rem;
    border: 0;

    background-color: ${props => setBackgroundColor(props.variant)};
    box-shadow: ${shadows.CALL_TO_ACTION};

    color: ${props => setFontColor(props.variant)};
    &:disabled {
      opacity: 0.5;

      &:hover {
        cursor: not-allowed;
      }
    }

    span {
      div {
        margin: 0 auto;
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      cursor: pointer;

      box-shadow: ${shadows.CALL_TO_ACTION_HOVER};

      background-color: ${props => setHoverBackgroundColor(props.variant)};
    }
  }
`;

const Text = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`;

export { Button, Text };
