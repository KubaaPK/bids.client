type Buyer = {
  id: string;
  username: string;
};

type Price = {
  currency: string;
  amount: string;
};

type SellingMode = {
  format: string;
  price: Price;
};

type Parameter = {
  id: string;
  name: string;
  type: string;
  value: string;
};

type Stock = {
  unit: string;
  available: number;
};

type Offer = {
  id: string;
  name: string;
  ean?: any;
  description: string;
  createdAt: Date;
  sellingMode: SellingMode;
  parameters: Parameter[];
  images: string[];
  stock: Stock;
  status: string;
};

type Purchase = {
  id: string;
  amount: number;
  createdAt: Date;
  buyer: Buyer;
  offer: Offer;
};

export type Sale = {
  id: string;
  createdAt: Date;
  purchase: Purchase;
};
