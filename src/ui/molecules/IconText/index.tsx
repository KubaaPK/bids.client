import React from 'react';
import { Icon } from '../../atoms';
import * as S from './styled';

type Props = {
  icon: any;
  text: string | number;
  fontSize?: string;
};

export default function IconText(props: Props): React.ReactElement {
  const { icon, text, fontSize } = props;

  return (
    <S.Wrapper fontSize={fontSize}>
      <Icon icon={icon} />
      <span>{text}</span>
    </S.Wrapper>
  );
}
