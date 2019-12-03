import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';
import Accordion from '../../../../components/Accordion';

const Options: React.FunctionComponent<{}> = () => {
  const sellingOptions = () => {
    return (
      <S.Option>
        <Link to="/moje-konto/moje-cenniki">Cenniki dostaw</Link>
      </S.Option>
    );
  };

  const salesOptions = () => {
    return (
      <S.Option>
        <Link to="/moje-konto/moja-sprzedaz/sprzedane">Sprzedane</Link>
      </S.Option>
    );
  };

  return (
    <S.Options>
      <Accordion title="Moja sprzedaż" content={salesOptions()} />
      <Accordion title="Ustawienia sprzedaży" content={sellingOptions()} />
    </S.Options>
  );
};

export default Options;
