import React from 'react';
import { Field } from '..';

type Props = {
  handleSearch: (search: string) => void;
};

export default function OfferSearch(props: Props): React.ReactElement {
  const { handleSearch } = props;

  function handleChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    handleSearch(ev.currentTarget.value);
  }

  return (
    <>
      <Field
        label=""
        input={{
          id: 'searchOffer',
          placeholder: 'Wyszukaj ofertę po tytule...',
          type: 'text',
          onChange: handleChange
        }}
      />
    </>
  );
}
