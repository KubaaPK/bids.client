import React from 'react';
import * as Models from '../../../models';
import { WithLeftSidebarTemplate } from '../../templates';
import { Categories } from '../../organisms';
import { API_URL } from '../../../consts';
import * as S from './styled';
import OffersContainer from '../../../containers/OffersContainer';

export default function Index(): React.ReactElement {
  const [categories, setCategories] = React.useState<
    Models.Categories.Category[]
  >([]);

  React.useEffect(() => {
    fetch(`${API_URL}/sale/categories`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => setCategories(res));
  }, []);

  return (
    <S.Wrapper>
      <WithLeftSidebarTemplate sideBar={<Categories categories={categories} />}>
        <OffersContainer />
      </WithLeftSidebarTemplate>
    </S.Wrapper>
  );
}
