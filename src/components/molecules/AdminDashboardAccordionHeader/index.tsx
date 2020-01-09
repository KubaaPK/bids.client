import React, { ReactElement } from 'react';
import {
  AdminDashboardAccordionTitle,
  ChevronDownIcon,
  ChevronUpIcon
} from '../../atoms';
import * as S from './styled';

type Props = {
  headerTitle: string;
  isOpened: boolean;
};

export default function AdminDashboardAccordionHeader(
  props: Props
): ReactElement {
  const { headerTitle, isOpened } = props;

  return (
    <S.AdminDashboardAccordionHeader>
      <AdminDashboardAccordionTitle text={headerTitle} />
      {isOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </S.AdminDashboardAccordionHeader>
  );
}
