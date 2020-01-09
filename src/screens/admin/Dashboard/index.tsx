import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  AdminDashboardNavigation,
  AdminDashboardComponentWrapper
} from '../../../components/molecules';
import {
  AdminCategories,
  AdminDeliveryMethods,
  AdminParameters
} from '../../../components/organisms';
import { Main } from '../../../components/templates';
import { fetchParameters } from '../../../redux/actions/parameters/fetch-parameters.action';
import { fetchDeliveryMethods } from '../../../redux/actions/deliery-methods/fetch-delivery-methods.action';

type ReduxDispatch = {
  performFetchParameters: () => void;
  performFetchDeliveryMethods: () => void;
};

type Props = ReduxDispatch;

const Dashboard: React.FunctionComponent<Props> = (props: Props) => {
  const { performFetchParameters, performFetchDeliveryMethods } = props;
  const [componentName, setComponentName] = useState<string>('categories');

  useEffect(() => {
    performFetchParameters();
    performFetchDeliveryMethods();
  }, [performFetchParameters, performFetchDeliveryMethods]);

  const renderComponent = (name: string): JSX.Element => {
    switch (name) {
      case 'categories':
        return <AdminCategories />;
      case 'parameters':
        return <AdminParameters />;
      case 'delivery-methods':
        return <AdminDeliveryMethods />;
      default:
        return <AdminCategories />;
    }
  };

  return (
    <>
      <Main props={{ desktopFlexDirection: 'row' }}>
        <AdminDashboardNavigation switchComponent={setComponentName} />
        <AdminDashboardComponentWrapper>
          {renderComponent(componentName)}
        </AdminDashboardComponentWrapper>
      </Main>
    </>
  );
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchParameters: fetchParameters,
  performFetchDeliveryMethods: fetchDeliveryMethods
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
