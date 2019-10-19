import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles/vars';

export const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 3rem;
    padding: 0.5rem ${paddings.MOBILE} 1rem ${paddings.MOBILE};

    background-color: #ffffff;
  }
`;

export const Title = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 2.1rem;
  }
`;

export const ParametersList = styled.ul`
  @media ${screenSize.MOBILE} {
    padding-left: 0;

    list-style-type: none;
  }
`;
export const Parameter = styled.li`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-direction: row;

    span {
      display: block;

      font-size: 1.4rem;

      &:first-of-type {
        width: 40%;

        font-weight: 300;
      }

      &:last-of-type {
        width: 55%;

        font-weight: 400;
      }
    }
  }
`;
