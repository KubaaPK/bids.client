import React, { useState, useEffect } from 'react';
import * as Models from '../../../../../models';
import * as S from './styled';
import Section from './Section';

type Props = {
  onDescriptionChange: (
    description: Models.Offers.NewOffer['description']
  ) => void;
  restoredDesctiption?: Models.Offers.Offer['description'] | undefined;
};

const Description: React.FunctionComponent<Props> = (props: Props) => {
  const { onDescriptionChange, restoredDesctiption } = props;

  const [description, setDescription] = useState<
    Models.Offers.OfferDescription
  >({
    sections: []
  } as any);
  const [restoringDescription, setRestoringDescription] = useState<boolean>(
    true
  );

  useEffect(() => {
    if (restoredDesctiption && restoringDescription) {
      if (restoredDesctiption.sections !== undefined) {
        setDescription({ sections: restoredDesctiption.sections } as any);
        // @ts-ignore
      } else if (restoredDesctiption.includes('null')) {
        setDescription({ sections: [] } as any);
      } else {
        setDescription({ sections: restoredDesctiption } as any);
      }
      setRestoringDescription(false);
    }
    if (
      description.sections &&
      description.sections.length &&
      description.sections.length > 0
    ) {
      onDescriptionChange(description as any);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description.sections, restoredDesctiption, restoringDescription]);

  const addSection = (): void => {
    const newSection: Models.Offers.OfferDescription['sections']['0'] = {
      items: [] as any
    };
    const newDescription = { ...description };
    newDescription.sections.push(newSection);
    setDescription(newDescription);
  };

  const onSectionChange = (index: number) => (section: any) => {
    const existingSections = [...description.sections];
    existingSections[index] = section;
    setDescription({
      sections: existingSections
    } as any);
  };

  return (
    <S.Wrapper>
      <S.Title>Opis</S.Title>
      <S.DescriptionWrapper>
        {description.sections !== null &&
          description.sections.map((section, index) => (
            <Section
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onSectionContentChange={onSectionChange(index)}
              restoredItems={section}
            />
          ))}
        <S.AddSectionButton type="button" onClick={addSection}>
          Dodaj kolejną sekcję
        </S.AddSectionButton>
      </S.DescriptionWrapper>
    </S.Wrapper>
  );
};

export default Description;
