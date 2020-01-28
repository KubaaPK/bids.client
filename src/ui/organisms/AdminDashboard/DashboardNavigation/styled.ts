import styled from 'styled-components';
import theme from '../../../theme';

const Wrapper = styled.div`
  height: 100%;
  padding: ${theme.spacing.m};

  background-color: hsl(0, 0%, 100%);
`;

const Element = styled.li`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    margin-bottom: ${theme.spacing.l};

    list-style-type: none;

    font-size: ${theme.fontSizes.body};
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    margin-bottom: 0;
  }
`;

export { Wrapper, Element };