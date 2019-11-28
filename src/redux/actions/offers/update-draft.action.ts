import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum UpdateDraftActionsTypes {
  UPDATE_DRAFT = 'offers/update-draft',
  UPDATING_DRAFT = 'offer/updating-draft',
  UPDATED_DRAFT = 'offers/updated-draft',
  UPDATING_DRAFT_FAILED = 'offers/updating-draft-failed'
}

type UpdateDraftAction = {
  type: UpdateDraftActionsTypes.UPDATE_DRAFT;
  payload: {
    id: string;
    updatedDraft: Models.Offers.NewOffer;
  };
};

type UpdatingDraftAction = {
  type: UpdateDraftActionsTypes.UPDATING_DRAFT;
  payload: boolean;
};

type UpdatedDraftAction = {
  type: UpdateDraftActionsTypes.UPDATED_DRAFT;
  payload: AjaxResponse;
};

type UpdatingDraftFailedAction = {
  type: UpdateDraftActionsTypes.UPDATING_DRAFT_FAILED;
  payload: AjaxError;
};

export function updateDraft(
  id: string,
  updated: Models.Offers.NewOffer
): UpdateDraftAction {
  return {
    type: UpdateDraftActionsTypes.UPDATE_DRAFT,
    payload: {
      id,
      updatedDraft: updated
    }
  };
}

export function updatingDraft(status: boolean): UpdatingDraftAction {
  return {
    type: UpdateDraftActionsTypes.UPDATING_DRAFT,
    payload: status
  };
}

export function updatedDraft(response: AjaxResponse): UpdatedDraftAction {
  return {
    type: UpdateDraftActionsTypes.UPDATED_DRAFT,
    payload: response
  };
}

export function updatingDraftFailed(
  error: AjaxError
): UpdatingDraftFailedAction {
  return {
    type: UpdateDraftActionsTypes.UPDATING_DRAFT_FAILED,
    payload: error
  };
}

export type UpdateDraftActions =
  | UpdateDraftAction
  | UpdatingDraftAction
  | UpdatedDraftAction
  | UpdatingDraftFailedAction;
