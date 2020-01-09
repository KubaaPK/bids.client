import styled from 'styled-components';
import { screenSize, spacing, fontSize, colors } from '../../../shared/styles';

const Details = styled.div`
  @media ${screenSize.MOBILE} {
    padding: 0 ${spacing.m};

    p:first-of-type {
      margin-bottom: ${spacing.l};
    }
  }
`;

const Parameters = styled.ul`
  @media ${screenSize.MOBILE} {
    padding-left: 0;

    p:first-of-type {
      margin-bottom: ${spacing.xl} !important;

      text-transform: uppercase;
      font-size: ${fontSize.s};
    }

    li {
      margin: ${spacing.m} 0;
      padding-left: ${spacing.s};
      list-style-type: none;

      &:last-of-type {
        margin-bottom: ${spacing.xl};
      }
      p {
        color: ${colors.font.normal} !important;
        text-transform: none !important;
        font-size: ${fontSize.m} !important;
      }
    }
  }
`;

const NoParametersAssignmented = styled.p`
  @media ${screenSize.MOBILE} {
    margin-top: 0;

    font-size: ${fontSize.s};
    color: ${colors.font.lighten};
  }
`;

export { Details, Parameters, NoParametersAssignmented };
