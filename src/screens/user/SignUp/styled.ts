import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { screenSize, colors, paddings } from '../../../shared/styles/vars';

const Main = styled.main`
  @media ${screenSize.MOBILE} {
    height: 100vh;
    padding-top: 20vh;

    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.TABLET} {
    padding-top: 15vh;
  }

  @media ${screenSize.DESKTOP} {
    padding-top: 12vh;
  }
`;

const ToSignUpWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    margin-top: 2rem;
    padding: 2rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    width: 70%;

    margin: 2rem auto 0;
  }

  @media ${screenSize.DESKTOP} {
    width: 30%;
  }
`;

const ToSignInMessage = styled.p`
  @media ${screenSize.MOBILE} {
    padding: 0;
    margin: 0;
    margin-right: 0.5rem;

    font-size: 1.2rem;
  }
`;

const LinkToSignIn = styled(Link)`
  @media ${screenSize.MOBILE} {
    font-size: 1.1rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.SECONDARY_ACCENT};
  }
`;

export { Main, ToSignUpWrapper, ToSignInMessage, LinkToSignIn };
