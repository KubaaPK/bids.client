import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import * as S from './styled';
import * as F from '../../../../../../../components/Forms';
import * as Models from '../../../../../../../models';
import { State } from '../../../../../../../redux/reducers';
import { assignParameter } from '../../../../../../../redux/actions/categories/assign-parameter.action';

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

  const createSelectOptions = (): { value: any; text: any }[] => {
    return parameters
      .filter(
        parameter => !existingParameters.map(el => el.id).includes(parameter.id)
      )
      .map(el => {
        return {
          value: el.id,
          text: el.name
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
      <F.Form onSubmit={handleSubmit}>
        <F.Select
          options={createSelectOptions()}
          onChange={handleSelectChange}
          defaultMessage="Wybierz parametr..."
        />
        <F.Button variant="full" type="submit" text="Dodaj parametr" />
      </F.Form>
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
