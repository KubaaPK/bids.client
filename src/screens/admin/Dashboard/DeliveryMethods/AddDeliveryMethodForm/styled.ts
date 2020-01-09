import styled from 'styled-components';
import {
  screenSize,
  paddings,
  spacing,
  boxShadows
} from '../../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    top: 10rem;
    left: 0;

    width: 100%;
  }

  @media ${screenSize.TABLET} {
    right: 0;

    width: 50%;
    margin: 0 auto;
  }

  @media ${screenSize.DESKTOP} {
    top: 15rem;
    left: 0;
    right: 0;

    display: block;
    width: 30vw;
    margin: 0 auto;
  }
`;

const Form = styled.form`
  @media ${screenSize.MOBILE} {
    padding: ${spacing.l} ${paddings.MOBILE};

    background-color: hsl(0, 0%, 100%);

    > p {
      margin-bottom: ${spacing.l};
    }

    button:last-of-type {
      margin-top: ${spacing.m};
    }

    div {
      :nth-of-type(2) {
        margin-bottom: ${spacing.xl};
      }
    }
  }

  @media ${screenSize.TABLET} {
    border-radius: 5px;
    box-shadow: ${boxShadows.level2};

    div:nth-of-type(2) {
      &:nth-of-type(2) {
        margin-bottom: 0;
      }
    }
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

export { Wrapper, Form, CloseBottom };
