import React, { useEffect, useState } from 'react';
import * as Models from '../../../../../models';
import * as S from './styled';
import { API_URL } from '../../../../../consts';
import Parameter from './Parameter';

type Props = {
  categoryId: string | undefined;
  passParameterValue: (
    parameters: Models.Offers.NewOffer['parameters'][0]
  ) => void;
  restoredParameters?: any;
};

const Parameters: React.FunctionComponent<Props> = (props: Props) => {
  const { categoryId, passParameterValue, restoredParameters } = props;
  const [parameters, setParameters] = useState<Models.Categories.Parameter[]>();
  const [, setParametersValues] = useState<
    {
      id: string;
      name: string;
      type: string;
      value: string;
    }[]
  >([]);
  const [fetchingParameters, setFetchingParameters] = useState<boolean>(true);

  useEffect(() => {
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

    if (restoredParameters) {
      setParametersValues(restoredParameters as any);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            restoredParameters={restoredParameters}
          />
        ))}
    </S.Wrapper>
  );
};

export default Parameters;
