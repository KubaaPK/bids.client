import { Epic } from 'redux-observable';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  FetchOfferActions,
  FetchOfferActionsTypes,
  offerFeched,
  fetchingOfferFailed
} from '../../actions/offers/fetch-offer.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

// eslint-disable-next-line import/prefer-default-export
export const fetchOfferByIdEpic: Epic<
  FetchOfferActions,
  FetchOfferActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(FetchOfferActionsTypes.FETCH_OFFER)),
    mergeMap(action =>
      from(ajax.getJSON(`${API_URL}/sale/offers/${action.payload}`)).pipe(
        map((response: any) => offerFeched(response)),
        catchError((error: any) => of(fetchingOfferFailed(error)))
      )
    )
  );
