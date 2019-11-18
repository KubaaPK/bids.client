export type NewOffer = {
  name: string;
  category: {
    id: string;
  };
  sellingMode: {
    format: 'BUY_NOW';
    price: {
      amount: string;
      currency: string;
    };
  };
  description: {
    sections: [
      {
        type: 'TEXT' | 'IMAGE';
        content?: string;
        url?: string;
      }
    ];
  };
  parameters: [
    {
      id: string;
      name: string;
      type: string;
      value: string;
    }
  ];
  shippingRate: {
    id: string;
  };
  images: string[];
  stock: {
    avaiable: number;
    unit: 'UNIT' | 'PAIR' | 'SET';
  };
};
