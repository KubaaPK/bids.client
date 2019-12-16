import styled from 'styled-components';
import { screenSize } from '../../../../../shared/styles/vars';

const Parameter = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;

    padding: 2rem 1rem;
    border-bottom: 2px solid hsl(210, 25%, 90%);

    &:last-of-type {
      border: 0;
    }
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
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

export { Parameter, Name, NameText, ExpandIcon };
