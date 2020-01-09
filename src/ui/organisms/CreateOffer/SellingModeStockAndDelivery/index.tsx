// @ts-ignore
import React from 'react';
import { Checkbox, Field, Select } from '../../../molecules';
import * as S from './styled';
import { Heading } from '../../../atoms';
import * as Models from '../../../../models';

type Props = {
  shippingRates: Models.ShippingRates.ShippingRate[];
  onUpdate: (updated: Partial<Models.Offers.NewOffer>) => void;
  currentlySetPrice: string;
  currentlySetStock: {
    available: number;
    unit: 'UNIT' | 'PAIR' | 'SET';
  };
  currentlySetShippingRate: {
    id: string;
  };
};

export default function SellingModeStockAndDelivery(
  props: Props
): React.ReactElement {
  const {
    shippingRates,
    onUpdate,
    currentlySetPrice,
    currentlySetStock,
    currentlySetShippingRate
  } = props;

  React.useEffect(() => {
    if (
      shippingRates !== null &&
      shippingRates.length > 0 &&
      currentlySetShippingRate === undefined
    ) {
      onUpdate({
        shippingRate: {
          id: shippingRates[0].id
        }
      });
    }

    if (currentlySetStock && currentlySetStock.unit === undefined) {
      onUpdate({
        stock: {
          available: currentlySetStock.available || 1,
          unit: 'UNIT'
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shippingRates]);

  function stockUnitsSelectOptions(): { value: any; label: string }[] {
    return [
      {
        label: 'sztuk',
        value: 'UNIT'
      },
      {
        label: 'par',
        value: 'PAIR'
      },
      {
        label: 'kompletów',
        value: 'SET'
      }
    ];
  }

  function shippingRatesSelectOptions(): { value: any; label: string }[] {
    return shippingRates.map(shippingRate => {
      return {
        value: shippingRate.id,
        label: shippingRate.name
      };
    });
  }

  function handlePriceChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    onUpdate({
      sellingMode: {
        format: 'BUY_NOW',
        price: {
          amount: ev.currentTarget.value,
          currency: 'PLN'
        }
      }
    });
  }

  function handleStockAmountChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    onUpdate({
      stock: {
        available: Number.parseInt(ev.currentTarget.value, 10),
        unit: currentlySetStock.unit || 'UNIT'
      }
    });
  }

  function handleShippingRateChange(
    ev: React.FormEvent<HTMLSelectElement>
  ): void {
    onUpdate({
      shippingRate: {
        id: ev.currentTarget.value
      }
    });
  }

  function handleStockUnitChange(ev: React.FormEvent<HTMLSelectElement>): void {
    onUpdate({
      stock: {
        available: currentlySetStock.available || 1,
        unit: ev.currentTarget.value as 'UNIT' | 'SET' | 'PAIR'
      }
    });
  }

  return (
    <S.Wrapper>
      <Heading level={2} text="Dostawa i płatność" />
      <Checkbox
        label="Sprzedaż"
        checked
        subLabel="Sprzedaż po stałej cenie"
        disabled
      />
      <S.InnerWrapper>
        <Field
          label="Cena"
          input={{
            id: 'price',
            restrictions: {
              required: true
            },
            type: 'number',
            onChange: handlePriceChange,
            defaultValue: currentlySetPrice
          }}
        />
        <Field
          label="Liczba sztuk"
          input={{
            type: 'number',
            restrictions: { required: true },
            id: 'stock',
            step: '1',
            onChange: handleStockAmountChange,
            defaultValue: (currentlySetStock.available as unknown) as string
          }}
        />
        <Select
          id="stockUnit"
          label=""
          options={stockUnitsSelectOptions()}
          onChange={handleStockUnitChange}
          defaultSelectValue={
            (currentlySetStock && currentlySetStock.unit) || 'UNIT'
          }
        />
        {shippingRates && shippingRates.length > 0 && (
          <Select
            id="shippingRate"
            label="Cennik"
            options={shippingRatesSelectOptions()}
            onChange={handleShippingRateChange}
            defaultSelectValue={
              currentlySetShippingRate && currentlySetShippingRate.id
            }
          />
        )}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
