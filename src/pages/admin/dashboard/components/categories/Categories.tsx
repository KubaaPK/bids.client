import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Column, Table } from 'react-virtualized';
import { AjaxResponse } from 'rxjs/ajax';
import { State } from '../../../../../redux/reducers';
import { fetchCategories } from '../../../../../redux/actions/categories/fetch-categories.actions';
import { deleteCategory } from '../../../../../redux/actions/categories/delete-category.actions';
import Button from '../../../../../components/Button/Button';
import { ButtonVariant } from '../../../../../components/Button/styled';
import AddCategoryForm from './AddCategoryForm';

type Props = {
  areCategoriesFetching: boolean;
  categories: any;
  categoryDeleted: boolean;
  categoryAdded: AjaxResponse | undefined;
};

type Dispatch = {
  fetchCategories(): void;
  deleteCategory(id: string): void;
};

type CompProps = Props & Dispatch;

const Categories: React.FunctionComponent<CompProps> = (props: CompProps) => {
  const {
    areCategoriesFetching,
    categories,
    fetchCategories,
    deleteCategory,
    categoryAdded,
    categoryDeleted
  } = props;
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);

  useEffect(() => {
    fetchCategories();
    if (categoryAdded || categoryDeleted) {
      fetchCategories();
    }
  }, [categoryAdded, categoryDeleted]);

  const rowClick = ({ rowData }: any) => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Na pewno chcesz usunąć kategorie: ${rowData.name}`)) {
      deleteCategory(rowData.id);
    }
  };

  const handleAddCategoryButtonClick = (): void => {
    setShowAddCategoryForm(!showAddCategoryForm);
  };

  return (
    <>
      KATEGORIE!
      <Button
        variant={ButtonVariant.BORDERED}
        type="button"
        text="Dodaj kategorię"
        onClick={handleAddCategoryButtonClick}
      />
      {showAddCategoryForm === true ? <AddCategoryForm /> : null}
      {areCategoriesFetching === true ? null : (
        <Table
          width={300}
          height={300}
          headerHeight={20}
          rowHeight={30}
          rowCount={categories.length}
          rowGetter={({ index }) => categories[index]}
          onRowDoubleClick={rowClick}
        >
          <Column label="Name" dataKey="name" width={100} />
          <Column label="Kategoria nadrzędna" dataKey="leaf" width={100} />
        </Table>
      )}
    </>
  );
};

const mapStateToProps = (state: State): Props => {
  return {
    areCategoriesFetching:
      state.categories.fetchCategories.areCategoriesFetching,
    categories: state.categories.fetchCategories.categoriesFetched,
    categoryDeleted: state.categories.deleteCategory.categoryDeleted,
    categoryAdded: state.categories.addCategory.categoryAdded
  };
};

const mapDispatchToProps: Dispatch = {
  fetchCategories,
  deleteCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
