import React from 'react';
import * as S from './styled';

type Props = {
  text: string;
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
};

const SectionTitle: React.FunctionComponent<Props> = (props: Props) => {
  const { text, size = 'medium', bold } = props;

  return (
    <S.SectionTitle size={size} bold={bold}>
      {text}
    </S.SectionTitle>
  );
};

export default SectionTitle;
