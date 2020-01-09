import React, { ReactElement } from 'react';

type Props = {
  content: any;
};

export default function AdminDashboardAccordionDetails(
  props: Props
): ReactElement {
  const { content } = props;
  return <>{content}</>;
}
