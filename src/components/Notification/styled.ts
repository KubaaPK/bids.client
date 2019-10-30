import styled from 'styled-components';
import {
  screenSize,
  colors,
  shadows,
  paddings
} from '../../shared/styles/vars';

type Props = {
  variant: 'info' | 'success' | 'error' | 'warning';
};

const setBackgroundColor = (variant: Props['variant']): string => {
  switch (variant) {
    case 'error':
      return colors.ERROR;
    case 'info':
      return colors.INFO;
    case 'success':
      return colors.SUCCESS;
    case 'warning':
      return colors.WARNING;
    default:
      return 'transparent';
  }
};

const setFontColor = (variant: Props['variant']): string => {
  switch (variant) {
    case 'error':
      return '#fff';
    case 'info':
      return '#fff';
    case 'success':
      return '#fff';
    case 'warning':
      return '#000';
    default:
      return '#fff';
  }
};

const Wrapper = styled.div<Props>`
  @media ${screenSize.MOBILE} {
    position: fixed;
    z-index: 999;
    right: ${paddings.MOBILE};
    top: 20vh;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    box-shadow: ${shadows.CALL_TO_ACTION};

    background-color: ${props => setBackgroundColor(props.variant)};

    span,
    p {
      color: ${props => setFontColor(props.variant)};
    }
  }
`;

const Icon = styled.span`
  @media ${screenSize.MOBILE} {
    margin-right: 1rem;

    svg {
      height: 3rem;
      width: 3rem;
    }
  }
`;

const Message = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.25rem;
  }
`;

export { Wrapper, Icon, Message };
