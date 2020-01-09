import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import * as S from './styled';
import * as Models from '../../../../../models';
import { addCategory } from '../../../../../redux/actions/categories/add-category.actions';
import { State } from '../../../../../redux/reducers';
import { SectionTitle, Button } from '../../../../../components/atoms';
import { InputGroup } from '../../../../../components/molecules';

type ReduxState = {
  addingCategory: boolean;
  categoryAdded: AjaxResponse;
  addingCategoryFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  performAddCategory: (category: Models.Categories.NewCategory) => void;
};

type OwnProps = {
  closeForm: () => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const AddCategoryForm: React.FunctionComponent<Props> = (props: Props) => {
  const { performAddCategory, closeForm } = props;
  const [category, setCategory] = useState<Models.Categories.NewCategory>({
    name: ''
  });

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    performAddCategory(category!);
    setCategory({
      name: ''
    });
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setCategory({
      name: ev.currentTarget.value
    });
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <SectionTitle
          text="Dodaj kategorię"
          font={{
            size: 'm',
            uppercase: true,
            variant: 'lighten',
            weight: 500
          }}
        />
        <InputGroup
          label={{
            htmlFor: 'name',
            text: 'Nazwa kategorii',
            font: {
              size: 's'
            }
          }}
          input={{
            id: 'name',
            restrictions: { required: true },
            type: 'text',
            handleChange: handleInputChange,
            defaultValue: category.name
          }}
        />
        <Button text="Dodaj kategorię" variant="full" type="submit" />
        <S.CloseBottom type="button" onClick={closeForm}>
          Zamknij
        </S.CloseBottom>
      </S.Form>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    addingCategory: state.categories.addCategory.addingCategory,
    addingCategoryFailed: state.categories.addCategory.addingCategoryFailed,
    categoryAdded: state.categories.addCategory.categoryAdded!
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performAddCategory: addCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategoryForm);
