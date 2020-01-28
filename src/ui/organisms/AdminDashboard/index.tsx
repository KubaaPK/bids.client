import React from 'react';
import * as S from './styled';
import { Categories, Delivery, Parameters } from './Components';
import {Button} from "../../atoms";

type Props = {
  currentComponent: string;
};

export default function AdminDashboardComponent(
  props: Props
): React.ReactElement {
  const { currentComponent } = props;

  function compomentName(): string {
    switch (currentComponent) {
      case 'categories':
        return 'Kategorie';
      case 'parameters':
        return 'Parametry';
      case 'delivery':
        return 'Dostawa';
      default:
        return 'Kategorie';
    }
  }

  function changeComponent(componentName: string): React.ReactElement {
    switch (componentName) {
      case 'categories':
        return <Categories />;
      case 'parameters':
        return <Parameters />;
      case 'delivery':
        return <Delivery />;
      default:
        return <Categories />;
    }
  }

  return (
    <S.Wrapper>
      {changeComponent(currentComponent)}
    </S.Wrapper>
  );
}
