import styled from 'styled-components';
import { screenSize } from '../../../../../../shared/styles';

const Rate = styled.li`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding: 2.5rem;
    &:first-of-type {
      margin-top: 2rem;
    }

    &:first-child {
      border-top: 1px solid #ccc;
    }
    &:nth-child(even) {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
`;

const Name = styled.p`
  @media ${screenSize.MOBILE} {
    width: 80%;

    font-size: 1.4rem;
    font-weight: 300;
  }
`;

export { Rate, Name };
