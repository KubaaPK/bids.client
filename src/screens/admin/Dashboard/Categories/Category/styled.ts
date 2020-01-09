import styled from 'styled-components';
import {
  screenSize,
  spacing,
  colors,
  boxShadows,
  fontSize
} from '../../../../../shared/styles/vars';

const Category = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;

    padding: ${spacing.l} 0;
    border-bottom: 1px solid ${colors.border.grey} !important;

    &:last-of-type {
      border: 0;
    }
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      box-shadow: ${boxShadows.level0};
    }
  }
`;

const Name = styled.p`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const NameText = styled.span`
  @media ${screenSize.MOBILE} {
    color: ${colors.font.normal};
    font-size: ${fontSize.m};
  }
`;

const ExpandIcon = styled.span`
  margin-right: ${spacing.s};
`;

export { Category, Name, NameText, ExpandIcon };
