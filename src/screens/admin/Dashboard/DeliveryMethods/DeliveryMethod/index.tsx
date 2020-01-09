import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Trash } from 'react-feather';
import * as Models from '../../../../../models';
import * as S from './styled';
import { Confirm } from '../../../../../components/molecules';
import { deleteDeliveryMethod } from '../../../../../redux/actions/deliery-methods/delete-delivery-method.action';
import useOutsideClick from '../../../../../shared/hooks/use-outside-click';

type ReduxDispatch = {
  performDeleteDeliveryMethod: (id: string) => void;
};

type OwnProps = {
  deliveryMethod: Models.DeliveryMethods.DeliveryMethod;
};

type Props = OwnProps & ReduxDispatch;

const DeliveryMethod: React.FunctionComponent<Props> = (props: Props) => {
  const { deliveryMethod, performDeleteDeliveryMethod } = props;
  const [
    showDeliveryMethodDeleteConfirmModal,
    setShowDeliveryMethodDeleteConfirmModal
  ] = useState<boolean>(false);

  const deleteDeliveryMethodRef = useRef<HTMLSpanElement>(null);
  useOutsideClick(deleteDeliveryMethodRef, () => {
    if (showDeliveryMethodDeleteConfirmModal)
      setShowDeliveryMethodDeleteConfirmModal(false);
  });

  const handleConfirmReject = (): void => {
    setShowDeliveryMethodDeleteConfirmModal(false);
  };

  const handleConfirmAccept = (): void => {
    performDeleteDeliveryMethod(deliveryMethod.id!);
    setShowDeliveryMethodDeleteConfirmModal(false);
  };

  const handleDeliveryMethodDeleting = (): void => {
    setShowDeliveryMethodDeleteConfirmModal(true);
  };

  return (
    <S.DeliveryMethod>
      {showDeliveryMethodDeleteConfirmModal && (
        <S.Outline>
          <span ref={deleteDeliveryMethodRef}>
            <Confirm
              handleConfirm={handleConfirmAccept}
              handleReject={handleConfirmReject}
              modalTitle={`Czy na pewno chcesz usunąć metodę dostawy ${deliveryMethod.name}?`}
              variant="warning"
              confirmText="Usuń metodę"
            />
          </span>
        </S.Outline>
      )}
      <S.NameAndDeleteWrapper>
        <S.Name>{deliveryMethod.name}</S.Name>
        <S.DeleteButton onClick={handleDeliveryMethodDeleting}>
          <Trash size="2rem" />
        </S.DeleteButton>
      </S.NameAndDeleteWrapper>
      <S.PaymentPolicy>
        {deliveryMethod.paymentPolicy === 'CASH_ON_DELIVERY'
          ? 'Płatność przy odbiorze'
          : 'Płatność z góry'}
      </S.PaymentPolicy>
    </S.DeliveryMethod>
  );
};

const mapDispatchToProps: ReduxDispatch = {
  performDeleteDeliveryMethod: deleteDeliveryMethod
};
export default connect(
  null,
  mapDispatchToProps
)(DeliveryMethod);
