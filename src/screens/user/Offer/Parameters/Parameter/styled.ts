import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, colors } from '../../../../../shared/styles/vars';

const Element = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  margin: 1rem 0;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Name = styled.span`
  @media ${screenSize.MOBILE} {
    width: 15rem;

    font-size: 1.4rem;
    color: ${lighten(0.4, colors.FONT)};
  }
`;

const Value = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: 1.4rem;
    color: ${colors.FONT};
  }
`;

export { Element, Name, Value };
