import styled from 'styled-components';
import { List, Grid } from 'react-feather';
import { lighten } from 'polished';
import { screenSize, paddings } from '../../../shared/styles';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    width: 100%;
    padding: 1.5rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.DESKTOP} {
    position: relative;

    width: calc(79vw - 14rem);
    height: 100%;
    margin-bottom: 0;
    padding-bottom: 4rem;
  }
`;

const IconList = styled(List)`
  @media ${screenSize.MOBILE} {
    margin-right: 2rem;

    color: ${lighten(0.4, '#000')};
  }

  @media ${screenSize.DESKTOP} {
    margin-right: 4rem;

    transition: 0.2s;
    &:hover {
      color: ${lighten(0.1, '#000')};

      cursor: pointer;
    }
  }
`;

const IconGrid = styled(Grid)`
  @media ${screenSize.MOBILE} {
    margin-right: 2rem;

    color: ${lighten(0.4, '#000')};
  }

  @media ${screenSize.DESKTOP} {
    margin-right: 4rem;

    transition: 0.2s;
    &:hover {
      color: ${lighten(0.1, '#000')};

      cursor: pointer;
    }
  }
`;

export { Wrapper, IconGrid, IconList };
