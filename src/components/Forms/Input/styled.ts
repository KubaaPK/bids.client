import styled from 'styled-components';
import { Eye, EyeOff } from 'react-feather';
import { screenSize, colors } from '../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: relative;
  }
`;

const Input = styled.input`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;

    padding-left: 1rem;
    border: 1px solid ${colors.GREYISH};

    font-size: 1.3rem;

    transition: 0.2s;
    &:focus {
      outline: none;

      border: 1px solid ${colors.ACCENT};
    }
  }
`;

const ShowPassword = styled(Eye)`
  position: absolute;
  right: 1rem;
  top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const HidePassword = styled(EyeOff)`
  position: absolute;
  right: 1rem;
  top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export { Input, ShowPassword, HidePassword, Wrapper };
