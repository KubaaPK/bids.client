import React from 'react';
import styled from 'styled-components';
import { AssignParameterToCategory } from '../../../../components/molecules';
import { useFetch } from '../../../../hooks';
import { API_URL } from '../../../../consts';
import { List } from '../../../atoms';

const Wrapper = styled.div`
  ul {
    list-style-type: none;

    li {
      font-size: 1.2rem;
    }
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
`;

type Props = {
  categoryId: string;
};

export default function CategoryDetails(props: Props) {
  const { categoryId } = props;

  const { data: assignedParameters } = useFetch(
    `${API_URL}/sale/categories/${categoryId}/parameters`,
    {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    }
  );

  return (
    <Wrapper>
      <Title>Powiązane parametry</Title>
      <List type="unordered">
        {assignedParameters &&
          assignedParameters.map((el: any) => <li key={el.id}>{el.name}</li>)}
      </List>
      <AssignParameterToCategory categoryId={categoryId} />
    </Wrapper>
  );
}
