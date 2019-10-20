import React from 'react';
import { ParameterValue } from '../../../../../models/offer';
import { Wrapper, ParametersList, Parameter, Title } from './styled';

type Props = {
  parameters: ParameterValue[];
};

const Parameters: React.FunctionComponent<Props> = (props: Props) => {
  const { parameters } = props;

  return (
    <Wrapper>
      <Title>Parametry</Title>
      <ParametersList>
        {parameters.map((param: ParameterValue) => (
          <Parameter key={param.name}>
            <span>{param.name}</span>
            <span>{param.value}</span>
          </Parameter>
        ))}
      </ParametersList>
    </Wrapper>
  );
};

export default Parameters;
