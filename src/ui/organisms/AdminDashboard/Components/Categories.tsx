import React from 'react';
import { connect } from 'react-redux';
import { Button, List } from '../../../atoms';
import { Accordion } from '../../../molecules';
import * as Models from '../../../../models';
import * as S from './styled';
import AddCategoryContainer from '../../../../containers/AddCategoryContainer';
import { fetchCategories } from '../../../../redux/actions/categories/fetch-categories.actions';
import { State } from '../../../../redux/reducers';
import { AssignParameterToCategory } from '../../../../components/molecules';
import CategoryDetails from "./CategoryDetails";

type ReduxState = {
  addedCategory: any;
  fetchedCategories: any;
};

type ReduxDispatch = {
  performFetchCategories(): void;
};

type Props = ReduxState & ReduxDispatch;

function Categories(props: Props) {
  // eslint-disable-next-line no-shadow
  const { performFetchCategories, addedCategory, fetchedCategories } = props;

  const [categories, setCategories] = React.useState<
    Models.Categories.Category[]
  >([]);

  const [showAddCategoryForm, setShowAddCategoryForm] = React.useState<boolean>(
    false
  );

  React.useEffect(() => {
    performFetchCategories();
  }, [performFetchCategories]);

  React.useEffect(() => {
    if (addedCategory || fetchedCategories) {
      setCategories(fetchedCategories);
    }
  }, [addedCategory, fetchedCategories]);

  return (
    <List type="unordered">
      <S.Title>
        <span>Kategorie</span>
        <Button
          type="button"
          kind="full"
          variant="default"
          onClick={() => setShowAddCategoryForm(!showAddCategoryForm)}
        >
          Dodaj kategorię
        </Button>
      </S.Title>
      {showAddCategoryForm && (
        <AddCategoryContainer closeForm={() => setShowAddCategoryForm(false)} />
      )}
      {categories &&
        categories.map(el => (
          <Accordion
            title={el.name}
            content={(<CategoryDetails categoryId={el.id} />)}
            key={el.id}
          />
        ))}
    </List>
  );
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    addedCategory: state.categories.addCategory.categoryAdded,
    fetchedCategories: state.categories.fetchCategories.categories
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchCategories: fetchCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
