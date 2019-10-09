import styled from 'styled-components';
import { colors, paddings, screenSize } from '../../../shared/styles/vars';

export const Title = styled.h2`
  @media ${screenSize.MOBILE} {
    margin-left: ${paddings.MOBILE};
    font-size: 2.5rem;
    font-weight: normal;
  }

  @media ${screenSize.TABLET} {
    margin-left: 10%;
    margin-top: 2.5vh;
  }

  @media ${screenSize.DESKTOP} {
    margin-left: 32.5%;
    margin-top: 2.5vh;
  }
`;

export const Form = styled.form`
  @media ${screenSize.MOBILE} {
    padding: 1rem ${paddings.MOBILE};

    background-color: #ffffff;
  }

  @media ${screenSize.TABLET} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${screenSize.DESKTOP} {
    width: 35%;
    margin: 0 auto;
  }
`;

export const SignUpRedirect = styled.p`
  @media ${screenSize.MOBILE} {
    display: block;
    margin-top: 2rem;
    margin-bottom: 0;
    padding: 2rem 0;

    font-size: 1.25rem;
    text-align: center;
    color: ${colors.GREYISH};
    letter-spacing: 0.1rem;

    background-color: #ffffff;

    a {
      margin-left: 0.5rem;
      font-size: 1.25rem;
      color: ${colors.SECONDARY_ACCENT};
      text-decoration: none;
    }
  }

  @media ${screenSize.TABLET} {
    width: 80%;
    margin: 2rem auto;
  }

  @media ${screenSize.DESKTOP} {
    width: 35%;
    margin: 2rem auto 0 auto;
  }
`;

export const AdditionalRequirements = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: -2rem;
    margin-bottom: 2rem;

    font-size: 1.1rem;
    color: ${colors.GREYISH};
  }

  @media ${screenSize.TABLET} {
    font-size: 1.25rem;
  }
`;
