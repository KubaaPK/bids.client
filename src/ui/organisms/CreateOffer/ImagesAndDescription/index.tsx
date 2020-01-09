/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as Models from '../../../../models';
import { Heading, Button } from '../../../atoms';
import { Field } from '../../../molecules';
import * as S from './styled';

type Props = {
  currentlySetImages: string[];
  onUpdate: (updated: Partial<Models.Offers.NewOffer>) => void;
  currenlySetDescription: string;
};

export default function ImagesAndDescription(props: Props): React.ReactElement {
  const { currentlySetImages = [], onUpdate, currenlySetDescription } = props;
  const [imageUrl, setImageUrl] = React.useState<string>('');

  function handleImageUpload(): void {
    const isImageUrl = (url: string): boolean =>
      /(https?:\/\/.*\.(?:png|jpg))/.test(url);

    if (isImageUrl(imageUrl)) {
      console.log('elo');

      currentlySetImages.push(imageUrl);
      onUpdate({
        images: currentlySetImages
      });
      setImageUrl('');
    }
    setImageUrl('');
  }

  function handleDescriptionUpdate(ev: string): void {
    onUpdate({
      description: {
        sections: [
          {
            items: [
              {
                type: 'TEXT',
                content: ev
              }
            ]
          }
        ]
      }
    });
  }

  return (
    <S.Wrapper>
      <Heading level={2} text="Zdjęcia i opis" />
      <S.SubSection>
        <Field
          label="Adres URL zdjęcia"
          input={{
            id: 'url',
            type: 'text',
            onChange: ev => setImageUrl(ev.currentTarget.value)
          }}
        />
        <S.LoadedImages>
          <Button
            kind="bordered"
            type="button"
            variant="default"
            onClick={handleImageUpload}
          >
            Wgraj zdjęcie
          </Button>
          <Heading
            level={3}
            text={`Aktualnie wgrane zdjęcia (${currentlySetImages.length ||
              0})`}
          />
          {currentlySetImages.map((image, index: number) => (
            <img src={image} key={index} />
          ))}
        </S.LoadedImages>
      </S.SubSection>
      <S.SubSection>
        <S.Description style={{ fontSize: '1.6rem' }}>
          <ReactQuill
            onChange={handleDescriptionUpdate}
            defaultValue={currenlySetDescription}
          />
        </S.Description>
      </S.SubSection>
    </S.Wrapper>
  );
}
