import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import {
  PublishOfferActions,
  PublishOfferActionsTypes
} from '../../actions/offers/publish-offer.action';

export type PublishOfferState = {
  publishingOffer: boolean;
  offerPublished: AjaxResponse | undefined;
  publishingOfferFailed: AjaxError | undefined;
};

export const initialPublishOfferState: PublishOfferState = {
  publishingOffer: false,
  offerPublished: undefined,
  publishingOfferFailed: undefined
};

export default function publishOfferReducer(
  state: PublishOfferState = initialPublishOfferState,
  action: PublishOfferActions
): PublishOfferState {
  switch (action.type) {
    case PublishOfferActionsTypes.PUBLISH_OFFER:
      return { ...state, publishingOffer: true };
    case PublishOfferActionsTypes.PUBLISHING_OFFER:
      return { ...state, publishingOffer: action.payload };
    case PublishOfferActionsTypes.OFFER_PUBLISHED:
      return {
        ...state,
        publishingOffer: false,
        offerPublished: action.payload
      };
    case PublishOfferActionsTypes.PUBLISHING_OFFER_FAILED:
      return {
        ...state,
        publishingOffer: false,
        publishingOfferFailed: action.payload
      };
    default:
      return state;
  }
}
