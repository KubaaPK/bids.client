import styled from 'styled-components';
import { screenSize, paddings } from '../../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    z-index: 8;
    top: 0;
    left: 0;
    overflow-y: auto;
    z-index: 9999;

    max-height: 100vh;
    width: 100%;
    box-sizing: border-box;

    form {
      padding: 1rem ${paddings.MOBILE};

      background-color: #fff;

      > p {
        margin-top: 3rem;
        margin-bottom: 2rem;
      }

      div {
        :first-of-type {
          margin-top: 2rem;
        }

        :nth-of-type(4) {
          margin-top: 2rem;
        }
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    top: 0;
    left: 0;
    right: 0;

    display: block;
    max-height: 100%;
    width: 35vw;
    margin: 0 auto;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);

    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
`;

const CloseBottom = styled.button`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;
    margin-top: 1rem;
    border: 0;

    background-color: transparent;

    font-size: 1.2rem;
  }
`;

export { Wrapper, CloseBottom };
