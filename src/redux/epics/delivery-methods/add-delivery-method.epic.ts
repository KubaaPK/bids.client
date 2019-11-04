import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { State } from '../../reducers';
import {
  AddDeliveryMethodActionTypes,
  AddDeliveryMethodActions,
  deliveryMethodAdded,
  addingDeliveryMethodFailed
} from '../../actions/deliery-methods/add-delivery-method.action';
import { API_URL } from '../../../consts';

const addDeliveryMethod: Epic<
  AddDeliveryMethodActions,
  AddDeliveryMethodActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(AddDeliveryMethodActionTypes.ADD_DELIVERY_METHOD)),
    mergeMap(action =>
      from(
        ajax.post(`${API_URL}/sale/delivery-methods`, action.payload, {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map(response => deliveryMethodAdded(response)),
        catchError(error => of(addingDeliveryMethodFailed(error)))
      )
    )
  );

export default addDeliveryMethod;
