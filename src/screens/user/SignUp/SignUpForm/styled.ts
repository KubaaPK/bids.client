import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.TABLET} {
    width: 70%;

    margin: 0 auto;
  }

  @media ${screenSize.DESKTOP} {
    width: 30%;
  }

  form {
    margin-top: 2rem;

    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
