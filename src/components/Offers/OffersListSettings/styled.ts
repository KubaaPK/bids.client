import styled from 'styled-components';
import { List, Grid } from 'react-feather';
import { lighten } from 'polished';
import { screenSize, paddings } from '../../../shared/styles';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.DESKTOP} {
    width: calc(79vw - 14rem);
    height: 100%;
    margin-bottom: 2rem;
  }
`;

const IconList = styled(List)`
  @media ${screenSize.MOBILE} {
    color: ${lighten(0.4, '#000')};
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      color: ${lighten(0.1, '#000')};

      cursor: pointer;
    }
  }
`;

const IconGrid = styled(Grid)`
  @media ${screenSize.MOBILE} {
    color: ${lighten(0.4, '#000')};
  }

  @media ${screenSize.DESKTOP} {
    transition: 0.2s;
    &:hover {
      color: ${lighten(0.1, '#000')};

      cursor: pointer;
    }
  }
`;

export { Wrapper, IconGrid, IconList };
