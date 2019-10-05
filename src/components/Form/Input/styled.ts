import styled from 'styled-components';
import { colors, screenSize } from '../../../shared/styles/vars';

const Input = styled.input`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 4rem;
    padding-left: 1rem;
    border: 1px solid ${colors.GREYISH};
    border-radius: 3px;

    font-size: 1.25rem;

    transition: 0.2s;
    &:focus {
      outline: none;
      border-color: ${colors.DARK};
    }
  }
`;
export default Input;
