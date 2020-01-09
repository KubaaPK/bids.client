import { NewRate } from './new-rate';

export type NewShippingRate = {
  name: string;
  rates: NewRate[];
};
