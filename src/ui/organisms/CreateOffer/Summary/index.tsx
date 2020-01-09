/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import * as S from './styled';
import { Table } from '../../../molecules';
import { TableCell, TableRow, Heading, Button } from '../../../atoms';

type Props = {
  calculatedFee: string;
  submitOffer: () => void;
};

export default function FeeCalculate(props: Props): React.ReactElement {
  const { calculatedFee, submitOffer } = props;

  function tableHead(): React.ReactNode {
    return (
      <TableRow>
        <TableCell heading>opłata</TableCell>
        <TableCell heading>data naliczenia opłaty</TableCell>
        <TableCell />
      </TableRow>
    );
  }

  return (
    <>
      <S.Wrapper>
        <Heading level={2} text="Podsumowanie" />
        <Table head={tableHead()}>
          <TableRow>
            <TableCell>wystawienie przedmiotu</TableCell>
            <TableCell>przy opublikowaniu</TableCell>
            <TableCell>0,00zł</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>sprzedaż</TableCell>
            <TableCell>po sprzedaniu</TableCell>
            <TableCell>{calculatedFee}zł</TableCell>
          </TableRow>
        </Table>
      </S.Wrapper>
      <S.Wrapper>
        <Button
          kind="full"
          type="button"
          variant="default"
          onClick={submitOffer}
        >
          Opublikuj ofertę
        </Button>
      </S.Wrapper>
    </>
  );
}
