export type NewRate = {
  deliveryMethod: {
    id: string;
  };
  maxQuantityPerPackage: number;
  firstItemRate: {
    amount: string;
    currency: string;
  };
};
