import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  @media screen and (min-width: ${theme.screenSizes.mobile}) {
    z-index: 2;

    width: 17rem;
    padding: ${theme.spacing.xs} ${theme.spacing.s};
    border: 1px solid ${theme.palette.grayscale[5]};
    border-radius: ${theme.borderRadius};

    background-color: ${theme.palette.grayscale[7]};
  }
`;

const Element = styled.li`
  margin: ${theme.spacing.m};

  list-style-type: none;
`;

const SignOut = styled.span`
  font-size: ${theme.fontSizes.body};
  color: ${theme.palette.grayscale[2]};

  transition: 200ms;
  &:hover {
    cursor: pointer;

    color: ${theme.palette.grayscale[0]};
  }
`;

export { Wrapper, Element, SignOut };
