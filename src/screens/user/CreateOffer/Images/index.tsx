import React, { useState, useEffect } from 'react';
import * as S from './styled';
import * as Form from '../../../../components/Forms';
import Button from '../../../../components/Button';

type Props = {
  handleAddedImages: (images: string[]) => void;
  restoredImages?: string[];
};

const Images: React.FunctionComponent<Props> = (props: Props) => {
  const { handleAddedImages, restoredImages } = props;

  const [images, setImages] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    if (restoredImages) {
      setImages(restoredImages);
    }
  }, [restoredImages]);

  const addImage = (): void => {
    images.push(imageUrl!);
    setImageUrl('');
    handleAddedImages(images);
  };

  const removeImage = (url: string): void => {
    const tmpArr: string[] = [...images];
    const filtered: string[] = tmpArr.filter(el => el !== url);
    setImages(filtered);
  };

  return (
    <S.Wrapper>
      <Form.Input
        type="text"
        id="imageUrl"
        label="Adres URL zdjęcia"
        handleChange={ev => setImageUrl(ev.currentTarget.value)}
      />
      <Button
        type="button"
        variant="bordered"
        text="Dodaj zdjęcie"
        handleClick={addImage}
      />
      <S.Images>
        <S.Text>Dodane zdjęcia</S.Text>
        <S.ImagesWrapper>
          {images.map((image, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <S.Image key={index}>
              <S.Close onClick={() => removeImage(image)} />
              <img src={image} alt="Zdjęcie sprzedawanego przedmiotu" />
            </S.Image>
          ))}
        </S.ImagesWrapper>
      </S.Images>
      {images.length < 1 && (
        <S.ErrorMessage>Należy dodać co najmniej jedno zdjęcie.</S.ErrorMessage>
      )}
    </S.Wrapper>
  );
};

export default Images;
