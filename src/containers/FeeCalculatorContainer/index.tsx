import React from 'react';
import { useFetch } from '../../hooks';
import { API_URL } from '../../consts';
import Summary from '../../ui/organisms/CreateOffer/Summary';

type Props = {
  calculableOfferData: {
    category: string;
    sellingMode: {
      format: 'BUY_NOW';
      price: {
        amount: string;
        currency: string;
      };
    };
    amount: number;
  };
  submitDraft: () => void;
};

export default function FeeCalculatorContainer(
  props: Props
): React.ReactElement {
  const { calculableOfferData, submitDraft } = props;
  const { data: fee, isLoading: isFeeCalculating } = useFetch(
    `${API_URL}/pricing/fee/calculate`,
    {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(calculableOfferData)
    },
    calculableOfferData
  );

  return (
    <>
      {fee && (
        <Summary
          calculatedFee={(fee as any).amount}
          submitOffer={submitDraft}
        />
      )}
    </>
  );
}
