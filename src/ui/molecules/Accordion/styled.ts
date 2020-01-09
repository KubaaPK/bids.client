import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div``;

const Title = styled.p`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    width: 100%;
    padding: ${theme.spacing.s} ${theme.spacing.m};

    span {
      margin-left: auto;

      svg {
        color: ${theme.palette.primary[0]};
      }
    }

    button {
      padding-left: 0;
    }
  }
`;

const Content = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    padding: ${theme.spacing.m};
  }
`;

export { Wrapper, Title, Content };
