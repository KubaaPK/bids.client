import React from 'react';
import * as Models from '../../../../../../models';
import * as S from './styled';

type Props = {
  parameter: Models.Categories.NewParameter;
};

const Details: React.FunctionComponent<Props> = (props: Props) => {
  const { parameter } = props;

  return (
    <S.Wrapper>
      <S.List>
        <S.ParameterInfo>
          <S.InfoType>Wymagany: </S.InfoType>
          <S.InfoValue>
            {parameter.required ? 'Wymagany' : 'Niewymagany'}
          </S.InfoValue>
        </S.ParameterInfo>
        <S.ParameterInfo>
          <S.InfoType>Typ: </S.InfoType>
          <S.InfoValue>{parameter.type}</S.InfoValue>
        </S.ParameterInfo>
        {parameter.unit !== null && (
          <S.ParameterInfo>
            <S.InfoType>Jednostka: </S.InfoType>
            <S.InfoValue>{parameter.unit}</S.InfoValue>
          </S.ParameterInfo>
        )}
      </S.List>
      <S.List>
        <S.Restrictions>
          <S.RestrictionsTitle>Restrykcje</S.RestrictionsTitle>
          {parameter.restrictions.min && (
            <S.ParameterInfo>
              <S.InfoType>Wartość minimalna: </S.InfoType>
              <S.InfoValue>{parameter.restrictions.min}</S.InfoValue>
            </S.ParameterInfo>
          )}
          {parameter.restrictions.max && (
            <S.ParameterInfo>
              <S.InfoType>Wartość maksymalna: </S.InfoType>
              <S.InfoValue>{parameter.restrictions.max}</S.InfoValue>
            </S.ParameterInfo>
          )}
          {parameter.restrictions.precision && (
            <S.ParameterInfo>
              <S.InfoType>Precyzja: </S.InfoType>
              <S.InfoValue>{parameter.restrictions.precision}</S.InfoValue>
            </S.ParameterInfo>
          )}
          {parameter.restrictions.minLength && (
            <S.ParameterInfo>
              <S.InfoType>Minimalna długość: </S.InfoType>
              <S.InfoValue>{parameter.restrictions.minLength}</S.InfoValue>
            </S.ParameterInfo>
          )}
          {parameter.restrictions.maxLength && (
            <S.ParameterInfo>
              <S.InfoType>Maksymalna długość: </S.InfoType>
              <S.InfoValue>{parameter.restrictions.minLength}</S.InfoValue>
            </S.ParameterInfo>
          )}
        </S.Restrictions>
      </S.List>
    </S.Wrapper>
  );
};

export default Details;
