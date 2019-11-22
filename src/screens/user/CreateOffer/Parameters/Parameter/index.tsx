import React from 'react';
import * as Models from '../../../../../models';
import * as Form from '../../../../../components/Forms';

type Props = {
  parameter: Models.Categories.Parameter;
  setParameter: (parameter: Models.Offers.NewOffer['parameters'][0]) => void;
  restoredParameter?: any;
};

const Parameter: React.FunctionComponent<Props> = (props: Props) => {
  const { parameter, setParameter, restoredParameter } = props;

  const parameterType = (): 'number' | 'text' => {
    if (parameter.type === 'float' || parameter.type === 'integer') {
      return 'number';
    }
    return 'text';
  };

  const handleParameterChange = (
    ev: React.FormEvent<HTMLInputElement>
  ): void => {
    setParameter({
      id: parameter.id,
      name: parameter.name,
      type: parameter.type,
      value: ev.currentTarget.value
    });
  };
  return (
    <Form.Input
      id={parameter.id}
      label={parameter.name}
      restrictions={{ required: parameter.required }}
      type={parameterType()}
      handleChange={handleParameterChange}
      defaultValue={restoredParameter.value}
    />
  );
};

export default Parameter;
