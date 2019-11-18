export type ShippingRate = {
  id: string;
  name: string;
  rates: [
    {
      maxQuantityPerPackage: number;
      deliveryMethod: {
        id: string;
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
