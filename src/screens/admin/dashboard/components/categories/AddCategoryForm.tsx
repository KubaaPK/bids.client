import React, { useState, useEffect } from 'react';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { connect } from 'react-redux';
import {
  NewCategory,
  addCategory
} from '../../../../../redux/actions/categories/add-category.actions';
import { State } from '../../../../../redux/reducers';
import Notification from '../../../../../components/Notification';

type NewCategoryData = {
  [x: string]: string;
};

type Props = {
  categoryIsAdding: boolean;
  categoryAdded: AjaxResponse | undefined;
  addingCategoryFailed: AjaxError | undefined;
};

type Dispatch = {
  addCategory(newCategory: NewCategory): void;
};

type CompProps = Props & Dispatch;

const AddCategoryForm: React.FunctionComponent<CompProps> = (
  props: CompProps
) => {
  const { addCategory, categoryIsAdding, categoryAdded } = props;

  const initialNewCategoryData: NewCategoryData = {
    name: ''
  };

  const [newCategoryData, setNewCategoryData] = useState(
    initialNewCategoryData
  );
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(categoryIsAdding);
    if (categoryAdded) {
    }
  }, [categoryIsAdding, categoryAdded]);

  const setNewCategory = (inputValue: any) => {
    setNewCategoryData((prevState: NewCategoryData) => ({
      ...prevState,
      [inputValue.id]: inputValue.value
    }));
  };

  const handleFormSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    addCategory({
      name: newCategoryData.name
    });
  };

  const handleNotificationClose = (): void => {};

  return (
    <>
      <form onSubmit={handleFormSubmit}></form>
    </>
  );
};

const mapStateToProps = (state: State): Props => {
  return {
    categoryIsAdding: state.categories.addCategory.categoryIsAdding,
    categoryAdded: state.categories.addCategory.categoryAdded,
    addingCategoryFailed: state.categories.addCategory.addingCategoryFailed
  };
};

const mapDispatchToProps: Dispatch = {
  addCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategoryForm);
