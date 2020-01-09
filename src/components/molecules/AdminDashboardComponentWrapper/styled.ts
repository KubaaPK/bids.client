import styled from 'styled-components';
import { screenSize, spacing, colors } from '../../../shared/styles';

const ComponentWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    padding: ${spacing.xl} ${spacing.xl};
    border-top: 1px solid ${colors.border.grey};
    border-bottom: 1px solid ${colors.border.grey};

    background-color: hsl(0, 0%, 100%);
  }

  @media ${screenSize.DESKTOP} {
    width: calc(79vw - 12rem);
    height: 100%;
    margin-top: 0;
    margin-left: 8rem;
    border-radius: 5px;
    border: 1px solid ${colors.border.grey};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { ComponentWrapper };
