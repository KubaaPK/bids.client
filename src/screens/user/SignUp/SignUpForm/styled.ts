import styled from 'styled-components';
import { screenSize } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    h2 {
      margin-top: 0;
    }

    form {
      padding: 3rem 2rem;
    }
  }

  @media ${screenSize.TABLET} {
    width: 70%;

    margin: 0 auto;

    form {
      border-radius: 5px;
      box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
    }
  }

  @media ${screenSize.DESKTOP} {
    width: 30%;
  }

  form {
    margin-top: 2rem;
    background-color: #fff;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
