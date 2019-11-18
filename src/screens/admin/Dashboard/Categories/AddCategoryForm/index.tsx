import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import * as Form from '../../../../../components/Forms';
import * as Typography from '../../../../../components/Typography';
import * as S from './styled';
import * as Models from '../../../../../models';
import Button from '../../../../../components/Button';
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
      <Form.Form handleSubmit={handleSubmit}>
        <Typography.Title text="Dodaj nową kategorię" />
        <Form.Input
          id="name"
          label="Nazwa kategorii"
          type="text"
          placeholder="np. Moda"
          restrictions={{
            required: true
          }}
          handleChange={handleInputChange}
        />
        <Button text="Dodaj kategorię" variant="full" type="submit" />
      </Form.Form>
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
