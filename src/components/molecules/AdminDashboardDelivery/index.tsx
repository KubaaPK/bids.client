import React, { ReactElement, useState } from 'react';
import * as Models from '../../../models';
import * as S from './styled';
import { AdminDashboardAccordionHeader } from '..';
import { SubParagraph } from '../../atoms';

type Props = {
  deliveryMethod: Models.DeliveryMethods.DeliveryMethod;
};

function AdminDashboardDelivery(props: Props): ReactElement {
  const { deliveryMethod } = props;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <S.ListElement>
      <span
        onClick={() => setShowDetails(!showDetails)}
        onKeyDown={() => setShowDetails(!showDetails)}
        role="button"
        tabIndex={0}
      >
        <AdminDashboardAccordionHeader
          headerTitle={deliveryMethod.name}
          isOpened={showDetails}
        />
      </span>
      {showDetails && (
        <SubParagraph
          text={
            deliveryMethod.paymentPolicy === 'CASH_ON_DELIVERY'
              ? 'Płatność przy odbiorze'
              : 'Płatność z góry'
          }
        />
      )}
    </S.ListElement>
  );
}

export default AdminDashboardDelivery;
