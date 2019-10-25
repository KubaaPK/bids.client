import { Epic } from 'redux-observable';
import { of, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError, map, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import {
  FetchDeliveryMethodActions,
  FetchDeliveryMethodsActionTypes,
  deliveryMethodsFetched,
  fetchingDeliveryMethodsFailed
} from '../../actions/deliery-methods/fetch-delivery-methods.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const fetchDeliveryEpic: Epic<
  FetchDeliveryMethodActions,
  FetchDeliveryMethodActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(FetchDeliveryMethodsActionTypes.FETCH_DELIVERY_METHODS)),
    mergeMap(() =>
      from(
        ajax.getJSON(`${API_URL}/sale/delivery-methods`, {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map((response: any) => deliveryMethodsFetched(response)),
        catchError(error => of(fetchingDeliveryMethodsFailed(error)))
      )
    )
  );

export default fetchDeliveryEpic;
