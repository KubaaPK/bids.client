import styled from 'styled-components';
import theme from '../../theme';

type Props = {
  opened: boolean;
  show: boolean;
};

const Wrapper = styled.div`
  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    > span:first-of-type {
      display: none;
    }
  }
`;

const Categories = styled.div<Props>`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    position: relative;

    display: ${props => (props.show ? 'block' : 'none')};

    padding: 0 ${theme.spacing.m};

    background-color: ${props =>
      props.opened ? 'hsl(0, 0%, 100%)' : 'transparent'};

    button {
      padding: 0;

      color: ${theme.palette.grayscale[1]};

      span {
        svg {
          transition: 200ms;

          stroke: ${theme.palette.grayscale[1]};
        }
      }

      &:hover,
      &:focus {
        span {
          svg {
            stroke: ${theme.palette.primary[1]};
          }
        }
      }
    }

    ul {
      margin-top: 0;
    }
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    display: block;
    width: 20rem;
    border-radius: ${theme.borderRadius};

    background-color: hsl(0, 0%, 100%);
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    padding: ${theme.spacing.m} ${theme.spacing.l} !important;
  }
`;

const FirstLevelCategory = styled.li`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    margin-bottom: ${theme.spacing.m};

    list-style-type: none;

    font-size: ${theme.fontSizes.body};
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    margin-bottom: 0;
  }
`;

const SecondLevelCategories = styled.ul`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    padding-left: 0;
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    position: absolute;
    top: -1px;
    left: 20rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 70vw;

    background-color: ${theme.palette.grayscale[7]};
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 40vw;
    top: 0;
  }
`;

const SecondLevelCategory = styled.li`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    padding-left: ${theme.spacing.m};
    margin-bottom: ${theme.spacing.s};

    list-style-type: none;
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    width: 25%;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    width: 25%;
  }
`;

const ThirdLevelCategories = styled.ul`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    padding-left: ${theme.spacing.m};
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    padding-left: 0;
  }
`;

const ThirdLevelCategory = styled.li`
  @media only screen and (min-width: ${theme.screenSizes.mobile}) {
    margin: ${theme.spacing.l} 0;

    &:first-of-type {
      margin-top: ${theme.spacing.m};
    }

    &:last-of-type {
      margin-bottom: ${theme.spacing.m};
    }

    a {
      color: ${theme.palette.grayscale[0]} !important;
      font-weight: 500;
    }
    list-style-type: none;
  }

  @media only screen and (min-width: ${theme.screenSizes.tablet}) {
    margin: ${theme.spacing.m} 0;
    a {
      color: ${theme.palette.grayscale[0]} !important;
      font-weight: 500;
      font-size: ${theme.fontSizes.body};
    }
    list-style-type: none;
  }

  @media only screen and (min-width: ${theme.screenSizes.desktop}) {
    a {
      transition: 200ms;
      font-size: ${theme.fontSizes.small};
      &:hover {
        color: ${theme.palette.secondary[0]} !important;
      }
    }
  }
`;

export {
  Wrapper,
  Categories,
  FirstLevelCategory,
  SecondLevelCategories,
  SecondLevelCategory,
  ThirdLevelCategories,
  ThirdLevelCategory
};
