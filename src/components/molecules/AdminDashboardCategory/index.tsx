import React, { ReactElement, useState } from 'react';
import * as S from './styled';
import * as Models from '../../../models';
import {
  AdminDashboardAccordionHeader,
  AdminDashboardCategoryDetails
} from '..';

type Props = {
  category: Models.Categories.Category;
};

export default function AdminDashboardCategory(props: Props): ReactElement {
  const { category } = props;

  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <S.ListElement>
      <span
        onClick={() => setShowDetails(!showDetails)}
        onKeyDown={() => setShowDetails(!showDetails)}
        role="button"
        tabIndex={0}
      >
        <AdminDashboardAccordionHeader
          headerTitle={category.name}
          isOpened={showDetails}
        />
      </span>
      {showDetails && <AdminDashboardCategoryDetails category={category} />}
    </S.ListElement>
  );
}
