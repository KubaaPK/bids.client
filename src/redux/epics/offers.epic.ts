import { Epic, combineEpics } from 'redux-observable';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import {
  OffersActions,
  OffersActionsTypes,
  latestOffersFetched,
  latestOffersFetchingFailed
} from '../actions/offers.actions';
import { State } from '../reducers';
import { API_URL } from '../../consts';

const fetchLatestOffersEpic: Epic<
  OffersActions,
  OffersActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(OffersActionsTypes.FETCH_LATEST_OFFERS)),
    mergeMap(() =>
      from(ajax.get(`${API_URL}/sale/offers?order='DESC'`)).pipe(
        map((response: AjaxResponse) => latestOffersFetched(response.response)),
        catchError(error => of(latestOffersFetchingFailed(error)))
      )
    )
  );

export default combineEpics(fetchLatestOffersEpic);
