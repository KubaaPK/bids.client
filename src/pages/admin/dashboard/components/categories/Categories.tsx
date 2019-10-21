import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Column, Table } from 'react-virtualized';
import { State } from '../../../../../redux/reducers';
import { fetchCategories } from '../../../../../redux/actions/categories/fetch-categories.actions';
import { deleteCategory } from '../../../../../redux/actions/categories/delete-category';

type Props = {
  areCategoriesFetching: boolean;
  categories: any;
  categoryDeleted: boolean;
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
    deleteCategory
  } = props;

  useEffect(() => {
    fetchCategories();
  }, []);

  const rowClick = ({ rowData }: any) => {
    if (window.confirm(`Na pewno chcesz usunąć kategorie: ${rowData.name}`)) {
      deleteCategory(rowData.id);
    }
  };

  return (
    <>
      KATEGORIE!
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
    categoryDeleted: state.categories.deleteCategory.categoryDeleted
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
