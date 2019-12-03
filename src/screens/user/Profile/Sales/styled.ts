import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;

    h1 {
      width: 100%;
      margin-left: ${paddings.MOBILE};
    }
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    width: 65%;
    height: 100%;
    padding: 0 ${paddings.TABLET} 1rem ${paddings.TABLET};
    margin-top: 0;
    margin-left: 5%;

    h1 {
      margin-left: 0;
      margin-top: 0;
    }
  }
`;

const Sales = styled.ul`
  @media ${screenSize.MOBILE} {
    padding-left: 0;
  }
`;

export { Wrapper, Sales };
