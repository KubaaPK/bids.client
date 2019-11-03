import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles/vars';

const Select = styled.select`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;

    padding-left: 1rem;
    border: 1px solid ${colors.GREYISH};

    background-color: transparent;

    font-size: 1.3rem;

    transition: 0.2s;
    &:focus {
      outline: none;

      border: 1px solid ${colors.ACCENT};
    }
  }
`;

const Option = styled.option`
  @media ${screenSize.MOBILE} {
    font-size: 1.3rem;
  }
`;

export { Select, Option };
