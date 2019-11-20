import styled from 'styled-components';
import { screenSize, colors, paddings } from '../../../../shared/styles/vars';

const Main = styled.main`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    padding-top: 13rem;
    padding-bottom: 2rem;
    min-height: 100vh;

    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.TABLET} {
    flex-direction: row;
  }

  @media ${screenSize.DESKTOP} {
    padding-top: 10rem;
  }
`;

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;
    padding: 1rem ${paddings.MOBILE} 2rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    width: 65%;
    height: 100%;
    padding: 1rem ${paddings.TABLET} 1rem ${paddings.TABLET};
    margin-top: 0;
    margin-left: 5%;

    h1 {
      width: 55%;
    }

    button {
      width: 45%;
    }
  }

  @media ${screenSize.TABLET} {
    h1 {
      width: 50%;
    }

    button {
      width: 50%;
    }
  }

  @media ${screenSize.DESKTOP} {
    h1 {
      width: 70%;
    }

    button {
      width: 30%;
    }
  }
`;

export { Main, Wrapper };
