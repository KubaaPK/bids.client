import styled from 'styled-components';
import { screenSize } from '../../../../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    form {
      padding: 0;
      margin-bottom: 3rem;

      select {
        margin-top: 2rem;
      }

      button {
        margin-top: 1rem;
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    form {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;

      input {
        width: 100%;
      }

      button {
        align-self: flex-end;

        width: 15rem;
      }
    }
  }
`;

export { Wrapper };
