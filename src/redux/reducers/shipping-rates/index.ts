import { combineReducers } from 'redux';
import fetchShippingRatesReducer, {
  FetchShippingRatesState,
  initialFetchShippingRatesState
} from './fetch-shipping-rates.reducer';
import addShippingRateReducer, {
  AddShippingRateState,
  initialAddShippingRateState
} from './add-shipping-rate.reducer';

export type ShippingRatesState = {
  fetchShippingRates: FetchShippingRatesState;
  addShippingRate: AddShippingRateState;
};

export const initialShippingRatesState: ShippingRatesState = {
  fetchShippingRates: initialFetchShippingRatesState,
  addShippingRate: initialAddShippingRateState
};

export default combineReducers({
  fetchShippingRates: fetchShippingRatesReducer,
  addShippingRate: addShippingRateReducer
});
