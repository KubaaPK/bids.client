import styled from 'styled-components';
import { screenSize, paddings } from '../../../../shared/styles/vars';

const Wrapper = styled.div`
  @media ${screenSize.MOBILE} {
    padding: ${paddings.MOBILE};

    background-color: #fff;

    .image-gallery {
      width: 100%;
      height: auto;
    }

    .image-gallery-slide img {
      width: 100%;
      height: auto;
      max-height: 40vh;
      object-fit: contain;
      overflow: hidden;
      object-position: center center;
    }

    .image-gallery-index {
      top: initial;
      bottom: 0rem;

      padding: 1.2rem;

      background-color: rgba(0, 0, 0, 0.6);

      font-size: 2rem;
      color: #fff;
      line-height: 0;
    }

    .image-gallery-left-nav,
    .image-gallery-right-nav {
      font-size: 3rem;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .image-gallery-thumbnails-wrapper {
      display: none;
    }
  }

  @media ${screenSize.TABLET} {
    width: 60%;

    .image-gallery-slide img {
      max-height: 50vh;
    }

    .image-gallery-thumbnails-wrapper {
      display: initial;
    }

    .image-gallery-thumbnail-inner {
      height: 5rem;
      img {
        height: 100%;
      }
    }
  }

  @media ${screenSize.DESKTOP} {
    .image-gallery-slide img {
      max-height: 60vh;
    }

    .image-gallery-thumbnail {
      height: 5rem;
      width: 5rem;
      img {
        height: 100%;
      }
    }

    .image-gallery-thumbnail.active,
    .image-gallery-thumbnail {
      border: 2px solid transparent;
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
