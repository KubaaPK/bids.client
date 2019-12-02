export type ShippingRate = {
  id: string;
  name: string;
  rates: [
    {
      maxQuantityPerPackage: number;
      deliveryMethod: {
        id: string;
        name: string;
        paymentPolicy: 'IN_ADVANCE' | 'CASH_ON_DELIVERY';
      };
      firstItemRate: {
        currency: string;
        amount: string;
      };
      nextItemRate: {
        currency: string;
        amount: string;
      };
    }
  ];
};
