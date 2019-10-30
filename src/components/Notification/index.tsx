import React from 'react';
import { AlertCircle, XCircle, HelpCircle, CheckCircle } from 'react-feather';
import * as S from './styled';

type Props = {
  variant: 'info' | 'success' | 'error' | 'warning';
  message: string;
};

const Notification: React.FunctionComponent<Props> = (props: Props) => {
  const { message, variant } = props;

  const setIcon = (notficationVariant: Props['variant']): any => {
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
  };

  return (
    <S.Wrapper variant={variant}>
      <S.Icon>{setIcon(variant)}</S.Icon>
      <S.Message>{message}</S.Message>
    </S.Wrapper>
  );
};

export default Notification;
