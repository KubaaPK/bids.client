import styled from 'styled-components';
import { screenSize, paddings } from '../../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    top: 15rem;
    left: 0;

    width: 100%;

    form {
      padding: 1rem ${paddings.MOBILE};

      background-color: #fff;
    }
  }

  @media ${screenSize.DESKTOP} {
    top: 15rem;
    left: 0;
    right: 0;

    display: block;
    width: 30vw;
    margin: 0 auto;

    border: 0;
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
