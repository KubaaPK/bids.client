import styled from 'styled-components';
import { Grid } from 'react-feather';
import { screenSize, colors, spacing, fontSize } from '../../../shared/styles';

const ShowCategoryButton = styled.button`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    margin: ${spacing.xl};
    padding: 0;
    border: 0;

    background-color: transparent;

    * {
      color: ${colors.font.normal};
    }
  }

  @media ${screenSize.TABLET} {
    display: none;
  }
`;

const Icon = styled(Grid)`
  @media ${screenSize.MOBILE} {
    margin-right: ${spacing.m};
  }
`;

const Text = styled.span`
  @media ${screenSize.MOBILE} {
    font-size: ${fontSize.s};
  }
`;

export { ShowCategoryButton, Icon, Text };
