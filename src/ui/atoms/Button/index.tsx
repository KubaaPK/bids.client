import React, { ReactElement, PropsWithChildren } from 'react';
import * as S from './styled';

type Props = {
  type: 'reset' | 'button' | 'submit';
  kind: 'full' | 'bordered' | 'blank';
  variant: 'default' | 'warning' | 'danger';
  onClick?: (ev: any) => void;
  disabled?: boolean;
};

export default function Button(props: PropsWithChildren<Props>): ReactElement {
  const { children, type, kind, variant, onClick, disabled = false } = props;

  return (
    <S.Button
      kind={kind}
      variant={variant}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
}
