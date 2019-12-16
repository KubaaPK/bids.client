import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import * as Form from '../../../../../components/Forms';
import * as S from './styled';
import * as Typography from '../../../../../components/Typography';
import * as Models from '../../../../../models';
import Button from '../../../../../components/Button';
import { State } from '../../../../../redux/reducers';
import { addParameter } from '../../../../../redux/actions/parameters/add-parameter.action';

type OwnProps = {
  closeForm: () => void;
};

type ReduxState = {
  addingParameter: boolean;
  addedParameter: AjaxResponse | undefined;
  addingParameterFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  performAddParameter: (newParameter: Models.Categories.NewParameter) => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const AddParameterForm: React.FunctionComponent<Props> = (props: Props) => {
  const { performAddParameter, closeForm } = props;
  const [newParameter, setNewParameter] = useState<
    Models.Categories.NewParameter
  >({
    name: '',
    required: false,
    restrictions: {},
    unit: '',
    type: 'single-string'
  } as any);

  const parameterRequirednessOptions = (): {
    id: string;
    value: any;
    label: string;
  }[] => {
    return [
      {
        id: 'required',
        label: 'Wymagany',
        value: true
      },
      {
        id: 'notRequired',
        label: 'Niewymagany',
        value: false
      }
    ];
  };

  const parameterTypeSelectOptions = (): { value: any; label: string }[] => {
    return [
      { label: 'Liczba zmiennoprzecinkowa', value: 'float' },
      { label: 'Liczba całkowita', value: 'integer' },
      { label: 'Tekst', value: 'single-string' }
    ];
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    performAddParameter(newParameter);
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setNewParameter({
      ...newParameter,
      [ev.currentTarget.id]: ev.currentTarget.value
    });
  };

  const handleRadioRequiredChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setNewParameter({
      ...newParameter,
      required: JSON.parse(ev.currentTarget.value)
    });
  };

  const handleParameterTypeChange = (
    ev: React.FormEvent<HTMLSelectElement>
  ) => {
    setNewParameter({
      ...newParameter,
      type: ev.currentTarget.value as any
    });
  };

  const handleRestricionChange = (
    ev: React.FormEvent<HTMLInputElement>
  ): void => {
    setNewParameter({
      ...newParameter,
      restrictions: {
        ...newParameter.restrictions,
        [ev.currentTarget.id]: Number.parseInt(ev.currentTarget.value, 10)
      }
    });
  };

  return (
    <S.Wrapper>
      <Form.Form handleSubmit={handleSubmit}>
        <Typography.Title text="Dodaj parametr" font={{ size: '2rem' }} />
        <Form.Input
          id="name"
          label="Nazwa"
          type="text"
          restrictions={{ required: true }}
          handleChange={handleInputChange}
        />
        <Form.Input
          id="unit"
          label="Jednostka"
          type="text"
          restrictions={{ required: true }}
          handleChange={handleInputChange}
        />
        <Form.Radio
          options={parameterRequirednessOptions()}
          defaultCheckedLabel="Niewymagany"
          handleChange={handleRadioRequiredChange}
        />
        <Form.Select
          id="type"
          defaultSelectValue="single-string"
          label="Typ parametru"
          handleChange={handleParameterTypeChange}
          options={parameterTypeSelectOptions()}
          restrictions={{ required: true }}
        />
        <Form.Typography.TextSeparator text="Ograniczenia" />
        {newParameter.type === 'single-string' && (
          <>
            <Form.Input
              type="text"
              id="minLength"
              label="Minimalna długość tekstu"
              handleChange={handleRestricionChange}
              restrictions={{
                required: true
              }}
            />
            <Form.Input
              type="text"
              id="maxLength"
              label="Maksymalna długość tekstu"
              handleChange={handleRestricionChange}
              restrictions={{
                required: true
              }}
            />
          </>
        )}
        {newParameter.type === 'integer' && (
          <>
            <Form.Input
              type="number"
              id="min"
              label="Minimalna wartość"
              handleChange={handleRestricionChange}
              restrictions={{
                required: true
              }}
            />
            <Form.Input
              type="number"
              id="max"
              label="Maksymalna wartość"
              handleChange={handleRestricionChange}
              restrictions={{
                required: true
              }}
            />
          </>
        )}
        {newParameter.type === 'float' && (
          <>
            <Form.Input
              type="number"
              id="min"
              label="Minimalna wartość"
              handleChange={handleRestricionChange}
              restrictions={{
                required: true
              }}
            />
            <Form.Input
              type="number"
              id="max"
              label="Maksymalna wartość"
              handleChange={handleRestricionChange}
              restrictions={{
                required: true
              }}
            />
            <Form.Input
              type="number"
              id="precision"
              label="Precyzja (miejsca po przecinku)"
              handleChange={handleRestricionChange}
              restrictions={{
                required: true
              }}
            />
          </>
        )}
        <Button type="submit" variant="full" text="Dodaj parametr" />
        <S.CloseBottom type="button" onClick={closeForm}>
          Zamknij
        </S.CloseBottom>
      </Form.Form>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    addingParameter: state.parameters.addParameter.addingParameter,
    addedParameter: state.parameters.addParameter.addedParameter,
    addingParameterFailed: state.parameters.addParameter.addingParameterFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performAddParameter: addParameter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddParameterForm);
