import styled from 'styled-components';
import { screenSize, colors, paddings } from '../../../shared/styles/vars';

const Title = styled.h1`
  @media ${screenSize.MOBILE} {
    padding-left: ${paddings.MOBILE};
    margin: 0;

    font-size: 2.75rem;
    font-weight: 400;
  }
`;

const Section = styled.div`
  @media ${screenSize.MOBILE} {
    margin: 1rem 0;
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;

    &:first-of-type {
      margin-top: 0;
    }
  }

  @media ${screenSize.DESKTOP} {
    width: calc(100vw - ${paddings.DESKTOP} * 2);
    margin: 2rem auto 2rem auto;

    &:nth-of-type(2) {
      input {
        width: 40%;
      }
    }

    &:last-of-type {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-end;

      padding: 2rem ${paddings.MOBILE};

      button {
        width: 20%;
      }
    }
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
  Title,
  Section,
  CategoryWrapper,
  CategoryText,
  SelectCategory,
  SelectedCategory,
  ErrorMessage
};
