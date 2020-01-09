import React from 'react';
import * as S from './styled';
import { Accordion } from '../../molecules';
import { List, Link } from '../../atoms';

export default function ProfileNavigation(): React.ReactElement {
  function salesDetailsAccordionContent(): React.ReactElement {
    return (
      <List type="unordered">
        <Link to="moje-konto/moje-cenniki">Cenniki dostaw</Link>
      </List>
    );
  }

  return (
    <S.Wrapper>
      <Accordion
        title="Ustawienia sprzedaży"
        content={salesDetailsAccordionContent()}
      />
    </S.Wrapper>
  );
}
