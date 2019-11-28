import { AjaxResponse, AjaxError } from 'rxjs/ajax';

export enum PublishOfferActionsTypes {
  PUBLISH_OFFER = 'offers/publish-offer',
  PUBLISHING_OFFER = 'offers/publishing-offer',
  OFFER_PUBLISHED = 'offers/offer-published',
  PUBLISHING_OFFER_FAILED = 'offers/publishing-offer-failed'
}

type PublishOfferAction = {
  type: PublishOfferActionsTypes.PUBLISH_OFFER;
  payload: string;
};

type PublishingOfferAction = {
  type: PublishOfferActionsTypes.PUBLISHING_OFFER;
  payload: boolean;
};

type OfferPublishedAction = {
  type: PublishOfferActionsTypes.OFFER_PUBLISHED;
  payload: AjaxResponse;
};

type PublishingOfferFailedAction = {
  type: PublishOfferActionsTypes.PUBLISHING_OFFER_FAILED;
  payload: AjaxError;
};

export function publishOffer(draftOfferId: string): PublishOfferAction {
  return {
    type: PublishOfferActionsTypes.PUBLISH_OFFER,
    payload: draftOfferId
  };
}

export function publishingOffer(status: boolean): PublishingOfferAction {
  return {
    type: PublishOfferActionsTypes.PUBLISHING_OFFER,
    payload: status
  };
}

export function offerPublished(response: AjaxResponse): OfferPublishedAction {
  return {
    type: PublishOfferActionsTypes.OFFER_PUBLISHED,
    payload: response
  };
}

export function publishingOfferFailed(
  error: AjaxError
): PublishingOfferFailedAction {
  return {
    type: PublishOfferActionsTypes.PUBLISHING_OFFER_FAILED,
    payload: error
  };
}

export type PublishOfferActions =
  | PublishOfferAction
  | PublishingOfferAction
  | OfferPublishedAction
  | PublishingOfferFailedAction;
