import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Plus } from 'react-feather';
import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../models';
import * as S from './styled';
import { State } from '../../../redux/reducers';
import { fetchParameters } from '../../../redux/actions/parameters/fetch-parameters.action';
import useOutsideClick from '../../../shared/hooks/use-outside-click';
import { SectionTitle } from '../../atoms';
import { AdminDashboardParameter } from '../../molecules';

type ReduxState = {
  fetchingParameters: boolean;
  parameters: Models.Categories.Parameter[];
  fetchingParametersFailed: AjaxError | undefined;
  addedParameter: AjaxResponse | undefined;
};

type ReduxDispatch = {
  performFetchParameters: () => void;
};

type Props = ReduxState & ReduxDispatch;

const Parameters: React.FunctionComponent<Props> = (props: Props) => {
  const { parameters, addedParameter, performFetchParameters } = props;
  const [showAddParameterForm, setShowAddParameterForm] = useState<boolean>(
    false
  );
  const addParameterFormRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (addedParameter) {
      performFetchParameters();
    }
  }, [addedParameter, performFetchParameters]);

  useOutsideClick(addParameterFormRef, () => {
    if (showAddParameterForm) setShowAddParameterForm(false);
  });

  return (
    <S.Wrapper>
      {showAddParameterForm && (
        <S.Outline>
          <span ref={addParameterFormRef}>
            {/* <AddParameterForm
              closeForm={() => setShowAddParameterForm(false)}
            /> */}
          </span>
        </S.Outline>
      )}
      <SectionTitle
        text="Parametry"
        font={{
          size: 's',
          weight: 500,
          uppercase: true,
          variant: 'lighten'
        }}
      />
      <S.List>
        {parameters.map(parameter => (
          <AdminDashboardParameter parameter={parameter} key={parameter.id} />
        ))}
      </S.List>
      <S.ShowAddCategoryFormButton
        onClick={() => setShowAddParameterForm(!showAddParameterForm)}
      >
        <Plus />
      </S.ShowAddCategoryFormButton>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    fetchingParameters: state.parameters.fetchParameters.fetchingParameters,
    fetchingParametersFailed:
      state.parameters.fetchParameters.fetchingParametersFailed,
    parameters: state.parameters.fetchParameters.fetchedParameters,
    addedParameter: state.parameters.addParameter.addedParameter
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchParameters: fetchParameters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parameters);
