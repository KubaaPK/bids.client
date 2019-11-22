export type NewOffer = {
  name: string;
  ean: string;
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
        items: {
          type: 'TEXT' | 'IMAGE';
          content?: string;
          url?: string;
        }[];
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
    available: number;
    unit: 'UNIT' | 'PAIR' | 'SET';
  };
};
