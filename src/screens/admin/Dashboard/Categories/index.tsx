import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Plus } from 'react-feather';
import { AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../../models';
import * as Typo from '../../../../components/Typography';
import * as S from './styled';
import { State } from '../../../../redux/reducers';
import { fetchCategories } from '../../../../redux/actions/categories/fetch-categories.actions';
import Category from './Category';
import AddCategoryForm from './AddCategoryForm';
import useOutsideClick from '../../../../shared/hooks/use-outside-click';

type ReduxState = {
  categories: Models.Categories.Category[];
  categoryAdded: undefined | AjaxResponse;
  categoryDeleted: undefined | AjaxResponse;
};

type ReduxDispatch = {
  peformFetchCategories: () => void;
};

type Props = ReduxState & ReduxDispatch;

const Categories: React.FunctionComponent<Props> = (props: Props) => {
  const {
    categories,
    peformFetchCategories,
    categoryAdded,
    categoryDeleted
  } = props;
  const [showAddCategoryForm, setShowAddCategoryForm] = useState<boolean>(
    false
  );

  const addCategoryFormRef = useRef<HTMLSpanElement>(null);

  useOutsideClick(addCategoryFormRef, () => {
    if (showAddCategoryForm) setShowAddCategoryForm(false);
  });

  useEffect(() => {
    if (categories.length === 0) {
      peformFetchCategories();
    }
    if (categoryAdded || categoryDeleted) {
      peformFetchCategories();
    }
  }, [
    peformFetchCategories,
    categoryAdded,
    categories.length,
    categoryDeleted
  ]);

  return (
    <S.Wrapper>
      {showAddCategoryForm && (
        <S.Outline>
          <span ref={addCategoryFormRef}>
            <AddCategoryForm closeForm={() => setShowAddCategoryForm(false)} />
          </span>
        </S.Outline>
      )}

      <Typo.Title text="Zarządzanie kategoriami" />
      <S.List>
        {categories.map(category => (
          <Category category={category} key={category.id} />
        ))}
      </S.List>
      <S.ShowAddCategoryFormButton
        onClick={() => setShowAddCategoryForm(!showAddCategoryForm)}
      >
        <Plus />
      </S.ShowAddCategoryFormButton>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    categories: state.categories.fetchCategories.categories,
    categoryAdded: state.categories.addCategory.categoryAdded,
    categoryDeleted: state.categories.deleteCategory.categoryDeleted
  };
};

const mapDispatchToProps: ReduxDispatch = {
  peformFetchCategories: fetchCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
