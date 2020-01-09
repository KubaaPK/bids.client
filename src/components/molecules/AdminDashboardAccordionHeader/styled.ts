import styled from 'styled-components';
import { screenSize, boxShadows, spacing } from '../../../shared/styles';

const AdminDashboardAccordionHeader = styled.span`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    padding: ${spacing.m};

    svg {
      justify-self: flex-end;

      margin-left: auto;
    }
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover,
    &:focus {
      cursor: pointer;
      box-shadow: ${boxShadows.level0};
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { AdminDashboardAccordionHeader };
