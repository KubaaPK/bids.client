import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles/vars';

const InputGroup = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const Label = styled.label`
  @media ${screenSize.MOBILE} {
    margin-bottom: 0.25rem;

    color: ${colors.FONT};
    font-size: 1.2rem;
  }
`;

type InputProps = {
  hasError: boolean;
};

const Input = styled.input<InputProps>`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;
    padding-left: 1rem;
    border: 1px solid
      ${props => (props.hasError ? colors.error.border : '#ccc')};
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

export { InputGroup, Input, Label, ErrorMessage };
