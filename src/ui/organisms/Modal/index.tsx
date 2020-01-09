import React, { PropsWithChildren } from 'react';
import { X } from 'react-feather';
import useOnClickOutside from 'use-onclickoutside';
import { Icon } from '../../atoms';
import * as S from './styled';

type Props = {
  darken?: boolean;
  close: () => void;
  title?: string;
};

export default function Modal(
  props: PropsWithChildren<Props>
): React.ReactElement {
  const { darken = false, close, children, title } = props;
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => close());

  return (
    <S.Outline darken={darken}>
      <S.Wrapper ref={ref}>
        <S.Top>
          <p>{title}</p>
          <Icon icon={<X />} size="2rem" onClick={close} />
        </S.Top>
        {children}
      </S.Wrapper>
    </S.Outline>
  );
}
