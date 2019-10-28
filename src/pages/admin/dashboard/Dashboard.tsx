import React, { useState } from 'react';
import Navigation from '../../../components/Navigation';
import {
  DashboardNavigation,
  Categories,
  Parameters,
  DeliveryMethods
} from './components';

const Dashboard: React.FunctionComponent<{}> = () => {
  const [componentName, setComponentName] = useState('categories');

  const determineComponent = (): JSX.Element => {
    switch (componentName) {
      case 'categories':
        return <Categories />;
      case 'parameters':
        return <Parameters />;
      case 'delivery-methods':
        return <DeliveryMethods />;
      default:
        return <Categories />;
    }
  };

  return (
    <>
      <Navigation />
      <DashboardNavigation changeComponent={setComponentName} />
      {determineComponent()}
    </>
  );
};

export default Dashboard;
