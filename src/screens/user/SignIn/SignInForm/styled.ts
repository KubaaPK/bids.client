import styled from 'styled-components';
import { screenSize, boxShadows, colors } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.TABLET} {
    width: 50%;

    margin: 0 auto;
  }

  @media ${screenSize.DESKTOP} {
    width: 30%;
  }
`;

const Form = styled.form`
  @media ${screenSize.MOBILE} {
    padding: 3rem 2rem;

    box-shadow: ${boxShadows.level0};

    background-color: hsl(0, 0%, 100%);

    button {
      margin-top: 2rem;
    }
  }

  @media ${screenSize.TABLET} {
    margin-top: 2rem;
    border-radius: 5px;
    border: 1px solid ${colors.border.grey};
  }

  @media ${screenSize.DESKTOP} {
    background-color: hsl(0, 0%, 100%);
  }
`;
export { Wrapper, Form };
