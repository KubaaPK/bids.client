import React from 'react';
import { Button, Heading } from '../../atoms';
import { Field } from '../../molecules';
import { Modal, PickCategory } from '..';
import * as S from './styled';
import * as Models from '../../../models';
import { API_URL } from '../../../consts';

type Props = {
  categories: Models.Categories.Category[];
};

export default function CreateDraft(props: Props): React.ReactElement {
  const { categories } = props;
  const [showCategoryPickModal, setShowCategoryPickModal] = React.useState<
    boolean
  >(false);
  const [draftOffer, setDraftOffer] = React.useState<{
    name: Models.Offers.NewOffer['name'];
  }>({
    name: ''
  });

  function onNameChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setDraftOffer({
      ...draftOffer,
      name: ev.currentTarget.value
    });
  }

  function pickCategory(
    parent: any,
    category: Models.Categories.Category['children'][0]['children'][0]
  ): void {
    fetch(`${API_URL}/sale/offers`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      }),
      body: JSON.stringify({
        name: draftOffer.name,
        category,
        stock: {
          unit: 'UNIT'
        }
      })
    });
  }

  return (
    <div className="step-progress">
      <S.Wrapper>
        <Heading level={1} text="Dodaj nową ofertę" />
        <Field
          label="Tytuł oferty"
          input={{
            id: 'name',
            type: 'text',
            restrictions: { required: true },
            onChange: onNameChange
          }}
        />
        {draftOffer.name && (
          <Button
            kind="bordered"
            type="button"
            variant="default"
            onClick={() => setShowCategoryPickModal(!showCategoryPickModal)}
          >
            Wybierz kategorię
          </Button>
        )}
        {showCategoryPickModal && (
          <Modal darken close={() => setShowCategoryPickModal(false)}>
            <PickCategory categories={categories} pickCategory={pickCategory} />
          </Modal>
        )}
      </S.Wrapper>
    </div>
  );
}
