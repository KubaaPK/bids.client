type Thumbnail = {
  url: string;
};

type Price = {
  currency: string;
  amount: string;
};

type SellingMode = {
  format: string;
  price: Price;
};

type Offer = {
  id: string;
  thumbnail: Thumbnail[];
  name: string;
  sellingMode: SellingMode;
};

type Purchase = {
  id: string;
  amount: number;
  createdAt: Date;
  offer: Offer;
};

export type ReviewRequest = {
  id: string;
  purchase: Purchase;
};
