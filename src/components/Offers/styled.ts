import styled from 'styled-components';
import { screenSize } from '../../shared/styles/vars';

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

    a {
      width: ${props => (props.variant === 'list' ? '100%' : '50%')};

      border-bottom: ${props =>
        props.variant === 'list' ? '1px solid #cecece' : '0'};

      &:last-of-type {
        border: 0;
      }

      &:nth-of-type(even) {
        margin-left: ${props => (props.variant === 'list' ? 0 : '0%')};
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    margin-top: 0;
    margin-left: 10rem;
    width: calc(79vw - 14rem);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
