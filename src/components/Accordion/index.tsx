import React from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import * as S from './styled';

type Props = {
  title: string;
  content: any;
};

const Accordion: React.FunctionComponent<Props> = (props: Props) => {
  const { title, content } = props;

  const [showContent, setShowContent] = React.useState<boolean>(false);

  return (
    <S.Accordion>
      <S.Title onClick={() => setShowContent(!showContent)}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {title} {showContent ? <ChevronUp /> : <ChevronDown />}
      </S.Title>
      {showContent && <S.Content>{content}</S.Content>}
    </S.Accordion>
  );
};

export default Accordion;
