import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    div:first-of-type {
      width: 30vw;

      div {
        padding-top: 0;
      }
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    div:first-of-type {
      width: 15vw;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
