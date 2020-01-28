import styled from 'styled-components';
import theme from '../../theme';

const Outline = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);
`;

const Form = styled.form`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    overflow-y: scroll;

    width: 100vw;
    height: 100vh;

    padding: 10rem ${theme.spacing.m};

    background: #fff;

    button {
      width: 100%;
      margin-top: ${theme.spacing.l};
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    width: 40vw;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 35vw;
  }
`;

export { Outline, Form };
