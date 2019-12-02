import styled from 'styled-components';
import { screenSize } from '../../../../../shared/styles/vars';

const DeliveryMethod = styled.li`
  @media ${screenSize.MOBILE} {
    margin: 4rem 0 3rem 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 4rem;
    }
  }
`;

const RateSettings = styled.div`
  @media ${screenSize.MOBILE} {
    width: 80%;
    margin-top: 4rem;
    margin-left: 20%;

    div {
      &:nth-child(n) {
        margin: -1.5rem 0;

        p {
          margin-bottom: 3rem;
        }
      }

      &:first-child {
        margin-top: 2rem;
      }

      &:last-child {
        margin-bottom: -5rem;
      }
    }
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    margin-left: 10%;
    margin-top: 3rem;

    div {
      width: 40%;

      &:nth-child(n) {
        margin: 0;
        margin-bottom: -3rem;

        p {
          margin-bottom: 0;
        }
      }

      &:first-child {
        margin-top: 0;
        margin-right: 2rem;
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    margin-left: 5%;
    margin-top: 3.5rem;

    div {
      display: inline-block;
      &:nth-child(n) {
        width: 30%;
      }

      &:first-child {
        margin-right: 2rem;
      }
    }
  }
`;

export { DeliveryMethod, RateSettings };
