import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { screenSize, colors, fontSize, spacing } from '../../../shared/styles';

const StyledLink = styled(Link)`
  @media ${screenSize.MOBILE} {
    color: ${colors.font.lighten};
    font-size: ${fontSize.s};
    text-decoration: none;
  }

  @media ${screenSize.DESKTOP} {
    font-size: ${fontSize.m};
    text-align: left;

    transition: 0.2s;
    &:hover {
      cursor: pointer;
      padding-left: ${spacing.xs};

      color: ${colors.font.normal};
    }
  }
`;

const Paragraph = styled.p`
  @media ${screenSize.MOBILE} {
    margin: 0;

    color: ${colors.font.lighten};
    font-size: ${fontSize.s};
  }

  @media ${screenSize.DESKTOP} {
    font-size: ${fontSize.m};
    text-align: left;

    transition: 0.2s;
    &:hover {
      cursor: pointer;
      padding-left: ${spacing.xs};

      color: ${colors.font.normal};
    }
  }
`;

export { StyledLink, Paragraph };
