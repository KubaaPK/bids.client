import React, { useState } from 'react';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { connect } from 'react-redux';
import * as S from './styled';
import * as F from '../../../../../components/Forms';
import * as Typo from '../../../../../components/Typography';
import * as Models from '../../../../../models';
import { State } from '../../../../../redux/reducers';
import { addDeliveryMethod } from '../../../../../redux/actions/deliery-methods/add-delivery-method.action';

type ReduxState = {
  addingDeliveryMethod: boolean;
  deliveryMethodAdded: AjaxResponse | undefined;
  addingDeliveryMethodFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  performAddDeliveryMethod: (
    deliveryMethod: Models.DeliveryMethods.NewDeliveryMethod
  ) => void;
};

type Props = ReduxState & ReduxDispatch;

const AddDeliveryMethodForm: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { performAddDeliveryMethod } = props;

  const [newDeliveryMethod, setNewDeliveryMethod] = useState<
    Models.DeliveryMethods.NewDeliveryMethod
  >({
    name: '',
    paymentPolicy: '' as any
  });

  const deliveryMethodPaymentPolicySelectOptions = (): {
    value: any;
    text: any;
  }[] => {
    return [
      {
        text: 'Płatność przy odbiorze',
        value: 'CASH_ON_DELIVERY'
      },
      {
        text: 'Płatność z góry',
        value: 'IN_ADVANCE'
      }
    ];
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    performAddDeliveryMethod(newDeliveryMethod);
    setNewDeliveryMethod({
      name: '',
      paymentPolicy: '' as any
    });
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setNewDeliveryMethod({
      name: ev.currentTarget.value
    } as any);
  };

  const handlePaymentPolicySelectChange = (
    ev: React.FormEvent<HTMLSelectElement>
  ): void => {
    setNewDeliveryMethod({
      ...newDeliveryMethod,
      [ev.currentTarget.id]: ev.currentTarget.value
    });
  };

  return (
    <S.Wrapper>
      <F.Form onSubmit={handleSubmit}>
        <Typo.Title text="Dodaj metodę dostawy" />
        <F.InputGroup>
          <F.Label htmlFor="name" text="Nazwa metody dostawy" />
          <F.Input
            variant="text"
            id="name"
            required
            onChange={handleInputChange}
            value={newDeliveryMethod.name}
          />
        </F.InputGroup>
        <F.InputGroup>
          <F.Label htmlFor="paymentPolicy" text="Sposób zapłaty" />
          <F.Select
            options={deliveryMethodPaymentPolicySelectOptions()}
            required
            id="paymentPolicy"
            defaultMessage="Wybierz sposób zapłaty"
            onChange={handlePaymentPolicySelectChange}
          />
        </F.InputGroup>
        <F.Button text="Dodaj metodę dostawy" variant="full" type="submit" />
      </F.Form>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    addingDeliveryMethod:
      state.deliveryMethods.addDeliveryMethod.addingDeliveryMethod,
    addingDeliveryMethodFailed:
      state.deliveryMethods.addDeliveryMethod.addingDeliveryMethodFailed,
    deliveryMethodAdded:
      state.deliveryMethods.addDeliveryMethod.addedDeliveryMethod
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performAddDeliveryMethod: addDeliveryMethod
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeliveryMethodForm);
