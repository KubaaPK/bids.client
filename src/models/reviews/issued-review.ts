type Rating = {
  complianceWithDescription: number;
  customerService: number;
  deliveryTime: number;
  shippingCost: number;
};

type Seller = {
  id: string;
  username?: any;
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
  name: string;
  sellingMode: SellingMode;
  images: string;
};

type Purchase = {
  id: string;
  offer: Offer;
};

export type IssuedReview = {
  id: string;
  rating: Rating;
  seller: Seller;
  purchase: Purchase;
};
