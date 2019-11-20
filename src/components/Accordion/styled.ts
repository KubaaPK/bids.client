import styled from 'styled-components';
import { screenSize, paddings } from '../../shared/styles/vars';

const Accordion = styled.div`
  @media ${screenSize.MOBILE} {
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }
`;

const Title = styled.p`
  @media ${screenSize.MOBILE} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0;
    padding: 1rem 0;

    font-size: 1.4rem;
    font-weight: 500;

    svg {
      text-align: center;
    }
  }

  @media ${screenSize.DESKTOP} {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Content = styled.div``;

export { Accordion, Title, Content };
