import styled from 'styled-components';
import {
  screenSize,
  colors,
  spacing,
  fontSize
} from '../../../../../shared/styles/vars';

const Outline = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;

    height: 100vh;
    width: 100vw;

    background-color: hsla(0, 0%, 0%, 0.8);
  }
`;

const DeliveryMethod = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;

    padding: ${spacing.s} 0;

    border-bottom: 1px solid ${colors.border.grey};

    &:last-of-type {
      border-bottom: 0;
    }
  }
`;

const NameAndDeleteWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Name = styled.p`
  @media ${screenSize.MOBILE} {
    margin-bottom: 0;

    font-size: ${fontSize.s};
    color: ${colors.font.normal};
  }

  @media ${screenSize.DESKTOP} {
    font-size: ${fontSize.m};
  }
`;

const DeleteButton = styled.button`
  @media ${screenSize.MOBILE} {
    position: relative;
    top: 1.5rem;

    border: none;
    background-color: transparent;
    color: ${colors.error.text};

    &:hover {
      cursor: pointer;
    }
  }
`;

const PaymentPolicy = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: ${fontSize.xs};
    color: ${colors.font.lighten};
  }

  @media ${screenSize.DESKTOP} {
    font-size: ${fontSize.m};
  }
`;

export {
  Outline,
  DeliveryMethod,
  NameAndDeleteWrapper,
  Name,
  DeleteButton,
  PaymentPolicy
};
