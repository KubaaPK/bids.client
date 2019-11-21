import { AjaxError, AjaxResponse } from 'rxjs/ajax';

export enum DeleteDraftActionsTypes {
  DELETE_DRAFT = 'offers/delete-draft',
  DELETING_DRAFT = 'offers/deleting-draft',
  DRAFT_DELETED = 'offers/draft-deleted',
  DELETING_DRAFT_FAILED = 'offers/deleting-draft-failed'
}

type DeleteDraftAction = {
  type: DeleteDraftActionsTypes.DELETE_DRAFT;
  payload: string;
};

type DeletingDraftAction = {
  type: DeleteDraftActionsTypes.DELETING_DRAFT;
  payload: boolean;
};

type DraftDeletedAction = {
  type: DeleteDraftActionsTypes.DRAFT_DELETED;
  payload: AjaxResponse;
};

type DeletingDraftFailedAction = {
  type: DeleteDraftActionsTypes.DELETING_DRAFT_FAILED;
  payload: AjaxError;
};

export function deleteDraft(id: string): DeleteDraftAction {
  return {
    type: DeleteDraftActionsTypes.DELETE_DRAFT,
    payload: id
  };
}

export function deletingDraft(status: boolean): DeletingDraftAction {
  return {
    type: DeleteDraftActionsTypes.DELETING_DRAFT,
    payload: status
  };
}

export function draftDeleted(response: AjaxResponse): DraftDeletedAction {
  return {
    type: DeleteDraftActionsTypes.DRAFT_DELETED,
    payload: response
  };
}

export function deletingDraftFailed(
  error: AjaxError
): DeletingDraftFailedAction {
  return {
    type: DeleteDraftActionsTypes.DELETING_DRAFT_FAILED,
    payload: error
  };
}

export type DeleteDraftActions =
  | DeleteDraftAction
  | DeletingDraftAction
  | DraftDeletedAction
  | DeletingDraftFailedAction;
