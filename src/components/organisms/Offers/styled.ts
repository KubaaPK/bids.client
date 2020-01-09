import styled from 'styled-components';
import { screenSize, colors, spacing } from '../../../shared/styles/vars';

type Props = {
  variant: 'list' | 'grid';
};

const Wrapper = styled.ul<Props>`
  @media ${screenSize.MOBILE} {
    height: 100%;
    width: 100%;
    padding-left: 0;

    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => (props.variant === 'list' ? 'column' : 'row')};

    border-top: 1px solid ${colors.border.grey};
    border-bottom: 1px solid ${colors.border.grey};

    a {
      width: ${props => (props.variant === 'list' ? '100%' : '50%')};

      border-bottom: ${props =>
        props.variant === 'list' ? '2px solid hsl(210, 23%, 95%)' : '0'};

      &:last-of-type {
        border: 0;
      }

      &:nth-of-type(even) {
        margin-left: ${props => (props.variant === 'list' ? 0 : '0%')};
      }
    }
  }

  @media ${screenSize.TABLET} {
    width: calc(100% - 30% - 6rem - ${spacing.xxl});
    margin-left: 2rem;

    border-left: 1px solid ${colors.border.grey};
    border-right: 1px solid ${colors.border.grey};
  }

  @media ${screenSize.DESKTOP} {
    margin-top: 0;
    margin-left: 2rem;
    width: calc(79vw - 12rem);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
