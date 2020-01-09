import styled from 'styled-components';
import theme from '../../../theme';

const Wrapper = styled.div`
  padding: ${theme.spacing.m};
  margin-top: ${theme.spacing.l};
  border-radius: ${theme.borderRadius};

  background-color: ${theme.palette.grayscale[7]};

  h2 {
    font-size: ${theme.fontSizes.heading6};
    font-weight: 400;
  }
`;

const SubSection = styled.div`
  margin: ${theme.spacing.l} 0;
`;

const LoadedImages = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    h3 {
      width: 100%;

      font-size: ${theme.fontSizes.small};
    }

    img {
      width: calc((100% - 6 * ${theme.spacing.s}) / 3);
      margin: ${theme.spacing.s};
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    img {
      width: 20%;
    }
  }
`;

const Description = styled.div`
  * {
    font-size: 100%;
  }
`;

export { Wrapper, SubSection, LoadedImages, Description };
