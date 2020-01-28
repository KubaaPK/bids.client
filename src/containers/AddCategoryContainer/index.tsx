import React from 'react';
import { connect } from 'react-redux';
import * as Models from '../../models';
import { addCategory } from '../../redux/actions/categories/add-category.actions';
import { AddCategoryForm } from '../../ui/organisms';

type OwnProps = {
  closeForm: () => void;
};

type ReduxDispatch = {
  performAddCategory: (category: Models.Categories.NewCategory) => void;
};

type Props = OwnProps & ReduxDispatch;

function AddCategoryContainer(props: Props) {
  const { performAddCategory, closeForm } = props;

  // eslint-disable-next-line no-shadow
  function addCategory(category: Models.Categories.NewCategory): void {
    performAddCategory(category);
    closeForm();
  }

  return <AddCategoryForm addCategory={addCategory} closeForm={closeForm} />;
}

const mapDispatchToProps: ReduxDispatch = {
  performAddCategory: addCategory
};

export default connect(
  null,
  mapDispatchToProps
)(AddCategoryContainer);
