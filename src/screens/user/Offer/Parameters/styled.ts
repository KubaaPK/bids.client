import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    width: 100%;
    margin-top: 2rem;
    padding: 1rem ${paddings.MOBILE};

    background-color: #fff;
  }
`;

const List = styled.ul`
  @media ${screenSize.MOBILE} {
    padding-left: 0;

    list-style-type: none;
  }
`;

export { Wrapper, List };
