import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  screenSize,
  colors,
  paddings,
  boxShadows
} from '../../../shared/styles/vars';

const ToSignUpWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;

    margin-top: 2rem;
    padding: 2rem ${paddings.MOBILE};
    border-radius: 5px;
    border: 1px solid ${colors.border.grey};

    background-color: hsl(0, 0%, 100%);
  }

  @media ${screenSize.TABLET} {
    width: 50%;

    margin: 2rem auto 0;
  }

  @media ${screenSize.DESKTOP} {
    width: 30%;
  }
`;

const ToSignUpMessage = styled.p`
  @media ${screenSize.MOBILE} {
    padding: 0;
    margin: 0;
    margin-right: 0.5rem;

    font-size: 1.2rem;
    color: ${colors.FONT};
  }
`;

const LinkToSignUp = styled(Link)`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.FONT};
  }
`;

export { ToSignUpWrapper, ToSignUpMessage, LinkToSignUp };
