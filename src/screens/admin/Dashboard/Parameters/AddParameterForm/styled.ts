import styled from 'styled-components';
import { screenSize } from '../../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    z-index: 8;
    top: 10rem;
    left: 0;
    overflow-y: auto;

    max-height: 80vh;
    width: 100%;
    box-sizing: border-box;
  }

  @media ${screenSize.DESKTOP} {
    top: 10rem;
    left: calc(60vw - 15vw);

    display: block;
    width: 30vw;

    border: 1px solid #ccc;

    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
