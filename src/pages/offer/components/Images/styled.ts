/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { screenSize } from '../../../../shared/styles/vars';

export const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    .image-gallery-slides {
      height: 50vh;
      width: 100%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .image-gallery-thumbnails-container {
      .image-gallery-thumbnail-inner {
        img {
          height: 50px;
          width: 70px;
        }
      }
    }
  }

  @media ${screenSize.TABLET} {
    width: 50%;
  }

  @media ${screenSize.DESKTOP} {
    padding: 4rem;
    .image-gallery-slides {
      .image-gallery-image {
        width: 40rem;
        height: 40rem;
      }
    }
  }
`;
