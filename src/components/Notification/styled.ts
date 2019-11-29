import styled from 'styled-components';
import { screenSize, colors, paddings } from '../../shared/styles/vars';

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
    top: 20vh;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100vw;
    padding: 1rem;

    background-color: ${props => setBackgroundColor(props.variant)};

    span,
    p {
      color: ${props => setFontColor(props.variant)};
    }
  }

  @media ${screenSize.TABLET} {
    width: 50%;
    right: ${paddings.TABLET};
  }

  @media ${screenSize.TABLET} {
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
    font-size: 1.25rem;
  }
`;

export { Wrapper, Icon, Message };
