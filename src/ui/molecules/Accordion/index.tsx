import React from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import * as S from './styled';
import { Button, Icon } from '../../atoms';

type Props = {
  title?: any;
  content?: any;
};

export default function Accordion(props: Props): React.ReactElement {
  const { content, title } = props;
  const [showContent, setShowContent] = React.useState<boolean>(false);

  return (
    <S.Wrapper tabIndex={0}>
      <S.Title onClick={() => setShowContent(!showContent)}>
        <Button kind="blank" type="button" variant="default">
          {title}
        </Button>
        <Icon
          icon={showContent ? <ChevronUp /> : <ChevronDown />}
          size="2rem"
        />
      </S.Title>
      {showContent && <S.Content>{content}</S.Content>}
    </S.Wrapper>
  );
}
