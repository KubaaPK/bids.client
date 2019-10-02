import styled from 'styled-components';
import { colors, paddings, screenSize } from '../../../shared/styles/vars';

export const Title = styled.h2`
  @media ${screenSize.MOBILE} {
    margin-left: ${paddings.MOBILE}
    font-size: 2.5rem;
    font-weight: normal;
  }
  
  @media ${screenSize.TABLET} {
    margin-left: 10%;
    margin-top: 2.5vh;
  }
  
  @media ${screenSize.DESKTOP} {
    margin-left: 27.5%;
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

    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
  }

  @media ${screenSize.DESKTOP} {
    width: 45%;
    margin: 0 auto;

    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
  }
`;

export const SignUpRedirect = styled.p`
  @media ${screenSize.MOBILE} {
    display: block;
    margin-top: 2.5rem;

    font-size: 1.25rem;
    text-align: center;
    color: ${colors.GREYISH};
    letter-spacing: 0.1rem;

    a {
      margin-left: 0.5rem;
      font-size: 1.25rem;
      color: ${colors.SECONDARY_ACCENT};
      text-decoration: none;
    }
  }
`;
