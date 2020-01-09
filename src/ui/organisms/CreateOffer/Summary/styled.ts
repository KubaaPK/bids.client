import styled from 'styled-components';
import theme from '../../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    padding: ${theme.spacing.m};
    margin-top: ${theme.spacing.l};
    border-radius: ${theme.borderRadius};

    background-color: ${theme.palette.grayscale[7]};

    h2 {
      font-size: ${theme.fontSizes.heading6};
      font-weight: 400;
    }

    table {
      margin-top: ${theme.spacing.l};

      tbody {
        tr {
          border-bottom: 1px solid ${theme.palette.grayscale[4]};
          &:last-of-type {
            border: 0;
          }
          td {
            padding: ${theme.spacing.m} 0;
          }
        }
      }
    }

    &:last-of-type {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    table {
      width: 50%;
    }
  }
`;
// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
