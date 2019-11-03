import styled from 'styled-components';
import { screenSize, paddings } from '../../../shared/styles/vars';

const Form = styled.form`
  @media ${screenSize.MOBILE} {
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    padding-bottom: 3rem;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Form };
