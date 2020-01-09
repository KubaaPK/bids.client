import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Plus } from 'react-feather';
import { AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../models';
import * as S from './styled';
import { State } from '../../../redux/reducers';
import useOutsideClick from '../../../shared/hooks/use-outside-click';
import { SectionTitle } from '../../atoms';
import { AdminDashboardCategory } from '../../molecules';
import { API_URL } from '../../../consts';

type ReduxState = {
  categoryAdded: undefined | AjaxResponse;
  categoryDeleted: undefined | AjaxResponse;
};

type Props = ReduxState;

const Categories: React.FunctionComponent<Props> = (props: Props) => {
  const { categoryAdded, categoryDeleted } = props;
  const [showAddCategoryForm, setShowAddCategoryForm] = useState<boolean>(
    false
  );
  const [categories, setCategories] = useState<Models.Categories.Category[]>(
    []
  );

  const addCategoryFormRef = useRef<HTMLSpanElement>(null);

  useOutsideClick(addCategoryFormRef, () => {
    if (showAddCategoryForm) setShowAddCategoryForm(false);
  });

  useEffect(() => {
    fetch(`${API_URL}/sale/categories?flat=true`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => setCategories(res));

    if (categoryAdded || categoryDeleted) {
      fetch(`${API_URL}/sale/categories?flat=true`, {
        method: 'GET'
      })
        .then(res => res.json())
        .then(res => setCategories(res));
    }
  }, [categoryAdded, categoryDeleted]);

  return (
    <S.Wrapper>
      {showAddCategoryForm && (
        <S.Outline>
          {/* <span ref={addCategoryFormRef}>
            <AddCategoryForm closeForm={() => setShowAddCategoryForm(false)} />
          </span> */}
        </S.Outline>
      )}
      <SectionTitle
        text="Kategorie"
        font={{
          size: 's',
          weight: 500,
          uppercase: true,
          variant: 'lighten'
        }}
      />
      <S.List>
        {categories.map(category => (
          <AdminDashboardCategory category={category} key={category.id} />
          // <Category category={category} key={category.id} />
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
    categoryAdded: state.categories.addCategory.categoryAdded,
    categoryDeleted: state.categories.deleteCategory.categoryDeleted
  };
};

export default connect(
  mapStateToProps,
  {}
)(Categories);
