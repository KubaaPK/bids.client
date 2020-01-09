import React from 'react';
import * as Models from '../../../../models';
import { Heading } from '../../../atoms';
import * as S from './styled';
import { Field } from '../../../molecules';

type Props = {
  parameters: Models.Categories.Parameter[];
  existingParameters: Models.Offers.NewOffer['parameters'];
  onUpdate: (updated: Partial<Models.Offers.NewOffer>) => void;
  ean?: string;
};

export default function Parameters(props: Props): React.ReactElement {
  const { parameters, onUpdate, existingParameters, ean } = props;

  function handleEANChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    onUpdate({
      ean: ev.currentTarget.value
    });
  }

  function handleParametersChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    parameter: Models.Categories.Parameter
  ): void {
    const currentlySetParameters =
      existingParameters === null ? [] : [...existingParameters];
    const alreadyParameterSetIndex: number = currentlySetParameters.findIndex(
      el => el.name === parameter.name
    );

    if (alreadyParameterSetIndex === -1) {
      currentlySetParameters.push({
        id: parameter.id,
        type: parameter.type,
        name: parameter.name,
        value: ev.currentTarget.value
      });
    } else {
      currentlySetParameters[alreadyParameterSetIndex] = {
        id: parameter.id,
        type: parameter.type,
        name: parameter.name,
        value: ev.currentTarget.value
      };
    }

    onUpdate({
      parameters: currentlySetParameters as any
    });
  }

  function setParameterDefaultValue(name: string): any {
    return (
      (existingParameters &&
        existingParameters.find(el => el.name === name)!.value) ||
      ''
    );
  }

  return (
    <S.Wrapper>
      <Heading level={2} text="Cechy przedmiotu" />
      <Field
        label="EAN"
        input={{
          id: 'ean',
          type: 'text',
          onChange: handleEANChange,
          defaultValue: ean
        }}
      />
      {parameters &&
        parameters.map(parameter => (
          <Field
            key={parameter.id}
            label={parameter.name}
            input={{
              id: parameter.name,
              type: 'text',
              restrictions: {
                max: (parameter.restrictions.max as any) as number,
                min: (parameter.restrictions.min as any) as number
              },
              defaultValue: setParameterDefaultValue(parameter.name),
              onChange: ev => handleParametersChange(ev, parameter)
            }}
          />
        ))}
    </S.Wrapper>
  );
}
