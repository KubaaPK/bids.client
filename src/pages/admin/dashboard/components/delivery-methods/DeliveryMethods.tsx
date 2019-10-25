import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import {
  fetchDeliveryMethods,
  DeliveryMethodModel
} from '../../../../../redux/actions/deliery-methods/fetch-delivery-methods.action';
import { State } from '../../../../../redux/reducers';

type Props = {
  fetchingDeliveryMethods: boolean;
  deliveryMethods: DeliveryMethodModel[];
  fetchingDeliveryMethodsFailed: AjaxError | undefined;
};

type Dispatch = {
  fetchDeliveryMethods(): void;
};

type CompProps = Props & Dispatch;

const DeliveryMethods: React.FunctionComponent<CompProps> = (
  props: CompProps
) => {
  const {
    deliveryMethods,
    fetchDeliveryMethods,
    fetchingDeliveryMethods
  } = props;

  useEffect(() => {
    fetchDeliveryMethods();
  }, []);

  return (
    <>
      DELIVERY METHODS GOES HERE
      {fetchingDeliveryMethods === true ? null : (
        <ul>
          {deliveryMethods!.map((method: DeliveryMethodModel) => (
            <li key={method.id}>{method.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state: State): Props => {
  return {
    deliveryMethods:
      state.deliveryMethods.fetchDeliveryMethods.fetchedDeliveryMethods,
    fetchingDeliveryMethods:
      state.deliveryMethods.fetchDeliveryMethods.fetchingDeliveryMethods,
    fetchingDeliveryMethodsFailed:
      state.deliveryMethods.fetchDeliveryMethods.fetchingDeliveryMethodsFailed
  };
};

const mapDispatchToProps: Dispatch = {
  fetchDeliveryMethods
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryMethods);
