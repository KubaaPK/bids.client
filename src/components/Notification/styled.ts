import styled from 'styled-components';
import { lighten } from 'polished';
import { NotificationVariant } from './Notification';
import { colors, paddings, screenSize } from '../../shared/styles/vars';

type WrapperProps = {
  variant: NotificationVariant;
};

const determineVariantColor = (variant: NotificationVariant): string => {
  switch (variant) {
    case NotificationVariant.SUCCESS:
      return colors.SUCCESS;
    case NotificationVariant.ERROR:
      return colors.ERROR;
    case NotificationVariant.INFO:
      return colors.INFO;
    case NotificationVariant.WARNING:
      return colors.WARNING;
    default:
      return colors.INFO;
  }
};

export const Wrapper = styled.div<WrapperProps>`
  @media ${screenSize.MOBILE} {
    position: fixed;
    right: ${paddings.MOBILE};
    display: flex;
    flex-direction: row;
    padding: 0 2rem;

    border: 1px solid ${props => determineVariantColor(props.variant)};
    border-radius: 3px;
    background-color: ${props =>
      lighten(0.3, determineVariantColor(props.variant))};
  }

  @media ${screenSize.TABLET} {
    right: 10%;
  }

  @media ${screenSize.DESKTOP} {
    right: 5%;
  }
`;
export const Icon = styled.span`
  @media ${screenSize.MOBILE} {
    align-self: center;
    margin-right: 1rem;
  }
`;
export const Text = styled.div`
  @media ${screenSize.MOBILE} {
  }
`;
export const Header = styled.p`
  @media ${screenSize.MOBILE} {
    margin-bottom: 0;

    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
  }
`;
export const Message = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: 0.75rem;

    font-size: 1.1rem;
    color: ${lighten(0.25, '#000000')};
  }
`;
