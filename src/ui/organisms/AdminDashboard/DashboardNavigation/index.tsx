import React from 'react';
import * as S from './styled';
import { Button, List } from '../../../atoms';

type Props = {
  changeComponent(componentName: string): void;
};

export default function DashboardNavigation(props: Props): React.ReactElement {
  const { changeComponent } = props;

  return (
    <S.Wrapper>
      <List type="unordered">
        <S.Element>
          <Button
            type="button"
            kind="blank"
            variant="default"
            onClick={() => changeComponent('categories')}
          >
            Kategorie
          </Button>
        </S.Element>
        <S.Element>
          <Button
            type="button"
            kind="blank"
            variant="default"
            onClick={() => changeComponent('parameters')}
          >
            Parametry
          </Button>
        </S.Element>
        <S.Element>
          <Button
            type="button"
            kind="blank"
            variant="default"
            onClick={() => changeComponent('delivery')}
          >
            Dostawa
          </Button>
        </S.Element>
      </List>
    </S.Wrapper>
  );
}
