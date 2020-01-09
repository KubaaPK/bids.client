import React, { ReactElement } from 'react';
import { AlertCircle, XCircle, HelpCircle, CheckCircle } from 'react-feather';
import * as S from './styled';

type Props = {
  variant: 'info' | 'success' | 'error' | 'warning';
  text: string;
};

export default function Notification(props: Props): ReactElement {
  const { variant, text } = props;

  function setIcon(notficationVariant: Props['variant']): any {
    switch (notficationVariant) {
      case 'error':
        return <XCircle />;
      case 'info':
        return <HelpCircle />;
      case 'success':
        return <CheckCircle />;
      case 'warning':
        return <AlertCircle />;
      default:
        return <CheckCircle />;
    }
  }

  return (
    <S.Wrapper variant={variant}>
      <S.Icon>{setIcon(variant)}</S.Icon>
      <S.Message>{text}</S.Message>
    </S.Wrapper>
  );
}
