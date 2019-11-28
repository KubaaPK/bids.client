import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import {
  UpdateDraftActions,
  UpdateDraftActionsTypes
} from '../../actions/offers/update-draft.action';

export type UpdateDraftState = {
  updatingDraft: boolean;
  updatedDraft: AjaxResponse | undefined;
  updatingDraftFailed: AjaxError | undefined;
};

export const initialUpdateDraftState: UpdateDraftState = {
  updatingDraft: false,
  updatedDraft: undefined,
  updatingDraftFailed: undefined
};

export default function updateDraftReducer(
  state: UpdateDraftState = initialUpdateDraftState,
  action: UpdateDraftActions
): UpdateDraftState {
  switch (action.type) {
    case UpdateDraftActionsTypes.UPDATE_DRAFT:
      return { ...state, updatingDraft: true };
    case UpdateDraftActionsTypes.UPDATING_DRAFT:
      return { ...state, updatingDraft: action.payload };
    case UpdateDraftActionsTypes.UPDATED_DRAFT:
      return { ...state, updatedDraft: action.payload };
    case UpdateDraftActionsTypes.UPDATING_DRAFT_FAILED:
      return { ...state, updatingDraftFailed: action.payload };
    default:
      return state;
  }
}
