import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AjaxResponse } from 'rxjs/ajax';
import {
  Parameter,
  fetchParameters
} from '../../../../../redux/actions/parameters/fetch-parameters.action';
import { State } from '../../../../../redux/reducers';
import { assignParameter } from '../../../../../redux/actions/categories/assign-parameter.action';

type Props = {
  categoryId: string;
};

type ReduxProps = {
  parameters: Parameter[] | undefined;
  fetchingParameters: boolean;
  assigningParameter: boolean;
  parameterAssigned: AjaxResponse | undefined;
};

type Dispatch = {
  fetchParameters(): void;
  assignParameter({ categoryId, parameterId }: any): void;
};

type CompProps = Props & ReduxProps & Dispatch;

const AssignParameterToCategoryForm: React.FunctionComponent<CompProps> = (
  props: CompProps
) => {
  const {
    parameters,
    fetchingParameters,
    fetchParameters,
    categoryId,
    parameterAssigned,
    assignParameter,
    assigningParameter
  } = props;

  const [parameterId, setParameterId] = useState('');

  useEffect(() => {
    fetchParameters();
  }, []);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    assignParameter({
      categoryId,
      parameterId
    });
  };

  const handleOptionChange = (ev: React.FormEvent<HTMLSelectElement>): void => {
    setParameterId(ev.currentTarget.value);
  };

  return (
    <>
      {fetchingParameters === true ? null : (
        <form onSubmit={handleSubmit}>
          <select onChange={handleOptionChange}>
            {parameters!.map(parameter => (
              <option value={parameter.id}>{parameter.name}</option>
            ))}
          </select>
          <button type="submit">Przypisz parametr</button>
        </form>
      )}
    </>
  );
};

const mapStateToProps = (state: State): ReduxProps => {
  return {
    fetchingParameters: state.parameters.fetchParameters.parametersAreFetching,
    parameters: state.parameters.fetchParameters.parametersFetched,
    assigningParameter: state.categories.assignParameter.assigningParameter,
    parameterAssigned: state.categories.assignParameter.assignedParameter
  };
};

const mapDispatchToProps: Dispatch = {
  fetchParameters,
  assignParameter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignParameterToCategoryForm);
