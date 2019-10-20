import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import ReactDataGrid from 'react-data-grid';
import { Delete } from 'react-feather';
import { State } from '../../../../../redux/reducers';
import { fetchCategories } from '../../../../../redux/actions/categories.actions';

type Props = {
  areCategoriesFetching: boolean;
  categories: any;
};

type Dispatch = {
  fetchCategories(): void;
};

type CompProps = Props & Dispatch;

const Categories: React.FunctionComponent<CompProps> = (props: CompProps) => {
  const { areCategoriesFetching, categories, fetchCategories } = props;

  useEffect(() => {
    fetchCategories();
  }, []);

  const columns = [
    { key: 'name', name: 'Nazwa' },
    { key: 'leaf', name: 'Leaf' }
  ];

  const rows = () => {
    const categoriesArr: any[] = [];

    categories.map((el: any) =>
      categoriesArr.push({ name: el.name, leaf: el.leaf ? 'Tak' : 'Nie' })
    );
    return categoriesArr;
  };

  const nameActions = [
    {
      icon: <Delete />,
      callback: () => {
        alert('ok!');
      }
    }
  ];

  // @ts-ignore
  const getCellActions = (column, row) => {
    const cellActions = {
      name: nameActions
    };
    // @ts-ignore
    return cellActions[column.key];
  };
  return (
    <>
      KATEGORIE!
      {areCategoriesFetching === true ? null : (
        <ReactDataGrid
          columns={columns}
          rowGetter={i => rows()[i] as any}
          rowsCount={rows().length}
          minHeight={150}
          //@ts-ignore
          getCellActions={getCellActions}
        />
      )}
    </>
  );
};

const mapStateToProps = (state: State): Props => {
  return {
    areCategoriesFetching: state.categories.areCategoriesFetching,
    categories: state.categories.categoriesFetched
  };
};

const mapDispatchToProps: Dispatch = {
  fetchCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
