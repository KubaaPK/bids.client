import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum AddOfferActionsTypes {
  ADD_OFFER = 'offers/add-offer',
  ADDING_OFFER = 'offers/adding-offer',
  ADDED_OFFER = 'offers/added-offer',
  ADDING_OFFER_FAILED = 'offers/adding-offer-failed'
}

type AddOfferAction = {
  type: AddOfferActionsTypes.ADD_OFFER;
  payload: Models.Offers.NewOffer;
};

type AddingOfferAction = {
  type: AddOfferActionsTypes.ADDING_OFFER;
  payload: boolean;
};

type AddedOfferAction = {
  type: AddOfferActionsTypes.ADDED_OFFER;
  payload: AjaxResponse;
};

type AddingOfferFailedAction = {
  type: AddOfferActionsTypes.ADDING_OFFER_FAILED;
  payload: AjaxError;
};

export function addOffer(newOffer: Models.Offers.NewOffer): AddOfferAction {
  return {
    type: AddOfferActionsTypes.ADD_OFFER,
    payload: newOffer
  };
}

export function addingOffer(status: boolean): AddingOfferAction {
  return {
    type: AddOfferActionsTypes.ADDING_OFFER,
    payload: status
  };
}

export function addedOffer(response: AjaxResponse): AddedOfferAction {
  return {
    type: AddOfferActionsTypes.ADDED_OFFER,
    payload: response
  };
}

export function addingOfferFailed(error: AjaxError): AddingOfferFailedAction {
  return {
    type: AddOfferActionsTypes.ADDING_OFFER_FAILED,
    payload: error
  };
}

export type AddOfferActions =
  | AddedOfferAction
  | AddOfferAction
  | AddingOfferAction
  | AddingOfferFailedAction;
