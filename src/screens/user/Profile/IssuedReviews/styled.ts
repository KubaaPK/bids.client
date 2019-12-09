import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    margin-top: 2rem;

    h1 {
      width: calc(100% - ${paddings.MOBILE});
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

const Reviews = styled.ul`
  @media ${screenSize.MOBILE} {
    width: 100%;
    padding-left: 0;
  }
`;

export { Wrapper, Reviews };
