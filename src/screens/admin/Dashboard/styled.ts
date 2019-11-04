import styled from 'styled-components';
import { screenSize, colors, paddings } from '../../../shared/styles/vars';

const Wrapper = styled.main`
  @media ${screenSize.MOBILE} {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    padding-bottom: 10rem;

    background-color: ${colors.PRIMARY};
  }

  @media ${screenSize.DESKTOP} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ComponentWrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: relative;
    top: 12rem;

    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    top: 9rem;
  }

  @media ${screenSize.DESKTOP} {
    top: 8.5rem;
    right: ${paddings.DESKTOP};

    width: calc(79vw - 12rem);
    height: 100%;
  }
`;

export { Wrapper, ComponentWrapper };
