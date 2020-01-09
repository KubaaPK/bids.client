import React, { ReactElement } from 'react';
import * as S from './styled';
import { Button, Icon } from '../../atoms';

type Props = {
  text: string;
  type: 'reset' | 'button' | 'submit';
  kind: 'full' | 'bordered' | 'blank';
  variant: 'default' | 'warning' | 'danger';
  onClick?: (ev: any) => void;
  disabled?: boolean;
  icon: any;
  left?: boolean;
};

export default function IconButton(props: Props): ReactElement {
  const {
    text,
    disabled,
    icon,
    kind,
    onClick,
    type,
    variant,
    left = true
  } = props;
  return (
    <S.Wrapper tabIndex={0}>
      <Button
        kind={kind}
        disabled={disabled}
        type={type}
        variant={variant}
        onClick={onClick}
      >
        {left && <Icon icon={icon} />}
        {text}
        {!left && <Icon icon={icon} />}
      </Button>
    </S.Wrapper>
  );
}
