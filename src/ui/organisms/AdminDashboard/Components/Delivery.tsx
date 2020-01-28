import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../../redux/reducers';
import { fetchDeliveryMethods } from '../../../../redux/actions/deliery-methods/fetch-delivery-methods.action';
import * as Models from '../../../../models';
import { Button, List } from '../../../atoms';
import * as S from './styled';
import { Accordion } from '../../../molecules';
import './ParameterDetails/ParameterDetails';
import AddDeliveryContainer from '../../../../containers/AddDeliveryContainer';

type ReduxState = {
  addedDelivery: any;
  fetchedDeliveries: any;
};

type ReduxDispatch = {
  performFetchDeliveries(): void;
};

type Props = ReduxState & ReduxDispatch;

function Delivery(props: Props) {
  const { performFetchDeliveries, addedDelivery, fetchedDeliveries } = props;

  const [deliveries, setDeliveries] = React.useState<
    Models.DeliveryMethods.DeliveryMethod[]
  >([]);

  const [showAddDeliveryForm, setShowAddDeliveryForm] = React.useState<boolean>(
    false
  );

  React.useEffect(() => {
    performFetchDeliveries();
  }, [performFetchDeliveries]);

  React.useEffect(() => {
    if (addedDelivery || fetchedDeliveries) {
      setDeliveries(fetchedDeliveries);
    }
  }, [addedDelivery, fetchedDeliveries]);

  return (
    <List type="unordered">
      <S.Title>
        <span>Metody dostaw</span>
        <Button
          type="button"
          kind="full"
          variant="default"
          onClick={() => setShowAddDeliveryForm(!showAddDeliveryForm)}
        >
          Dodaj metodę dostawy
        </Button>
      </S.Title>
      {showAddDeliveryForm && (
        <AddDeliveryContainer closeForm={() => setShowAddDeliveryForm(false)} />
      )}
      {deliveries &&
        deliveries.map(el => (
          <Accordion
            title={el.name}
            key={el.id}
            content={
              <span style={{ fontSize: '1.25rem' }}>{el.paymentPolicy}</span>
            }
          />
        ))}
    </List>
  );
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    addedDelivery: state.deliveryMethods.addDeliveryMethod.addedDeliveryMethod,
    fetchedDeliveries:
      state.deliveryMethods.fetchDeliveryMethods.fetchedDeliveryMethods
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchDeliveries: fetchDeliveryMethods
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delivery);
