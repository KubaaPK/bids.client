import styled from 'styled-components';
import { screenSize, colors } from '../../../shared/styles/vars';

const SelectWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const Label = styled.label`
  @media ${screenSize.MOBILE} {
    margin-bottom: 0.25rem;

    font-size: 1.2rem;
    color: ${colors.FONT};
  }
`;

const Select = styled.select`
  @media ${screenSize.MOBILE} {
    width: 100%;
    height: 40px;
    padding-left: 1rem;
    border-color: #ccc;

    background-color: transparent;

    font-size: 1.4rem;

    option {
      font-size: 1.4rem;
    }

    &:focus {
      outline: none;

      border-color: ${colors.ACCENT};
    }
  }
`;

export { SelectWrapper, Label, Select };
