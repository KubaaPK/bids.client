import styled from 'styled-components';
import { screenSize, colors } from '../../../../shared/styles/vars';

export const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;
  }
`;
export const InStock = styled.p``;

export const Form = styled.form`
  @media ${screenSize.TABLET} {
    button:last-of-type {
      margin: 0;
    }
  }
`;

export const Input = styled.input`
  @media ${screenSize.MOBILE} {
    height: 35px;
    width: 20%;

    font-size: 2rem;
    text-align: center;
  }
`;

export const IncrDecrButton = styled.button`
  @media ${screenSize.MOBILE} {
    height: 35px;
    width: 35px;

    background-color: transparent;
    border: 0;
    border-top: 1px solid ${colors.GREYISH};
    border-bottom: 1px solid ${colors.GREYISH};

    font-size: 2rem;

    &:nth-of-type(1) {
      border-left: 1px solid ${colors.GREYISH};
      border-right: 0;
    }
    &:nth-of-type(2) {
      margin-bottom: 2rem;

      border-left: 0;
      border-right: 1px solid ${colors.GREYISH};
    }
  }
`;
