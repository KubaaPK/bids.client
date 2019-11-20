import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, filter, mergeMap, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { ajax } from 'rxjs/ajax';
import { State } from '../../reducers';
import {
  FetchShippingRatesActionTypes,
  FetchShippingRatesActions,
  fetchedShippingRates,
  fetchingShippingRatesFailed
} from '../../actions/shipping-rates/fetch-shipping-rates.action';
import { API_URL } from '../../../consts';

const fetchShippingRatesEpic: Epic<
  FetchShippingRatesActions,
  FetchShippingRatesActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(FetchShippingRatesActionTypes.FETCH_SHIPPING_RATES)),
    mergeMap(() =>
      from(
        ajax.getJSON(`${API_URL}/sale/shipping-rates`, {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map((response: any) => fetchedShippingRates(response)),
        catchError(error => of(fetchingShippingRatesFailed(error)))
      )
    )
  );

export default fetchShippingRatesEpic;
