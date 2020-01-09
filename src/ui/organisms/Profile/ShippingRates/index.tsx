import React from 'react';
import * as S from './styled';
import { Button, Heading } from '../../../atoms';
import { AddShippingRateContainer } from '../../../../containers';
import { Modal } from '../..';
import ShippingRatesContainer from '../../../../containers/ShippingRatesContainer';

export default function ShippingRates(): React.ReactElement {
  const [showForm, setShowForm] = React.useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.Top>
        <Heading text="Cenniki dostaw" level={2} />
        {showForm && (
          <Modal
            darken
            close={() => setShowForm(false)}
            title="Dodaj cennik dostawy"
          >
            <AddShippingRateContainer closeForm={() => setShowForm(false)} />
          </Modal>
        )}
        <Button
          kind="full"
          type="button"
          variant="default"
          onClick={() => setShowForm(true)}
        >
          Dodaj cennik
        </Button>
      </S.Top>
      <ShippingRatesContainer />
    </S.Wrapper>
  );
}
