import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as S from './styled';
import DashboardNavigation from './DashboardNavigation';
import Categories from './Categories';
import Parameters from './Parameters';
import DeliveryMethods from './DeliveryMethods';
import Navigation from '../../../components/Navigation';
import { fetchParameters } from '../../../redux/actions/parameters/fetch-parameters.action';

type ReduxDispatch = {
  performFetchParameters: () => void;
};

type Props = ReduxDispatch;

const Dashboard: React.FunctionComponent<Props> = (props: Props) => {
  const { performFetchParameters } = props;
  const [componentName, setComponentName] = useState<string>('categories');

  useEffect(() => {
    performFetchParameters();
  }, [performFetchParameters]);

  const renderComponent = (name: string): JSX.Element => {
    switch (name) {
      case 'categories':
        return <Categories />;
      case 'parameters':
        return <Parameters />;
      case 'delivery-method':
        return <DeliveryMethods />;
      default:
        return <Categories />;
    }
  };

  return (
    <>
      <Navigation />
      <S.Wrapper>
        <DashboardNavigation switchComponent={setComponentName} />
        <S.ComponentWrapper>
          {renderComponent(componentName)}
        </S.ComponentWrapper>
      </S.Wrapper>
    </>
  );
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchParameters: fetchParameters
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
