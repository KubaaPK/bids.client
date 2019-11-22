import React, { useEffect, useState } from 'react';
import * as Models from '../../../../models';
import * as Form from '../../../../components/Forms';
import * as S from './styled';
import { API_URL } from '../../../../consts';
import Parameter from './Parameter';

type Props = {
  categoryId: string;
  passParameterValue: (
    parameters: Models.Offers.NewOffer['parameters'][0]
  ) => void;
  restoredParameters?: any;
};

const Parameters: React.FunctionComponent<Props> = (props: Props) => {
  const { categoryId, passParameterValue, restoredParameters } = props;
  const [parameters, setParameters] = useState<Models.Categories.Parameter[]>();
  const [parametersValues, setParametersValues] = useState<
    {
      id: string;
      name: string;
      type: string;
      value: string;
    }[]
  >([]);
  const [fetchingParameters, setFetchingParameters] = useState<boolean>(true);

  useEffect(() => {
    if (!restoredParameters) {
      fetch(`${API_URL}/sale/categories/${categoryId}/parameters`, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      })
        .then(res => res.json())
        .then(res => {
          setParameters(res);
          setFetchingParameters(false);
        });
    } else {
      setParameters(restoredParameters as any);
      setFetchingParameters(false);
    }
  }, [categoryId, parametersValues, restoredParameters]);

  const handleParameterChange = (
    parameter: Models.Offers.NewOffer['parameters'][0]
  ): void => {
    passParameterValue(parameter);
  };

  return (
    <S.Wrapper>
      {!fetchingParameters &&
        parameters!.map((parameter, index) => (
          <Parameter
            parameter={parameter}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            setParameter={handleParameterChange}
            restoredParameter={restoredParameters && restoredParameters[index]}
          />
        ))}
    </S.Wrapper>
  );
};

export default Parameters;
