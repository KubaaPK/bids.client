import React, { ReactElement } from 'react';
import { AlertCircle, CheckCircle, X } from 'react-feather';
import * as S from './styled';
import { Icon } from '../../atoms';

type Props = {
  type: 'success' | 'alert' | 'error' | 'info';
  text: string;
  closable?: boolean;
  close: () => void;
  closeTimeout?: number;
};

export default function Notification(props: Props): React.ReactElement {
  const { type, text, closable = false, close, closeTimeout } = props;

  React.useEffect(() => {
    if (closeTimeout) {
      setTimeout(() => {
        close!();
      }, closeTimeout);
    }
  }, [closeTimeout, close]);

  function headerText(): string {
    switch (type) {
      case 'error':
        return 'Niepowodzenie';
      default:
        return 'Sukces';
    }
  }

  function icon(): any {
    switch (type) {
      case 'error':
        return <Icon icon={<AlertCircle />} size="2.75rem" />;
      case 'success':
        return <Icon icon={<CheckCircle />} size="2.75rem" />;
      default:
        return <Icon icon={<CheckCircle />} size="2.75rem" />;
    }
  }

  return (
    <S.Wrapper type={type}>
      {icon()}
      <S.Header>{headerText()}</S.Header>
      <S.Text>{text}</S.Text>
      {closable && (
        <S.Close onClick={close} tabIndex={0}>
          <Icon icon={<X />} size="2rem" />
        </S.Close>
      )}
    </S.Wrapper>
  );
}
