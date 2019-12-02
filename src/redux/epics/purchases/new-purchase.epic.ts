import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { isOfType } from 'typesafe-actions';
import {
  NewPurchaseActionsTypes,
  NewPurchaseActions,
  purchaseProcessed,
  processingPurchaseFailed
} from '../../actions/purchases/new-purchase.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const newPurchaseEpic: Epic<
  NewPurchaseActions,
  NewPurchaseActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(NewPurchaseActionsTypes.NEW_PURCHASE)),
    mergeMap(action =>
      from(
        ajax.post(
          `${API_URL}/sale/purchases`,
          {
            offerId: action.payload.offerId,
            amount: action.payload.productAmount
          },
          {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`
          }
        )
      ).pipe(
        map(response => purchaseProcessed(response)),
        catchError(error => of(processingPurchaseFailed(error)))
      )
    )
  );

export default newPurchaseEpic;
