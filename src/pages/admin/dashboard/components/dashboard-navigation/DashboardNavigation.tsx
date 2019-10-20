import React from 'react';
import { ListWrapper, ListItem } from './styled';

type Props = {
  changeComponent: (name: string) => void;
};

const DashboardNavigation: React.FunctionComponent<Props> = (props: Props) => {
  const { changeComponent } = props;

  const switchComponent = (e: any) => {
    const { componentName } = e.currentTarget.dataset;
    changeComponent(componentName);
  };

  return (
    <ListWrapper>
      <ListItem onClick={switchComponent} data-component-name="categories">
        Kategorie
      </ListItem>
      <ListItem onClick={switchComponent} data-component-name="parameters">
        Parametry
      </ListItem>
      <ListItem
        onClick={switchComponent}
        data-component-name="delivery-methods"
      >
        Metody dostawy
      </ListItem>
    </ListWrapper>
  );
};

export default DashboardNavigation;
