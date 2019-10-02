import React from 'react';
import LabelStyled from './styled';

export interface ILabelProps {
  value: string;
  htmlFor: string;
}

const Label: React.FunctionComponent<ILabelProps> = (props: ILabelProps) => {
  const { value, htmlFor } = props;
  return <LabelStyled htmlFor={htmlFor}>{value}</LabelStyled>;
};

export default Label;
