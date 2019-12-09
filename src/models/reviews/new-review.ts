export type NewReview = {
  purchaseId: string;
  rating: {
    complianceWithDescription: number;
    customerService: number;
    deliveryTime: number;
    shippingCost: number;
  };
  rateType: 'POSITIVE' | 'NEGATIVE';
};
