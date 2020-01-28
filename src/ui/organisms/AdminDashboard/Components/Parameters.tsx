import React from 'react';
import { connect } from 'react-redux';
import { Button, List } from '../../../atoms';
import { Accordion } from '../../../molecules';
import * as Models from '../../../../models';
import * as S from './styled';
import { State } from '../../../../redux/reducers';
import { fetchParameters } from '../../../../redux/actions/parameters/fetch-parameters.action';
import AddParameterContainer from '../../../../containers/AddParameterContainer';
import ParameterDetails from './ParameterDetails/ParameterDetails';

type ReduxState = {
  addedParameter: any;
  fetchedParameters: any;
};

type ReduxDispatch = {
  performFetchParameters(): void;
};

type Props = ReduxState & ReduxDispatch;

function Parameters(props: Props) {
  // eslint-disable-next-line no-shadow
  const { performFetchParameters, addedParameter, fetchedParameters } = props;

  const [parameters, setParameters] = React.useState<
    Models.Categories.Parameter[]
  >([]);

  const [showAddParameterForm, setShowAddCategoryForm] = React.useState<
    boolean
  >(false);

  React.useEffect(() => {
    performFetchParameters();
  }, [performFetchParameters]);

  React.useEffect(() => {
    if (addedParameter || fetchedParameters) {
      setParameters(fetchedParameters);
    }
  }, [addedParameter, fetchedParameters]);

  return (
    <List type="unordered">
      <S.Title>
        <span>Parametry</span>
        <Button
          type="button"
          kind="full"
          variant="default"
          onClick={() => setShowAddCategoryForm(!showAddParameterForm)}
        >
          Dodaj parametr
        </Button>
      </S.Title>
      {showAddParameterForm && (
        <AddParameterContainer
          closeForm={() => setShowAddCategoryForm(false)}
        />
      )}
      {parameters &&
        parameters.map(el => (
          <Accordion
            title={el.name}
            content={<ParameterDetails parameter={el} />}
            key={el.id}
          />
        ))}
    </List>
  );
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    addedParameter: state.parameters.addParameter.addedParameter,
    fetchedParameters: state.parameters.fetchParameters.fetchedParameters
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchParameters: fetchParameters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parameters);
