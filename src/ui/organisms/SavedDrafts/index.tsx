import React from 'react';
import * as Models from '../../../models';
import * as S from './styled';
import { List, Button } from '../../atoms';

type Props = {
  drafts: Models.Offers.Offers['offers'];
  deleteDraft: (draftId: string) => void;
  rejectDraftRestoring: () => void;
  selectDraft: (draft: Models.Offers.Offers['offers'][0]) => void;
};

export default function SavedDrafts(props: Props): React.ReactElement {
  const { drafts, deleteDraft, rejectDraftRestoring, selectDraft } = props;

  return (
    <S.Wrapper>
      <List type="unordered">
        {drafts.map(draft => (
          <S.Draft key={draft.id} onClick={() => selectDraft(draft)}>
            <S.Thumbnail
              src={
                draft.images.length > 0
                  ? (draft.images[0] as any)
                  : 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'
              }
            />
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <S.Name>{draft.name.slice(0, 25)}...</S.Name>
            <Button
              type="button"
              kind="blank"
              variant="default"
              onClick={() => deleteDraft(draft.id)}
            >
              Usuń
            </Button>
          </S.Draft>
        ))}
      </List>
      <Button
        kind="blank"
        type="button"
        variant="default"
        onClick={rejectDraftRestoring}
      >
        Dodaj nową ofertę
      </Button>
    </S.Wrapper>
  );
}
