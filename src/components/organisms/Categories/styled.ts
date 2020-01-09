import styled from 'styled-components';
import { screenSize, spacing, colors } from '../../../shared/styles';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
    z-index: 999;
  }

  @media ${screenSize.TABLET} {
    width: 30%;
    margin-left: ${spacing.xxl};
  }

  @media ${screenSize.DESKTOP} {
    width: 20%;
    height: auto;

    margin-left: ${spacing.xxxl};
  }
`;

type Props = {
  show: boolean;
};

const Categories = styled.ul<Props>`
  @media ${screenSize.MOBILE} {
    display: ${props => (props.show ? 'flex' : 'none')};
    flex-wrap: wrap;
    flex-direction: column;

    padding: ${spacing.xl};
    border-top: 1px solid ${colors.border.grey};
    border-bottom: 1px solid ${colors.border.grey};

    background-color: hsl(0, 0%, 100%);
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-direction: column;

    margin-top: 0;
    border-radius: 5px;
    border: 1px solid ${colors.border.grey};

    p {
      width: 100%;
    }
  }

  @media ${screenSize.DESKTOP} {
    display: flex;
    flex-direction: column;

    box-shadow: none;
    border: 1px solid ${colors.border.grey};

    > p:first-of-type {
      margin-bottom: ${spacing.m};
    }
  }
`;

export { Wrapper, Categories };
