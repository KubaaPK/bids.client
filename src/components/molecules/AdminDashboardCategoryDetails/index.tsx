import React, { ReactElement, useState, useEffect } from 'react';
import { AjaxResponse } from 'rxjs/ajax';
import { connect } from 'react-redux';
import * as Models from '../../../models';
import * as S from './styled';
import { API_URL } from '../../../consts';
import { SubParagraph, SectionTitle } from '../../atoms';
import { AssignParameterToCategory } from '..';
import { State } from '../../../redux/reducers';

type OwnProps = {
  category: Models.Categories.Category;
};

type ReduxState = {
  parameterAssignmented: AjaxResponse | undefined;
};

type Props = OwnProps & ReduxState;

function AdminDashboardCategoryDetails(props: Props): ReactElement {
  const { category, parameterAssignmented } = props;

  const [assignmententedParameters, setAssignmententedParameters] = useState<
    Models.Categories.Parameter[]
  >([]);

  useEffect(() => {
    fetch(`${API_URL}/sale/categories/${category.id}/parameters`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    })
      .then(res => res.json())
      .then(res => {
        setAssignmententedParameters(res);
      });

    if (parameterAssignmented) {
      fetch(`${API_URL}/sale/categories/${category.id}/parameters`, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      })
        .then(res => res.json())
        .then(res => {
          setAssignmententedParameters(res);
        });
    }
  }, [category.id, parameterAssignmented]);

  return (
    <S.Details>
      <SubParagraph text={category.leaf ? 'Możliwość dodawania ofert' : ''} />
      <S.Parameters>
        {assignmententedParameters.length > 0 && (
          <SectionTitle
            text="Aktualnie powiązane parametry:"
            font={{
              size: 'm',
              variant: 'lighten'
            }}
          />
        )}
        {assignmententedParameters.length > 0 ? (
          assignmententedParameters.map(parameter => (
            // eslint-disable-next-line react/jsx-indent
            <li key={parameter.id}>
              <SubParagraph text={parameter.name} key={parameter.id} />
            </li>
          ))
        ) : (
          <S.NoParametersAssignmented>
            Brak przydzielonych parametrów
          </S.NoParametersAssignmented>
        )}
      </S.Parameters>

      <AssignParameterToCategory
        categoryId={category.id}
      />
    </S.Details>
  );
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    parameterAssignmented: state.categories.assignParameter.assignedParameter
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdminDashboardCategoryDetails);
