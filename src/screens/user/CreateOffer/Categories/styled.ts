import styled from 'styled-components';
import { screenSize, paddings, colors } from '../../../../shared/styles/vars';

const Outer = styled.div`
  @media ${screenSize.MOBILE} {
  }

  @media ${screenSize.TABLET} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    display: block;
    height: 100%;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    position: fixed;
    z-index: 99;
    top: 11rem;
    left: 0;
    right: 0;

    height: 100%;
    width: 100%;
    padding: 2rem ${paddings.MOBILE};

    background-color: #fff;
  }

  @media ${screenSize.TABLET} {
    top: 0;
    left: 0;
    z-index: 999;

    display: block;
    width: 60%;
    margin: 0 auto;
  }
`;

const Categories = styled.ul`
  @media ${screenSize.MOBILE} {
    padding-left: 0;
    padding: 1rem;
    border: 1px solid #ccc;

    list-style-type: none;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    font-size: 1.8rem;
  }
`;

const Category = styled.li`
  @media ${screenSize.MOBILE} {
    font-size: 1.4rem;
    color: ${colors.SECONDARY_ACCENT};
  }
`;

const Close = styled.p`
  @media ${screenSize.MOBILE} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    padding: 1.5rem;
    margin: 0 auto;
    border-top: 1px solid #ccc;

    font-size: 1.4rem;
    color: ${colors.SECONDARY_ACCENT};
    text-transform: uppercase;
    text-align: center;
  }

  @media ${screenSize.TABLET} {
    width: 60%;
  }
`;

export { Outer, Wrapper, Categories, Title, Category, Close };
