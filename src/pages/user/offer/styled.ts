import styled from 'styled-components';
import { screenSize, paddings, colors } from '../../../shared/styles/vars';

export const Wrapper = styled.main`
  @media ${screenSize.MOBILE} {
    background-color: ${colors.PRIMARY};
  }
`;

export const ImagesAndInfo = styled.div`
  @media ${screenSize.MOBILE} {
    position: relative;
    top: 3vh;

    padding: 2rem ${paddings.MOBILE};

    background-color: #ffffff;
  }

  @media ${screenSize.TABLET} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding: 2rem 2rem;
  }

  @media ${screenSize.DESKTOP} {
    width: calc(100% - 10rem);
    margin: 0 auto;
  }
`;

export const InfoAndPurchaseWrapper = styled.div`
  @media ${screenSize.TABLET} {
    width: 50%;
    padding: 0 2rem 0 4rem;
  }
`;
