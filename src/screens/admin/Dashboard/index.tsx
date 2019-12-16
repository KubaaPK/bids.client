import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as S from './styled';
import DashboardNavigation from './DashboardNavigation';
import Categories from './Categories';
import Parameters from './Parameters';
import DeliveryMethods from './DeliveryMethods';
import Navigation from '../../../components/Navigation';
import Main from '../../../components/Layout/Main';
import { fetchParameters } from '../../../redux/actions/parameters/fetch-parameters.action';
import { fetchDeliveryMethods } from '../../../redux/actions/deliery-methods/fetch-delivery-methods.action';

type ReduxDispatch = {
  performFetchParameters: () => void;
  performFetchDeliveryMethods: () => void;
};

type Props = ReduxDispatch;

const Dashboard: React.FunctionComponent<Props> = (props: Props) => {
  const { performFetchParameters, performFetchDeliveryMethods } = props;
  const [componentName, setComponentName] = useState<string>(
    'delivery-methods'
  );

  useEffect(() => {
    performFetchParameters();
    performFetchDeliveryMethods();
  }, [performFetchParameters, performFetchDeliveryMethods]);

  const renderComponent = (name: string): JSX.Element => {
    switch (name) {
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
      <Main props={{ desktopDirection: 'row' }}>
        <DashboardNavigation switchComponent={setComponentName} />
        <S.ComponentWrapper>
          {renderComponent(componentName)}
        </S.ComponentWrapper>
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
