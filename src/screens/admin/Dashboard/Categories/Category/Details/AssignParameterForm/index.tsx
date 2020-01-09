import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import * as S from './styled';
import * as Models from '../../../../../../../models';
import { State } from '../../../../../../../redux/reducers';
import { assignParameter } from '../../../../../../../redux/actions/categories/assign-parameter.action';
import { Select } from '../../../../../../../components/molecules';
import { Button } from '../../../../../../../components/atoms';

type OwnProps = {
  existingParameters: Models.Categories.Parameter[];
  categoryId: string;
};

type ReduxState = {
  fetchingParameters: boolean;
  parameters: Models.Categories.Parameter[];
  fetchingParametersFailed: undefined | AjaxError;
};

type ReduxDispatch = {
  performParameterAssign: ({ categoryId, parameterId }: any) => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const AssignParameterForm: React.FunctionComponent<Props> = (props: Props) => {
  const {
    parameters,
    existingParameters,
    categoryId,
    performParameterAssign
  } = props;
  const [assignmentData, setAssignmentData] = useState<{
    categoryId: string;
    parameterId: string;
  }>();

  const createSelectOptions = (): { value: any; label: any }[] => {
    return parameters
      .filter(
        parameter => !existingParameters.map(el => el.id).includes(parameter.id)
      )
      .map(el => {
        return {
          value: el.id,
          label: el.name
        };
      });
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    performParameterAssign(assignmentData);
  };

  const handleSelectChange = (ev: React.FormEvent<HTMLSelectElement>): void => {
    setAssignmentData({
      parameterId: ev.currentTarget.value,
      categoryId
    });
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <Select
          id="parameter"
          label="Parametr"
          handleChange={handleSelectChange}
          options={createSelectOptions()}
          restrictions={{ required: true }}
        />
        <Button variant="full" type="submit" text="Dodaj parametr" />
      </S.Form>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    fetchingParameters: state.parameters.fetchParameters.fetchingParameters,
    parameters: state.parameters.fetchParameters.fetchedParameters,
    fetchingParametersFailed:
      state.parameters.fetchParameters.fetchingParametersFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performParameterAssign: assignParameter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignParameterForm);
