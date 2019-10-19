import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Images as ImageModel } from '../../../../models/offer';
import { Wrapper } from './styled';

type Props = {
  images: ImageModel[];
};

const Images: React.FunctionComponent<Props> = (props: Props) => {
  const { images } = props;
  const imagesToGallery: any[] = images.map(image => {
    return { original: image.url, thumbnail: image.url };
  });
  return (
    <Wrapper>
      <ImageGallery
        items={imagesToGallery}
        infinite={false}
        showBullets={false}
        autoPlay={false}
        showPlayButton={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
      />
    </Wrapper>
  );
};

export default Images;
