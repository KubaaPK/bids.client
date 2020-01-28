import React from 'react';
import { connect } from 'react-redux';
import * as Models from '../../models';
import { addParameter } from '../../redux/actions/parameters/add-parameter.action';
import { AddParameterForm } from '../../ui/organisms';

type OwnProps = {
  closeForm: () => void;
};

type ReduxDispatch = {
  performAddParameter: (parameter: Models.Categories.NewParameter) => void;
};

type Props = OwnProps & ReduxDispatch;

function AddParameterContainer(props: Props) {
  const { performAddParameter, closeForm } = props;

  // eslint-disable-next-line no-shadow
  function addParameter(parameter: Models.Categories.NewParameter): void {
    performAddParameter(parameter);
    closeForm();
  }

  return <AddParameterForm addParameter={addParameter} closeForm={closeForm} />;
}

const mapDispatchToProps: ReduxDispatch = {
  performAddParameter: addParameter
};

export default connect(
  null,
  mapDispatchToProps
)(AddParameterContainer);
