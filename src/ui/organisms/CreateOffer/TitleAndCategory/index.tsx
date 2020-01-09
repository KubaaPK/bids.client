import React from 'react';
import { Modal, PickCategory } from '../..';
import * as Models from '../../../../models';
import { Button, Heading } from '../../../atoms';
import { Breadcrumb, Field } from '../../../molecules';
import * as S from './styled';

type Props = {
  name: string;
  categoryBreadcrumb: string[];
  categories: Models.Categories.Category[];
  onUpdate: (updated: Partial<Models.Offers.NewOffer>) => void;
  buildCategoriesBreadcrumb: (
    parent: Models.Categories.Category,
    category: Models.Categories.Category['children'][0]['children'][0]
  ) => void;
};

export default function CreateOfferTitleAndCategory(
  props: Props
): React.ReactElement {
  const {
    name,
    categoryBreadcrumb,
    categories,
    onUpdate,
    buildCategoriesBreadcrumb
  } = props;
  const [showPickCategory, setShowPickCategory] = React.useState<boolean>(
    false
  );

  function handleTitleChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    onUpdate({
      name: ev.currentTarget.value
    });
  }

  function handleCategoryChange(
    parent: Models.Categories.Category,
    category: Models.Categories.Category['children'][0]['children'][0]
  ): void {
    onUpdate({
      category
    });
    buildCategoriesBreadcrumb(parent, category);
    setShowPickCategory(false);
  }

  return (
    <S.Wrapper>
      <Heading level={1} text="Kontynuuj dodawanie oferty" />
      {showPickCategory && (
        <Modal darken close={() => setShowPickCategory(false)}>
          <PickCategory
            categories={categories}
            pickCategory={handleCategoryChange}
          />
        </Modal>
      )}
      <Field
        label="Tytuł oferty"
        input={{
          id: 'name',
          type: 'text',
          defaultValue: name,
          restrictions: {
            required: true
          },
          onChange: handleTitleChange
        }}
      />
      <Breadcrumb crumbs={categoryBreadcrumb} />
      <Button
        kind="bordered"
        type="button"
        variant="default"
        onClick={() => setShowPickCategory(true)}
      >
        Zmień kategorię
      </Button>
    </S.Wrapper>
  );
}
