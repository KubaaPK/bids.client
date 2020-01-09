import React from 'react';
import { connect } from 'react-redux';
import { AjaxResponse } from 'rxjs/ajax';
import { API_URL } from '../../../consts';
import { useFetch } from '../../../hooks';
import * as Models from '../../../models';
import { deleteDraft } from '../../../redux/actions/offers/delete-draft.action';
import { fetchDrafts } from '../../../redux/actions/offers/fetch-drafts.action';
import { State } from '../../../redux/reducers';
import { CreateDraft, Modal, SavedDrafts } from '../../organisms';
import { RestoredDraftContainer } from '../../../containers';
import { GenericTemplate } from '../../templates';
import * as S from './styled';

type ReduxState = {
  draftDeleted: AjaxResponse | undefined;
  drafts: Models.Offers.Offers['offers'];
};

type ReduxDispatch = {
  performDeleteDraft: (draftId: string) => void;
  performFetchDrafts: () => void;
};

type Props = ReduxState & ReduxDispatch;

function AddOffer(props: Props): React.ReactElement {
  const {
    draftDeleted,
    performDeleteDraft,
    drafts,
    performFetchDrafts
  } = props;

  const { data: categories } = useFetch<Models.Categories.Category[]>(
    `${API_URL}/sale/categories`
  );
  const [showDrafts, setShowDrafts] = React.useState<boolean>(false);
  const [draftRestored, setDraftRestored] = React.useState<
    Models.Offers.NewOffer | undefined
  >(undefined);

  React.useEffect(() => {
    performFetchDrafts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (draftDeleted) {
      performFetchDrafts();
    }

    if (drafts.length > 0) {
      setShowDrafts(true);
    } else {
      setShowDrafts(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftDeleted, drafts]);

  function handleDeleteDraft(draftId: string): void {
    performDeleteDraft(draftId);
  }

  function handleDraftSelection(
    draft: Models.Offers.Offers['offers'][0]
  ): void {
    setShowDrafts(false);
    setDraftRestored((draft as unknown) as Models.Offers.NewOffer);
  }

  return (
    <GenericTemplate>
      <S.Wrapper>
        {showDrafts && !draftRestored && (
          <Modal
            close={() => setShowDrafts(false)}
            darken
            title="Kontynuuj dodawanie oferty"
          >
            <SavedDrafts
              drafts={drafts}
              deleteDraft={handleDeleteDraft}
              rejectDraftRestoring={() => setShowDrafts(false)}
              selectDraft={handleDraftSelection}
            />
          </Modal>
        )}
        {!showDrafts && !draftRestored && (
          <CreateDraft categories={categories} />
        )}
        {!showDrafts && draftRestored && (
          <RestoredDraftContainer
            draft={draftRestored}
            categories={categories}
          />
        )}
      </S.Wrapper>
    </GenericTemplate>
  );
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    draftDeleted: state.offers.deleteDraft.draftDeleted,
    drafts: state.offers.fetchDrafts.fetchedDrafts
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performDeleteDraft: deleteDraft,
  performFetchDrafts: fetchDrafts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOffer);
