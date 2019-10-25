/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, TdHTMLAttributes } from 'react';
import { connect } from 'react-redux';
import { AjaxResponse } from 'rxjs/ajax';
import { State } from '../../../../../redux/reducers';
import { fetchCategories } from '../../../../../redux/actions/categories/fetch-categories.actions';
import { deleteCategory } from '../../../../../redux/actions/categories/delete-category.actions';
import Button from '../../../../../components/Button/Button';
import { ButtonVariant } from '../../../../../components/Button/styled';
import AddCategoryForm from './AddCategoryForm';
import CategoryParameters from './CategoryParameters';
import { Parameter } from '../../../../../redux/actions/parameters/fetch-parameters.action';
import { fetchCategoryParameters } from '../../../../../redux/actions/parameters/fetch-category-parameters.action';

type Props = {
  areCategoriesFetching: boolean;
  categories: any;
  categoryDeleted: boolean;
  categoryAdded: AjaxResponse | undefined;
  categoryParametersFetching: boolean;
  categoryParameters: Parameter[];
  parameterAssigned: AjaxResponse | undefined;
};

type Dispatch = {
  fetchCategories(): void;
  deleteCategory(id: string): void;
  fetchCategoryParameters(categoryId: string): void;
};

type CompProps = Props & Dispatch;

const Categories: React.FunctionComponent<CompProps> = (props: CompProps) => {
  const {
    areCategoriesFetching,
    categories,
    fetchCategories,
    deleteCategory,
    categoryAdded,
    categoryDeleted,
    categoryParametersFetching,
    fetchCategoryParameters,
    categoryParameters,
    parameterAssigned
  } = props;

  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [showDetails, setShowDetails] = useState('none');

  useEffect(() => {
    fetchCategories();
    if (categoryAdded || categoryDeleted || parameterAssigned) {
      fetchCategories();
    }
  }, [categoryAdded, categoryDeleted, parameterAssigned]);

  const handleAddCategoryButtonClick = (): void => {
    setShowAddCategoryForm(!showAddCategoryForm);
  };

  const handleShowDetails = (id: string) => (ev: any) => {
    const details: HTMLElement = ev.target.parentNode.nextElementSibling;
    details.classList.toggle('hidden-category-details');
    details.classList.toggle('show-category-details');
    fetchCategoryParameters(id);
  };

  const handleDeleteCategory = (id: string) => (ev: any): any => {
    if (window.confirm('Usunąć kategorie?')) {
      deleteCategory(id);
    }
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
        <>
          <table>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Kategoria nadrzędna</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category: any) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <>
                  <tr onClick={handleShowDetails(category.id)}>
                    <td>{category.name}</td>
                    <td>{category.leaf ? 'tak' : 'nie'}</td>
                  </tr>
                  <tr className="hidden-category-details">
                    <td colSpan={3}>
                      <button
                        onClick={handleDeleteCategory(category.id)}
                        type="button"
                      >
                        Usuń kategorie
                      </button>
                      <CategoryParameters
                        parameters={categoryParameters}
                        categoryId={category.id}
                      />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </>
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
    categoryAdded: state.categories.addCategory.categoryAdded,
    categoryParametersFetching:
      state.parameters.fetchCategoryParameters.fetchingCategoryParameters,
    categoryParameters:
      state.parameters.fetchCategoryParameters.categoryParameters,
    parameterAssigned: state.categories.assignParameter.assignedParameter
  };
};

const mapDispatchToProps: Dispatch = {
  fetchCategories,
  deleteCategory,
  fetchCategoryParameters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
