export type NewRate = {
  deliveryMethod: {
    id: string;
    name: string;
  };
  maxQuantityPerPackage: number;
  firstItemRate: {
    amount: string;
    currency: string;
  };
};
