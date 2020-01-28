import React from 'react';
import { Field } from '../../molecules';
import { Button } from '../../atoms';
import * as S from './styled';
import * as Models from '../../../models';

type Props = {
  addCategory: (category: Models.Categories.NewCategory) => void;
  closeForm(): void;
};

export default function AddCategoryForm(props: Props): React.ReactElement {
  const { addCategory, closeForm } = props;
  const [category, setCategory] = React.useState<Models.Categories.NewCategory>(
    {
      name: ''
    }
  );

  function onSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();
    addCategory(category);
  }

  function handleCategoryNameChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setCategory({
      ...category,
      name: ev.currentTarget.value
    });
  }

  return (
    <S.Outline>
      <S.Form onSubmit={onSubmit}>
        <Field
          label="Nazwa kategorii"
          input={{
            id: 'name',
            type: 'text',
            restrictions: {
              required: true
            },
            onChange: handleCategoryNameChange
          }}
        />
        <Button type="submit" kind="full" variant="default">
          Dodaj kategorię
        </Button>
        <Button type="button" kind="blank" variant="default" onClick={() => closeForm()}>
          Zamknij
        </Button>
      </S.Form>
    </S.Outline>
  );
}
