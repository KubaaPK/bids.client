import styled from 'styled-components';
import {
  screenSize,
  colors,
  paddings,
  spacing
} from '../../../shared/styles/vars';

const List = styled.ul`
  @media ${screenSize.MOBILE} {
    position: relative;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    width: 100%;
    height: 100%;
    padding-left: 0;
    margin-top: ${spacing.l};
    margin-bottom: ${spacing.xl};
    border-top: 1px solid ${colors.border.grey};
    border-bottom: 1px solid ${colors.border.grey};

    background-color: hsl(0, 0%, 100%);

    &::-webkit-scrollbar {
      display: none;
    }

    > p:first-of-type {
      display: none;
    }
  }

  @media ${screenSize.DESKTOP} {
    flex-direction: column;
    left: ${paddings.DESKTOP};

    width: 20vw;
    margin-top: 0;
    padding: ${spacing.xl};
    border-radius: 5px;
    border: 1px solid ${colors.border.grey};

    > p:first-of-type {
      display: block;
    }

    p {
      display: initial;
      margin-bottom: ${spacing.m};
      letter-spacing: 0.025em;
    }
  }
`;

const ListElement = styled.li`
  @media ${screenSize.MOBILE} {
    flex: 0 0 auto;

    width: calc(100% / 3);
    padding: ${spacing.l};

    list-style-type: none;
    text-align: center;
  }

  @media ${screenSize.DESKTOP} {
    padding: ${spacing.s} 0;
    margin-bottom: 0.4rem;

    border-bottom: 0;
    text-align: left;
  }
`;

export { List, ListElement };
