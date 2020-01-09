import styled from 'styled-components';
import { screenSize } from '../../../../../../../shared/styles/vars';

const Wrapper = styled.div``;

const Form = styled.form`
  @media ${screenSize.MOBILE} {
    padding: 0;
    margin-bottom: 3rem;

    button {
      margin-top: 1rem;
    }
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;

    button {
      align-self: flex-end;

      width: 20rem;
    }
  }
`;
export { Wrapper, Form };
