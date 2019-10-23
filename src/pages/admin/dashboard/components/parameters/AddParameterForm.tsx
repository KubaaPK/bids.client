import React, { useState, useEffect } from 'react';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { connect } from 'react-redux';
import Notification, {
  NotificationVariant
} from '../../../../../components/Notification/Notification';
import { InputGroup } from '../../../../../components/Form';
import Button from '../../../../../components/Button/Button';
import { ButtonVariant } from '../../../../../components/Button/styled';
import { InputValue } from '../../../../../components/Form/Input/Input';
import {
  NewParameter,
  ParameterType,
  addParameter
} from '../../../../../redux/actions/parameters/add-parameter.action';
import { State } from '../../../../../redux/reducers';

type Props = {
  parameterIsAdding: boolean;
  parameterAdded: AjaxResponse | undefined;
  addingParameterFailed: AjaxError | undefined;
};

type Dispatch = {
  addParameter(newParameter: NewParameter): void;
};

type CompProps = Props & Dispatch;

const AddParameterForm: React.FunctionComponent<CompProps> = (
  props: CompProps
) => {
  const [pending, setPending] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    variant: NotificationVariant.SUCCESS
  });

  const initialNewParameterData: NewParameter = {
    name: '',
    restrictions: {},
    type: ParameterType.SINGLE_STRING,
    unit: ''
  };

  const [newParameterData, setNewParameterData] = useState(
    initialNewParameterData
  );

  const { addParameter, parameterIsAdding, parameterAdded } = props;

  useEffect(() => {
    setPending(parameterIsAdding);
    if (parameterAdded) {
      setNotification({
        show: true,
        variant: NotificationVariant.SUCCESS,
        message: 'Parametr został dodany.'
      });
    }
  }, [parameterIsAdding, parameterAdded]);

  const handleNotificationClose = (): void => {
    setNotification({
      show: false,
      variant: NotificationVariant.SUCCESS,
      message: ''
    });
  };

  const handleFormSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    addParameter(newParameterData);
  };

  const setNewParameter = (inputValue: InputValue) => {
    setNewParameterData((prevState: NewParameter) => ({
      ...prevState,
      [inputValue.id]: inputValue.value
    }));
  };

  const setParameterRestriction = (inputValue: InputValue) => {
    setNewParameterData((prevState: NewParameter) => ({
      ...prevState,
      restrictions: {
        ...prevState.restrictions,
        [inputValue.id]: Number.parseInt(inputValue.value, 10)
      }
    }));
  };

  return (
    <>
      <>
        {notification.show ? (
          <Notification
            variant={notification.variant}
            message={notification.message}
            timeout={2000}
            closeHandler={handleNotificationClose}
          />
        ) : null}
        <form onSubmit={handleFormSubmit}>
          <InputGroup
            label={{
              htmlFor: 'name',
              value: 'Nazwa parameteru'
            }}
            input={{
              id: 'name',
              required: true,
              type: 'text',
              placeholder: 'np. Przekątna ekranu'
            }}
            liftInputValue={setNewParameter}
          />
          <InputGroup
            label={{
              htmlFor: 'type',
              value: 'Typ parametru'
            }}
            input={{
              id: 'type',
              required: true,
              type: 'text',
              placeholder: 'np. single-string'
            }}
            liftInputValue={setNewParameter}
          />
          <InputGroup
            label={{
              htmlFor: 'unit',
              value: 'Jednostka'
            }}
            input={{
              id: 'unit',
              required: true,
              type: 'text',
              placeholder: 'np. cale'
            }}
            liftInputValue={setNewParameter}
          />
          <InputGroup
            label={{
              htmlFor: 'min',
              value: 'Minimalna wartość parametru'
            }}
            input={{
              id: 'min',
              required: false,
              type: 'number',
              placeholder: 'np. 5'
            }}
            liftInputValue={setParameterRestriction}
          />
          <InputGroup
            label={{
              htmlFor: 'max',
              value: 'Maksymalna wartość parametru'
            }}
            input={{
              id: 'max',
              required: false,
              type: 'number',
              placeholder: 'np. 50'
            }}
            liftInputValue={setParameterRestriction}
          />
          <Button
            variant={ButtonVariant.CTA}
            text="Dodaj"
            type="submit"
            isPending={pending}
          />
        </form>
      </>
    </>
  );
};

const mapStateToProps = (state: State): Props => {
  return {
    addingParameterFailed: state.parameters.addParameter.addingParameterFailed,
    parameterAdded: state.parameters.addParameter.parameterAdded,
    parameterIsAdding: state.parameters.addParameter.parameterIsAdding
  };
};

const mapDispatchToProps: Dispatch = {
  addParameter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddParameterForm);
