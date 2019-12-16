import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, colors } from '../../../shared/styles/vars';

type Props = {
  variant: 'warning';
};

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    padding: 1rem 2rem;

    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Modal = styled.div<Props>`
  @media ${screenSize.MOBILE} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    margin: 0 auto;
    border-top: ${props =>
      props.variant === 'warning' ? '5px solid hsla(0, 100%, 50%, 0.6)' : 0};

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    top: 30vh;
    bottom: auto;
    width: 50%;
    border-top: 0;
    border-left: ${props =>
      props.variant === 'warning' ? '5px solid hsla(0, 100%, 50%, 0.6)' : 0};
    border-radius: 5px;
  }

  @media ${screenSize.DESKTOP} {
    width: 30%;
  }
`;

const Content = styled.div`
  @media ${screenSize.MOBILE} {
    padding: 2rem 2rem 0 2rem;
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
    font-size: 1.2rem;
    text-align: left;
  }

  @media ${screenSize.DESKTOP} {
    font-size: 1.3rem;
  }
`;

const Buttons = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;
    padding: 2rem 1rem;
    border-top: 1px solid hsla(255, 0%, 0%, 0.2);

    background-color: hsla(255, 0%, 0%, 0.1);
    text-align: right;

    button {
      padding: 1rem 2rem;
      margin: 0 0.5rem;
      border: 0;

      font-size: 1.2rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    margin-top: 3rem;
    padding: 2rem 1rem;

    button {
      font-size: 1.3rem;
    }
  }
`;

const AcceptButton = styled.button`
  @media ${screenSize.MOBILE} {
    border-radius: 5px;

    background-color: ${colors.ERROR};

    color: #fff;

    transition: 0.2s;
    &:hover {
      cursor: pointer;

      background-color: ${lighten(0.1, colors.ERROR)};
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

export {
  Wrapper,
  Modal,
  Content,
  Icon,
  Title,
  Buttons,
  AcceptButton,
  RejectButton
};
