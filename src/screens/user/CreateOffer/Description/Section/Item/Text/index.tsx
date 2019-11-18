import React from 'react';
import * as S from './styled';

type Props = {
  onContentChange: (text: string) => void;
};

const Text: React.FunctionComponent<Props> = (props: Props) => {
  const { onContentChange } = props;
  return (
    <S.Text
      onChange={
        (ev: React.FormEvent<HTMLTextAreaElement>) =>
          onContentChange(ev.currentTarget.value)
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
};

export default Text;
