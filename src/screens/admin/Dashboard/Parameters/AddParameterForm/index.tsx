import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import * as Form from '../../../../../components/Forms';
import * as S from './styled';
import * as Models from '../../../../../models';
import { State } from '../../../../../redux/reducers';
import { addParameter } from '../../../../../redux/actions/parameters/add-parameter.action';
import { Radio, InputGroup, Select } from '../../../../../components/molecules';
import { Button, SectionTitle } from '../../../../../components/atoms';

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
        <SectionTitle
          text="Dodaj parametr"
          font={{
            size: 'm',
            uppercase: true,
            variant: 'lighten',
            weight: 500
          }}
        />
        <InputGroup
          label={{
            font: {
              size: 's'
            },
            htmlFor: 'name',
            text: 'Nazwa'
          }}
          input={{
            handleChange: handleInputChange,
            id: 'name',
            restrictions: { required: true },
            type: 'text'
          }}
        />
        <InputGroup
          label={{
            font: {
              size: 's'
            },
            htmlFor: 'unit',
            text: 'Jednostka'
          }}
          input={{
            handleChange: handleInputChange,
            id: 'unit',
            restrictions: { required: true },
            type: 'text'
          }}
        />
        <Radio
          options={parameterRequirednessOptions()}
          defaultCheckedLabel="Niewymagany"
          handleChange={handleRadioRequiredChange}
        />
        <Select
          id="type"
          defaultSelectValue="single-string"
          label="Typ parametru"
          handleChange={handleParameterTypeChange}
          options={parameterTypeSelectOptions()}
          restrictions={{ required: true }}
        />
        <SectionTitle
          font={{
            size: 's',
            uppercase: true,
            variant: 'lighten',
            weight: 500
          }}
          text="Ograniczenia"
        />
        {newParameter.type === 'single-string' && (
          <>
            <InputGroup
              label={{
                font: {
                  size: 's'
                },
                htmlFor: 'minLength',
                text: 'Minimalna długość tekstu'
              }}
              input={{
                handleChange: handleRestricionChange,
                id: 'minLength',
                restrictions: { required: true },
                type: 'text'
              }}
            />
            <InputGroup
              label={{
                font: {
                  size: 's'
                },
                htmlFor: 'maxLength',
                text: 'Maksymalna długość tekstu'
              }}
              input={{
                handleChange: handleRestricionChange,
                id: 'maxLength',
                restrictions: { required: true },
                type: 'text'
              }}
            />
          </>
        )}
        {newParameter.type === 'integer' && (
          <>
            <InputGroup
              label={{
                font: {
                  size: 's'
                },
                htmlFor: 'min',
                text: 'Minimalna wartość'
              }}
              input={{
                handleChange: handleRestricionChange,
                id: 'min',
                restrictions: { required: true },
                type: 'number'
              }}
            />
            <InputGroup
              label={{
                font: {
                  size: 's'
                },
                htmlFor: 'max',
                text: 'Maksymalna wartość'
              }}
              input={{
                handleChange: handleRestricionChange,
                id: 'max',
                restrictions: { required: true },
                type: 'number'
              }}
            />
          </>
        )}
        {newParameter.type === 'float' && (
          <>
            <InputGroup
              label={{
                font: {
                  size: 's'
                },
                htmlFor: 'min',
                text: 'Minimalna wartość'
              }}
              input={{
                handleChange: handleRestricionChange,
                id: 'min',
                restrictions: { required: true },
                type: 'number'
              }}
            />
            <InputGroup
              label={{
                font: {
                  size: 's'
                },
                htmlFor: 'max',
                text: 'Maksymalna wartość'
              }}
              input={{
                handleChange: handleRestricionChange,
                id: 'max',
                restrictions: { required: true },
                type: 'number'
              }}
            />
            <InputGroup
              label={{
                font: {
                  size: 's'
                },
                htmlFor: 'precision',
                text: 'Precyzja'
              }}
              input={{
                handleChange: handleRestricionChange,
                id: 'precision',
                restrictions: { required: true },
                type: 'number'
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
