import React from 'react';
import LabelStyled from './styled';

export type LabelProps = {
  value: string;
  htmlFor: string;
};

const Label: React.FunctionComponent<LabelProps> = (props: LabelProps) => {
  const { value, htmlFor } = props;
  return <LabelStyled htmlFor={htmlFor}>{value}</LabelStyled>;
};

export default Label;
