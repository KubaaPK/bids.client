import styled from 'styled-components';
import { screenSize, colors, spacing } from '../../../shared/styles';

const ListElement = styled.li`
  @media ${screenSize.MOBILE} {
    list-style-type: none;

    border-top: 1px solid ${colors.border.grey};

    > p {
      margin-left: ${spacing.s};
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { ListElement };
