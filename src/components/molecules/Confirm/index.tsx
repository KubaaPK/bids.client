import React, { ReactElement } from 'react';
import { AlertTriangle } from 'react-feather';
import * as S from './styled';
import { Button } from '../../atoms';

type Props = {
  modalTitle: string;
  confirmText?: string;
  handleConfirm: (props?: any) => any;
  handleReject: (props?: any) => any;
  variant: 'warning';
};

export default function Confirm(props: Props): ReactElement {
  const {
    handleConfirm,
    modalTitle,
    variant,
    confirmText,
    handleReject
  } = props;

  function setIcon(confirmVariant: Props['variant']): any {
    switch (confirmVariant) {
      case 'warning':
        return <AlertTriangle />;
      default:
        return <AlertTriangle />;
    }
  }

  return (
    <S.Modal variant={variant}>
      <S.Content>
        <S.Icon>{setIcon(variant)}</S.Icon>
        <S.Title>{modalTitle}</S.Title>
      </S.Content>
      <S.Buttons>
        <S.RejectButton onClick={handleReject}>Anuluj</S.RejectButton>
        <Button
          text={`${confirmText || 'Potwierdź'}`}
          variant={variant === 'warning' ? 'error' : 'full'}
          type="button"
          handleClick={handleConfirm}
        />
      </S.Buttons>
    </S.Modal>
  );
}
