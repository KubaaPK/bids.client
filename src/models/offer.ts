enum SellingModeFormat {
  BUY_NOW = 'BUY_NOW'
}

enum StockUnits {
  UNIT = 'UNIT',
  PAIR = 'PAIR',
  SET = 'SET'
}

export type Images = {
  url: string;
};

export type ParameterValue = {
  name: string;
  value: string;
};

export type DescriptionModel = {
  items: [
    {
      type: 'TEXT' | 'IMAGE';
      content: string;
    }
  ];
};

// eslint-disable-next-line import/prefer-default-export
export class OfferModel {
  public readonly id!: string;

  public readonly name!: string;

  public readonly description?: DescriptionModel[];

  public readonly seller!: {
    username: string;
    id: string;
  };

  public readonly shippingRate!: {
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

  public readonly images!: Images[];

  public readonly sellingMode!: {
    format: SellingModeFormat;
    price: {
      amount: string;
      currency: string;
    };
  };

  public readonly stock!: {
    available: number;
    unit: StockUnits;
  };

  public readonly category!: {
    id: string;
  };

  public readonly parameters!: ParameterValue[];
}
