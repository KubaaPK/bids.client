import styled from 'styled-components';
import { screenSize, colors, paddings } from '../../../../shared/styles/vars';

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
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    background-color: #ffffff;

    &::-webkit-scrollbar {
      display: none;
    }

    h2 {
      display: none;
    }
  }

  @media ${screenSize.DESKTOP} {
    flex-direction: column;
    left: ${paddings.DESKTOP};

    width: 20vw;
    margin-top: 0;
    padding: 0 2rem 2rem 2rem;
    border-radius: 5px;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);

    h2 {
      display: initial;
    }
  }
`;

const ListElement = styled.li`
  @media ${screenSize.MOBILE} {
    flex: 0 0 auto;

    width: calc(100% / 3);
    padding: 2rem 0;

    list-style-type: none;
    text-align: center;

    color: ${colors.GREYISH};
    font-size: 1.4rem;
    text-decoration: none;
  }

  @media ${screenSize.DESKTOP} {
    padding: 0;
    margin: 1rem 0;

    border-bottom: 0;

    color: ${colors.FONT};
    font-size: 1.4rem;
    text-align: left;

    transition: 0.2s;
    &:hover {
      cursor: pointer;
      color: ${colors.SECONDARY_ACCENT};
    }
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    display: none;
  }

  @media ${screenSize.DESKTOP} {
    display: block;
    margin-bottom: 2rem;

    font-size: 2.2rem;
    font-weight: 500;
  }
`;

export { List, ListElement, Title };
