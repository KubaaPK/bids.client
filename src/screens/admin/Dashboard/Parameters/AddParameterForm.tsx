import React, { useState, useEffect } from 'react';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { connect } from 'react-redux';
import Notification from '../../../../components/Notification';
import {
  NewParameter,
  ParameterType,
  addParameter
} from '../../../../redux/actions/parameters/add-parameter.action';
import { State } from '../../../../redux/reducers';

type Props = {
  parameterIsAdding: boolean;
  parameterAdded: AjaxResponse | undefined;
  addingParameterFailed: AjaxError | undefined;
};

type Dispatch = {
  addParameter(newParameter: NewParameter): void;
};

type CompProps = Props & Dispatch;

const AddParameterForm: React.FunctionComponent<CompProps> = (
  props: CompProps
) => {
  const [pending, setPending] = useState(false);
  const initialNewParameterData: NewParameter = {
    name: '',
    restrictions: {},
    type: ParameterType.SINGLE_STRING,
    unit: ''
  };

  const [newParameterData, setNewParameterData] = useState(
    initialNewParameterData
  );

  const { addParameter, parameterIsAdding, parameterAdded } = props;

  useEffect(() => {
    setPending(parameterIsAdding);
    if (parameterAdded) {
    }
  }, [parameterIsAdding, parameterAdded]);

  const handleNotificationClose = (): void => {};

  const handleFormSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    addParameter(newParameterData);
  };

  const setNewParameter = (inputValue: any) => {
    setNewParameterData((prevState: NewParameter) => ({
      ...prevState,
      [inputValue.id]: inputValue.value
    }));
  };

  const setParameterRestriction = (inputValue: any) => {
    setNewParameterData((prevState: NewParameter) => ({
      ...prevState,
      restrictions: {
        ...prevState.restrictions,
        [inputValue.id]: Number.parseInt(inputValue.value, 10)
      }
    }));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>s</form>
    </>
  );
};

const mapStateToProps = (state: State): Props => {
  return {
    addingParameterFailed: state.parameters.addParameter.addingParameterFailed,
    parameterAdded: state.parameters.addParameter.parameterAdded,
    parameterIsAdding: state.parameters.addParameter.parameterIsAdding
  };
};

const mapDispatchToProps: Dispatch = {
  addParameter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddParameterForm);
