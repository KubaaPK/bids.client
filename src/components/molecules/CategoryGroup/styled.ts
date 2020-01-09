import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { screenSize, spacing, fontSize, colors } from '../../../shared/styles';

const CategoryGroup = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;

    margin-top: ${spacing.m};

    p {
      margin-top: ${spacing.m};

      color: ${colors.font.lighten};
      font-size: ${fontSize.m};
    }

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media ${screenSize.TABLET} {
    width: 100%;
    margin-top: 0;

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media ${screenSize.DESKTOP} {
    width: 100%;
    margin: ${spacing.s} 0;

    p {
      margin-top: ${spacing.s};

      color: ${colors.font.lighten};
      font-size: ${fontSize.m};

      transition: 0.2s;
      &:hover {
        cursor: pointer;

        color: ${colors.font.normal};
      }
    }
  }
`;

const Children = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    margin-top: ${spacing.l};
    margin-left: ${spacing.l};

    a {
      font-size: ${fontSize.m};

      color: ${colors.font.lighten};
    }
  }

  @media ${screenSize.TABLET} {
    position: absolute;
    top: 6.5rem;
    left: calc(${spacing.xl} + 30%);

    flex-direction: row;
    width: 60%;
    padding: ${spacing.m};
    border-top: 1px solid ${colors.border.grey};
    border-right: 1px solid ${colors.border.grey};
    border-bottom: 1px solid ${colors.border.grey};
    border-radius: 0 5px 5px 0;

    background-color: hsl(0, 0%, 100%);
  }

  @media ${screenSize.DESKTOP} {
    top: 8.5rem;
    left: calc(20% + 4.3rem);

    width: 40%;
  }
`;

const ChildrenGroup = styled.div`
  @media ${screenSize.TABLET} {
    width: 25%;
  }
`;

type SubCategoryProps = {
  numberOfChildren: number;
};

const SubCategory = styled.p<SubCategoryProps>`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    margin: ${spacing.m} 0;

    font-weight: 700 !important;

    &:first-of-type {
      margin-top: 0;
    }
    &::last-of-type {
      margin-bottom: 0;
    }
  }

  @media ${screenSize.TABLET} {
    width: calc(100% / ${props => props.numberOfChildren});

    &:first-of-type {
      margin-top: ${spacing.m};
    }

    color: ${colors.font.normal} !important;
    font-size: ${fontSize.s} !important;
    font-weight: 700 !important;
  }
`;

const SubCategoryName = styled.span`
  @media ${screenSize.MOBILE} {
    display: block;
    width: 100%;
    margin-bottom: ${spacing.m};

    font-size: ${fontSize.m} !important;
    color: ${colors.font.normal} !important;

    &:hover {
      margin-left: 0;
    }
  }

  @media ${screenSize.DESKTOP} {
    padding: ${spacing.s} 0;
    margin-bottom: 0.4rem;

    border-bottom: 0;

    font-size: ${fontSize.m};
    text-align: left;

    &:hover {
      cursor: default;
    }
  }
`;

const LeafCategory = styled(Link)`
  @media ${screenSize.MOBILE} {
    margin: ${spacing.m} 0 ${spacing.m} ${spacing.m};

    font-size: ${fontSize.s} !important;
    font-weight: 400;
    text-decoration: none;
    color: ${colors.font.normal} !important;
  }

  @media ${screenSize.TABLET} {
    width: 25%;
    margin-left: 0;

    font-size: ${fontSize.s};
    font-weight: 400;
  }

  @media ${screenSize.DESKTOP} {
    margin: ${spacing.m} 0;

    transition: 0.2s;
    &:hover {
      color: ${colors.secondaryAccent} !important;
    }
  }
`;

export {
  CategoryGroup,
  Children,
  ChildrenGroup,
  SubCategory,
  SubCategoryName,
  LeafCategory
};
