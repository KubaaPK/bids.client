import React, { ReactElement, useState } from 'react';
import {
  AdminDashboardAccordionHeader,
  AdminDashboardAccordionDetails,
  AdminDashboardParameterDetails
} from '..';
import * as Models from '../../../models';
import * as S from './styled';

type Props = {
  parameter: Models.Categories.Parameter;
};

export default function AdminDashboardParameter(props: Props): ReactElement {
  const { parameter } = props;

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
          headerTitle={parameter.name}
          isOpened={showDetails}
        />
      </span>
      {showDetails && (
        <AdminDashboardAccordionDetails
          content={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <AdminDashboardAccordionDetails
              content={<AdminDashboardParameterDetails parameter={parameter} />}
            />
          }
        />
      )}
    </S.ListElement>
  );
}
