import React from 'react';
import ImageGallery from 'react-image-gallery';
import * as S from './styled';
import * as Models from '../../../../models';

type Props = {
  images: Models.Offers.SingleOffer['images'];
};

const Images: React.FunctionComponent<Props> = (props: Props) => {
  const { images } = props;

  const galleryImages = (): {
    original: string;
    thumbnail: string;
  }[] => {
    return images.map(image => {
      return {
        original: image.url,
        thumbnail: image.url
      };
    });
  };

  return (
    <S.Wrapper>
      <ImageGallery
        items={galleryImages()}
        infinite={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets
        showIndex
      />
    </S.Wrapper>
  );
};

export default Images;
