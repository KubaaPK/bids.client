export type Rating = {
  ratings: {
    complianceWithDescriptionAvg: number;
    customerServiceAvg: number;
    deliveryTimeAvg: number;
    shippingCostAvg: number;
  };
  summary: {
    positives: number;
    negatives: number;
    positivesPercent: string;
  };
};
