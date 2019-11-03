import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Trash } from 'react-feather';
import { AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../../../../models';
import * as S from './styled';
import { API_URL } from '../../../../../../consts';
import { Confirm } from '../../../../../../components/Modal';
import Parameter from './Parameter';
import AssignParameterForm from './AssignParameterForm';
import { deleteCategory } from '../../../../../../redux/actions/categories/delete-category.actions';
import { State } from '../../../../../../redux/reducers';

type OwnProps = {
  category: Models.Categories.Category;
};

type ReduxState = {
  parameterAssigned: AjaxResponse | undefined;
};

type ReduxDispatch = {
  performDeletingCategory: (categoryId: string) => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const Details: React.FunctionComponent<Props> = (props: Props) => {
  const { category, performDeletingCategory, parameterAssigned } = props;
  const [parameters, setParameters] = useState<Models.Categories.Parameter[]>();
  const [isFetchingParameters, setFetchingParameters] = useState<boolean>(true);
  const [
    showCategoryDeleteConfirmModal,
    setShowCategoryDeleteConfirmModal
  ] = useState<boolean>(false);

  // TODO: Should probably works with redux somehow
  useEffect(() => {
    fetch(`${API_URL}/sale/categories/${category.id}/parameters`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    })
      .then(res => res.json())
      .then(res => {
        setParameters(res);
        setFetchingParameters(false);
      });
  }, [category.id, parameterAssigned]);

  const handleConfirmReject = (): void => {
    setShowCategoryDeleteConfirmModal(false);
  };

  const handleConfirmAccept = (): void => {
    performDeletingCategory(category.id!);
    setShowCategoryDeleteConfirmModal(false);
  };

  const handleCategoryDeleting = (): void => {
    setShowCategoryDeleteConfirmModal(true);
  };

  return (
    <S.Details>
      {showCategoryDeleteConfirmModal && (
        <Confirm
          handleConfirm={handleConfirmAccept}
          handleReject={handleConfirmReject}
          modalTitle={`Czy na pewno chcesz usunąć kategorię ${category.name}?`}
          variant="warning"
          confirmText="Usuń kategorię"
        />
      )}
      <S.Leaf>{category.leaf ? 'Kategoria nadrzędna' : null}</S.Leaf>
      <S.Parameters>
        <S.ParametersTitle>Powiązane parametry</S.ParametersTitle>
        {isFetchingParameters
          ? null
          : parameters!.map(parameter => (
              // eslint-disable-next-line react/jsx-indent
              <Parameter parameter={parameter} key={parameter.id} />
            ))}
      </S.Parameters>
      {isFetchingParameters ? null : (
        <AssignParameterForm
          existingParameters={parameters!}
          categoryId={category.id!}
        />
      )}
      <S.Buttons>
        <S.DeleteButton onClick={handleCategoryDeleting}>
          <Trash />
        </S.DeleteButton>
      </S.Buttons>
    </S.Details>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    parameterAssigned: state.categories.assignParameter.assignedParameter
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performDeletingCategory: deleteCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
