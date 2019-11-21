import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import {
  DeleteDraftActions,
  DeleteDraftActionsTypes
} from '../../actions/offers/delete-draft.action';

export type DeleteDraftState = {
  deletingDraft: boolean;
  draftDeleted: AjaxResponse | undefined;
  deletingDraftFailed: AjaxError | undefined;
};

export const initialDeleteDraftState: DeleteDraftState = {
  deletingDraft: false,
  deletingDraftFailed: undefined,
  draftDeleted: undefined
};

export default function deleteDraftReducer(
  state: DeleteDraftState = initialDeleteDraftState,
  action: DeleteDraftActions
): DeleteDraftState {
  switch (action.type) {
    case DeleteDraftActionsTypes.DELETE_DRAFT:
      return { ...state, deletingDraft: true };
    case DeleteDraftActionsTypes.DELETING_DRAFT:
      return { ...state, deletingDraft: action.payload };
    case DeleteDraftActionsTypes.DRAFT_DELETED:
      return { ...state, deletingDraft: false, draftDeleted: action.payload };
    case DeleteDraftActionsTypes.DELETING_DRAFT_FAILED:
      return {
        ...state,
        deletingDraft: false,
        deletingDraftFailed: action.payload
      };
    default:
      return state;
  }
}
