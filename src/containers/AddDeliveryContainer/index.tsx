import React from 'react';
import { connect } from 'react-redux';
import * as Models from '../../models';
import { addDeliveryMethod } from '../../redux/actions/deliery-methods/add-delivery-method.action';
import { AddDeliveryForm } from '../../ui/organisms';

type OwnProps = {
  closeForm: () => void;
};

type ReduxDispatch = {
  performAddDelivery: (
    delivery: Models.DeliveryMethods.NewDeliveryMethod
  ) => void;
};

type Props = OwnProps & ReduxDispatch;

function AddDeliveryContainer(props: Props) {
  const { performAddDelivery, closeForm } = props;

  // eslint-disable-next-line no-shadow
  function addDelivery(
    delivery: Models.DeliveryMethods.NewDeliveryMethod
  ): void {
    performAddDelivery(delivery);
    closeForm();
  }

  return <AddDeliveryForm addDelivery={addDelivery} closeForm={closeForm} />;
}

const mapDispatchToProps: ReduxDispatch = {
  performAddDelivery: addDeliveryMethod
};

export default connect(
  null,
  mapDispatchToProps
)(AddDeliveryContainer);
