import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, catchError, mergeMap, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { isOfType } from 'typesafe-actions';
import { State } from '../../reducers';
import {
  PublishOfferActions,
  PublishOfferActionsTypes,
  offerPublished,
  publishingOfferFailed
} from '../../actions/offers/publish-offer.action';
import { API_URL } from '../../../consts';

const publishOfferEpic: Epic<
  PublishOfferActions,
  PublishOfferActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(PublishOfferActionsTypes.PUBLISH_OFFER)),
    mergeMap(action =>
      from(
        ajax.post(
          `${API_URL}/sale/offers/publish`,
          {
            offerId: action.payload
          },
          {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
            'Content-Type': 'application/json'
          }
        )
      ).pipe(
        map(response => offerPublished(response)),
        catchError(error => of(publishingOfferFailed(error)))
      )
    )
  );

export default publishOfferEpic;
