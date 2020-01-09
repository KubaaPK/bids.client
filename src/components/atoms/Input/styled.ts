import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles/vars';

type Props = {
  hasError: boolean;
};

const Input = styled.input<Props>`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;
    padding-left: 1rem;
    border: 1px solid
      ${props => (props.hasError ? colors.error.border : colors.BORDER_GREY)};
    border-radius: 2px;

    font-size: 1.4rem;

    transition: 200ms;
    &:focus {
      outline: none;
      border-color: ${props =>
        props.hasError ? colors.error.border : colors.ACCENT};
    }
  }
`;

const ErrorMessage = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.2rem;
    color: ${colors.error.text};
  }
`;

export { Input, ErrorMessage };
