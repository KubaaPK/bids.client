type ParameterValue = {
  name: string;
  value: string;
};

type DescriptionModel = {
  items: [
    {
      type: 'TEXT' | 'IMAGE';
      content: string;
    }
  ];
};

export type Offer = {
  id: string;
  name: string;
  description: DescriptionModel[];
  seller: {
    username: string;
    id: string;
  };
  shippingRate: {
    id: string;
    name: string;
    rates: [
      {
        deliveryMethod: {
          id: string;
        };
        maxQuantityPerPackage: number;
        firstItemRate: {
          amount: string;
          currency: string;
        };
        nextItemRate: {
          amount: string;
          currency: string;
        };
      }
    ];
  };
  images: { url: string }[];
  sellingMode: {
    format: 'BUY_NOW';
    price: {
      amount: string;
      currency: string;
    };
  };
  stock: {
    available: number;
    unit: 'UNIT' | 'PAIR' | 'SET';
  };
  category: {
    id: string;
  };
  parameters: ParameterValue[];
};
