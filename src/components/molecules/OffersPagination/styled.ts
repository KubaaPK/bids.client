import styled from 'styled-components';
import { lighten } from 'polished';
import { ChevronRight } from 'react-feather';
import { screenSize, colors } from '../../../shared/styles';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: none;
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    margin-left: auto;
  }
`;

const NumberOfPages = styled.span`
  @media ${screenSize.TABLET} {
    font-size: 1.4rem;
  }
`;

const InputPageNumber = styled.input`
  @media ${screenSize.TABLET} {
    width: 4rem;
    height: 30px;
    padding-left: 1rem;
    margin-right: 1.5rem;
    border-radius: 3px;
    border: 1px solid #ccc;

    font-size: 1.4rem;

    transition: 0.2s;
    &:focus {
      outline: none;

      border-color: ${colors.ACCENT};
    }
  }
`;

const NextPage = styled(ChevronRight)`
  @media ${screenSize.TABLET} {
    margin-left: 1.5rem;
  }

  @media ${screenSize.DESKTOP} {
    color: ${lighten(0.5, '#000')};

    transition: 0.2s;
    &:hover {
      cursor: pointer;

      color: #000;
    }
  }
`;

export { Wrapper, InputPageNumber, NumberOfPages, NextPage };
