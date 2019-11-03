import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import * as F from '../../../../../components/Forms';
import * as Typo from '../../../../../components/Typography';
import * as S from './styled';
import * as Models from '../../../../../models';
import { addCategory } from '../../../../../redux/actions/categories/add-category.actions';
import { State } from '../../../../../redux/reducers';

type ReduxState = {
  addingCategory: boolean;
  categoryAdded: AjaxResponse;
  addingCategoryFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  performAddCategory: (category: Models.Categories.Category) => void;
};

type Props = ReduxState & ReduxDispatch;

const AddCategoryForm: React.FunctionComponent<Props> = (props: Props) => {
  const { performAddCategory } = props;
  const [category, setCategory] = useState<Models.Categories.Category>({
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
      <F.Form onSubmit={handleSubmit}>
        <Typo.Title text="Dodaj nową kategorię" />
        <F.InputGroup>
          <F.Label htmlFor="name" text="Nazwa kategorii" />
          <F.Input
            variant="text"
            id="name"
            required
            onChange={handleInputChange}
            value={category.name}
          />
        </F.InputGroup>
        <F.Button text="Dodaj kategorię" variant="full" type="submit" />
      </F.Form>
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
