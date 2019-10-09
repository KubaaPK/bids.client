import styled from 'styled-components';
import { screenSize, paddings, colors } from '../../../../shared/styles/vars';
import { lighten } from 'polished';

type CategoryElementProps = {
  color: string;
};

export const CategoriesList = styled.ul`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    position: relative;
    top: 20vh;
    padding-left: 0;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);

    background-color: #ffffff;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media ${screenSize.TABLET} {
    top: 10vh;
  }

  @media ${screenSize.DESKTOP} {
    top: 15vh;
    flex-direction: column;
    width: 22%;
    padding-left: 6rem;

    border-radius: 3px;
  }
`;

export const Title = styled.p`
  @media ${screenSize.MOBILE} {
    display: none;
  }

  @media ${screenSize.DESKTOP} {
    display: block;

    font-size: 1.5rem;
    color: ${lighten(0.25, '#000000')};
  }
`;

export const CategoryStyled = styled.li<CategoryElementProps>`
  @media ${screenSize.MOBILE} {
    flex: 0 0 auto;
    width: calc((100% / 3) - 0.5rem);
    padding: 2rem 0;
    margin: 0 0.25rem;
    border-bottom: 4px solid ${props => props.color};

    list-style-type: none;
    text-align: center;
    a {
      font-size: 1.25rem;
      text-decoration: none;
      color: ${colors.GREYISH};
    }
  }

  @media ${screenSize.TABLET} {
    width: calc((100% / 6) - 0.5rem);
  }

  @media ${screenSize.DESKTOP} {
    padding: 1rem 0 1rem 1rem;
    margin: 0.5rem 0;

    border-bottom: 0;
    border-left: 4px solid ${props => props.color};

    a {
      font-size: 1.5rem;

      transition: 0.2s;
      &:hover {
        padding-left: 0.25rem;
        color: ${colors.ACCENT};
      }
    }
  }
`;
