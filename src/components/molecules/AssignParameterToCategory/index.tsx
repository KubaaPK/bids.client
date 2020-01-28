import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as Models from '../../../models';
import { API_URL } from '../../../consts';
import { Select } from '..';
import * as S from './styled';
import { Button } from '../../atoms';
import { assignParameter } from '../../../redux/actions/categories/assign-parameter.action';
import { useFetch } from '../../../hooks';

type OwnProps = {
  categoryId: string;
};

type ReduxDispatch = {
  performParameterAssignment: ({ categoryId, parameterId }: any) => void;
};

type Props = OwnProps & ReduxDispatch;

function AssignParameterToCategory(props: Props): ReactElement {
  const { categoryId, performParameterAssignment } = props;

  const { data: alreadyAssignedParameters = [] } = useFetch<
    Models.Categories.Parameter[]
  >(`${API_URL}/sale/categories/${categoryId}/parameters`);

  const [allParameters, setAllParameters] = useState<
    Models.Categories.Parameter[]
  >([]);
  const [newAssignment, setNewAssignment] = useState<{
    categoryId: string;
    parameterId: string;
  }>({
    categoryId
  } as any);

  useEffect(() => {
    fetch(`${API_URL}/sale/parameters`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    })
      .then(res => res.json())
      .then(res => setAllParameters(res));
  }, []);

  function createSelectOptions(): { value: any; label: any }[] {
    if (alreadyAssignedParameters !== null) {
      return allParameters
        .filter(
          parameter =>
            !alreadyAssignedParameters.map(el => el.id).includes(parameter.id)
        )
        .map(el => {
          return {
            value: el.id,
            label: el.name
          };
        });
    }
    return [];
  }

  function handleSelectChange(ev: React.FormEvent<HTMLSelectElement>): void {
    setNewAssignment({
      parameterId: ev.currentTarget.value,
      categoryId
    });
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();
    performParameterAssignment(newAssignment);
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <Select
        id="parameter"
        label="Parametr"
        handleChange={handleSelectChange}
        options={createSelectOptions()}
        defaultMessage="Wybierz parametr"
        restrictions={{ required: true }}
      />
      <Button variant="full" type="submit" text="Powiąż parametr" />
    </S.Form>
  );
}

const mapDispatchToProps: ReduxDispatch = {
  performParameterAssignment: assignParameter
};

export default connect(
  null,
  mapDispatchToProps
)(AssignParameterToCategory);
