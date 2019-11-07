import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import * as F from '../../../../../components/Forms';
import * as S from './styled';
import * as Typo from '../../../../../components/Typography';
import * as Models from '../../../../../models';
import { State } from '../../../../../redux/reducers';
import { addParameter } from '../../../../../redux/actions/parameters/add-parameter.action';

type ReduxState = {
  addingParameter: boolean;
  addedParameter: AjaxResponse | undefined;
  addingParameterFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  performAddParameter: (newParameter: Models.Categories.NewParameter) => void;
};

type Props = ReduxState & ReduxDispatch;

const AddParameterForm: React.FunctionComponent<Props> = (props: Props) => {
  const { performAddParameter } = props;
  const [newParameter, setNewParameter] = useState<
    Models.Categories.NewParameter
  >({
    name: '',
    required: false,
    restrictions: {},
    unit: '',
    type: ''
  } as any);

  const requiredSelectOptions = (): { value: any; text: any }[] => {
    return [
      { text: 'Wymagany', value: true },
      { text: 'Niewymagany', value: false }
    ];
  };

  const parameterTypeSelectOptions = (): { value: any; text: any }[] => {
    return [
      { text: 'Liczba zmiennoprzecinkowa', value: 'float' },
      { text: 'Liczba całkowita', value: 'integer' },
      { text: 'Tekst', value: 'single-string' }
    ];
  };

  const handleSubmit = (ev: React.FormEvent<HTMLInputElement>): void => {
    ev.preventDefault();
    performAddParameter(newParameter);
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setNewParameter({
      ...newParameter,
      [ev.currentTarget.id]: ev.currentTarget.value
    });
  };

  const handleRequiredSelectChange = (
    ev: React.FormEvent<HTMLSelectElement>
  ): void => {
    setNewParameter({
      ...newParameter,
      [ev.currentTarget.id]: JSON.parse(ev.currentTarget.value)
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
      <F.Form onSubmit={handleSubmit}>
        <Typo.Title text="Dodaj parametr" />
        <F.InputGroup>
          <F.Label htmlFor="name" text="Nazwa" />
          <F.Input
            variant="text"
            id="name"
            onChange={handleInputChange}
            required
          />
        </F.InputGroup>
        <F.InputGroup>
          <F.Label htmlFor="unit" text="Jednostka" />
          <F.Input
            variant="text"
            id="unit"
            onChange={handleInputChange}
            required
          />
        </F.InputGroup>
        <F.InputGroup>
          <F.Label htmlFor="required" text="Czy wymagany?" />
          <F.Select
            options={requiredSelectOptions()}
            defaultMessage="Wskaż czy parametr jest wymagany"
            onChange={handleRequiredSelectChange}
            id="required"
            required
          />
        </F.InputGroup>
        <F.InputGroup>
          <F.Label htmlFor="type" text="Typ" />
          <F.Select
            options={parameterTypeSelectOptions()}
            defaultMessage="Wybierz typ parametru"
            onChange={handleInputChange}
            id="type"
            required
          />
        </F.InputGroup>
        <F.TextSeparator text="Ograniczenia" />
        {newParameter.type === 'single-string' && (
          <>
            <F.InputGroup>
              <F.Label text="Minimalna długość" htmlFor="minLength" />
              <F.Input id="minLength" variant="text" required />
            </F.InputGroup>
            <F.InputGroup>
              <F.Label text="Maksymalna długość" htmlFor="maxLength" />
              <F.Input id="maxLength" variant="text" required />
            </F.InputGroup>
          </>
        )}
        {newParameter.type === 'integer' && (
          <>
            <F.InputGroup>
              <F.Label text="Minimalna wartość" htmlFor="min" />
              <F.Input
                id="min"
                variant="number"
                onChange={handleRestricionChange}
                required
              />
            </F.InputGroup>
            <F.InputGroup>
              <F.Label text="Maksymalna wartość" htmlFor="max" />
              <F.Input
                id="max"
                variant="number"
                onChange={handleRestricionChange}
                required
              />
            </F.InputGroup>
          </>
        )}
        {newParameter.type === 'float' && (
          <>
            <F.InputGroup>
              <F.Label text="Minimalna wartość" htmlFor="min" />
              <F.Input
                id="min"
                variant="number"
                onChange={handleRestricionChange}
                required
              />
            </F.InputGroup>
            <F.InputGroup>
              <F.Label text="Maksymalna wartość" htmlFor="max" />
              <F.Input
                id="max"
                variant="number"
                onChange={handleRestricionChange}
                required
              />
            </F.InputGroup>
            <F.InputGroup>
              <F.Label text="Precyzja" htmlFor="precision" />
              <F.Input
                id="precision"
                variant="number"
                onChange={handleRestricionChange}
                required
              />
            </F.InputGroup>
          </>
        )}
        <F.Button type="submit" text="Dodaj parametr" variant="full" />
      </F.Form>
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
