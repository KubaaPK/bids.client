import styled from 'styled-components';
import { screenSize, paddings } from '../../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    top: 10rem;
    left: 0;

    width: 100%;

    form {
      padding: 1rem ${paddings.MOBILE};

      background-color: #fff;

      div {
        :nth-of-type(2) {
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    top: 15rem;
    left: calc(60vw - 15vw);

    display: block;
    width: 30vw;

    border: 1px solid #ccc;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
