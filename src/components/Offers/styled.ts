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
      width: ${props => (props.variant === 'list' ? '100%' : '49%')};

      &:nth-of-type(even) {
        margin-left: ${props => (props.variant === 'list' ? 0 : '2%')};
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    margin-left: 10rem;
    width: calc(79vw - 14rem);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
