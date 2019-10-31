import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import { ClipLoader } from 'react-spinners';
import * as Models from '../../../../../models';
import * as S from './styled';
import { State } from '../../../../../redux/reducers';
import { fetchCategories } from '../../../../../redux/actions/categories/fetch-categories.actions';
import Category from './components/Category';

type ReduxState = {
  fetchingCategories: boolean;
  categories: Models.Categories.Category[];
  fetchingCategoriesFailed: AjaxError;
};

type ReduxDispatch = {
  performCategoryFetching: () => void;
};

type Props = ReduxState & ReduxDispatch;

const Categories: React.FunctionComponent<Props> = (props: Props) => {
  const {
    categories,
    performCategoryFetching,
    fetchingCategories,
    fetchingCategoriesFailed
  } = props;

  useEffect(() => {
    performCategoryFetching();
  }, [performCategoryFetching]);

  return (
    <>
      {fetchingCategories && (
        <S.List>
          <S.Title>Kategorie</S.Title>
          <S.Spinner>
            <ClipLoader size={15} />
          </S.Spinner>
        </S.List>
      )}
      {categories.length > 0 && (
        <S.List>
          <S.Title>Kategorie</S.Title>
          {categories.map((category: Models.Categories.Category) => (
            <Category category={category} key={category.id} />
          ))}
        </S.List>
      )}
      {fetchingCategoriesFailed && ''}
    </>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    fetchingCategories: state.categories.fetchCategories.fetchingCategories,
    categories: state.categories.fetchCategories.categories,
    fetchingCategoriesFailed: state.categories.fetchCategories
      .fetchingCategoriesFailed!
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performCategoryFetching: fetchCategories
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
