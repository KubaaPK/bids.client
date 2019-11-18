import React, { useState, useEffect } from 'react';
import * as S from './styled';
import * as Models from '../../../../models';
import * as Form from '../../../../components/Forms';

type Props = {
  onSellingModeChange: (
    sellingMode: Models.Offers.NewOffer['sellingMode']
  ) => void;

  onStockChange: (stock: Models.Offers.NewOffer['stock']) => void;
};

const SellingMode: React.FunctionComponent<Props> = (props: Props) => {
  const { onSellingModeChange, onStockChange } = props;
  const [stock, setStock] = useState<Models.Offers.NewOffer['stock']>({
    unit: 'UNIT'
  } as Models.Offers.NewOffer['stock']);

  useEffect(() => {
    if (stock.avaiable !== undefined && stock.unit !== undefined) {
      onStockChange(stock);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stock]);

  const stockUnitOptions = (): { value: any; label: string }[] => {
    return [
      {
        label: 'Sztuk',
        value: 'UNIT'
      },
      {
        label: 'Par',
        value: 'Pair'
      },
      {
        label: 'Komplet',
        value: 'Set'
      }
    ];
  };

  const handlePriceChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    onSellingModeChange({
      format: 'BUY_NOW',
      price: {
        currency: 'PLN',
        amount: ev.currentTarget.value
      }
    });
  };

  const handleStockChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setStock({
      ...stock,
      avaiable: ev.currentTarget.value
    } as any);
  };

  const handleStockTypeChange = (
    ev: React.FormEvent<HTMLSelectElement>
  ): void => {
    setStock({
      ...stock,
      unit: ev.currentTarget.value
    } as any);
  };

  return (
    <>
      <Form.Checkbox
        label="Sprzedaż"
        subLabel="Sprzedaj przedmiot po stałej cenie"
        checked
        restrictions={{ required: true }}
      />
      <S.StockWrapper>
        <Form.Input
          id="price"
          type="number"
          restrictions={{ required: true, min: 1 }}
          handleChange={handlePriceChange}
          label="Cena"
        />
        <Form.Input
          label="Liczba sztuk"
          id="stock"
          restrictions={{ required: true }}
          type="number"
          handleChange={handleStockChange}
        />
        <Form.Select
          label="Rodzaj zasobu"
          id="stockType"
          restrictions={{ required: true }}
          options={stockUnitOptions()}
          handleChange={handleStockTypeChange}
        />
      </S.StockWrapper>
    </>
  );
};

export default SellingMode;
