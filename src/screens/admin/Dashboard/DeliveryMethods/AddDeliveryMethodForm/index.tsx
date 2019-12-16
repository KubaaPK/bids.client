import React, { useState } from 'react';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { connect } from 'react-redux';
import * as S from './styled';
import * as Form from '../../../../../components/Forms';
import * as Typography from '../../../../../components/Typography';
import * as Models from '../../../../../models';
import Button from '../../../../../components/Button';
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

type OwnProps = {
  closeForm: () => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const AddDeliveryMethodForm: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { performAddDeliveryMethod, closeForm } = props;

  const [newDeliveryMethod, setNewDeliveryMethod] = useState<
    Models.DeliveryMethods.NewDeliveryMethod
  >({
    name: '',
    paymentPolicy: '' as any
  });

  const paymentPoliciesRadioOptions = (): {
    value: any;
    label: string;
    id: string;
  }[] => {
    return [
      {
        id: 'cashOnDelivery',
        label: 'Płatność przy odbiorze',
        value: 'CASH_ON_DELIVERY'
      },
      {
        id: 'inAdvance',
        label: 'Płatność z góry',
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

  const handlePaymentPolicyChange = (
    ev: React.FormEvent<HTMLInputElement>
  ): void => {
    setNewDeliveryMethod({
      ...newDeliveryMethod,
      paymentPolicy: ev.currentTarget.value as any
    });
  };

  return (
    <S.Wrapper>
      <Form.Form handleSubmit={handleSubmit}>
        <Typography.Title text="Dodaj metodę dostawy" />
        <Form.Input
          id="name"
          type="text"
          label="Nazwa"
          handleChange={handleInputChange}
          restrictions={{ required: true }}
        />
        <Form.Radio
          options={paymentPoliciesRadioOptions()}
          defaultCheckedLabel="Płatność przy odbiorze"
          handleChange={handlePaymentPolicyChange}
        />
        <Button type="submit" variant="full" text="Dodaj metodę dostawy" />
        <S.CloseBottom type="button" onClick={closeForm}>
          Zamknij
        </S.CloseBottom>
      </Form.Form>
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
