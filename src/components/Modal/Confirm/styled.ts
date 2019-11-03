import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, colors } from '../../../shared/styles/vars';

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

const Modal = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    top: 40vh;
    left: 0;
    right: 0;

    width: 100%;
    padding: 2rem;
    margin: 0 auto;

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    width: 50%;
  }

  @media ${screenSize.DESKTOP} {
    width: 30%;
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
    font-size: 1.1rem;
    text-align: center;
  }

  @media ${screenSize.DESKTOP} {
    font-size: 1.3rem;
  }
`;

const Buttons = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #ccc;

    text-align: right;

    button {
      padding: 1rem 2rem;
      margin: 0 0.5rem;
      border: 0;

      font-size: 1.1rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    margin-top: 3rem;
    padding-top: 1rem;

    button {
      font-size: 1.3rem;
    }
  }
`;

const AcceptButton = styled.button`
  @media ${screenSize.MOBILE} {
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

export { Wrapper, Modal, Icon, Title, Buttons, AcceptButton, RejectButton };
