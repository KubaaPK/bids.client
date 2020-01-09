import styled from 'styled-components';
import {
  screenSize,
  colors,
  spacing,
  fontSize,
  boxShadows
} from '../../../shared/styles/vars';

type Props = {
  variant: 'warning';
};

const Modal = styled.div<Props>`
  @media ${screenSize.MOBILE} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    margin: 0 auto;
    border-top: ${props =>
      props.variant === 'warning' ? `5px solid ${colors.error.border}` : 0};
    box-shadow: ${boxShadows.level2};

    background-color: hsl(0, 0%, 100%);
  }

  @media ${screenSize.TABLET} {
    top: 30vh;
    bottom: auto;
    width: 50%;
    border-top: 0;
    border-left: ${props =>
      props.variant === 'warning' ? `5px solid ${colors.error.border}` : 0};
    border-radius: 5px;
  }

  @media ${screenSize.DESKTOP} {
    width: 30%;
  }
`;

const Content = styled.div`
  @media ${screenSize.MOBILE} {
    padding: ${spacing.l};
  }
`;

const Icon = styled.div`
  @media ${screenSize.MOBILE} {
    text-align: center;

    svg {
      height: 3rem;
      width: 3rem;
    }
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: ${fontSize.s};
    text-align: left;
  }

  @media ${screenSize.DESKTOP} {
    font-size: ${fontSize.m};
  }
`;

const Buttons = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding: ${spacing.l} ${spacing.m};
    border-top: 1px solid hsla(255, 0%, 0%, 0.2);

    background-color: hsla(255, 0%, 0%, 0.1);
    text-align: right;

    button {
      width: 45%;
      padding: ${spacing.m} ${spacing.l};
      margin: 0 ${spacing.s};
      border: 0;

      font-size: ${fontSize.s} !important;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    justify-content: flex-end;

    padding: ${spacing.m} ${spacing.xl};

    button {
      width: 40%;

      font-size: ${fontSize.m};
    }
  }
`;

const RejectButton = styled.button`
  @media ${screenSize.MOBILE} {
    background-color: transparent;

    color: ${colors.ACCENT};

    transition: 0.2s;
    &:hover {
      cursor: pointer;

      color: ${colors.SECONDARY_ACCENT};
    }
  }
`;

export { Modal, Content, Icon, Title, Buttons, RejectButton };
