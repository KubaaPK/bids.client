import { Epic } from 'redux-observable';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import {
  FetchLatestOffersActions,
  FetchLatestOffersActionsTypes,
  latestOffersFetched,
  latestOffersFetchingFailed
} from '../../actions/offers/fetch-latest-offers.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const fetchLatestOffersEpic: Epic<
  FetchLatestOffersActions,
  FetchLatestOffersActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(FetchLatestOffersActionsTypes.FETCH_LATEST_OFFERS)),
    mergeMap(() =>
      from(ajax.get(`${API_URL}/sale/offers?order='DESC'`)).pipe(
        map((response: AjaxResponse) => latestOffersFetched(response.response)),
        catchError(error => of(latestOffersFetchingFailed(error)))
      )
    )
  );

export default fetchLatestOffersEpic;
