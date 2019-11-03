import styled from 'styled-components';
import { screenSize, colors } from '../../../../../shared/styles/vars';

const Category = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;

    padding: 1rem 0;

    &:nth-child(odd) {
      border-bottom: 1px solid #ccc;
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
    font-size: 1.2rem;
  }
`;

const ExpandIcon = styled.span``;

export { Category, Name, NameText, ExpandIcon };
