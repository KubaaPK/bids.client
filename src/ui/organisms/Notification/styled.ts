import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  type: 'success' | 'alert' | 'error' | 'info';
};

const borderColor = (type: Props['type']): string => {
  switch (type) {
    case 'success':
      return theme.palette.success[0];
    case 'alert':
      return theme.palette.alert[0];
    case 'error':
      return theme.palette.danger[0];
    case 'info':
      return theme.palette.info[0];
    default:
      return theme.palette.info[0];
  }
};

const Wrapper = styled.div<Props>`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    position: fixed;
    top: 6rem;
    right: ${theme.spacing.m};
    z-index: 1;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    max-width: 30rem;
    padding: ${theme.spacing.m};
    border-left: 5px solid ${props => borderColor(props.type)};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.shadows.medium};

    background-color: ${theme.palette.grayscale[7]};

    span:nth-of-type(1) {
      position: absolute;
      top: 1rem;
      left: 1rem;
      svg {
        color: hsl(0, 0%, 100%);
        fill: ${props => borderColor(props.type)};
      }
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    right: ${theme.spacing.l};
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    right: ${theme.spacing.xl};
  }
`;

const Header = styled.p`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    width: 100%;
    margin: 0;
    margin-top: ${theme.spacing.s};
    margin-left: 3rem;

    color: ${theme.palette.grayscale[0]};
    font-family: ${theme.font.primary};
    font-size: ${theme.fontSizes.body};
    font-weight: 500;
  }
`;

const Text = styled.p`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    width: 100%;

    margin: 0;
    margin-top: ${theme.spacing.xs};
    margin-left: 3rem;

    color: ${theme.palette.grayscale[2]};
    font-family: ${theme.font.primary};
    font-size: ${theme.fontSizes.small};
    font-weight: 400;
  }
`;

const Close = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 4rem;
  svg {
    transition: 200ms;

    color: ${theme.palette.grayscale[3]} !important;
  }

  &:hover {
    cursor: pointer;

    svg {
      color: ${theme.palette.grayscale[1]} !important;
    }
  }
`;

export { Wrapper, Header, Text, Close };
