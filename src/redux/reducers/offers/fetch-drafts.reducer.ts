import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';
import {
  FetchDraftsActions,
  FetchDraftsActionsTypes
} from '../../actions/offers/fetch-drafts.action';

export type FetchDraftsState = {
  fetchingDrafts: boolean;
  fetchedDrafts: Models.Offers.Offer[];
  fetchingDraftsFailed: AjaxError | undefined;
};

export const initialFetchDraftsState: FetchDraftsState = {
  fetchedDrafts: [],
  fetchingDrafts: false,
  fetchingDraftsFailed: undefined
};

export default function fetchDraftsReducer(
  state: FetchDraftsState = initialFetchDraftsState,
  action: FetchDraftsActions
): FetchDraftsState {
  switch (action.type) {
    case FetchDraftsActionsTypes.FETCH_DRAFTS:
      return { ...state, fetchingDrafts: true };
    case FetchDraftsActionsTypes.FETCHING_DRAFTS:
      return { ...state, fetchingDrafts: action.payload };
    case FetchDraftsActionsTypes.FETCHED_DRAFTS:
      return { ...state, fetchingDrafts: false, fetchedDrafts: action.payload };
    case FetchDraftsActionsTypes.FETCHING_DRAFTS_FAILED:
      return {
        ...state,
        fetchingDrafts: false,
        fetchingDraftsFailed: action.payload
      };
    default:
      return state;
  }
}
