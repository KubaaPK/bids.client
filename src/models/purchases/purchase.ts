type Image = {
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

type Stock = {
  unit: string;
  available: number;
};

type Offer = {
  id: string;
  name: string;
  images: Image[];
  sellingMode: SellingMode;
  stock: Stock;
};

export type Purchase = {
  id: string;
  amount: number;
  createdAt: Date;
  offer: Offer;
};
