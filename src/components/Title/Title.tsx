import React from 'react';
import { TitleStyled } from './styled';

type Props = {
  text: string;
};

const Title: React.FunctionComponent<Props> = (props: Props) => {
  const { text } = props;

  return <TitleStyled>{text}</TitleStyled>;
};

export default Title;
