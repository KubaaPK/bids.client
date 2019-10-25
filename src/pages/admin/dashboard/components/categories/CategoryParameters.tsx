import React from 'react';
import { Parameter } from '../../../../../redux/actions/parameters/fetch-parameters.action';
import AssignParameterForm from './AssignParameterToCategoryForm';

type Props = {
  parameters: Parameter[];
  categoryId: string;
};

const CategoryParameters: React.FunctionComponent<Props> = (props: Props) => {
  const { parameters, categoryId } = props;

  return (
    <ul>
      Parametry przypisane do kategorii
      {parameters.map(parameter => (
        <li key={parameter.id}>{parameter.name}</li>
      ))}
      <AssignParameterForm categoryId={categoryId} />
    </ul>
  );
};

export default CategoryParameters;
