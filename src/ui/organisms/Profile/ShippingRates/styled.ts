import styled from 'styled-components';
import theme from '../../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    width: 100%;
  }
`;

const Top = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    button {
      margin-left: auto;
    }

    h2 {
      font-size: ${theme.fontSizes.heading5};
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    h2 {
      font-size: ${theme.fontSizes.heading4};
    }
  }
`;

export { Wrapper, Top };
