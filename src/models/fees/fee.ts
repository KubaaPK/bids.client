type Fe = {
  currency: string;
  amount: string;
};

type Purchase = {
  id: string;
  amount: number;
  createdAt: Date;
};

export type Fee = {
  id: string;
  fee: Fe;
  status: string;
  createdAt: Date;
  purchase: Purchase;
};
