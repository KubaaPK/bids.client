import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import { Table, Column } from 'react-virtualized';
import { State } from '../../../../../redux/reducers';
import {
  Parameter,
  fetchParameters,
  parametersAreFetching
} from '../../../../../redux/actions/parameters/fetch-parameters.action';
import Button from '../../../../../components/Button/Button';
import { ButtonVariant } from '../../../../../components/Button/styled';
import AddParameterForm from './AddParameterForm';

type Props = {
  fetchingParameters: boolean;
  parameters: undefined | Parameter[];
  addingParameterFailed: undefined | AjaxError;
  parameterAdded: boolean;
};

type Dispatch = {
  fetchParameters(): void;
  parametersAreFetching(): void;
};

type CompProps = Props & Dispatch;

const Parameters: React.FunctionComponent<CompProps> = (props: CompProps) => {
  const {
    fetchParameters,
    fetchingParameters,
    parameters,
    parameterAdded
  } = props;
  const [showAddParameterForm, setShowAddParameterForm] = useState(false);

  useEffect(() => {
    parametersAreFetching();
    fetchParameters();
    if (parameterAdded) {
      fetchParameters();
    }
  }, [parameterAdded]);

  const handleAddParameterButtonClick = (): void => {
    setShowAddParameterForm(!showAddParameterForm);
  };

  return (
    <>
      PARAMETRY!
      <Button
        variant={ButtonVariant.BORDERED}
        type="button"
        text="Dodaj parametr"
        onClick={handleAddParameterButtonClick}
      />
      {showAddParameterForm === true ? <AddParameterForm /> : null}
      {fetchingParameters === true ? null : (
        <Table
          width={300}
          height={300}
          headerHeight={20}
          rowHeight={30}
          rowCount={parameters!.length}
          rowGetter={({ index }) => parameters![index]}
        >
          <Column label="Nazwa" dataKey="name" width={100} />
          <Column label="Typ" dataKey="type" width={100} />
          <Column label="Jednostka" dataKey="unit" width={100} />
        </Table>
      )}
    </>
  );
};

const mapStateToProps = (state: State): Props => {
  return {
    fetchingParameters: state.parameters.fetchParameters.parametersAreFetching,
    addingParameterFailed:
      state.parameters.fetchParameters.fetchingParametersFailed,
    parameters: state.parameters.fetchParameters.parametersFetched,
    parameterAdded: state.parameters.addParameter.parameterIsAdding
  };
};

const mapDispatchToProps: Dispatch = {
  fetchParameters,
  parametersAreFetching
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parameters);
