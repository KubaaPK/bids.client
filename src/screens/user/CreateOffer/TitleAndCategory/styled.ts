import styled from 'styled-components';
import { colors, paddings, screenSize } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    padding: 2rem ${paddings.MOBILE};
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);

    background-color: #fff;
  }

  @media ${screenSize.DESKTOP} {
    width: calc(100vw - ${paddings.DESKTOP} * 2);
    margin: 0 auto;
  }
`;

const CategoryWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const CategoryText = styled.p`
  @media ${screenSize.MOBILE} {
    margin: 0;

    font-size: 1.4rem;
  }
`;

const SelectCategory = styled.span`
  @media ${screenSize.MOBILE} {
    margin-left: 0.5rem;

    font-size: 1.2rem;
    color: ${colors.SECONDARY_ACCENT};
  }

  @media ${screenSize.DESKTOP} {
    &:hover {
      cursor: pointer;
    }
  }
`;

const SelectedCategory = styled.p`
  @media ${screenSize.MOBILE} {
    width: 100%;
    margin-bottom: 0;

    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const ErrorMessage = styled.p`
  @media ${screenSize.MOBILE} {
    maring: 0;

    font-size: 1.4rem;
    color: ${colors.ERROR};
  }
`;

export {
  Wrapper,
  CategoryText,
  CategoryWrapper,
  ErrorMessage,
  SelectedCategory,
  SelectCategory
};
