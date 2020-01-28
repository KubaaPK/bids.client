import React from 'react';
import { Field, Select } from '../../molecules';
import { Button } from '../../atoms';
import * as S from './styled';
import * as Models from '../../../models';
import { InputGroup } from '../../../components/molecules';

type Props = {
  addParameter: (parameter: Models.Categories.NewParameter) => void;
  closeForm(): void;
};

export default function AddParameterForm(props: Props): React.ReactElement {
  const { addParameter, closeForm } = props;
  const [parameter, setParameter] = React.useState<
    Models.Categories.NewParameter
  >({
    name: '',
    type: 'integer' as any,
    unit: '',
    required: false,
    restrictions: {}
  });

  function onSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();
    addParameter(parameter);
  }

  function handleParameterInputChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setParameter({
      ...parameter,
      [ev.currentTarget.id]: ev.currentTarget.value
    });
  }

  function parameterTypeSelectOptions(): { value: any; label: string }[] {
    return [
      {
        value: 'integer',
        label: 'Liczba całkowita'
      },
      {
        value: 'float',
        label: 'Liczba zmiennoprzecinkowa'
      },
      {
        value: 'single-string',
        label: 'Ciąg znaków'
      }
    ];
  }

  function handleParameterTypeChange(
    ev: React.FormEvent<HTMLSelectElement>
  ): void {
    setParameter({
      ...parameter,
      type: ev.currentTarget.value as any
    });
  }

  function handleRestricionChange(ev: React.FormEvent<HTMLInputElement>): void {
    setParameter({
      ...parameter,
      restrictions: {
        ...parameter.restrictions,
        [ev.currentTarget.id]: Number.parseInt(ev.currentTarget.value, 10)
      }
    });
  }

  return (
    <S.Outline>
      <S.Form onSubmit={onSubmit}>
        <Field
          label="Nazwa parametru"
          input={{
            id: 'name',
            type: 'text',
            restrictions: {
              required: true
            },
            onChange: handleParameterInputChange
          }}
        />
        <Field
          label="Jednostka"
          input={{
            id: 'unit',
            type: 'text',
            restrictions: {
              required: true
            },
            onChange: handleParameterInputChange
          }}
        />

        <Select
          id="type"
          label="Typ parametru"
          options={parameterTypeSelectOptions()}
          onChange={handleParameterTypeChange}
        />

        {parameter.type === 'single-string' && (
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

        {parameter.type === 'integer' && (
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
        {parameter.type === 'float' && (
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
        <Button type="submit" kind="full" variant="default">
          Dodaj parametr
        </Button>
        <Button
          type="button"
          kind="blank"
          variant="default"
          onClick={() => closeForm()}
        >
          Zamknij
        </Button>
      </S.Form>
    </S.Outline>
  );
}
