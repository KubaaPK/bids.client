import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper, Form, Input, IncrDecrButton } from './styled';
import Button from '../../../../../components/Button/Button';
import { ButtonVariant } from '../../../../../components/Button/styled';
import { InStock } from '../../../main/components/latest-offers/styled';

type Props = {
  inStock: number;
  isAuthenticated: boolean;
};

const Purchase: React.FunctionComponent<Props> = (props: Props) => {
  const { inStock, isAuthenticated } = props;
  const [numberOfItemsToPurchase, setNumberOfItemsToPurchase] = useState(1);
  const history = useHistory();

  const handleButtonClick = (ev: React.MouseEvent<HTMLButtonElement>): any => {
    ev.preventDefault();
    const value: number = Number.parseInt((ev.target as any).dataset.value, 10);
    if (value === 1 && numberOfItemsToPurchase < inStock) {
      setNumberOfItemsToPurchase(prev => prev + 1);
    }
    if (value === -1 && numberOfItemsToPurchase > 1) {
      setNumberOfItemsToPurchase(prev => prev - 1);
    }
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    if (Number.parseInt(ev.currentTarget.value, 10) <= inStock) {
      setNumberOfItemsToPurchase(Number.parseInt(ev.currentTarget.value, 10));
    }
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();

    if (!isAuthenticated) {
      history.push('/zaloguj-sie');
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InStock>
          Liczba dostępnych przedmiotów
          {inStock}
        </InStock>
        <IncrDecrButton
          data-value={1}
          onClick={handleButtonClick}
          type="button"
        >
          +
        </IncrDecrButton>
        <Input
          type="number"
          required
          min="1"
          max={inStock}
          onChange={handleInputChange}
          value={numberOfItemsToPurchase}
        />
        <IncrDecrButton
          data-value={-1}
          onClick={handleButtonClick}
          type="button"
        >
          -
        </IncrDecrButton>
        <Button
          type="submit"
          text="Kup przedmiot"
          variant={ButtonVariant.CTA}
        />
      </Form>
    </Wrapper>
  );
};

export default Purchase;
