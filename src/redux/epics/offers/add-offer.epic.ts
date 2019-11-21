import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { ajax } from 'rxjs/ajax';
import {
  AddOfferActionsTypes,
  AddOfferActions,
  addedOffer,
  addingOfferFailed
} from '../../actions/offers/add-offer.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const AddOfferEpic: Epic<AddOfferActions, AddOfferActions, State> = action$ =>
  action$.pipe(
    filter(isOfType(AddOfferActionsTypes.ADD_OFFER)),
    mergeMap(action =>
      from(
        ajax.post(`${API_URL}/sale/offers`, action.payload, {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map(response => addedOffer(response)),
        catchError(error => of(addingOfferFailed(error)))
      )
    )
  );

export default AddOfferEpic;
