import React from 'react';
import { AlertTriangle } from 'react-feather';
import * as S from './styled';

type Props = {
  modalTitle: string;
  confirmText?: string;
  handleConfirm: (props?: any) => any;
  handleReject: (props?: any) => any;
  variant: 'warning';
};

const Confirm: React.FunctionComponent<Props> = (props: Props) => {
  const {
    handleConfirm,
    modalTitle,
    variant,
    confirmText,
    handleReject
  } = props;

  const setIcon = (confirmVariant: Props['variant']): any => {
    switch (confirmVariant) {
      case 'warning':
        return <AlertTriangle />;
      default:
        return <AlertTriangle />;
    }
  };

  return (
    <S.Wrapper>
      <S.Modal>
        <S.Icon>{setIcon(variant)}</S.Icon>
        <S.Title>{modalTitle}</S.Title>
        <S.Buttons>
          <S.AcceptButton onClick={handleConfirm}>
            {confirmText || 'Potwierdź'}
          </S.AcceptButton>
          <S.RejectButton onClick={handleReject}>Anuluj</S.RejectButton>
        </S.Buttons>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Confirm;
