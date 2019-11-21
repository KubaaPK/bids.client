import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum FetchDraftsActionsTypes {
  FETCH_DRAFTS = 'offers/fetch-drafts',
  FETCHING_DRAFTS = 'offers/fetching-offers',
  FETCHED_DRAFTS = 'offers/fetched-drafts',
  FETCHING_DRAFTS_FAILED = 'offers/fetching-drafts-failed'
}

type FetchDraftsAction = {
  type: FetchDraftsActionsTypes.FETCH_DRAFTS;
};

type FetchingDraftsAction = {
  type: FetchDraftsActionsTypes.FETCHING_DRAFTS;
  payload: boolean;
};

type FetchedDraftsAction = {
  type: FetchDraftsActionsTypes.FETCHED_DRAFTS;
  payload: Models.Offers.Offer[];
};

type FetchingDraftsFailedAction = {
  type: FetchDraftsActionsTypes.FETCHING_DRAFTS_FAILED;
  payload: AjaxError;
};

export function fetchDrafts(): FetchDraftsAction {
  return {
    type: FetchDraftsActionsTypes.FETCH_DRAFTS
  };
}

export function fetchingDrafts(status: boolean): FetchingDraftsAction {
  return {
    type: FetchDraftsActionsTypes.FETCHING_DRAFTS,
    payload: status
  };
}

export function fetchedDrafts(
  drafts: Models.Offers.Offer[]
): FetchedDraftsAction {
  return {
    type: FetchDraftsActionsTypes.FETCHED_DRAFTS,
    payload: drafts
  };
}

export function fetchingDraftsFailed(
  error: AjaxError
): FetchingDraftsFailedAction {
  return {
    type: FetchDraftsActionsTypes.FETCHING_DRAFTS_FAILED,
    payload: error
  };
}

export type FetchDraftsActions =
  | FetchDraftsAction
  | FetchingDraftsAction
  | FetchedDraftsAction
  | FetchingDraftsFailedAction;
