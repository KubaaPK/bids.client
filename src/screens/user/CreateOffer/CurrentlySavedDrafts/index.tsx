import React from 'react';
import { connect } from 'react-redux';
import * as Models from '../../../../models';
import * as S from './styled';
import * as Typography from '../../../../components/Typography';
import { deleteDraft } from '../../../../redux/actions/offers/delete-draft.action';

type ReduxDispatch = {
  performDeleteDraft: (id: string) => void;
};

type OwnProps = {
  drafts: Models.Offers.Offer[];
  closeDraftSelection: () => void;
};

type Props = ReduxDispatch & OwnProps;

const CurrentlySavedDrafts: React.FunctionComponent<Props> = (props: Props) => {
  const { drafts, closeDraftSelection, performDeleteDraft } = props;

  const handleDraftDelete = (id: string): void => {
    performDeleteDraft(id);
  };

  return (
    <S.Outline>
      <S.Wrapper>
        <Typography.Title text="Kontynuuj dodawanie oferty" />
        <S.Close onClick={closeDraftSelection} />
        <S.Drafts>
          {drafts.map(draft => (
            <S.Draft key={draft.id}>
              <S.Thumbnail
                src={
                  draft.images.length > 0
                    ? draft.images[0].url
                    : 'https://www.menaiortho.com.au/wp-content/uploads/2016/01/image-placeholder-300x210.png'
                }
              />
              <S.Text>
                <S.Name>{draft.name}</S.Name>
                <S.Id>{draft.id}</S.Id>
              </S.Text>
              <S.Delete onClick={() => handleDraftDelete(draft.id)}>
                Usuń
              </S.Delete>
            </S.Draft>
          ))}
          <S.AddNewOffer onClick={closeDraftSelection}>
            Dodaj nową ofertę
          </S.AddNewOffer>
        </S.Drafts>
      </S.Wrapper>
    </S.Outline>
  );
};

const mapDispatchToProps: ReduxDispatch = {
  performDeleteDraft: deleteDraft
};

export default connect(
  null,
  mapDispatchToProps
)(CurrentlySavedDrafts);
