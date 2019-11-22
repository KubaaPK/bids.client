import React from 'react';
import * as S from './styled';

type Props = {
  onContentChange: (text: string) => void;
  restoredItem?: any;
};

const Text: React.FunctionComponent<Props> = (props: Props) => {
  const { onContentChange, restoredItem } = props;
  return (
    <S.Text
      onChange={
        (ev: React.FormEvent<HTMLTextAreaElement>) =>
          onContentChange(ev.currentTarget.value)
        // eslint-disable-next-line react/jsx-curly-newline
      }
      defaultValue={restoredItem && restoredItem.content}
    />
  );
};

export default Text;
