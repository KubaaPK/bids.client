import styled from 'styled-components';
import { lighten } from 'polished';
import {
  screenSize,
  colors,
  paddings,
  boxShadows
} from '../../../../shared/styles/vars';

const Outline = styled.div`
  @media ${screenSize.DESKTOP} {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;

    height: 100vh;
    width: 100vw;

    background-color: hsla(0, 0%, 0%, 0.5);
  }
`;

const Wrapper = styled.div`
  position: relative;

  height: 100%;
`;

const List = styled.ul`
  @media ${screenSize.MOBILE} {
    padding-left: 0;

    li:first-of-type {
      border-top: 1px solid ${colors.border.grey};

      &:first-of-type {
        border-top: 0;
      }
    }
  }
`;

const ShowAddParameterFormButton = styled.button`
  @media ${screenSize.MOBILE} {
    position: fixed;
    bottom: 2rem;
    right: ${paddings.MOBILE};
    z-index: 9;

    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 5px;
    box-shadow: ${boxShadows.level1};

    background-color: ${colors.ACCENT};

    svg {
      color: #fff;
    }
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      cursor: pointer;

      background-color: ${lighten(0.1, colors.ACCENT)};
    }
  }
`;

export { Outline, Wrapper, List, ShowAddParameterFormButton };
