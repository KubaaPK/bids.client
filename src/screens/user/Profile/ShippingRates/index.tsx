import React from 'react';
import * as S from './styled';
import * as Typography from '../../../../components/Typography';
import Navigation from '../../../../components/Navigation';
import Button from '../../../../components/Button';
import AddShippingRateForm from './AddShippingRateForm';
import Options from '../Options';
import Rates from './Rates';

const ShippingRates: React.FunctionComponent<{}> = () => {
  const [showForm, setShowForm] = React.useState<boolean>(false);

  return (
    <>
      <Navigation />
      <S.Main>
        <Options />
        {showForm && (
          <AddShippingRateForm closeForm={() => setShowForm(false)} />
        )}
        <S.Wrapper>
          <Typography.Title
            text="Cenniki dostaw"
            font={{
              size: '2rem'
            }}
          />
          <Button
            text="Dodaj nowy cennik"
            type="button"
            variant="full"
            handleClick={() => setShowForm(true)}
          />
          <Rates />
        </S.Wrapper>
      </S.Main>
    </>
  );
};

export default ShippingRates;
