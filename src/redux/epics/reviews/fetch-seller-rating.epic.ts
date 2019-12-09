import { Epic } from 'redux-observable';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import {
  FetchSellerRatingActions,
  FetchSellerRatingActionTypes,
  sellerRatingFetched,
  fetchingSellerRatingFailed
} from '../../actions/reviews/fetch-seller-rating.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const fetchSellerRating: Epic<
  FetchSellerRatingActions,
  FetchSellerRatingActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(FetchSellerRatingActionTypes.FETCH_SELLER_RATING)),
    mergeMap(action =>
      from(
        ajax.getJSON(`${API_URL}/sale/reviews/seller/${action.payload}`)
      ).pipe(
        map((response: any) => sellerRatingFetched(response)),
        catchError((error: AjaxError) => of(fetchingSellerRatingFailed(error)))
      )
    )
  );

export default fetchSellerRating;
