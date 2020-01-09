import React, { useState } from 'react';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { connect } from 'react-redux';
import * as S from './styled';
import * as Models from '../../../../../models';
import { State } from '../../../../../redux/reducers';
import { addDeliveryMethod } from '../../../../../redux/actions/deliery-methods/add-delivery-method.action';
import { SectionTitle, Button } from '../../../../../components/atoms';
import { InputGroup, Radio } from '../../../../../components/molecules';

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
    paymentPolicy: 'CASH_ON_DELIVERY' as any
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
      ...newDeliveryMethod,
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
      <S.Form onSubmit={handleSubmit}>
        <SectionTitle
          text="Dodaj metodę dostawy"
          font={{
            size: 'm',
            uppercase: true,
            variant: 'lighten',
            weight: 500
          }}
        />
        <InputGroup
          label={{
            htmlFor: 'name',
            text: 'Nazwa',
            font: {
              size: 's'
            }
          }}
          input={{
            id: 'name',
            restrictions: { required: true },
            type: 'text',
            handleChange: handleInputChange,
            defaultValue: newDeliveryMethod.name
          }}
        />
        <Radio
          options={paymentPoliciesRadioOptions()}
          defaultCheckedLabel="Płatność przy odbiorze"
          handleChange={handlePaymentPolicyChange}
        />
        <Button type="submit" variant="full" text="Dodaj metodę dostawy" />
        <Button
          type="button"
          variant="blank"
          handleClick={closeForm}
          text="Zamknij"
        />
      </S.Form>
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
