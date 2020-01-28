import React from 'react';
import * as S from './styled';
import { Accordion } from '../../molecules';
import { List, Link } from '../../atoms';

export default function ProfileNavigation(): React.ReactElement {
  function salesDetailsAccordionContent(): React.ReactElement {
    return (
      <List type="unordered">
        <Link to="/moje-konto/moje-cenniki">Cenniki dostaw</Link>
      </List>
    );
  }

  function mySalesAccordionContent(): React.ReactElement {
    return (
      <List type="unordered">
        <Link to="/moje-konto/moja-sprzedaz/sprzedane">Sprzedane</Link>
      </List>
    );
  }

  function myBuyingsAccordionContent(): React.ReactElement {
    return (
      <List type="unordered">
        <Link to="/moje-konto/moje-zakupy/kupione">Kupione</Link>
      </List>
    );
  }

  function pricingAccordionContent() {
    return (
      <List type="unordered">
        <Link to="/moje-konto/rachunki/rozliczenia">Rozliczenia</Link>
      </List>
    );
  }

  function reviewsAccordionContent() {
    return (
      <List type="unordered">
        <li>
          <Link to="/oceny/wystaw">Wystaw</Link>
        </li>
        <li>
          <Link to="/oceny/wystawione">Wystawione</Link>
        </li>
      </List>
    );
  }

  return (
    <S.Wrapper>
      <Accordion
        title="Ustawienia sprzedaży"
        content={salesDetailsAccordionContent()}
      />
      <Accordion title="Moja sprzedaż" content={mySalesAccordionContent()} />
      <Accordion title="Moje zakupy" content={myBuyingsAccordionContent()} />
      <Accordion title="Rachunki" content={pricingAccordionContent()} />
      <Accordion title="Oceny" content={reviewsAccordionContent()} />
    </S.Wrapper>
  );
}
