import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
    margin-top: 2rem;
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;

    ul {
      * {
        font-size: 1.2rem;
      }
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
