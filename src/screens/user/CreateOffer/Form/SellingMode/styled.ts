import styled from 'styled-components';
import { screenSize } from '../../../../../shared/styles/vars';
import screenSizes from '../../../../../shared/styles/vars/screen-sizes';

const StockWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    margin-top: 4rem;
    div {
      margin-top: 0;

      &:first-of-type {
        width: 100%;
      }

      &:nth-of-type(2) {
        width: 35%;
        margin-right: 5%;

        div {
          width: 100%;
        }
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    width: 50%;

    #price {
      width: 35%;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { StockWrapper };
