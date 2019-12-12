type ParameterValue = {
  name: string;
  value: string;
};

type Offer = {
  id: string;
  name: string;
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
  description: {
    sections: [
      {
        type: 'TEXT' | 'IMAGE';
        content?: string;
        url?: string;
      }
    ];
  };
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

export type Offers = {
  offers: Offer[];
  totalAmount: number;
};
