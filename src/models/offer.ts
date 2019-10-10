enum SellingModeFormat {
  BUY_NOW = 'BUY_NOW'
}

enum StockUnits {
  UNIT = 'UNIT',
  PAIR = 'PAIR',
  SET = 'SET'
}

export class OfferModel {
  public readonly id!: string;
  public readonly name!: string;
  public readonly seller!: {
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
  public readonly images!: [
    {
      url: string;
    }
  ];
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
}
