import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.div`
  label {
    display: block;
    width: 100%;
  }
`;
const Select = styled.select`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    height: 4rem;
    width: 100%;
    padding-left: ${theme.spacing.m};
    border: 1px solid ${theme.palette.grayscale[4]};
    border-radius: ${theme.borderRadius};

    background-color: transparent;

    font-family: ${theme.font.primary};
    font-size: ${theme.fontSizes.body};

    * {
      padding: ${theme.spacing.s} 0;

      font-family: ${theme.font.primary};
      font-size: ${theme.fontSizes.body};
    }

    transition: 150ms;
    &:hover {
      cursor: pointer;
      border-color: ${theme.palette.grayscale[2]};
    }
  }
`;

export { Wrapper, Select };
