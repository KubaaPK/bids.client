import styled from 'styled-components';
import theme from '../../theme';

const ShippingRate = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${theme.spacing.m} 0;
  border-top: 1px solid ${theme.palette.grayscale[5]};

  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    list-style-type: none;

    p {
      margin-right: 2.5%;
    }

    button {
      margin-left: auto;
    }
    &:first-of-type {
      margin-top: ${theme.spacing.l};
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    p {
      width: 80%;
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    p {
      width: 85%;
    }

    button {
      width: 10%;
      text-align: right;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { ShippingRate };
