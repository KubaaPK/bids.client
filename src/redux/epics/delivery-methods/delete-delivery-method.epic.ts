import { Epic } from 'redux-observable';
import { of, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError, map, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { State } from '../../reducers';
import {
  DeleteDeliveryMethodActionTypes,
  DeleteDeliveryMethodActions,
  deliveryMethodDeleted,
  deletingDeliveryMethodFailed
} from '../../actions/deliery-methods/delete-delivery-method.action';
import { API_URL } from '../../../consts';

const deleteDeliveryMethodEpic: Epic<
  DeleteDeliveryMethodActions,
  DeleteDeliveryMethodActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(DeleteDeliveryMethodActionTypes.DELETE_DELIVERY_METHOD)),
    mergeMap(action =>
      from(
        ajax.delete(`${API_URL}/sale/delivery-methods/${action.payload}`, {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map(response => deliveryMethodDeleted(response)),
        catchError(error => of(deletingDeliveryMethodFailed(error)))
      )
    )
  );

export default deleteDeliveryMethodEpic;
