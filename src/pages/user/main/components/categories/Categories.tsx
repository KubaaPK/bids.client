import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import { CircleLoader } from 'react-spinners';
import { fetchCategories } from '../../../../../redux/actions/categories.actions';
import { State } from '../../../../../redux/reducers';
import { CategoriesList, Title } from './styled';
import Category from './Category';
import { Category as CategoryModel } from '../../../../../models/category';

type ReduxProps = {
  areCategoriesFetching: boolean;
  categories: any;
  categoriesFetchingFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  fetchCategories(): void;
};

type Props = ReduxProps & ReduxDispatch;

const Categories: React.FunctionComponent<Props> = (props: Props) => {
  const {
    areCategoriesFetching,
    categories,
    categoriesFetchingFailed,
    fetchCategories
  } = props;

  useEffect(() => {
    fetchCategories();
  }, []);

  return areCategoriesFetching === true ? (
    <CircleLoader />
  ) : (
    <CategoriesList>
      <Title>Kategorie</Title>
      {categories.map((category: CategoryModel, index: number) => (
        <Category category={category} key={index} index={index} />
      ))}
    </CategoriesList>
  );
};

const mapStateToProps = (state: State): ReduxProps => {
  return {
    areCategoriesFetching: state.categories.areCategoriesFetching,
    categories: state.categories.categoriesFetched,
    categoriesFetchingFailed: state.categories.categoriesFetchingFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  fetchCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
