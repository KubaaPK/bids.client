import styled from 'styled-components';
import { lighten } from 'polished';
import { screenSize, colors, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  position: relative;

  height: 100%;
`;

const List = styled.ul`
  @media ${screenSize.MOBILE} {
    padding-left: 0;
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

export { Wrapper, List, ShowAddParameterFormButton };
