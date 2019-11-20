import { Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  addedShippingRate,
  addingShippingRateFailed,
  AddShippingRateActions,
  AddShippingRateActionsTypes
} from '../../actions/shipping-rates/add-shipping-rate.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const addShippingRateEpic: Epic<
  AddShippingRateActions,
  AddShippingRateActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(AddShippingRateActionsTypes.ADD_SHIPPING_RATE)),
    mergeMap(action =>
      from(
        ajax.post(`${API_URL}/sale/shipping-rates`, action.payload, {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
          'Content-Type': 'application/json'
        })
      ).pipe(
        map(() => addedShippingRate()),
        catchError(error => of(addingShippingRateFailed(error)))
      )
    )
  );

export default addShippingRateEpic;
