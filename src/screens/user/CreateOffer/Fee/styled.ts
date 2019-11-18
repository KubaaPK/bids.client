import styled from 'styled-components';
import { screenSize } from '../../../../shared/styles/vars';

const Wrapper = styled.div``;

const Table = styled.table`
  @media ${screenSize.MOBILE} {
    border-collapse: collapse;

    thead {
      border-bottom: 1px solid #ccc;

      text-align: left;
      tr {
        th {
          padding: 1rem 0.5rem;

          font-size: 1.3rem;
          font-weight: 500;

          &:first-of-type {
            width: 33%;
          }
          &:nth-of-type(2) {
            width: 33%;
          }
          &:nth-of-type(3) {
            width: 33%;
          }
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 1rem 0.5rem;

          font-size: 1.3rem;
        }
      }
    }
  }
`;

export { Wrapper, Table };
