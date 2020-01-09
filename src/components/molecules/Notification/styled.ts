import styled from 'styled-components';
import {
  screenSize,
  colors,
  paddings,
  boxShadows
} from '../../../shared/styles/vars';

type Props = {
  variant: 'info' | 'success' | 'error' | 'warning';
};

function setBackgroundColor(variant: Props['variant']): string {
  switch (variant) {
    case 'error':
      return colors.error.background;
    case 'info':
      return colors.INFO;
    case 'success':
      return colors.success.background;
    case 'warning':
      return colors.WARNING;
    default:
      return 'transparent';
  }
}

function setBorderColor(variant: Props['variant']): string {
  switch (variant) {
    case 'error':
      return colors.error.border;
    // case 'info':
    //   return colors.INFO;
    case 'success':
      return colors.success.border;
    // case 'warning':
    //   return colors.WARNING;
    default:
      return 'transparent';
  }
}

function setFontColor(variant: Props['variant']): string {
  switch (variant) {
    case 'error':
      return colors.error.text;
    case 'info':
      return 'hsl(0, 0%, 100%)';
    case 'success':
      return colors.success.text;
    case 'warning':
      return 'hsl(0, 0%, 0%)';
    default:
      return 'hsl(0, 0%, 100%)';
  }
}

const Wrapper = styled.div<Props>`
  @media ${screenSize.MOBILE} {
    position: fixed;
    z-index: 999;
    bottom: 0;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100vw;
    padding: 1rem;
    border-top: 0.5rem solid ${props => setBorderColor(props.variant)};
    box-shadow: ${boxShadows.level2};

    background-color: ${props => setBackgroundColor(props.variant)};

    span,
    p {
      color: ${props => setFontColor(props.variant)};
    }
  }

  @media ${screenSize.TABLET} {
    top: 20vh;
    bottom: initial;
    right: ${paddings.TABLET};

    width: 35%;
  }

  @media ${screenSize.DESKTOP} {
    width: 25%;
    right: ${paddings.DESKTOP};
  }
`;

const Icon = styled.span`
  @media ${screenSize.MOBILE} {
    width: 10%;
    margin-right: 2rem;
    svg {
      height: 3rem;
      width: 3rem;
    }
  }
`;

const Message = styled.p`
  @media ${screenSize.MOBILE} {
    width: 80%;
    font-size: 1.2rem;
  }
`;

export { Wrapper, Icon, Message };
