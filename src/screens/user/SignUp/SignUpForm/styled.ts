import styled from 'styled-components';
import { screenSize, colors } from '../../../../shared/styles/vars';
import shadows from '../../../../shared/styles/vars/shadows';

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

    box-shadow: ${shadows.level0};

    background-color: hsl(0, 0%, 100%);
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
